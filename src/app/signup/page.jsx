"use client"

import { useState , useEffect } from "react";

import Image from "next/image";
import styles from "./page.module.scss";

import navigateSVG from '/public/svgs/navigate.svg'

import SignUpForm from './components/SignUpForm'
import SignUpGetStarted from './components/GetStarted'
import SignUpAdditionalInfo from './components/AdditionalInfo'

export default function SignUp() {

  const [step, setStep] = useState(1)
  const [cardInfo, setCardInfo] = useState({name:""})


  useEffect(()=>{
    const stepDivs = document.querySelectorAll(`.${styles.steps} > div`)
    const stepTexts = document.querySelectorAll(`.${styles.stepsText} > p`)
    stepDivs[step-1].classList.add(styles.active)
    stepTexts[step-1].classList.add(styles.active)
    console.log(stepDivs)
  },[step])

  return (
    <main className={styles.main}>

        <section className={styles.signupNav}>
            <div className={styles.steps}>
                <div>1</div>
                <Image src={navigateSVG} alt="navigation svg" width='16' height='16'/>
                <div>2</div>
                <Image src={navigateSVG} alt="navigation svg" width='16' height='16'/>
                <div>3</div>
            </div>
            <div className={styles.stepsText}>
                <p>Get <br/> started</p>
                <p>Additional Info</p>
                <p>Get your digital card</p>
            </div>

        </section>

        <SignUpGetStarted 
        setStep={setStep}
        setCardInfo={setCardInfo}
        />
        {/* <SignUpAdditionalInfo/>
        <SignUpForm/> */}

        
        <p className={styles.redirect}>Already have an account ? <a href="/signin">Sign In</a></p>
    </main>
  );
}
