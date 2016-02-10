var TelegramBot = require('node-telegram-bot-api');

var token = '195454726:AAGNNWm6vzcHEZrdjH5KfYtjhNanIbB96Ug'

var bot = new TelegramBot(token, {polling:true});

bot.on('message', function(msg)
      {
         var chat_id = msg.chat.id;
         bot.sendMessage(chat_id, 'salam');
      });

