import React from 'react'
import './style.css'
import { useUser } from '../../context/userContext'

type Props = {
  name: string,
  type: string,
  label: string
}

const InputComponent = ({name, type, label}: Props) => {
    const {userCredentials, setUserCredentials} = useUser()

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const {name, value} = e.target
      setUserCredentials({...userCredentials, [name]: value})
    }
  return (
    <div className='input-info'>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={(userCredentials as any)[name]} onChange={handleChange} />
    </div>
  )
}

export default InputComponent