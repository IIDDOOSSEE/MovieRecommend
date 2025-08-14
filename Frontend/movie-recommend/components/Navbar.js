import styles from "../styles/nav.module.css"
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>

      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
      </ul>
      </nav>
    </>
  );
}
