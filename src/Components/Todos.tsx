import { Row } from "./Row"
import { data } from "../todos"

export const Todos = () => {
    console.log(data)
  return (
    <section>
        {data.map(d => <Row todo={d} />)}
    </section>
  )
}
