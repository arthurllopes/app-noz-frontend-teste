import React from 'react'
import { useNavigate } from 'react-router-dom'
import InputComponent from '../../components/Input';
import { useUser } from '../../context/userContext';
import logo from '../../assets/NOZlogo.png'
import './style.css'

const LoginPage = () => {
  const {error, setError, userCredentials, userLogin} = useUser()
  const navigate = useNavigate();

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userCredentials.email === '' || userCredentials.password === '') {
      setError('Preencha todos os campos')
    } else {
      const isUserLogged = await userLogin()
      if (isUserLogged) navigate('/books')
    }
  }

  return (
    <main className="page-wrapper">
      <div className="form-content">
        <div className="logo-text">
          <img src={logo} alt="Noz logo" />
          <span className="book-text">Books</span>
        </div>
        <form onSubmit={handleSubmitForm}>
          <div className='input-div'>
            <InputComponent type="email" name="email" label='Email' />
          </div>
          <div className='input-div'>
            <InputComponent type="password" name="password" label='Senha' />
            <div className=''>
              <button className='login-btn' type="submit">Entrar</button>
            </div>
          </div>
        </form>
        {error && <div className='tooltip'>
          {error}
          <div className='tooltip-arrow'></div>
        </div>}
      </div>
    </main>
  )
}

export default LoginPage