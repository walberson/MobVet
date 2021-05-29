import Link from "next/link";
import { title } from "process";
import styles from "./styles.module.scss";
export default function VetList() {
  return (
    <div className={styles.topBarContainer}>
      <div className={styles.topBarTitle}>
        <h1>Vets Disponíveis</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro nulla
          eligendi, laboriosam ipsam deleniti hic enim veritatis non unde
          assumenda nihil, ducimus voluptatem ad culpa est repudiandae
          doloremque debitis modi.
        </p>
      </div>
      <div className={styles.selector}>
        <div>
          <div>Especialidade</div>{" "}
          <div>
            <select name="Select" id="">
              <option value="valor1">Valor 1</option>
              <option value="valor2" selected>
                Selecione uma Opção
              </option>
              <option value="valor3">Valor 3</option>
            </select>
          </div>
        </div>
        <div>
          <div>Dia da Semana</div>{" "}
          <div>
            <select name="Select" id="">
              <option value="valor1">Valor 1</option>
              <option value="valor2" selected>
                Selecione uma Opção
              </option>
              <option value="valor3">Valor 3</option>
            </select>
          </div>
        </div>
        <div>
          <div>Hora</div>{" "}
          <div>
            <select name="Select" id="">
              <option value="valor1">Valor 1</option>
              <option value="valor2" selected>
                Selecione uma Opção
              </option>
              <option value="valor3">Valor 3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
