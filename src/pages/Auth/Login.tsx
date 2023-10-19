import React, { ChangeEvent, FC, startTransition, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (): void => {
    console.log('Submitted');
    startTransition(() => {
      localStorage.setItem('token', 'abc123456');
      navigate('/financial/config/chart-of-accounts', { replace: true });
    });
    // setTimeout(() => {}, 2000);
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
