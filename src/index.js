class Plugins {
  constructor(args) {
    this.args = args;
    if (!args.bot) {
      console.log("You have not inpputted your aoi client! Exiting Code!");
      process.exit(0);
    }
  }
  loadPlugins() {
    const bot = this.args.bot;
 bot.functionManager.createCustomFunction({
      name: '$aeosVersion',
      params: [""],
      type: 'aoi.js',
      code: `v1.0.0`
    });

    bot.functionManager.createCustomFunction({
      name: '$showType',
      params: [""],
      type: 'aoi.js',
      code: `$botTyping`
    });

    bot.functionManager.createCustomFunction({
      name: '$serverID',
      params: [""],
      type: 'aoi.js',
      code: `$guildID`
    });

bot.functionManager.createCustomFunction({
      name: '$serverRoles',
      params: [""],
      type: 'aoi.js',
      code: `$guildRoles`
    });

bot.functionManager.createCustomFunction({
      name: '$date',
      params: [""],
      type: 'aoi.js',
      code: `$parseDate[$datestamp]`
    });
    
    }
}   
module.exports = {
  Plugins
}