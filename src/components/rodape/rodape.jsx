import  styles from './rodape.module.css';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
          <div>
            <p>&copy; 2023 - SckinScan. Todos os direitos reservados</p>
          </div>
        </footer>
    )
  }