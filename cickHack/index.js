// clickSpammer.js
const axios = require("axios");
const cluster = require("node:cluster");
const os = require("node:os");

const productId = "67f378f68ce3802b538bcef8";
const url = `https://cgu-marketplace.onrender.com/api/products/${productId}/click`;

// Number of times you want to hit the endpoint
const MAX_CLICKS = 1_000_000; // Change as needed

let count = 0;

const spamClicks = async () => {
  while (count < MAX_CLICKS) {
    try {
      const res = await axios.post(url);
      count++;
      if (count % 100 === 0) {
        console.log(
          `Clicks sent: ${count}, Current Count: ${res.data.product.clickCount}`
        );
      }
    } catch (error) {
      console.error(
        `Failed at count ${count}`,
        error.response?.data || error.message
      );
      break;
    }
  }

  console.log(`Finished after ${count} requests.`);
};

if (cluster.isMaster) {
  for (let index = 0; index < os.cpus().length; index++) {
    cluster.fork();
    console.log('forked')
  }
  // If a worker dies, create a new one
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  spamClicks();
}
