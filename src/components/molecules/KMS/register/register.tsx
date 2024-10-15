'use client';
import { FormEvent, useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        throw new Error(data.message || '회원가입 실패');
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">아이디입력:</label>
        <input
          type="text"
          id="userId"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">회원가입</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
