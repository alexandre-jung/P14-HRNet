import { range } from '../range';

describe('range', function () {
  it('should work with a one-length range', () => {
    expect(range(1, 1)).toEqual([1]);
  });

  it('should work with a positive range starting from 0', () => {
    expect(range(0, 2)).toEqual([0, 1, 2]);
  });

  it('should work with a positive range starting from 2', () => {
    expect(range(2, 4)).toEqual([2, 3, 4]);
  });

  it('should work with negative ranges starting from -4', () => {
    expect(range(- 4, - 2)).toEqual([- 4, - 3, - 2]);
  });

  it('should throw with if start is greater than end, positive', () => {
    expect(() => range(5, 4)).toThrow();
  });

  it('should throw with if start is greater than end, negative', () => {
    expect(() => range(- 4, - 5)).toThrow();
  });
});
