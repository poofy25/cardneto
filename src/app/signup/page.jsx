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

  // This changes the classes of nav elements on step change
  const handleNavChange = () => {
    const stepDivs = document.querySelectorAll(`.${styles.steps} > div`)
    const stepTexts = document.querySelectorAll(`.${styles.stepsText} > p`)

    for(let i=0; i < stepDivs.length; i++){
      stepDivs[i].classList.remove(styles.active)
      stepTexts[i].classList.remove(styles.active)
    }
    stepDivs[step-1].classList.add(styles.active)
    stepTexts[step-1].classList.add(styles.active)
  }
  // This checks if the Name value is empty and disables steps navigation
  const handleNavClick = (stepNumber) => {
    if(stepNumber > 1){
      if(cardInfo?.name === ""){
        return
      }
    }
    setStep(stepNumber)
  }

  // This handles step changes
  useEffect(()=>{
    handleNavChange()
    console.log(cardInfo)
  },[step])

  return (
    <main className={styles.main}>

        <section className={styles.signupNav}>
            <div className={styles.steps}>
                <div onClick={()=>{handleNavClick(1)}} >1</div>
                <Image src={navigateSVG} alt="navigation svg" width='16' height='16'/>
                <div onClick={()=>{handleNavClick(2)}}>2</div>
                <Image src={navigateSVG} alt="navigation svg" width='16' height='16'/>
                <div onClick={()=>{handleNavClick(3)}}>3</div>
            </div>
            <div className={styles.stepsText}>
                <p onClick={()=>{handleNavClick(1)}}>Get <br/> started</p>
                <p onClick={()=>{handleNavClick(2)}}>Additional Info</p>
                <p onClick={()=>{handleNavClick(3)}}>Get your digital card</p>
            </div>

        </section>

        {step===1 && <SignUpGetStarted setStep={setStep} setCardInfo={setCardInfo} cardInfo={cardInfo}/>}
        {step===2 && <SignUpAdditionalInfo setStep={setStep} setCardInfo={setCardInfo} cardInfo={cardInfo}/>}
        {step===3 && <SignUpForm setStep={setStep} setCardInfo={setCardInfo} cardInfo={cardInfo}/>}
        
        

        
        <p className={styles.redirect}>Already have an account ? <a href="/signin">Sign In</a></p>
    </main>
  );
}
