export function range (end: number): number[];
export function range (start: number, end: number): number[];

export function range (a: number, b?: number) {
  const singleParam = b === undefined;
  const [start, end] = singleParam ? [0, a] : [a, b];

  if (start > end) {
    throw new RangeError('Invalid range');
  }

  const offsets = Array.from(Array(end - start + 1).keys());
  return offsets.map(offset => start + offset);
}
