'use client'
import ButtonComponent from "./Button";
import InputComponent from "./Input";
import { UserIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import {loginUser} from '../services/authService'
import { useRouter } from "next/navigation"

export default function LoginForm() {
    const  [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const router = useRouter()
    const checkCredentials = async () => {
        try {
            const res = await loginUser(email,password)
            console.log(res.data.token)
            const token = res.data.token
            localStorage.setItem("token", token)
            router.push('./Dashboard')
        } catch (error) {
            setError("Credenziali non corrette")
        }
    }
    return (
        <div>
            <InputComponent type="text" text="Email" Icon={UserIcon} onChange={(e)=>setEmail(e.target.value)}></InputComponent>
            <br />
            <InputComponent type="password" text="Password" Icon={LockClosedIcon} onChange={(e) => setPassword(e.target.value)}></InputComponent>
            {error && <p className="text-red-500">{error}</p>}
            <br />
            <ButtonComponent text="Entra" onClick={() => checkCredentials()}></ButtonComponent>
        </div>
    )
}