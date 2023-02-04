const transporter = require('../helpers/transporter');
const handlebars = require('handlebars');
const { text } = require('express');
const fs = require('fs').promises;

module.exports = {
    email: async(req, res) => {
        try {

            let {username, email, text} = req.body



            if(!username.length || !email.length || !text.length)
            return res.status(400).send({
                isError: true,
                message: 'Data Not Found',
                data: null
            })

            const template = await fs.readFile('./template/confirmation.html', 'utf-8')
            const templateCompile = await handlebars.compile(template)
            const newTemplate = templateCompile({username, email, text})
            await transporter.sendMail({
                from: email,
                to: 'gilang.ramadhan011297@gmail.com',
                subject: 'Email from my-porto',
                html: newTemplate
            })

            res.status(201).send({
                isError: false,
                message: 'Data is Send',
                data: null
            })
        } catch (error) {
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            }) 
        }
    }
}