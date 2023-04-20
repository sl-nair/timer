const args = process.argv.slice(2).map(Number);

args.sort(function(a, b) {
  return a - b;
});

for (let time of args){
  if (time < 0 || args === NaN){
    return
  }
  setTimeout(() => {
    process.stdout.write(' \x07');
  }, time * 1000 )
}
