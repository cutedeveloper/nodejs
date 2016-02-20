var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
     console.log( "Listening on " + server_ip_address + ", server_port " + port )
});

var TelegramBot = require('node-telegram-bot-api');
var HashMap = require('hashmap');

var token = '195454726:AAGNNWm6vzcHEZrdjH5KfYtjhNanIbB96Ug'

var user_map = new HashMap();

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
         if (user_map.has(chat_id))
         {
            console.log("user is added before");
            console.log("current state " + user_map.get(chat_id).state);
         }
         else
      {
         user_map.set(chat_id, new User(chat_id));
         bot.sendMessage(chat_id, 'اپراتورت چیه؟ :)', opts); 
      }
      });

