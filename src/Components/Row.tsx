type Todo = {
    id: string,
    task: string,
    isCompleted: boolean
}

type TodoProps = {
    todo: Todo,
    handleDeleteTodo: (id:string) => void // the prop takes in an id which is a string and returns void, a.k.a nothing
    handleCheckTodo: (id:string) => void 
}


export const Row = ({todo: {task, isCompleted, id}, handleDeleteTodo, handleCheckTodo}: TodoProps) => {
  return (
    <div>
        <p>{task}</p>
        <button aria-label="Delete a todo" onClick={() =>handleDeleteTodo(id)}>X</button>
        <input type="checkbox" checked={isCompleted} onChange={() => handleCheckTodo(id)} />
    </div>
  )
}
