"use client"

import { useState , useEffect } from "react";

import styles from "./components.module.scss";


export default function SignUpAdditionalInfo({cardInfo , setCardInfo , setStep}) {

  const [email, setEmail] = useState(cardInfo?.email || '')
  const [phone, setPhone] = useState(cardInfo?.phone || '')

  // This syncs the card info with the current form values
  useEffect(()=>{
    setCardInfo(current=>({...current , email:email , phone:phone}))
  },[email , phone])

  // This sets the next step
  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(3)
  }

  return (
    <section className={styles.signupForm}>
        <h2>Additional Info</h2>
        <p>Let’s add some more info to your card. You can add contact info, social media, payment links, and more.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input type="email" value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />
            </div>
            <div>
                <label>Phone Number</label>
                <input type="tel" value={phone}
                onChange={(e)=>{setPhone(e.target.value)}}
                />
            </div>
            <button>Continue</button>
        </form>
    </section>
  );
}
