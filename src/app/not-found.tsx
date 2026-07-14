import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Not Found</h2>
      <p className={styles.text}>Could not find requested resource</p>
      <Link href="/" className={styles.link}>
        Return Home
      </Link>
    </div>
  );
}