function isFibonacci(num: number): void {
  const i = true;

  const fibonacci: number[] = [0, 1];

  if (0 === num || num === 1) return console.log(`${num} pertence a Fibonnaci`);

  while (i) {
    const last = fibonacci[0];
    const secondLast = fibonacci[1];
    const next = last + secondLast;

    fibonacci.push(next);
    fibonacci.shift();

    if (next === num) return console.log(`${num} pertence a Fibonnaci`);

    if (next > num) return console.log(`${num} NÃO pertence a Fibonnaci`);
  }
}

isFibonacci(15);
