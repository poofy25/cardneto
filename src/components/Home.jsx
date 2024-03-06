"use client"
import { useSession } from "next-auth/react"


export default function HomePage () {
    const { data: session, status, update } = useSession()
    console.log(session, status , update)
    
    return (
        <>
            <h1>Home Page</h1>
            {status === 'loading' ? <p>Loading...</p> : 
            <h3>{session.user.email}</h3>
            }
        </>
     )
}

