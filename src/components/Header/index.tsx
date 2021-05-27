import styles from "./styles.module.scss";
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1>MobVet</h1>
      <div>
        <ul className={styles.menuContainer}>
          <li>Home</li>
          <li>O projeto</li>
          <li>Clientes</li>
          <li>Login</li>
          <li>Contato</li>
        </ul>
      </div>
    </header>
  );
}
