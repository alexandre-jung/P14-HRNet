import { clamp } from '../clamp';

describe('clamp', function () {
  it('should clamp lower numbers', () => {
    expect(clamp(5, 10, 20)).toEqual(10);
  });

  it('should clamp greater numbers', () => {
    expect(clamp(25, 10, 20)).toEqual(20);
  });

  it('should throw if min > max', () => {
    expect(() => clamp(0, 21, 20)).toThrow();
  });
});
