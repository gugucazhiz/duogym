const express = require("express"); //criar rotas e servidor
const cors = require("cors");       //permitir front end acessar back end
const jwt = require("jsonwebtoken");//criar e verificar JWTs
const bcrypt = require("bcryptjs"); //criptografar senhas

const app = express();


app.use(cors());
app.use(express.json());
const users = [];

app.post("/api/register", async(req,res) =>{

    const{ email, password } = req.body;

    const userExists = users.find(u => u.email === email);
    if(userExists){
        return res.status(400).json({ message: "Usuario Ja Existe"});
    }

    //criptografia

    const hashedPassword = await bcrypt.hash(password, 8);

    users.push({email, password: hashedPassword});

    const token = jwt.sign({email}, "segredo", { expiresIn: "1h"});

    res.status(201).json({token});
});

app.post("api/login",async(req,res) =>{
    try{
        const{email, password}= req.body;

        if(!email || !password){
            return res.status(400).json({ message: "Email e Senha Obrigatorios"});
        }

        const userExists
    }catch(error){}
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});