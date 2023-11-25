import { useState } from 'react';
import styles from './formulario.module.css'

const Diagnostico = () => {
  const [respostas, setRespostas] = useState({
    prurido: '',
    eritema: '',
    escamas: '',
    distribuicaoLesoes: '',
    evolucaoSintomas: '',
    antecedentesFamiliares: '',
    sensibilidadeADeterminadosProdutos: '',
    exposicaoAoSol: '',
    outrosSintomas: '',
    coceiraIntensa: '',
    irritacao: '',
    dorLocal: '',
    temperaturaLocal: '',
    suorExcessivo: '',
    historicoViagens: '',
    contatoComAnimais: '',
  });

  const [diagnostico, setDiagnostico] = useState('');

  const handleInputChange = (pergunta, resposta) => {
    setRespostas({ ...respostas, [pergunta]: resposta });
  };

  const realizarDiagnostico = () => {
    const pontuacao = Object.values(respostas).reduce((total, resposta) => total + parseInt(resposta), 0);

    if (pontuacao >= 55) {
      setDiagnostico('Os sintomas indicam a possibilidade de uma condição dermatológica significativa. Recomendamos uma avaliação profissional imediata.');
    } else if (pontuacao >= 35) {
      setDiagnostico('Os sintomas sugerem uma condição dermatológica moderada. Consulte um dermatologista para uma avaliação aprofundada.');
    } else {
      setDiagnostico('Não podemos fornecer um diagnóstico conclusivo com base nas respostas fornecidas. Recomendamos uma avaliação profissional para um diagnóstico preciso.');
    }
  };

  const obterDiagnosticoDetalhado = () => {
    const {
      prurido,
      eritema,
      escamas,
      distribuicaoLesoes,
      evolucaoSintomas,
      antecedentesFamiliares,
      sensibilidadeADeterminadosProdutos,
      exposicaoAoSol,
      outrosSintomas,
      coceiraIntensa,
      irritacao,
      dorLocal,
      temperaturaLocal,
      suorExcessivo,
      historicoViagens,
      contatoComAnimais,
    } = respostas;

    if (prurido >= 7 && escamas >= 5 && evolucaoSintomas.includes('piorando')) {
      return 'Os sintomas indicam possível dermatite seborreica. Recomendamos uma avaliação dermatológica para confirmação e tratamento adequado.';
    }

    if (eritema >= 8 && distribuicaoLesoes === 'generalizada' && antecedentesFamiliares.includes('psoríase')) {
      return 'Os sintomas são consistentes com psoríase. Consulte um dermatologista para uma avaliação detalhada e um plano de tratamento.';
    }

    if (sensibilidadeADeterminadosProdutos.includes('cosméticos') && exposicaoAoSol === 'sim') {
      return 'A sensibilidade a certos cosméticos combinada com exposição solar pode indicar uma reação alérgica. Recomendamos evitar os produtos e consultar um dermatologista para orientação.';
    }

    if (coceiraIntensa >= 7 && irritacao >= 5 && dorLocal >= 4) {
      return 'Os sintomas indicam possível eczema. Consulte um dermatologista para uma avaliação precisa e opções de tratamento.';
    }

    if (temperaturaLocal >= 6 && dorLocal >= 5) {
      return 'A temperatura elevada localizada e a dor podem indicar uma infecção cutânea. Recomendamos consultar um profissional de saúde para avaliação e tratamento.';
    }

    if (suorExcessivo >= 7 && historicoViagens.includes('regiões tropicais') && contatoComAnimais === 'sim') {
      return 'A combinação de suor excessivo, histórico de viagens para regiões tropicais e contato com animais pode indicar uma infecção fúngica. Consulte um dermatologista para uma avaliação detalhada.';
    }

    // Adicione mais lógica de diagnóstico conforme necessário

    return 'Não conseguimos determinar um diagnóstico específico com base nas respostas fornecidas. Recomendamos uma avaliação profissional para um diagnóstico preciso.';
  };

  return (
    <div className={styles.bg}>
      <div className={styles.forms}>
        <h1 className={styles.titulo}>Pré-Triagem Dermatológica</h1>
        <h1 className={styles.subtitulo}>Por favor, forneça informações detalhadas sobre seus sintomas (0 a 10):</h1>
        <label className={styles.perguntas}>
          Intensidade do prurido (coceira) de 0 a 10:
          <input
            className={styles.campos}
            type="number"
            value={respostas.prurido}
            onChange={(e) => handleInputChange('prurido', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Intensidade do eritema (vermelhidão) de 0 a 10:
          <input className={styles.campos}
            type="number"
            value={respostas.eritema}
            onChange={(e) => handleInputChange('eritema', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Intensidade da presença de escamas de 0 a 10:
          <input className={styles.campos}
            type="number"
            value={respostas.escamas}
            onChange={(e) => handleInputChange('escamas', e.target.value)}
          />
        </label>
        <br />
        
        <label className={styles.perguntas}>
          Intensidade da coceira intensa de 0 a 10:
          <input className={styles.campos}
            type="number"
            value={respostas.coceiraIntensa}
            onChange={(e) => handleInputChange('coceiraIntensa', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Intensidade da irritação de 0 a 10:
          <input className={styles.campos}
            type="number"
            value={respostas.irritacao}
            onChange={(e) => handleInputChange('irritacao', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Intensidade da dor local de 0 a 10:
          <input className={styles.campos}
            type="number"
            value={respostas.dorLocal}
            onChange={(e) => handleInputChange('dorLocal', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Temperatura local de 0 a 10:
          <input className={styles.campos}
            type="number"
            value={respostas.temperaturaLocal}
            onChange={(e) => handleInputChange('temperaturaLocal', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Suor excessivo de 0 a 10:
          <input className={styles.campos}
            type="number"
            value={respostas.suorExcessivo}
            onChange={(e) => handleInputChange('suorExcessivo', e.target.value)}
          />
        </label>
        <br />
        <h1 className={styles.subtitulo}>Agora responda com texto:</h1>
        <label className={styles.perguntas}>
          Distribuição das lesões cutâneas (localizada, generalizada, etc.):
          <input className={styles.campos}
            type="text"
            value={respostas.distribuicaoLesoes}
            onChange={(e) => handleInputChange('distribuicaoLesoes', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Evolução dos sintomas ao longo do tempo:
          <input className={styles.campos}
            value={respostas.evolucaoSintomas}
            onChange={(e) => handleInputChange('evolucaoSintomas', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Antecedentes familiares de condições dermatológicas:
          <input className={styles.campos}
            type="text"
            value={respostas.antecedentesFamiliares}
            onChange={(e) => handleInputChange('antecedentesFamiliares', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Sensibilidade a determinados produtos ou substâncias:
          <input className={styles.campos}
            type="text"
            value={respostas.sensibilidadeADeterminadosProdutos}
            onChange={(e) => handleInputChange('sensibilidadeADeterminadosProdutos', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Exposição recente ao sol ou a agentes irritantes:
          <input className={styles.campos}
            type="text"
            value={respostas.exposicaoAoSol}
            onChange={(e) => handleInputChange('exposicaoAoSol', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Outros sintomas relevantes (febre, mal-estar, etc.):
          <input className={styles.campos}
            type="text"
            value={respostas.outrosSintomas}
            onChange={(e) => handleInputChange('outrosSintomas', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Histórico de viagens recentes para regiões tropicais:
          <input className={styles.campos}
            type="text"
            value={respostas.historicoViagens}
            onChange={(e) => handleInputChange('historicoViagens', e.target.value)}
          />
        </label>
        <br />
        <label className={styles.perguntas}>
          Contato recente com animais:
          <select className={styles.select}
            value={respostas.contatoComAnimais}
            onChange={(e) => handleInputChange('contatoComAnimais', e.target.value)}
          >
            <option value="">Selecione...</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </label>
        <br />
        <button className={styles.botao} onClick={() => { realizarDiagnostico(); setDiagnostico(obterDiagnosticoDetalhado()); }}>Realizar Diagnóstico</button>
        <div>
          <h2 className={styles.titulo}>Diagnóstico:</h2>
          <p className= {styles.diagnostico}>{diagnostico}</p>
        </div>
      </div>
    </div>
  );
};

export default Diagnostico;