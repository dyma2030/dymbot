const Discord = require('discord.js');

const client = new Discord.Client();
const fetch = require('node-fetch');
const prefix = '-';
client.once('ready', () => {
    console.log('DymBot Ready!');
});

const myEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff') 
    .setAuthor('Bot dari segala bot', 'https://static.wikia.nocookie.net/arksurvivalevolved_gamepedia/images/e/ee/Magmasaur_Egg_%28Genesis_Part_1%29.png/revision/latest/scale-to-width-down/228?cb=20200226185041', '')
	

client.on('message', async message =>{
    if(!message.content.startsWith(prefix) || message.author.bot){ 
        const pesan = message.content;
        if(pesan.includes("hallo")){
            message.react('😄');
            message.channel.send("Hallo Juga");
        }else if(pesan.includes("dymbot")){
            message.react('😄');
            message.channel.send("aye sir, siap laksanakan");
        }else if(pesan.includes("69")){
            message.react('🤡');
        }

    }
    else{
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if(command === 'youtube'){
            message.channel.send('https://www.youtube.com/sandytiaspratama/');
        }else if (command === 'cat') {
            const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
            message.channel.send(file);
        }else if (command === 'rates') {
            const file = await fetch('http://arkdedicated.com/dynamicconfig.ini').then(response => response.text());
            //myEmbed.setDescription(file);
            message.channel.send(file);
        }else if (command === 'craft') {
            if (args[3] == null){
                args[3] = "0";       
            }
            var maxVal = parseFloat(args[0]);
            var minVal = parseFloat(args[1]);
            var bpVal = parseFloat(args[2]);
            var craftBonus = parseFloat(args[3])*0.01;
            var crafted, craftBonus;

            crafted = (bpVal-minVal)*craftBonus+bpVal;
            craftBonus = (maxVal-bpVal)/(bpVal-minVal)*100;

            message.channel.send('With **'+args[3]+'%** crafting bonus you will get **'+crafted.toFixed(2) +'** Armor/Damage/Value \nYou need **'+craftBonus.toFixed(2)+'%** crafting bonus to get max value from character crafter min **LEVEL** **'+(craftBonus*2).toFixed(0)+'**' );

        }else if (command === 'help') {
            const file = 'Mau apa ha??????\n'  
                        +   '-craft<MaxValue><MinValue><BlueprintValue><Bonus Crafting Skills> \n'
                        + '-rates \n'
                        + '-help \n';
            //myEmbed.setDescription(file);
            message.channel.send(file);
        }else{
            message.channel.send('You need help? write "-help"');
        }
    }
});


client.login('ODQ5NjgxNTMyMTUxMDA1MjA0.YLetlw.cbJUVBDKGXVjeJbIXEmoyU5Rruw');