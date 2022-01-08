import {Client, Intents} from "discord.js";
import {databaseConfig, token} from "./constants";
import {createConnection} from "typeorm";

export class CuratorBot extends Client {

    public prefix: string
    public version: string;
    public ownerId: string;

    public constructor(version: string, ownerId: string, prefix: string = "!") {
        super({
            partials: ['GUILD_MEMBER', 'MESSAGE', 'USER'],
            intents: [
                Intents.FLAGS.GUILDS,
                Intents.FLAGS.GUILD_MEMBERS,
                Intents.FLAGS.GUILD_MESSAGES,
            ],
            allowedMentions: {
                parse: ["users", "roles"]
            },

        });
        this.prefix = prefix;
        this.version = version;
        this.ownerId = ownerId;
    }

    public async init() {
        await createConnection(databaseConfig);
        await this.login(token);
    }
}