const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const API_TOKEN = '6829081730:AAFrBRs6PrgQmvfrzaJDZVAJPwiBTOdBRRU';
const WEBHOOK_URL = 'https://c1d4-141-170-218-210.ngrok-free.app/telegram_webhook';

app.use(bodyParser.json());

app.post('/telegram_webhook', (req, res) => {
    const data = req.body;
    if (data.message) {
        const chatId = data.message.chat.id;
        const text = data.message.text;
        const reply = `Vous avez envoyé : ${text}`;
        sendMessage(chatId, reply);
    }
    res.sendStatus(200);
});

const sendMessage = (chatId, text) => {
    const url = `https://api.telegram.org/bot${API_TOKEN}/sendMessage`;
    axios.post(url, {
        chat_id: chatId,
        text: text
    }).then(response => {
        console.log('Message envoyé:', response.data);
    }).catch(error => {
        console.log('Erreur lors de l\'envoi du message:', error);
    });
};

app.listen(3000, () => {
    console.log('Serveur à l\'écoute sur le port 3000');
});