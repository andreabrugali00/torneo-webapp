'use client'
import React, { useState } from 'react'
import InputComponent from './Input'
import ButtonComponent from './Button'
import { UserIcon, LockClosedIcon, PaperAirplaneIcon, ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";
import { stringify } from 'querystring';
import { error } from 'console';

export default function RegisterForm() {
    //Indico il tipo che devono avere i miei valori stringa
    type FormValues = {
        [key: string] : string;
    }
    type FormErrors = {
        [key:string] : string;
    }
    const [formData, setFormData] = useState({
        nome : {value:"", error: {hasError:false, messageError : ""}},
        cognome : {value:"", error: {hasError:false, messageError : ""}},
        email : {value:"", error: {hasError:false, messageError : ""}},
        password : {value:"", error: {hasError:false, messageError : ""}},
        ruolo : {value:"", error: {hasError:false, messageError : ""}}
    })
    function handleChange(event:React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        //prevState serve per lavorare sull'ultimo valore effettivo.
        //setFormData((prevState) => ({ ...prevState, [name]: {...prevState[name], value:value, error:} }));

    }
    function handleSubmit(){
        console.log(formData)
    }
    return (
        <div>
            <form action={handleSubmit} className='flex flex-col space-y-4'>
                <InputComponent name='nome' type='text' text='Nome' Icon={UserIcon} onChange={handleChange}></InputComponent>
                <InputComponent type='submit' Icon={ArrowRightEndOnRectangleIcon} ></InputComponent>
            </form>
            <h1 className='bg-blue-400 w-100'>{JSON.stringify(formData)}</h1>
        </div>
    )
}