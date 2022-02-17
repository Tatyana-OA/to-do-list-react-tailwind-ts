import { ChangeEvent, FormEvent, useState } from "react"

import { v4 as uuidv4 } from "uuid"

import { Row } from "./Row"
import { data } from "../todos"
import { AddTodo } from './AddTodo';



// Create todos type and use the static data as initial value to the state.

type Todo = {
    id: string,
    task: string,
    isCompleted: boolean
}

export const Todos = () => {
    // data is expected to be of type -> array of Todos
    const [todos, setTodos] = useState<Todo[]>(data)
    const [task, setTask] = useState("")
    const todosLength = todos.length
    const hasTodos = todos.length > 0
    const remainingTodos = todos.filter((todo) => !todo.isCompleted).length

    const handleAddTodo = (todo: Todo) => {
        const updatedTodos = [...todos, todo]
        setTodos(updatedTodos)
        setTask("")
      }
    
      const handleChange = (e: ChangeEvent) => {
        const { value } = e.target as HTMLInputElement
        setTask(value)
      }
    
      const handleSubmitTodo = (e: FormEvent) => {
        e.preventDefault()
    
        const todo = {
          id: uuidv4(),
          task: task,
          isCompleted: false,
        }
        task && handleAddTodo(todo)
      }
    

    //Deletion
const handleDeleteTodo = (id:string) => {
    const updatedTodos = todos.filter((todo) => todo.id !=id);
    setTodos(updatedTodos)
}

    //Check off the list by changing the current value of todos
const handleCheckTodo = (id:string) => {
    const updatedTodos = todos.map((todo) => {
        if (todo.id===id) {
            return {
                ...todo,
                isCompleted: !todo.isCompleted,
        }
        }

        // return the todo if the ids don't match
        return todo;
    })
    setTodos(updatedTodos)
}
  return (
    <section className="w-10/12 lg:w-1/2 max-w-2x1 flex flex-col items-center">
        <AddTodo 
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo}
        task={task} />
        <div className="h-10" />
        {todos.map(d => <Row key={d.id} todo={d} handleDeleteTodo={handleDeleteTodo} handleCheckTodo={handleCheckTodo}/>)}
        {!hasTodos && (
        <p className="mb-5 text-xl text-red-500 uppercase">
          Please add a todo!
        </p>
      )}
      {hasTodos && (
        <p className="font-medium italic">
          [{remainingTodos} of {todosLength}] todos remaining
        </p>
      )}
    </section>
  )
}
