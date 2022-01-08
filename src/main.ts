import {CuratorBot} from "./bot";

const bot: CuratorBot = new CuratorBot(
    'beta 1.0.0',
    '499559069842014219'
);

(async () => {
    await bot.init();
})();

export {bot};