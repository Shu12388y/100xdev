const https = require('https'); // Use 'http' if your endpoint is not HTTPS

// Configuration
const targetUrl = 'https://wooble.io/feed/discussion_api/fetch_personalised_questions.php'; // Replace with your test API
const totalRequests = 1000000; // 10 lakh requests
const batchSize = 10000; // Send 10,000 requests per batch
const delayBetweenBatches = 1000; // 1 second delay between batches to prevent overload

// Function to send a single request
function sendRequest() {
    return new Promise((resolve, reject) => {
        const req = https.get(targetUrl, (res) => {
            if (res.statusCode === 522) {
                console.warn(`Blocked by Cloudflare (522), reducing request rate...`);
            }
            resolve(res.statusCode);
        });

        req.on('error', (err) => {
            console.error(`Request failed: ${err.message}`);
            reject(err);
        });

        req.end();
    });
}

// Function to send a batch of requests
async function sendBatch(batchNumber) {
    console.log(`Starting batch ${batchNumber}...`);

    const requests = Array.from({ length: batchSize }, () => sendRequest());

    try {
        await Promise.all(requests);
        console.log(`Batch ${batchNumber} completed.`);
    } catch (err) {
        console.error(`Error in batch ${batchNumber}:`, err);
    }
}

// Function to execute all batches
async function sendRequestsInBatches() {
    const totalBatches = totalRequests / batchSize;

    for (let i = 0; i < totalBatches; i++) {
        await sendBatch(i + 1);
        console.log(`Waiting ${delayBetweenBatches}ms before next batch...`);
        await new Promise((resolve) => setTimeout(resolve, delayBetweenBatches));
    }

    console.log('Load test completed.');
}

// Run the test
sendRequestsInBatches();
