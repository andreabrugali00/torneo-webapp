'use client'
import React, { useState } from "react";
import InputComponent from "./Input";
import { ArrowRightEndOnRectangleIcon, UserIcon } from "@heroicons/react/16/solid";
import ButtonComponent from "./Button";

type FormValues = {
    nome: string;
    cognome: string;
    password: string;
    email: string;
    ruolo: string;
}

export const RegisterForm: React.FC = () => {
    const [formValues, setFormValues] = useState<FormValues>({
        nome: '',
        cognome: '',
        password: '',
        email: '',
        ruolo: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formValues)
    }
    return (
            <form onSubmit={handleSubmit}  className="flex flex-col gap-4">
                <InputComponent name='nome' type='text' text='Nome' Icon={UserIcon} onChange={handleChange} value={formValues.nome}></InputComponent>
                <InputComponent name='cognome' type='text' text='Cognome' Icon={UserIcon} onChange={handleChange} value={formValues.cognome}></InputComponent>
                <InputComponent name='email' type='text' text='Email' Icon={UserIcon} onChange={handleChange} value={formValues.email}></InputComponent>
                <InputComponent name='password' type='password' text='Password' Icon={UserIcon} onChange={handleChange} value={formValues.password}></InputComponent>
                <InputComponent name='ruolo' type='text' text='Ruolo' Icon={UserIcon} onChange={handleChange} value={formValues.ruolo}></InputComponent>
                <ButtonComponent type='submit' text='Registrati' ></ButtonComponent>
            </form>

    )
}