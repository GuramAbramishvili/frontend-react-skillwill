import useFetch from '../hooks/useFetch';
import TodoTask from '../component/TodoTask';
import useRequest from '../hooks/useRequest';


const DonePage = () => {
  const {response, error, loading, resendRequest} = useFetch({url:'/api/v1/taskList', method: 'GET' })
  const [sendRequest] = useRequest({method: 'DELETE'})
  const taskList = response?.items.map(tasks => {
      return {
        title: tasks.title,
        name: tasks.name,
        deadline: tasks.deadline,
        isCompleted: tasks.isCompleted,
        id: tasks._uuid
      }
  }) || []


  const onDelete = (taskId) => {
    sendRequest(null, `/api/v1/taskList/${taskId}`).then(() => resendRequest())
  }

  

  if(loading) return <div className="lds-dual-ring"></div>
  if(error) return <p>{error}</p>

  const doneTasks = taskList.filter((t) => t.isCompleted == true)

  return(
      <div>
        {doneTasks.map((t) => 
          <TodoTask key={t.id} id={t.id} title={t.title} name={t.name} deadline={t.deadline} isCompleted={t.isCompleted} delet={onDelete}/>
        )}
    </div>
  )
}


export default DonePage