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
      name: '$request',
      params: [""],
      type: 'aoi.js',
      code: `$httpRequest[$message[1];$message[2];;$message[3];Failed to request!]`
    });
    }
}   
module.exports = {
  Plugins
}
