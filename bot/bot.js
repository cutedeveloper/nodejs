var TelegramBot = require('node-telegram-bot-api');

var token = '195454726:AAGNNWm6vzcHEZrdjH5KfYtjhNanIbB96Ug'

function User(chat_id)
{
   this.chat_id = chat_id;
}

User.prototype.state = "initiated";

var bot = new TelegramBot(token, {polling:true});
var opts = {
   reply_markup: JSON.stringify(
                       {
                          keyboard:[["ایرانسل", "همراه اول"], ["رایتل"]]
                       }
                       )};
bot.on('message', function(msg)
      {
         var chat_id = msg.chat.id;
         bot.sendMessage(chat_id, 'اپراتورت چیه؟ :)', opts);
      });

