import React, {FC, useState, useEffect} from 'react'
import {ITodo} from '../types/types'
import axios from 'axios'
import List from '../components/List'
import TodoItem from '../components/TodoItem'

const TodoPage: FC = () => {
  const [todo, setTodo] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get<ITodo[]>(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      )
      setTodo(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <List
      items={todo}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  )
}

export default TodoPage
