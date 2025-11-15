const { 
    ContainerBuilder,
    TextDisplayBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize,
    MessageFlags
} = require('discord.js');

const emojis = require('../emojis.json');

module.exports = {
    name: 'uptime',
    description: 'View bot uptime',
    aliases: ['up', 'runtime'],

    async execute(message) {
        const { client } = message;

        const uptime = Math.floor(client.uptime / 1000);
        const days = Math.floor(uptime / 86400);
        const hours = Math.floor((uptime % 86400) / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = uptime % 60;
        const uptimeString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        const container = new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${client.user.username} Uptime`)
            )
            .addSeparatorComponents(
                new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true)
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`**Bot Runtime**`)
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `${emojis.dots} Uptime: \`${uptimeString}\``
                )
            );

        await message.reply({
            components: [container],
            flags: MessageFlags.IsPersistent | MessageFlags.IsComponentsV2
        });
    },
};

/*
: ! Aegis !
    + Discord: itsfizys
    + Portfolio: https://itsfiizys.com
    + Community: https://discord.gg/8wfT8SfB5Z  (AeroX Development )
    + for any queries reach out Community or DM me.
*/
