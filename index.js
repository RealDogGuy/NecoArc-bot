const { Client, Intents, Guild, Message } = require('discord.js');
require("dotenv").config()

const client = new Client({ intents: ['GUILDS',"GUILD_MESSAGES"] });

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}`)
})



client.on("messageCreate", (message) => {
    
    if(message.author.bot) {
        return
    }

    if (message.content == "Hello") {
      message.reply("Hello");
    }
});

client.login(process.env.TOKEN)