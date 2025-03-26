import pool from '../src/db/index.js';
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const { nome, cognome, email, password, ruolo } = req.body
    if (password.length < 3) {
        res.json({ status: 'error', message: 'Password troppo corta!' })
    }

    const passwordHashed = await bcrypt.hash(password, 10)

    try {
        const result = await pool.query("INSERT INTO users (nome, cognome, email, password, ruolo) VALUES ($1, $2, $3, $4, $5) RETURNING *", [nome, cognome, email, passwordHashed, ruolo])
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Errore del server' });
    }
    res.send("registrazione")
};