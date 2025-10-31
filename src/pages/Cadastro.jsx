import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const navegar = useNavigate();

  function registrar(e) {
    e.preventDefault();

    if (usuario.trim() === '' || senha.trim() === '') {
      alert('Preencha todos os campos');
      return;
    }

    // Simula armazenamento em memória
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('senha', senha);

    alert('Cadastro realizado com sucesso');
    navegar('/');
  }

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <form onSubmit={registrar}>
        <input
          type="text"
          placeholder="Novo usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Nova senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
