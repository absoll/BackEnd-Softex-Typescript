import express,{ Request, Response } from 'express'

const app = express()

const porta: Number = 3000

app.get('/', (req: Request, res: Response)=>{
    res.send('Bem-vindo ao meu web service!')
    })

app.listen(porta)