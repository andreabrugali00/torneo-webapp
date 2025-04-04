import Input from "@/components/Input";
import Button from "@/components/Button";
import { UserIcon, LockClosedIcon } from "@heroicons/react/16/solid";

export default function Login() {
    return (
        <div>
            <h1>Benvenuto nella Login</h1>
            <br />
            <Input text="Email" Icon={UserIcon}></Input>
            <br />
            <Input text="Password" Icon={LockClosedIcon}></Input>
            <br />
            <Button text="Accedi"></Button>
        </div>)
}