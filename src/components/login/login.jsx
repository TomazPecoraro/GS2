"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import styles from './login.module.css'
import Link from "next/link";

export default function Login() {
  const router = useRouter();

  const [usuario, setUsuario] = useState({
    info: "login",
    email: "",
    senha: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8080/pele/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        alert("Login Realizado!");
        router.push('/doencas/page');
      } else {
        alert("Senha ou Usuário Inválido!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.bg}>
      <div className={styles.login}>
        <h1 className={styles.titulologin}>Login</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div>
                <input className={styles.campos} type="email" name="email" id="idEmail" placeholder="Usuário" value={usuario.email} onChange={handleChange} />
              </div>
              <div>
                <input className={styles.campos} type="password" name="senha" id="idSenha" placeholder="Senha" value={usuario.senha} onChange={handleChange} />
              </div>
              <div>
                <Link className={styles.linkcadastro} href='../cadastro/page'>Quero me Cadastrar</Link>
              </div>
              <div>
                <button type="submit" className={styles.botao}>Entrar</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}