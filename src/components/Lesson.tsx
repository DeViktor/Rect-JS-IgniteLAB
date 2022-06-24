import{CheckCircle, Lock} from 'phosphor-react'

interface LessonProps{
  title: string;
  slug: string;
  avaibleAt: Date;
  type: 'Live' | 'Class';
}

export function Lesson(props: LessonProps){
  const isLessonAvaible = false;
  return(
    <a href="#">
      <span className="text-gray-400">
        {props.avaibleAt.toString()}
      </span>
      <div className="rounded border border-gray-400 p-4 mt-2">
        <header className="flex items-center justify-between">
          { isLessonAvaible ?(
            <span className="text-sm text-blue-400 flex items-center gap-2">
            <CheckCircle size={20} />
            Conteudo Liberado
          </span>
          ) :(
            <span className="text-sm text-purple-500 flex items-center gap-2">
            <Lock size={20} />
            Em Breve
          </span>
          )
          }
          <span className="border border-green-400 text-xs py-[0.125rem] px-2 text-white asdasd">
           { props.type === 'Live'? 'IN LIVE':'Aula'}
          </span>
        </header>
        <strong className="text-gray-400 mt-5 block">
          {props.title}
        </strong>
      </div>
    </a>
  )
}