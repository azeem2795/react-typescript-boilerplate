import React, { ChangeEvent, FC, FormEvent, startTransition, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import loginAction from '../../redux/action/auth.action';

const Login: FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): any => {
    console.log('Submitted');
    e.preventDefault();
    api({
      method: 'POST',
      url: 'https://dummyjson.com/auth/login',
      body: {
        username: 'hbingley1',
        password: 'CQutx25i8r',
      },
    })
      .then((res) => {
        dispatch(loginAction(res));
        console.log('Response ', res);

        // startTransition(() => {
        //   localStorage.setItem('token', 'abc123456');
        //   navigate('/financial/config/chart-of-accounts', { replace: true });
        // });
      })
      .catch((err) => {
        console.log('Error ', err);
      });
  };
  return (
    <div className="login">
      <h1>Login Screen</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={data.email}
          type="text"
          onChange={handleChange}
          placeholder="Enter email "
        />
        <input
          name="password"
          value={data.password}
          type="text"
          onChange={handleChange}
          placeholder="Enter password "
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
