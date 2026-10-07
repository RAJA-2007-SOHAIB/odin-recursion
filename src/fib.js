const fibs = function (number) {
  if (number <= 0) return [];
  if (number === 1) return [0];

  const seq = [0, 1];
  for (let i = 2; i < number; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
};

const fibRec = function (number) {
  console.log('This was printed recursively');
  if (number <= 0) return [];
  if (number === 1) return [0];
  if (number === 2) return [0, 1];

  const seq = fibRec(number - 1);

  const nextFib = seq[seq.length - 1] + seq[seq.length - 2];
  seq.push(nextFib);
  return seq;
};

console.log(fibs(8));
console.log(fibRec(8));

export { fibRec, fibs };
