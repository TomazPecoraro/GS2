import Link from "next/link";
import  styles from './cabecalho.module.css';
import Image from "next/image";

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.cabecalho}>
          <h1 className={styles.NOME}>
            <Link href="/" className = {styles.link}>SKINSCAN</Link>
            <Image src="/01.png" width={54}height={50}/>
          </h1>
          <div className={styles.botao}>
            <Link href="/doencas/page" className = {styles.link}>Doenças de Pele</Link>
          </div>
          <div className={styles.botao}>
            <Link href="/formulario/page" className = {styles.link}>Formulário</Link>
          </div>
          <div className={styles.botao}>
            <Link href="/membros/page" className = {styles.link}>Membros</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}