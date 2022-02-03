module.exports = {
    name: 'echo',
    aliases: [],
    permissions: [],
    cooldown: 5,
    description: "Restates user arguments",
    execute(client, message, args, Discord, profileData) {
        if(!args.length) {
            message.channel.send('Error: Argument cannot be empty.');
            return;
        } else {
            message.channel.send(args.join(' '));
        }
    }
}