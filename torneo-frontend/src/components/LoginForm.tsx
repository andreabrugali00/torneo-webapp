'use client'
import ButtonComponent from "./Button";
import InputComponent from "./Input";
import { UserIcon, LockClosedIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import {loginUser} from '../services/authService'

export default function LoginForm() {
    const  [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");

    const checkCredentials = async () => {
        console.log(email)
        console.log(password)
        try {
            const res = await loginUser(email,password)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <InputComponent type="text" text="Email" Icon={UserIcon} onChange={(e)=>setEmail(e.target.value)}></InputComponent>
            <br />
            <InputComponent type="password" text="Password" Icon={LockClosedIcon} onChange={(e) => setPassword(e.target.value)}></InputComponent>
            <br />
            <ButtonComponent text="Accedi" onClick={() => checkCredentials}></ButtonComponent>
        </div>
    )
}