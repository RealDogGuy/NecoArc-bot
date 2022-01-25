const { Client, Intents, Guild, Message } = require('discord.js');
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Client({ intents: ['GUILDS',"GUILD_MESSAGES","GUILD_MEMBERS"] });

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

const welcomeChannelId = "767805659261304852"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)