import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from '../../redux/auth/auth-operation';
import ModalError from '../ModalError/ModalError';
import s from './RegistrationForm.module.scss';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalErrorActive, setModalErrorActive]=useState(false)

  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        alert('Check input name please');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(register(user));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <h2 className={s.title}>Registration</h2>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only contain letters, an apostrophe, a dash and spaces"
          value={name}
          placeholder="name"
          onChange={handleChange}
          autoComplete="off"      />
        <input
          className={s.input}
          type="email"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
          autoComplete="off"
        />
        <input
          className={s.input}
          type="password"
          name="password"
          value={password}
          pattern="[0-9]{8,}"
          title="Password must be at least 8 digits"
          placeholder="password"
          onChange={handleChange}
          autoComplete="off"
        />
        <button className="button" type="submit">Registration</button>
        <p className={s.text}>
          Already have an account?
          <NavLink to="/login" className={s.link}>
            {' '}
            Login{' '}
          </NavLink>
        </p>
        <button type="button" className={s.button_error} onClick={()=>setModalErrorActive(true)}>If you have problems with registration</button>
        {modalErrorActive && <ModalError active={modalErrorActive} setActive={setModalErrorActive}/>}
      </form>
    </>
  );
}