import cluster from 'cluster';
import os from 'os';

const numCPUs = os.cpus().length;
const target = 1_000_000_000_0; // 1 Billion
const chunkSize = Math.floor(target / numCPUs); // 100 million

if (cluster.isPrimary) {
  let startTime = Date.now();
  let totalSum = 0;
  let completedWorkers = 0;

  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();
    const start = i * chunkSize;// 200Mn
    const end = (i === numCPUs - 1) ? target : (i + 1) * chunkSize - 1; // 300Mn

    setTimeout(() => {
        worker.send({ start, end });
    }, 100);
    // worker.on("", () => {
        // worker.send({ start, end });
    // })

    worker.on('message', (msg) => {
      totalSum += msg.partialSum;
      completedWorkers++;

      if (completedWorkers === numCPUs) {
        let endTime = Date.now()
        console.log(`Total sum: ${totalSum}`);
        console.log(`Total time taken = ${endTime - startTime}`)
        process.exit();
      }
    });
  }
} else {
    process.on('message', (msg) => {
        const startTime = Date.now();
        const { start, end } = msg;
        let partialSum = 0;

        for (let i = start; i <= end; i++) {
            partialSum += i;
        }

        process.send({ partialSum: partialSum.toString() });
    })
}