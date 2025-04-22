'use client'
import Image from "next/image";
import ButtonComponent from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex items-center justify-center h-screen gap-5">
      <ButtonComponent text="Accedi" onClick={() => router.push('./Login')}></ButtonComponent>
      <ButtonComponent text="Resgistrati" onClick={() => router.push('./Register')}></ButtonComponent>
    </div>
  );
}
