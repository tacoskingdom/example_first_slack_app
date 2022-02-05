import { App } from '@slack/bolt';

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    //👇通常モードを使う場合にコメントアウト
    // signingSecret: process.env.SLACK_SIGNING_SECRET,
    //👇ソケットモードを使う場合に設定するオプション
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
});

app.message('hello', async ({ message, say }) => {
    await say(`<@${(message as any).user}> はん、まいどおおきに！`);
});

(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
})();
