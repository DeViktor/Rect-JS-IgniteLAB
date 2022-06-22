import { gql, useQuery } from "@apollo/client"

const GET_LESSIONS_QUERY = gql`
  query{
    lessons{
      id
      title
    }
  }
`

interface Lesson{
  id: String,
  title: String
}

function App() {
  const {data} = useQuery<{lessons: Lesson[]}>(GET_LESSIONS_QUERY)

  return (
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
