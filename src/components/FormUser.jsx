import { useForm } from "react-hook-form"
import { useEffect } from "react"
import './styles/FormUser.css'
import { useState } from "react"

const FormUser = ({ createUser, updateInfo, updateUser, setUpdateInfo, isDisable, setIsDisable }) => {

  
    const { handleSubmit, register, reset }= useForm()

    useEffect(() => {
      reset(updateInfo)
    }, [updateInfo])
    

    const submit = data => {
        if(updateInfo){
            updateUser('/users', updateInfo.id, data)
            setUpdateInfo()
        }   else {
            createUser('/users', data)
        }
        setIsDisable(true)
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
          })
    }

    const handleExit = () => {
        setIsDisable(true)
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
          })
          setUpdateInfo()
    }

    return (
        <div className={`form-container ${isDisable && 'form__disable'}`}>
            <form className="form" onSubmit={handleSubmit(submit)}>
                <h2 className="form__title">Form User</h2>
                <div onClick={handleExit} className="form__x">X</div>
                <label className="form__label">
                    <span className="form__span">Emal</span>
                    <input  className="form__input"{...register('email')}type="email" />
                </label>
                <label className="form__label">
                    <span className="form__span">Password</span>
                    <input  className="form__input"name='current-password' {...register('password')}type="password" />
                </label>
                <label className="form__label">
                   <span className="form__span"> First name</span>
                    <input  className="form__input"{...register('first_name')}type="text" />
                </label>
                <label className="form__label">
                    <span className="form__span">Last name</span>
                    <input  className="form__input"{...register('last_name')}type="text" />
                </label>
                <label className="form__label">
                    <span className="form__span">Birthday</span>
                    <input className="form__input" {...register('birthday')}type="date" />
                </label>
                <button className="form__btn">Submit</button>
            </form>
        </div>
    )
}

export default FormUser