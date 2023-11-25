import  styles from './inicio.module.css';
import Image from 'next/image';

export default function Inicio() {
    return (
    <main className={styles.bghome}>
        <section className={styles.home1}>
            <div>
                <h1 className= {styles.titulobemvindo}>
                    Bem vindo ao SkinScan!
                </h1>
                <p className={styles.p}>
                Descubra a revolução no cuidado com a
                pele com a SkinScan, sua solução completa
                para triagem e diagnóstico simplificado de
                problemas de pele. Sabemos que a saúde da
                sua pele é fundamental para o seu bem-estar,
                e é por isso que projetamos uma plataforma
                inovadora que coloca o poder da triagem e
                do diagnóstico nas suas mãos.
                </p>
            </div>
            <div>
                <Image src="/02.png" width={405}height={387} className= {styles.imagem}/>
            </div>
        </section>
        <div className={styles.quebraverde}>---</div>
        <div className={styles.quebrabranco}>---</div>
        <div className={styles.quebraverde}>---</div>

        <section>
            <div className={styles.titulocomofunciona}>
                <h1 className={styles.comofunciona}>
                    Como funciona?
                </h1>
            </div>
            <div className={styles.linha}>
                <div className={styles.topicos}>
                    <h1 className={styles.topico1}>
                        1. Registro Fácil
                    </h1>
                    <p className={styles.descricaotopicos}>
                        Crie uma conta em minutos e comece a jornada para uma pele mais saudável.
                    </p>
                </div>
                <div className={styles.topicos}>
                    <h1 className={styles.topico2}>
                        2. Triagem Intuitiva
                    </h1>
                    <p className={styles.descricaotopicos}>
                        Responda a algumas perguntas simples e forneça informações sobre seus sintomas.
                    </p>
                </div>
            </div>
            <div className={styles.linha}>
                <div className={styles.topicos}>
                    <h1 className={styles.topico3}>
                        3. Resultados Imediatos
                    </h1>
                    <p className={styles.descricaotopicos}>
                        Receba resultados instantâneos da triagem, com recomendações personalizadas.
                    </p>
                </div>
                <div className={styles.topicos}>
                    <h1 className={styles.topico4}>
                        4. Acesso a Especialistas
                    </h1>
                    <p className={styles.descricaotopicos}>
                        Se necessário, conecte-se diretamente com dermatologistas para obter orientações especializadas.
                    </p>
                </div>
            </div>
        </section>
    </main>
    )
}