import styles from "../styles/nav.module.css";
import { FcSearch } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" width={80} height={80}/>
        </div>
        <ul className={styles.menu}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
        </ul>
        <div className={styles.search}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="search ..." />
          </div>
          <div className={styles.searchIcon}><FcSearch size={25}/></div>
        </div>
        <div className={styles.profile}>
          <CgProfile size={50}/>
        </div>
      </nav>
    </>
  );
}
