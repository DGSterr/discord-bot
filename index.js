const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]    
});

    const prefix = "S";

Client.on("ready", () =>{
    console.log("bot opérationnel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!terr
    if(message.content === prefix + "terr"){
        message.channel.send("**Youtube**: https://www.youtube.com/channel/UCK8KBdei8lGxosYfvky7RYA\n**Twitch**:https://www.twitch.tv/sterr___");
    }
});
 
Client.on("messageCreate", message => {
    if (message.author.bot) return;

    //!aide
    if(message.content === prefix + "aide"){
        const embed = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setDescription("**La liste des commandes du BOT\nest sur le site :wink:**")
            .setTitle("Liste des commandes")
            .setAuthor("Sterr", "https://static-cdn.jtvnw.net/jtv_user_pictures/09c28434-2742-42f0-b8e7-8ff6296ec5e7-profile_image-300x300.png")
            .setThumbnail("https://static-cdn.jtvnw.net/jtv_user_pictures/09c28434-2742-42f0-b8e7-8ff6296ec5e7-profile_image-300x300.png");

        message.channel.send({ embeds: [embed]});
    }
});


Client.login(process.env.TOKEN);