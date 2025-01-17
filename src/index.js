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
      name: '$auraversion',
      params: [""],
      type: 'aoi.js',
      code: `v1.0.0`
    });

bot.functionManager.createCustomFunction({
      name: '$serverid',
      params: [""],
      type: 'aoi.js',
      code: `$guildid`
    });

bot.functionManager.createCustomFunction({
      name: '$saycommand',
      params: [""],
      type: 'aoi.js',
      code: `$message`
    });

bot.functionManager.createCustomFunction({
      name: '$botid',
      params: [""],
      type: 'aoi.js',
      code: `$clientid`
    });

bot.functionManager.createCustomFunction({
      name: '$bottoken',
      params: [""],
      type: 'aoi.js',
      code: `$clientToken`
    });

bot.functionManager.createCustomFunction({
      name: '$serverid',
      params: [""],
      type: 'aoi.js',
      code: `$guildid`
    });
    }
}   
module.exports = {
  Plugins
}
