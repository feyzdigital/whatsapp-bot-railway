const { create } = require('@open-wa/wa-automate');
const express = require('express');
const app = express();

create({
  sessionId: "bot",
  authTimeout: 60,
  headless: true,
  qrTimeout: 0,
  useChrome: true,
  killProcessOnBrowserClose: true,
  multiDevice: true
}).then(client => start(client));

function start(client) {
  client.onMessage(async message => {
    if (message.body === 'Merhaba') {
      await client.sendText(message.from, 'Merhaba! Size nasıl yardımcı olabilirim?');
    }
  });
}

app.listen(3000, () => {
  console.log('Server 3000 portunda çalışıyor...');
});
