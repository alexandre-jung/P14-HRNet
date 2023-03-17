export function clamp (value: number, min: number, max: number) {
  if (min > max) throw new RangeError('Invalid range');
  return Math.max(Math.min(value, max), min);
}
