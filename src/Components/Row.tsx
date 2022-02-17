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
    <div className={`flex w-full p-4 mb-2 justify-between items-center ${isCompleted ? "bg-gray-400 " : "bg-green-300"}`}>
        <p className={`ml-2 text-xl font-sans font-medium
          ${isCompleted ? "text-white line-through" : "text-gray-700"}`}>{task}</p>
        <div className="flex flex-row justify-between w-16">
        <button 
            aria-label="Delete a todo" 
            className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold  rounded"
            onClick={() =>handleDeleteTodo(id)}>X</button>
        <input 
            type="checkbox" 
            checked={isCompleted} 
            onChange={() => handleCheckTodo(id)} 
            className="form-checkbox h-7 w-7"
            />
        </div>
    </div>
  )
}
