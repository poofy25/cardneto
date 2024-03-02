"use client"

import Image from "next/image";
import styles from "./page.module.scss";

import GoogleSVG from '/public/svgs/google.svg'

export default function SignIn() {
  return (
    <main className={styles.main}>
        <h1>Sign In</h1>

        <button className={styles.googleBtn}><Image src={GoogleSVG} width='22' height='22' alt="Google Icon" /> Sign In with Google</button>

        <span><p>or</p></span>

        <form className={styles.form}>
            <div>
                <label>Email</label>
                <input type="email"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password"/>
            </div>
            <button>Sign In</button>
        </form>
        <p className={styles.redirect}>Dont have an account ? <a href="/signup">Sign Up</a></p>
    </main>
  );
}
