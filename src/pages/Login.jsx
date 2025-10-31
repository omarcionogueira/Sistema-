import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navegar = useNavigate();

  function autenticar(e) {
    e.preventDefault();

    const usuarioSalvo = localStorage.getItem('usuario');
    const senhaSalva = localStorage.getItem('senha');

    if (usuario === usuarioSalvo && senha === senhaSalva) {
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
      <p>
        Ainda não tem conta? <Link to="/cadastro">Cadastre-se aqui</Link>
      </p>
    </div>
  );
}

export default Login;
