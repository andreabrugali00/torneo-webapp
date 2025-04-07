import LoginForm from "@/components/LoginForm";
import { UserIcon, LockClosedIcon } from "@heroicons/react/16/solid";

export default function Login() {
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <LoginForm></LoginForm>
            </div>
        </div>)
}