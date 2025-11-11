const { 
  ContainerBuilder, 
  TextDisplayBuilder,
  SeparatorBuilder,
  MediaGalleryBuilder,
  MediaGalleryItemBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  MessageFlags,
  SeparatorSpacingSize
} = require("discord.js");

module.exports = {
  name: 'about',
  description: 'Shows information about AeroX Music',
  
  async execute(message) {
    const client = message.client;
    const container = new ContainerBuilder();

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `# About Bots Music`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `**Bots Music** - A powerful Discord music bot designed to bring high-quality music streaming to your server. Enjoy seamless playback, custom playlists, and a rich set of features to enhance your listening experience.`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `**Key Features**\n High-quality music streaming\n Custom playlists & favorites\n Advanced audio filters\n Queue management\n Lyrics support\n Spotify integration`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `**Built With**\n Discord.js v14\n Node.js\n Lavalink\n SQLite Database`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small)
    );

    container.addMediaGalleryComponents(
      new MediaGalleryBuilder().addItems(
        new MediaGalleryItemBuilder().setURL("https://cdn.discordapp.com/attachments/1414256332592254986/1430798331524808724/standard_2.gif")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `*Developed with ❤️ by Bucu0368 Development*`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small)
    );

    container.addActionRowComponents(
      new ActionRowBuilder().addComponents(
        new ButtonBuilder()
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=303600576574&scope=bot%20applications.commands`)
          .setLabel(`Invite Bot`)
          .setStyle(ButtonStyle.Link),

        new ButtonBuilder()
          .setURL(`https://discord.gg/Zg2XkS5hq9`)
          .setLabel(`Bucu0368 Development`)
          .setStyle(ButtonStyle.Link)
      )
    );

    await message.reply({
      components: [container],
      flags: MessageFlags.IsComponentsV2,
    });
  }
};

/*
: ! Aegis !
    + Discord: itsfizys
    + Portfolio: https://itsfiizys.com
    + Community: https://discord.gg/8wfT8SfB5Z  (AeroX Development )
    + for any queries reach out Community or DM me.
*/
