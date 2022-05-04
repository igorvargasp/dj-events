import Link from "next/link";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <foo className={styles.footer}>
      <p>Copyright &copy; DJ Events 2022</p>
      <p>
        <Link href="/about">About this Project</Link>
      </p>
    </foo>
  );
}
