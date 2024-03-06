"use client"

import Image from "next/image";
import styles from "./components.module.scss";

import GoogleSVG from '/public/svgs/google.svg'

import { signIn } from "next-auth/react"

export default function SignUpForm() {
  return (
    <section className={styles.signupForm}>
        <p>Well done, your digital business card is looking great. Now, save your card by signing up below.</p>

        <button
        onClick={()=>{signIn("google" ,{ callbackUrl: '/' })}}
        className={styles.googleBtn}><Image src={GoogleSVG} width='22' height='22' alt="Google Icon" /> Sign Up with Google</button>

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
            <div>
                <label>Repeat Password</label>
                <input type="password"/>
            </div>
            <button>Create new account</button>
        </form>
    </section>
  );
}
