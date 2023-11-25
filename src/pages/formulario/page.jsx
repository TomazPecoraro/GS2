import '../../app/globals.css'
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import Forms from '../../components/forms/formulario';


export default function Form() {
    return (
    <div>
        <header>
            <Header/>
        </header>
    <section>
        <Forms/>
    </section>
        <footer>
            <Rodape/>
        </footer>
    </div>
    )
}
