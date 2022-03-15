process.stdout.write('hello from spinner1.js... \rheyyy\n');

let timer = 100;
const addTime = ()=>{
  timer += 200;
};
    
setTimeout(() => {
  process.stdout.write('\r|   ');
}, timer);

addTime();
setTimeout(() => {
  process.stdout.write('\r/   ');
}, timer);

addTime();
setTimeout(() => {
  process.stdout.write('\r-   ');
}, timer);

addTime();
setTimeout(() => {
  process.stdout.write('\r\\   ');
}, timer);
 
addTime();
setTimeout(() => {
  process.stdout.write('\r|   ');
}, timer);

addTime();
setTimeout(() => {
  process.stdout.write('\r/   ');
}, timer);

addTime();
setTimeout(() => {
  process.stdout.write('\r-   ');
}, timer);

addTime();
setTimeout(() => {
  process.stdout.write('\r\\   ');
}, timer);

addTime();
setTimeout(() => {
  process.stdout.write('\r|   ');
}, timer);

addTime();
setTimeout(() => {
  process.stdout.write('\n');
}, timer);