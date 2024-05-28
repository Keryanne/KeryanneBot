const axios = require('axios');

const API_TOKEN = '6829081730:AAFrBRs6PrgQmvfrzaJDZVAJPwiBTOdBRRU';
const WEBHOOK_URL = 'https://c1d4-141-170-218-210.ngrok-free.app/telegram_webhook';

const setWebhook = async () => {
    const url = `https://api.telegram.org/bot${API_TOKEN}/setWebhook?url=${WEBHOOK_URL}`;
    try {
        const response = await axios.get(url);
        console.log('Webhook configuré:', response.data);
    } catch (error) {
        console.error('Erreur lors de la configuration du webhook:', error);
    }
};

setWebhook();