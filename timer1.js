const timeToBeep = process.argv.slice(2);

const numberToBeep = timeToBeep
  .map((el) => {
    return Number(el);
  })
  .filter((el) => {
    return el;
  })
  .filter((el) => el > 0);

const highestNumber = numberToBeep.reduce((acc, current) => {
  if (acc > current) return acc;
  return current;
}, numberToBeep[0]);

let time = 1;
let timeOut = 1000;

for (let index = 1; index <= highestNumber; index++) {
  setTimeout(() => {
    console.log(time);
    if (numberToBeep.includes(time)) {
      process.stdout.write("\x07");
    }
    time += 1;
  }, timeOut);

  timeOut += 1000;
}
