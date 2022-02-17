import { ChangeEvent, FormEvent } from "react"
import { ReactComponent as PlusIcon } from "../assets/plus.svg"


export type AddTodoProps = {
    task:string,
    handleSubmitTodo: (e: FormEvent) => void,
    handleChange: (e: ChangeEvent) => void
}

export const AddTodo = ({task, handleChange, handleSubmitTodo}: AddTodoProps) => {

    return (
        <form 
            onSubmit={handleSubmitTodo} 
            className="flex flex-row justify-evenly w-10/12 lg:w-1/2 max-w-2x1 mt-6">
        <input 
            type="text" 
            name="task" 
            value={task}
            className="rounded border-green-700" 
            onChange={handleChange}/>
        <button type="submit" aria-label="Add todo">
      <PlusIcon />
    </button>
    </form>
    )

}