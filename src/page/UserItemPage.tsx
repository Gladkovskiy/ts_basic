import React, {FC, useState, useEffect} from 'react'
import {IUser} from '../types/types'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const UserItemPage: FC = () => {
  const {id} = useParams<'id'>()
  const nav = useNavigate()
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser>(
        `https://jsonplaceholder.typicode.com/users/${id}`
      )
      setUser(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <button onClick={() => nav('/users')}>Back</button>
      <h2>Страница пользователя {user?.name}</h2>
      <div>{user?.email}</div>
      <div>{user?.address.city}</div>
    </div>
  )
}

export default UserItemPage
