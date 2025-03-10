import express from 'express'
import usersRoutes from './routes/users.js'
const app = express()

const PORT = 3000

app.use(express.json())
app.use('/users', usersRoutes)
app.get('/', (req, res) => {
    res.send('Benvenuto nella homepage')
})
app.listen(PORT, ()=>{
    console.log(`Server running on port ${3000}`)
})