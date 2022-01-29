// const { App } = require('@slack/bolt');
import { App } from '@slack/bolt';

console.log(process.env.SLACK_SIGNING_SECRET);
console.log(process.env.SLACK_BOT_TOKEN);

// const app = new App({
//     // signingSecret: process.env.SLACK_SIGNING_SECRET,
//     token: process.env.SLACK_BOT_TOKEN,
//     appToken: process.env.SLACK_APP_TOKEN,
//     socketMode: true,
// });

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN
});

/* Add functionality here */

app.message('hello', async ({ message, say }) => {
    // イベントがトリガーされたチャンネルに say() でメッセージを送信します
    await say(`<@${(message as any).user}> はん、まいどおおきに！`);
});

(async () => {
    // Start the app
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
})();
