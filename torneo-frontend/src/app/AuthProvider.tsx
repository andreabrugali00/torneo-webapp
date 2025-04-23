'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const setToken = useAuthStore((state) => state.setToken);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);

  return <>{children}</>;
}
// Questo componente è un provider di autenticazione che si occupa di gestire il token di autenticazione
// all'interno dell'applicazione. Utilizza Zustand per gestire lo stato globale del token.
// Quando il componente viene montato, controlla se c'è un token memorizzato nel localStorage e, in caso affermativo,
// lo imposta nello store di Zustand. In questo modo, il token è disponibile per tutto il resto dell'applicazione.
// Il componente restituisce i suoi figli, permettendo così di avvolgere l'intera applicazione o parti di essa con il provider di autenticazione.
// In questo modo, qualsiasi componente figlio può accedere al token di autenticazione tramite lo store di Zustand.
// Questo approccio è utile per gestire l'autenticazione in modo centralizzato e semplificare la logica di accesso alle risorse protette.
// Inoltre, il provider di autenticazione può essere utilizzato per implementare funzionalità come il logout,
// la gestione degli errori di autenticazione e altre operazioni correlate all'autenticazione.
// In sintesi, questo componente fornisce un modo semplice e pulito per gestire l'autenticazione all'interno dell'applicazione React utilizzando Zustand come gestore dello stato globale.
// Può essere utilizzato in combinazione con altri componenti e servizi per creare un'esperienza utente fluida e sicura.
// Assicurati di importare questo provider nel tuo file layout.tsx o in un altro punto centrale dell'applicazione per garantire che sia disponibile ovunque.
// Puoi anche considerare di aggiungere logica per gestire il logout o la scadenza del token, se necessario.
// In questo modo, il tuo provider di autenticazione diventa un componente versatile e riutilizzabile per gestire l'autenticazione in modo efficace.
// Assicurati di testare il provider in diverse situazioni, ad esempio quando il token è valido, scaduto o assente, per garantire che funzioni come previsto in tutti i casi d'uso. Inoltre, puoi considerare di aggiungere funzionalità come la gestione degli errori di rete o la visualizzazione di messaggi di errore all'utente in caso di problemi con l'autenticazione. In questo modo, il tuo provider diventa un componente robusto e affidabile per gestire l'autenticazione nella tua applicazione React.
// Infine, puoi anche considerare di documentare il tuo provider di autenticazione e fornire esempi su come utilizzarlo in modo efficace all'interno dell'applicazione. Questo renderà più facile per altri sviluppatori comprendere come funziona e come integrarlo nel loro flusso di lavoro. In questo modo, il tuo provider diventa non solo un componente utile, ma anche un esempio di best practice per la gestione dell'autenticazione in React.
