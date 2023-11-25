"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import styles from './cadastro.module.css'
import Link from "next/link";


export default function Login() {
  const router = useRouter();

        const [usuario, setUsuario] = useState({
          info: "cadastro",
          nome: "",
          email: "",
          senha: "",
          sexo_biologico: "",
          genero: "",
          data_nascimento:""

        });

        const handleChange = (e) =>{
          const{name, value} = e.target;
          setUsuario({...usuario,[name]:value});
          };

          const handleSubmit = async (e)=>{
            e.preventDefault();

            let user;

            try {
              const response = await fetch("http://127.0.0.1:8080/pele/register",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario),
              });

              if(response.ok){
                  alert("Cadastro Realizado com sucesso!")
                  router.push('/');
                }else{
                  alert("Dados Inválidos")
                }

          }catch(error){
            console.error(error);
          }
        }
  return (
    <div className={styles.bg}>
        <div className={styles.login}>
        <h1 className={styles.titulologin}>Cadastro</h1>
        <div>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                 <input className={styles.campos} type="nome" name="nome" id="idnome" placeholder="Nome" value={usuario.nome} onChange={handleChange}/>
                  <input className={styles.campos} type="email" name="email" id="idEmail" placeholder="Usuário" value={usuario.email} onChange={handleChange}/>
                </div>
                <div>
                 <input className={styles.campos} type="password" name="senha" id="idSenha" placeholder="Senha" value={usuario.senha} onChange={handleChange}/>
                 <input className={styles.campos} type="sexo_biologico" name="sexo_biologico" id="idsexo_biologico" placeholder="Sexo Biologico" value={usuario.sexobiologico} onChange={handleChange}/>
                </div>
                <div>
                 <input className={styles.campos} type="genero" name="genero" id="idgenero" placeholder="Gênero" value={usuario.genero} onChange={handleChange}/>
                 <input className={styles.campos} type="data_nascimento" name="data_nascimento" id="iddata_nascimento" placeholder="Data Nascimento" value={usuario.datanascimento} onChange={handleChange}/>
                </div>
              </fieldset>
                <div>
                    <Link className={styles.linkcadastro} href='/'>Já tenho Login</Link>
                </div>
                <div>
                    <button type="submit" className={styles.botao}>Cadastrar</button>
                </div>
            </form>
        </div>
        </div>
    </div>
  );
}