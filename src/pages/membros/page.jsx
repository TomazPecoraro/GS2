import '../../app/globals.css'
import Image from 'next/image';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import styles from './membros.module.css'

export default function membros() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <section className={styles.membros}>
          <article className={styles.membro}>
            <Image src="/03.png" width={250}height={250}/>
            <h4 className={styles.nome}>Alexandre Portugal do Nascimento</h4>
            <p>RM - 551737</p>
          </article>
          <article className={styles.membro}>
              <Image src="/04.png" width={250}height={250}/>
              <h4 className={styles.nome}>Felipe Sieiro Paim dos Santos</h4>
              <p>RM - 98249</p>
          </article>
          <article className={styles.membro}>
              <Image src="/05.png" width={250}height={250}/>
              <h4 className={styles.nome}>Jonathan Matus Souza de Moraes</h4>
              <p>RM - 551643</p>
          </article>
          <article className={styles.membro}>
              <Image src="/06.png" width={250}height={250}/>
              <h4 className={styles.nome}>Ivan Rangel Pestana Marcolin</h4>
              <p>RM - 551005</p>
          </article>
          <article className={styles.membro}>
              <Image src="/07.png" width={250}height={250}/>
              <h4 className={styles.nome}>Tomaz de Oliveira Pecoraro</h4>
              <p>RM - 98499</p>
          </article>
        </section>
      </main>
      <footer>
        <Rodape/>
      </footer>
    </div>
  );
};