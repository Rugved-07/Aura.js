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
    }
}   
module.exports = {
  Plugins
}
