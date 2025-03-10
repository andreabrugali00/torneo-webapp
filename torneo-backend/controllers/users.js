import { v4 as uuidv4 } from 'uuid'
let users = []

export const getAllUsers = (req, res) => {
    res.send(users)
}
export const getUsersById = (req, res) => {
    const { id } = req.params
    const foundUser = users.find((user) => user.id == id)
    res.send(foundUser)
}
export const inserUser = (req, res) => {
    const user = req.body
    users.push({ ...user, id: uuidv4() })
    res.send(`utente con email ${user.email} aggiunto con successo!`)
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