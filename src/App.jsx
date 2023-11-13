import { useEffect } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import { useState } from 'react'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
function App() {

  const [isDisable, setIsDisable] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  const url = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(url)

  useEffect(() => {
    getUsers('/users')
  }, [])
  console.log(users);

  const handleNewUser = () => {
      setIsDisable(false)
  }

  return (
    <div className='div__app'>
      <h1 className='div__title'>Users</h1>
      <button  onClick={handleNewUser} className='form_btn'>+ Create User</button>
      <FormUser
        createUser={createUser}
        updateInfo={updateInfo}
        updateUser={updateUser}
        setUpdateInfo={setUpdateInfo}
        isDisable={isDisable}
        setIsDisable={setIsDisable}
      />

      {
        users?.map(user => (
          <UserCard 
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUpdateInfo={setUpdateInfo}
            setIsDisable={setIsDisable}
          />
        ))
      }

    </div>
  )
}

export default App
