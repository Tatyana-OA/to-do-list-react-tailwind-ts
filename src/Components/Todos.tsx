import { useState } from "react"

import { Row } from "./Row"
import { data } from "../todos"


// Create todos type and use the static data as initial value to the state.

type Todo = {
    id: string,
    task: string,
    isCompleted: boolean
}

export const Todos = () => {
    // data is expected to be of type -> array of Todos
    const [todos, setTodos] = useState<Todo[]>(data)


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
    <section>
        {todos.map(d => <Row key={d.id} todo={d} handleDeleteTodo={handleDeleteTodo} handleCheckTodo={handleCheckTodo}/>)}
    </section>
  )
}
