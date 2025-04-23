'use client'
import React from "react";
import { set, useForm } from "react-hook-form";
import InputComponent from "./InputRef";
import ButtonComponent from "./Button";
import { UserIcon } from "@heroicons/react/16/solid";
import { resgisterUser } from "@/services/authService";
import { useRouter } from "next/navigation"

type FormValues = {
    nome: string;
    cognome: string;
    password: string;
    email: string;
    ruolo: string;
}

export const RegisterForm: React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();
    const [isLoading, setIsLoading] = React.useState(false)
    const router = useRouter();
    const onSubmit = async (data: FormValues) => {
        setIsLoading(true)
        try {
            const {nome, cognome, email, password, ruolo} = data
            const res = await resgisterUser(nome, cognome, email, password, ruolo)
            console.log(res)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false) 
        }
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <InputComponent type='text' text='Nome' Icon={UserIcon} {...register('nome', { required: true })}></InputComponent>
        {errors.nome && <span>Nome obbligatorio</span>}
        <InputComponent type='text' text='Cognome' Icon={UserIcon} {...register('cognome', { required: true })}></InputComponent>
        {errors.cognome && <span>Nome obbligatorio</span>}
        <InputComponent type='text' text='Email' Icon={UserIcon} {...register('email', { required: true })}></InputComponent>
        {errors.email && <span>Nome obbligatorio</span>}
        <InputComponent type='password' text='Password' Icon={UserIcon} {...register('password', { required: true })}></InputComponent>
        {errors.password && <span>Nome obbligatorio</span>}
        <InputComponent type='text' text='Ruolo' Icon={UserIcon} {...register('ruolo', { required: true })}></InputComponent>
        {errors.ruolo && <span>Nome obbligatorio</span>}
        <ButtonComponent type={isLoading ? 'button' : 'submit'} text={isLoading ? 'Caricamento...' : 'Registrati'} ></ButtonComponent>
        <p>Hai già un account? <span className="text-blue-500 cursor-pointer" onClick={()=>router.push('./Login')}>Accedi</span></p>
        </form>
    ) 
}