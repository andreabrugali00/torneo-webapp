'use client'
import ButtonComponent from "./Button";
import InputComponent from "./Input";
import { UserIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import {loginUser} from '../services/authService'
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/store/authStore";

export default function LoginForm() {
    const  [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const setToken = useAuthStore((state) => state.setToken); // Ottieni la funzione setToken dallo store
    const router = useRouter()
    const checkCredentials = async () => {
        setIsLoading(true)
        try {
            const res = await loginUser(email,password)
            setToken(res.data.token); // Salva il token nello store
            router.push('./Dashboard')
        } catch (err) {
            console.error(err);
            // Gestione sicura dell'errore
            if (err instanceof Error) {
                setError(err.message); // Usa il messaggio dell'errore
            } else {
                setError("Si è verificato un errore imprevisto. Riprova."); // Messaggio generico
            }
        } finally { //Esegue sempre, sia in caso di successo che di errore
            setIsLoading(false)
        }   
    }
    return (
        <div className="flex flex-col space-y-4">
            <InputComponent type="text" text="Email" Icon={UserIcon} onChange={(e)=>setEmail(e.target.value)}></InputComponent>
            <InputComponent type="password" text="Password" Icon={LockClosedIcon} onChange={(e) => setPassword(e.target.value)}></InputComponent>
            {error && <p className="text-red-500">{error}</p>}
            <ButtonComponent text={isLoading ? "Caricamento" : "Entra"} onClick={() => checkCredentials()}></ButtonComponent>
            <p>Non sei ancora registrato? <span className="text-blue-500 cursor-pointer" onClick={()=>router.push('./Register')}>Registrati</span></p>
            <p>Hai dimenticato la password? <span className="text-blue-500 cursor-pointer" onClick={()=>router.push('./ResetPassword')}>Recupera</span></p>
        </div>
    )
}