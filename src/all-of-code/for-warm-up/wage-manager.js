const wageManager = {
  workers: [],

  addWorker({ name, age, wage }) {
    this.workers.push({ name, age, wage });
  },

  calculateMidWage() {
    return Math.ceil(
      this.workers.reduce((acc, worker) => acc + worker.wage, 0) /
        this.workers.length
    );
  },

  getOldestWorkers() {
    let maxAge = 0;
    for (const worker of this.workers) {
      if (worker.age > maxAge) {
        maxAge = worker.age;
      }
    }
    return this.workers.filter((worker) => worker.age === maxAge);
  },

  getAboveAverageWageWorkers() {
    return this.workers.filter(
      (worker) => worker.wage > this.calculateMidWage()
    );
  },
};

wageManager.addWorker({ name: "mango", age: 27, wage: 27000 });
wageManager.addWorker({ name: "poly", age: 64, wage: 6000 });
wageManager.addWorker({ name: "ajax", age: 30, wage: 30000 });

console.log(wageManager.calculateMidWage());
console.log(wageManager.getOldestWorkers());
console.log(wageManager.getAboveAverageWageWorkers());
