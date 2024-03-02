"use client"

import { useState } from "react";

import Image from "next/image";
import styles from "./components.module.scss";


export default function SignUpGetStarted( {setStep},{setCardInfo}) {

  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setCardInfo(current=>({...current , name:name}))
    setStep(2)
  }

  return (
    <section className={styles.signupForm}>
        <h2>Let's get started</h2>
        <p>Create your Cardneto digital business card in 3 simple steps. First, let’s start with your name.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input 
                onChange={(e)=>{setName(e.target.value)}}
                value={name}
                required type="text"/>
            </div>
            <button>Continue</button>
        </form>
    </section>
  );
}
