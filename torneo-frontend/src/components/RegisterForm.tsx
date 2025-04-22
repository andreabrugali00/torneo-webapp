'use client'
import React from "react";
import { useForm } from "react-hook-form";
import InputComponent from "./InputRef";
import ButtonComponent from "./Button";
import { UserIcon } from "@heroicons/react/16/solid";

type FormValues = {
    nome: string;
    cognome: string;
    password: string;
    email: string;
    ruolo: string;
}

export const RegisterForm: React.FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>();
    const onSubmit = (data: FormValues) => {
        console.log(data)
    }
    return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <InputComponent type='text' text='Nome' Icon={UserIcon} {...register('nome', { required: true })}></InputComponent>
        {errors.nome && <span>Nome obbligatorio</span>}
        <ButtonComponent type='submit' text='Registrati' ></ButtonComponent>
    </form>
    ) 
}