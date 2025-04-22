import {RegisterForm} from "@/components/RegisterForm";
import { UserIcon, LockClosedIcon } from "@heroicons/react/16/solid";

export default function Login() {
    return (
        <div>
            <div className="flex flex-col gap-4 justify-center items-center h-screen">
                <RegisterForm></RegisterForm>
            </div>
        </div>)
}