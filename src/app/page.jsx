import Image from "next/image";
import styles from "./page.module.scss";

import HomePage from "@/components/Home";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage/>
    </main>
  );
}
