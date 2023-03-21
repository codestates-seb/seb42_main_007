// TodoList.js
import React from "react"
import styled from "styled-components"
import Card from "./Card"
import { useTodoState } from "./BoardContext"

const TodoListBlock = styled.div`
  flex: 1;
  border-radius: 30px;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-x: auto;
  display: flex;
`

function CardList() {
  const todos = useTodoState()

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <Card
          key={todo.id}
          id={todo.id}
          done={todo.done}
          img_url={todo.img_url}
          title={todo.title}
          content={todo.content}
          username={todo.username}
          date={todo.date}
        />
      ))}
    </TodoListBlock>
  )
}

export default CardList