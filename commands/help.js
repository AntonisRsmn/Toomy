const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders'); 

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Information about the bot'),
  async execute(interaction) {
    const help = new MessageEmbed()
      .setColor('fffffe')
      .setTitle('Help Command')
      .addFields(
        { name: '/clear', value: 'Delete messages from the channel' },

        { name: '/user-info', value: 'Information about you' },

        { name: '/server', value: 'Information about the server' },

        { name: '/avatar', value: 'Sends your avatar' }

      )
      interaction.reply({ embeds: [help] });
  },
};