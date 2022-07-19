import React, {FC} from 'react'
import {Routes, Route} from 'react-router-dom'
import TodoItemPage from '../page/TodoItemPage'
import TodoPage from '../page/TodoPage'
import UserItemPage from '../page/UserItemPage'
import UserPage from '../page/UserPage'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/users" element={<UserPage />} />
      <Route path="/todos" element={<TodoPage />} />
      <Route path="/todos/:id" element={<TodoItemPage />} />
      <Route path="/users/:id" element={<UserItemPage />} />
    </Routes>
  )
}

export default AppRouter
