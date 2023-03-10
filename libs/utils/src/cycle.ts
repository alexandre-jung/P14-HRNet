export function cycle (value: number, rangeEnd: number): number;
export function cycle (value: number, rangeStart: number, rangeEnd: number): number;

export function cycle (value: number, a: number, b?: number) {
  const singleParam = b === undefined;
  const [start, end] = singleParam ? [0, a] : [a, b];

  if (start > end) {
    throw RangeError('Invalid range');
  }

  const rangeLength = end - start + 1;
  return start + ((value - start) % rangeLength + rangeLength) % rangeLength;
}
