client.on('message' ,async message => {
 if (message.content.startsWith(prefix + "profile")) {
     let filter = m => m.author.id === message.author.id;
  let set = new Discord.RichEmbed()
      .setColor("RANDOM")
   .setTitle(`اضغط على ريأكشن المنصة`)
 .setDescription(`
Pubg 
Snap
Twitter
insta
 `)
    let msg = await message.channel.send(set);
    let r1 = await msg.react("1⃣");
    let r2 = await msg.react("2⃣");
    let r3 = await msg.react("3⃣");
    let r4 = await msg.react("4⃣");
    let f1 = (reaction, user) =>
      reaction.emoji.name == "1⃣" && user.id == message.author.id;
    let f2 = (reaction, user) =>
      reaction.emoji.name == "2⃣" && user.id == message.author.id;
    let f3 = (reaction, user) =>
      reaction.emoji.name == "3⃣" && user.id == message.author.id;
    let f4 = (reaction, user) =>
      reaction.emoji.name == "4⃣" && user.id == message.author.id;
     if (!msg) return;
    let c1 = msg.createReactionCollector(f1, { time: 120000 });
    let c2 = msg.createReactionCollector(f2, { time: 120000 });
    let c3 = msg.createReactionCollector(f3, { time: 120000 });
    let c4 = msg.createReactionCollector(f4, { time: 120000 });
    c1.on("collect", async r => {
      await msg.delete();
    let msge;
    message.channel.send('اكتب  حسابك سبناب شات').then(msg => {
      var mm1 = setTimeout(() => {
        const embed5 = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(" :stopwatch: | ` انتهى الوقت `")
       msg.delete(); 
       message.channel.sendEmbed(embed5);
      }, 5000); 
          message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
        .then(collected => {
            collected.first().delete();
           msg.delete(); 
           msge = collected.first().content;
      db.set(`snapchat_${message.author.id}`,"@"+ msge)
      clearTimeout(mm1)
     message.channel.send(`${msge} تم تسجيل حسابك`)
           })    
})    
});
    c2.on("collect", async r => {
      await msg.delete();
    let msge;
    message.channel.send('اكتب  حسابك انستقرام').then(msg => {
      var mm1 = setTimeout(() => {
        const embed5 = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(" :stopwatch: | ` انتهى الوقت `")
       msg.delete(); 
       message.channel.sendEmbed(embed5);
      }, 5000); 
          message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
        .then(collected => {
            collected.first().delete();
           msg.delete(); 
           msge = collected.first().content;
      db.set(`instgram_${message.author.id}`, "@"+msge)
      clearTimeout(mm1)
     message.channel.send(`${msge} تم تسجيل حسابك`)
           })    
})    
    });
    c3.on("collect", async r => {
      await msg.delete();
    let msge;
    message.channel.send('اكتب  حسابك تويتر').then(msg => {
      var mm1 = setTimeout(() => {
        const embed5 = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(" :stopwatch: | ` انتهى الوقت `")
       msg.delete(); 
       message.channel.sendEmbed(embed5);
      }, 5000); 
          message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
        .then(collected => {
            collected.first().delete();
           msg.delete(); 
           msge = collected.first().content;
      db.set(`twitter_${message.author.id}`,"@"+ msge)
      clearTimeout(mm1)
     message.channel.send(`${msge} تم تسجيل حسابك`)
           })    
})    
    });
    c4.on("collect", async r => {
      await msg.delete();
    let msge;
    message.channel.send('اكتب ايدي حسابك ببجي موبايل').then(msg => {
      var mm1 = setTimeout(() => {
        const embed5 = new Discord.RichEmbed()
          .setColor("RED")
          .setDescription(" :stopwatch: | ` انتهى الوقت `")
       msg.delete(); 
       message.channel.sendEmbed(embed5);
      }, 5000); 
          message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
        .then(collected => {
            collected.first().delete();
           msg.delete(); 
           msge = collected.first().content;
      db.set(`pubgm_${message.author.id}`, msge)
      clearTimeout(mm1)
     message.channel.send(`${msge} تم تسجيل حسابك`)
           })    
})    
    });
}
 if (message.content.startsWith(prefix + "Profile")) {
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
let snapchat = await db.fetch(`snapchat_${getvalueof.id}`)
if(snapchat === null) snapchat = "­";
let instgram = await db.fetch(`instgram_${getvalueof.id}`)
if(instgram === null) instgram = "­";
let twitter = await db.fetch(`twitter_${getvalueof.id}`)
if(twitter === null) twitter = "­";
let pubg = await db.fetch(`pubgm_${getvalueof.id}`)
if(pubg === null) pubg = "­";
    let Image = Canvas.Image,
    canvas = Canvas.createCanvas(400, 236),
    ctx = canvas.getContext('2d');
            fs.readFile("./profile.png", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 236); // حجم الصورة
})
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                       jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
   ctx.font = '18px Arial';
   ctx.fontSize = '18px'; 
   ctx.fillStyle = "#FFFFFF";
  ctx.textAlign = "center"; 
  ctx.fillText(`${getvalueof.username}`, 275, 25) 

  ctx.font = '20px Arial';
  ctx.fontSize = '20px'; 
  ctx.fillStyle = "#f5d763";
  ctx.textAlign = "center"; 
  ctx.fillText(`${snapchat}`, 283, 73)

  ctx.font = '20px Arial';
  ctx.fontSize = '20px'; 
  ctx.fillStyle = "#df3eb3";
  ctx.textAlign = "center"; 
  ctx.fillText(`${instgram}`, 283, 120) 


  ctx.font = '20px Arial';
  ctx.fontSize = '20px'; 
  ctx.fillStyle = "#5499c4";
  ctx.textAlign = "center"; 
  ctx.fillText(`${twitter}`, 283, 170) 

  ctx.font = '20px Arial';
  ctx.fontSize = '20px'; 
  ctx.fillStyle = "#ffcd15";
  ctx.textAlign = "center"; 
  ctx.fillText(`${pubg}`, 283, 220) 
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                            ctx.beginPath();
                              ctx.arc(52.5, 71, 44,0 ,2 * Math.PI);
                                 ctx.clip();
                            ctx.drawImage(ava, 8, 25, 92, 94);
                              ctx.closePath();

message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
 }
})
