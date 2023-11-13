import './styles/Usercard.css'

const UserCard = ({ user, deleteUser, setUpdateInfo, setIsDisable }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setUpdateInfo(user)
        setIsDisable(false)
    }

  return (
    <article className='article__user'>
        <h3 className='article__h3'>{user.first_name} {user.last_name}</h3>
        <hr />
        <ul className='article__ul'>
            <h2 className='span__label'>correo</h2>
            <li className='article__li'><span className='span__value'>{user.email}</span></li>
            <h2 className='span__label'>cumpleaños</h2>
            <li className='article__li'><span className='span__value'>{user.birthday}</span></li>
        </ul>
        <hr />
        <button className='article__btn red' onClick={handleDelete}>🗑️</button>
        <button className='article__btn white' onClick={handleEdit}>📝</button>
    </article>
  )
}

export default UserCard