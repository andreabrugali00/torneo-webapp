import express from 'express'
import usersRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cors from 'cors'
const app = express()

const PORT = 5000
app.use(cors());

app.use(express.json())
app.use('/users', usersRoutes)
app.use('/auth', authRoutes)
app.get('/', (req, res) => {
    res.send('Benvenuto nella homepage')
})
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})