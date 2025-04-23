"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
export default function Dashboard() {
  const router = useRouter();
  //const [token, setToken] = useState<string | null>(null); // Stato per il token
  const token = useAuthStore((state) => state.token); // Ottieni il token dallo store
  const [loading, setLoading] = useState(true); // Stato per il caricamento

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log("Token trovato:", storedToken);
    if (!storedToken && !token) {
      router.push("/login");
    }
    setLoading(false); // Fine del controllo
  }, [router]);

  if (loading) {
    return <p>Controllo autenticazione...</p>; // Mostra un messaggio di caricamento
  }

  if (!token) {
    return null; // Evita di mostrare il contenuto se il token è assente
  }

  // Qui puoi aggiungere il codice per il rendering del dashboard
  return <div>Dashboard, benvenuto! {token}</div>;
}
