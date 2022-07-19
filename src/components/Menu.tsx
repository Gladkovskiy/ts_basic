import React, {FC} from 'react'
import {useNavigate} from 'react-router-dom'

const Menu: FC = () => {
  const nav = useNavigate()

  return (
    <div>
      {' '}
      <div onClick={() => nav('/users')} style={{cursor: 'pointer'}}>
        Users
      </div>
      <div onClick={() => nav('/todos')} style={{cursor: 'pointer'}}>
        Todos
      </div>
    </div>
  )
}

export default Menu
