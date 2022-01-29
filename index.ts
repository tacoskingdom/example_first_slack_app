import { App } from '@slack/bolt';

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN
    // appToken: process.env.SLACK_APP_TOKEN,
    // socketMode: true,
});

app.message('hello', async ({ message, say }) => {
    await say(`<@${(message as any).user}> はん、まいどおおきに！`);
});

(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
})();
