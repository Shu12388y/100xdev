(async function main() {
  // Task 1
  console.log("Task 1");

  // Task 2
  const Task2 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2");
    }, 2000);
  });

  console.log(Task2);

  // Task 3
  console.log("Task 3");

  // Task 4
  const Task4 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 4");
    }, 3000);
  });

  console.log(Task4);
})();
