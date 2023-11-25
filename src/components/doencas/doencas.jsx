import { useState } from "react";
import styles from './doencas.module.css'

export default function Doencas(props) {

    const [doencas] = useState([

            {
                id: 1,
                nome: 'Acne',
                causas: 'Produção excessiva de óleo, bactérias na pele, inflamação dos folículos pilosos.',
                sintomas: 'Cravos, espinhas, inflamações na pele.',
                tratamentos: "Limpeza adequada, medicamentos tópicos, tratamentos médicos específicos."
              },
              {
                id: 2,
                nome: "Eczema",
                causas: "Fatores genéticos, ambiente seco, irritantes na pele.",
                sintomas: "Coceira intensa, inflamação, pele seca.",
                tratamentos: "Hidratação, corticosteroides tópicos, medicamentos anti-histamínicos."
              },
              {
                id: 3,
                nome: "Psoríase",
                causas: "Fatores genéticos, sistema imunológico hiperativo.",
                sintomas: "Manchas espessas e escamosas na pele, vermelhidão.",
                tratamentos: "Corticosteroides, terapias de luz, medicamentos imunossupressores."
              },
              {
                id: 4,
                nome: "Herpes Simples",
                causas: "Infecção pelo vírus herpes simplex.",
                sintomas: "Lesões na pele, coceira, formigamento.",
                tratamentos: "Antivirais, tratamentos para aliviar sintomas."
              },
              {
                id: 5,
                nome: "Impetigo",
                causas: "Infecção bacteriana, muitas vezes estreptococos ou estafilococos.",
                sintomas: "Lesões com crostas douradas, coceira.",
                tratamentos: "Antibióticos tópicos ou orais."
              },
              {
                id: 6,
                nome: "Larva Migrans",
                causas: "Infestação por larvas de parasitas, geralmente encontrada em ambientes com solo contaminado.",
                sintomas: "Trilhas elevadas na pele, coceira intensa.",
                tratamentos: "Extração das larvas, antiparasitários."
              },
              {
                id: 7,
                nome: "Leishmaniose",
                causas: "Parasita Leishmania transmitido por picadas de mosquitos.",
                sintomas: "Úlceras cutâneas, lesões na pele.",
                tratamentos: "Antiparasitários específicos."
              },
              {
                id: 8,
                nome: "Micose",
                causas: "Infecções fúngicas, geralmente por dermatófitos.",
                sintomas: "Coceira, descamação, vermelhidão.",
                tratamentos: "Antifúngicos tópicos ou orais, higiene adequada."
              }
            ]);

  return (
    <div className={styles.bg}>
      <h1 className={styles.titulo}>Doenças de pele mais comuns:</h1>
      <div className={styles.bgdoencas}>
          {doencas.map((doenca,indice) => (
            <div className={styles.doencas}key={indice}>
              <div>
                <p className={styles.nome}>{doenca.nome}</p>
              </div>
              <div className={styles.desc}>
                <p className={styles.causas}>Causas: {doenca.causas}</p>
                <p className={styles.sintomas}>Sintomas: {doenca.sintomas}</p>
                <p className={styles.tratamentos}>Tratamentos: {doenca.tratamentos}</p>
              </div>
            </div>
        ))}
        
      </div>
    </div>
  )
}