"use client"

import { useState , useEffect } from "react";

import styles from "./components.module.scss";


export default function SignUpGetStarted({cardInfo , setCardInfo , setStep}) {

  const [name, setName] = useState(cardInfo?.name)

  // This syncs the card info with the current form value
  useEffect(()=>{
    setCardInfo(current=>({...current , name:name}))
  },[name])

  // This sets the next step
  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    <section className={styles.signupForm}>
        <h2>Lets get started</h2>
        <p>Create your Cardneto digital business card in 3 simple steps. First, lets start with your name.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input 
                onChange={(e)=>{setName(e.target.value)}}
                value={name}
                required type="text"/>
            </div>
            <button disabled={name==="" ? true : false} >Continue</button>
        </form>
    </section>
  );
}
