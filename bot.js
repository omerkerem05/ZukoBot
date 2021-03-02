const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require('./işaret.json');
const { Client, MessageEmbed } = require('discord.js');

var prefix = işaret.prefix

client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag} sunucuya giriş yaptı ve artık aktif!`);
  client.user.setActivity('Botumuz hala yapım aşamasındadır.', { type: 'PLAYING' })
  .then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`))
  .catch(console.error);
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('z!kick')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Bu komutu kullanmaya iznin yok. \n <@${message.author.id}`)
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            message.channel.send(`${user.tag} sunucudan atıldı.`);
          })
          .catch(err => {
            message.reply('Bu kişiyi atamam.');
            console.error(err);
          });
      } else {
        message.reply("Bu kişi bu sunucuda yok .d");
      }
    } else {
      message.reply("Atılacak kişiyi seçsen keşke :/");
    }
  }
});

client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('z!ban')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`Bu komutu kullanmaya iznin yok. \n <@${message.author.id}`)
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.channel.send(`${user.tag} sunucudan yasaklandı.`);
          })
          .catch(err => {
            message.reply('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.reply("That user isn't in this guild!");
      }
    } else {
      message.reply("You didn't mention the user to ban!");
    }
  }
});


client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'mal') {
    msg.delete()
    msg.reply('bu kelimeyi kullanarak sana olan sevgimi kaybettin :(');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'adam') {
    msg.react('😋')
    msg.reply('ben mi? ;)');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'naber') {
    msg.channel.send('İyidir');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'help') {
    msg.author.send('La ne helpi daha botta 5 tane komut bile yok .d');
  }
});

client.on('guildMemberAdd', member => {
  const girişçıkış = member.guild.channels.cache.find(channel => channel.name === '💬-genel-sohbet');
  girişçıkış.send(`Aramıza hoş geldin, ${member}`);
  member.send(`${member}, aramıza hoşgeldin! Lütfen 2 dakikanı ayırıp kurallar ve ödüller kanallarını oku. Şimdiden iyi çekilişler ;)`);
});

client.on('guildMemberRemove', member => {
  const girişçıkış = member.guild.channels.cache.find(channel => channel.name === 'bizi-terkeden-hainler');
  girişçıkış.send(`${member} maalesef sunucudan ayrıldı. Ayıp ettin be kardeş.`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'zoobatürk') {
    const kanal = new MessageEmbed()

    .setTitle('ZoobaTürk')
    .setDescription('ZoobaTürk Youtube')
    .setAuthor('ZukoBot')
    .setColor("RANDOM")
    .setThumbnail('https://cdn.discordapp.com/attachments/814963669258600519/815278263265001482/unnamed.png')
    .addField('Abone Olun!', 'https://www.youtube.com/channel/UCxDfcvGP-9Nr9sasFRPNT8A');
    msg.channel.send(kanal);
 }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    const kanal = new MessageEmbed()

    .setTitle('Zuko Yardım Kartı')
    .setColor("RANDOM")
    .addField(':clipboard:z!komutlar', '``Komutları gösterir``');
    msg.channel.send(kanal);
 }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'komutlar') {
    const kanal = new MessageEmbed()

    .setTitle(':clipboard: Komutlar :clipboard:')
    .setColor("RANDOM")
    .setDescription('**z!naber** ┇ Bota naber diye soru sorar.')
    msg.channel.send(kanal);
 }
});


client.login('ODE0OTQ1MzM3MjE4NDMzMTA0.YDlO_Q.dTVop6VRb2W2lFZIU2EBaNzKgRw');
