import React, { SyntheticEvent, useState } from 'react';

const initialForm = {
  username: '',
  password: '',
};

export type UserCredentials = {
  username: string;
  password: string;
};

type LoginProps = {
  handleSubmit: (formData: { password: string; username: string }) => void;
};

const Login = ({ handleSubmit }: LoginProps) => {
  const [logingForm, setLoginForm] = useState<UserCredentials>(initialForm);

  const handleChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    setLoginForm({ ...logingForm, [name]: value });
  };
  return (
    <form
      className='login-form'
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(logingForm);
      }}
    >
      <h2>Please login here</h2>
      <label htmlFor='username'>
        Username
        <input onChange={handleChange} type='text name="username' />
      </label>
      <label htmlFor='password'>
        Password
        <input onChange={handleChange} type='text name="password' />
      </label>
      <input type='submit' value='Login' />
    </form>
  );
};

export default Login;
