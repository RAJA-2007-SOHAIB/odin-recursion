import { fibRec, fibs } from './fib.js';

test('fibs works fine?', () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  expect(fibs(1)).toEqual([0]);
});

test('fibs works on zero', () => {
  expect(fibs(0)).toEqual([]);
});

test('fibs works on 1', () => {
  expect(fibs(1)).toEqual([0]);
});

test('fibRec works fine', () => {
  expect(fibRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test('fibs works on zero', () => {
  expect(fibRec(0)).toEqual([]);
});

test('fibs works on 1', () => {
  expect(fibRec(1)).toEqual([0]);
});
