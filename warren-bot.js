const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("I'm ready!");
});

client.on("message", (message) => {
	if(message.content.startsWith("ping")) {
		message.channel.send("pong");
	}
});

client.login('NDY2NTk2NDY2MzM3NjQ0NTQ1.Die3rA.xwZlJ-BfTaGPInhzpYbZOKjwLy4');