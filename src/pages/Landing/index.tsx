import styles from "./styles.module.scss";
export function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.start}>
        <div className={styles.startText}>
          <h2>Atendimento Veterinário em Domicílio</h2>
          <h3>Encontre um veterínário próximo a você</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            deleniti tempora facere, atque deserunt itaque maxime expedita
            voluptatum ut fuga similique non animi harum pariatur sint voluptas
            aspernatur corrupti autem.
          </p>
          <button>Buscar Consulta</button>
          <button>Cadastrar Serviço</button>
        </div>
        <div className={styles.startImage}>
          <img src="/startImage.jpg" alt="" />
        </div>
      </div>

      <div className={styles.freeJoin}>
        <div>
          <h2>Agende sua primeira consulta!</h2>
          <p>Encontre veterinários capacitados sem sair do conforto de casa!</p>
        </div>
        <input type="text" placeholder="Seu Nome*" />
        <input type="text" placeholder="E-mail*" />
      </div>

      <div className={styles.project}>
        <div></div>
        <iframe
          width="900"
          height="315"
          src="https://www.youtube.com/embed/QNhikahvOBk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div>
          <h1>O Projeto</h1>
          <h3>Muito além de um sistema</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            dolor adipisci sint tenetur ipsa porro rerum facere dignissimos nisi
            quaerat, illo tempore nam maiores. Fuga eligendi culpa itaque?
            Officia, similique!
          </p>
        </div>
      </div>
    </div>
  );
}
