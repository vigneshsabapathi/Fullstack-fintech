import styles from '../styles/components/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Full stack project developed by
      {' '}
      <a href="https://turia.in">Turia.in</a>
      {' '}
      com Next.js e Node.js
    </footer>
  );
}
