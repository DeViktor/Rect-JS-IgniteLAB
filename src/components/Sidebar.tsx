import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

 const GET_LESSONS_QUERY = gql`
 query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    slug
    title
    availableAt
  }
}

 `

 interface GetLessonsResponse{
  lessons:{
    id: string
    lessonType:'live'|'class'
    slug:string
    title:string
    avaibleAt:string
  }[]
 }

export function Sidebar(){
  const{data} = useQuery<GetLessonsResponse>(GET_LESSONS_QUERY)
  console.log(data)
  return(
    <aside className="w-80 p-5 border-l border-gray-600 bg-gray-900">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block">
        Cronograma de Aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson =>{
          return(

            <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            avaibleAt={new Date(lesson.avaibleAt)}
            type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}