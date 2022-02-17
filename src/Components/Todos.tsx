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

  return (
    <section>
        {todos.map(d => <Row key={d.id} todo={d} />)}
    </section>
  )
}
