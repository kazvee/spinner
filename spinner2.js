const input = ['\r|', '\r/', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|', '\n'];

let delay = 0;
for (let i = 0; i < input.length; i++) {
  setTimeout(() => {
    process.stdout.write(input[i]);
  }, delay);
  delay += 200;
}