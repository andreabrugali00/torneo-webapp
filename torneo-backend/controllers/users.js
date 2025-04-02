import { v4 as uuidv4 } from 'uuid'
let users = []
import pool from '../src/db/index.js';

// Ottieni tutti gli utenti
export const getAllUsers = async (req, res) => {
  try {
    // Esegue una query per selezionare tutti gli utenti dalla tabella "users"
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error('Errore nel recupero degli utenti:', err);
    res.status(500).send('Errore nel recupero degli utenti');
  }
};
export const getUsersById = async (req, res) => {
  try {
    const { id } = req.params
    //const foundUser = users.find((user) => user.id == id)
    //res.send(foundUser)
    //NON va bene è poco sicuro const result = await pool.query(`SELECT * FROM users WHERE id = ${id}`)
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    console.log(result.rowCount)
    if(result.rowCount > 0){
      res.json(result.rows)
    }else{
      res.send("Nessun utente trovato con id "+id)
    }
    
  } catch (error) {
    console.error('Errore nel recupero degli utenti:', err);
    res.status(500).send('Errore nel recupero degli utenti');
  }  
}
export const inserUser = async (req, res) => {
  try {
    const {nome, email, password, ruolo} = req.body
    if (!nome || !email || !password) {
      return res.status(400).json({ error: 'Nome, email e pwd sono obbligatori' });
    }
    const result = await pool.query("INSERT INTO users (nome, email, password, ruolo) VALUES ($1, $2, $3, $4) RETURNING *", [nome, email, password, ruolo])
    res.status(201).json(result.rows[0]);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Errore del server' });
  }
}
export const deleteUser = (req, res) => {
    const { id } = req.params
    users = users.filter((user) => user.id != id)
    res.send(users)
}
export const updateUser = (req, res) => {
    const { id } = req.params
    const { nome, cognome, email } = req.body

    const foundUser = users.find((user) => user.id == id)
    if (nome) foundUser.nome = nome
    if (cognome) foundUser.cognome = cognome
    if (email) foundUser.email = email

    res.send(`Utente con id ${id} è stato modificato con successo!`)
}