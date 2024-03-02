"use client"

import Image from "next/image";
import styles from "./components.module.scss";


export default function SignUpAdditionalInfo() {
  return (
    <section className={styles.signupForm}>
        <h2>Additional Info</h2>
        <p>Let’s add some more info to your card. You can add contact info, social media, payment links, and more.</p>

        <form className={styles.form}>
            <div>
                <label>Email</label>
                <input type="email"/>
            </div>
            <div>
                <label>Phone Number</label>
                <input type="tel"/>
            </div>
            <button>Continue</button>
        </form>
    </section>
  );
}
