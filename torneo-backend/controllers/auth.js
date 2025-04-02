import pool from '../src/db/index.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'svsdhjdlawdehgdbldbDB'
export const login = async(req,res) => {
    const {email, password} = req.body
    const query = "SELECT * FROM users WHERE email = $1";
    const params = [email]
    const result = await pool.query(query, params)
    const findUser = result.rows[0];
    if(!findUser) return res.status(404).json({status: 'error', message: 'Utente / password errata'})
    
    if(await bcrypt.compare(password, findUser.password)){
        const token = jwt.sign({ id: findUser.id, email: findUser.email}, JWT_SECRET)
        return res.json({status: 'ok', data: token})
    }
    
    res.status(401).json({status: 'error', message: 'Utente / password errata'})
}

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