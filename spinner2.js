process.stdout.write('hello from spinner1.js... \rheyyy\n');
const message = ` <-- Woa!, check out the amazing spinner!`; //optional fun lol (replace with "" or remove ${message} from line 2 if removed)
const symbols = [`|${message}`,`/`,`-`,`\\`,`|`,`/`,`-`,`\\`,`|`,`/`,`-`,`\\`,`|`,`\n`];
let delaySpeed = 0;
const loopIt = (symbol, delaySpeed) => {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}`);
  }, delaySpeed);
};
symbols.forEach((symbol)=>{
  delaySpeed += 300;
  loopIt(symbol, delaySpeed);
});