import { cadastro, login, buscarUsuarioEmail } from "../Repository/usuarioRepository.js";
import { Router } from "express";
import nodemailer from 'nodemailer'
const server = Router();

server.post("/usuario/cadastro", async (req, resp) => {
	try {

		const { nome, email, senha } = req.body;

		if(!nome)
			throw new Error('Insira um nome')
		if(!email)
			throw new Error('Insira um email')
		if(!senha)
			throw new Error('Insira uma senha')
		
			const usu = await buscarUsuarioEmail(email)
			if(!usu){
				const resposta = await cadastro(nome, email, senha); 
				resp.send('cadastrado com sucesso');
				
			}
			else
				throw new Error('email ja utilizado')
			
		

	} catch (err) {
		resp.status(401).send({
			erro: err.message,
		});
	}
});
server.post("/usuario/login", async (req,resp) => {
	try{
		const {email,senha} = req.body;
		const resposta = await login(email,senha);
		if(!email) throw new Error('email é obrigatorio')
		if(!senha) throw new Error('senha é obrigatorio!')
		if(!resposta || resposta == null) throw new Error("usuario não encontrado")
		else
			resp.send(resposta);
	} catch (err) {
		resp.status(401).send({
			erro: err.message
		});
	}
})
server.post('/send-email', (req,resp) =>{

	try{
		const {nome, from, to, subject, text} = req.body
		const transport = nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false,
			auth:{
				user:'golda.davis30@ethereal.email',
				pass:'JQj723MvUkffyGn9rs'
		},
		tls:{
		rejectUnauthorized: false
		}
		})

		transport.sendMail({
			from: `${nome} <${from}>`,
			to: to,
			subject: subject,
			text: text	
		})
		if(!from) throw new Error('Email é obrigatorio!')
		if(!to) throw new Error('erro no recipiente do email')
		if(!subject) throw new Error("Assunto é obrigatório!")
		if(!text) throw new Error("Texto é obrigatório!")
		else resp.status(204).send()
			
	} catch(err){
		resp.status(401).send({
			erro: err.message
		});
	}
	
})
export default server;
