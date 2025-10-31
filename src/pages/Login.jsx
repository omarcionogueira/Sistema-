import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navegar = useNavigate();

  function autenticar(e) {
    e.preventDefault();

    // Validação simples
    if (usuario === 'admin' && senha === '123') {
      navegar('/home');
    } else {
      alert('Usuário ou senha inválidos');
    }
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={autenticar}>
        <input
          type="text"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
