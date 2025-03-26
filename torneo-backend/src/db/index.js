import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

// Crea un pool di connessioni con i parametri presi dalle variabili d'ambiente
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Esempio: Testa la connessione eseguendo una query
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Errore nella connessione al DB:', err);
  } else {
    console.log('Connessione al DB avvenuta con successo:', res.rows);
  }
});

export default pool
