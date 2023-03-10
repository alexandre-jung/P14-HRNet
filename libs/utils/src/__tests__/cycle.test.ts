import { cycle } from '../cycle';

describe('wrap', function () {
  it('should return 1950', () => {
    expect(cycle(1950, 1950, 2050)).toEqual(1950);
  });

  it('should return 2050', () => {
    expect(cycle(2050, 1950, 2050)).toEqual(2050);
  });

  it('should return 2050', () => {
    expect(cycle(1949, 1950, 2050)).toEqual(2050);
  });

  it('should return 1950', () => {
    expect(cycle(1849, 1950, 2050)).toEqual(1950);
  });

  it('should return 1950', () => {
    expect(cycle(2151, 1950, 2050)).toEqual(2050);
  });

  it('should return 1950', () => {
    expect(cycle(2051, 1950, 2050)).toEqual(1950);
  });

  it('throws when min is greater than max', () => {
    expect(() => cycle(0, 3, 2)).toThrow();
    expect(() => cycle(0, - 2, - 3)).toThrow();
  });

  it('works when min equals max', () => {
    expect(cycle(0, 2, 2)).toEqual(2);
    expect(cycle(0, - 2, - 2)).toEqual(- 2);
  });

  it('works with positive ranges', () => {
    expect(cycle(- 104, 12, 13)).toEqual(12);
    expect(cycle(- 103, 12, 13)).toEqual(13);

    expect(cycle(- 4, 12, 13)).toEqual(12);
    expect(cycle(- 3, 12, 13)).toEqual(13);

    expect(cycle(- 2, 12, 13)).toEqual(12);
    expect(cycle(- 1, 12, 13)).toEqual(13);

    expect(cycle(8, 12, 13)).toEqual(12);
    expect(cycle(9, 12, 13)).toEqual(13);

    expect(cycle(10, 12, 13)).toEqual(12);
    expect(cycle(11, 12, 13)).toEqual(13);

    expect(cycle(12, 12, 13)).toEqual(12);
    expect(cycle(13, 12, 13)).toEqual(13);

    expect(cycle(14, 12, 13)).toEqual(12);
    expect(cycle(15, 12, 13)).toEqual(13);

    expect(cycle(16, 12, 13)).toEqual(12);
    expect(cycle(17, 12, 13)).toEqual(13);

    expect(cycle(18, 12, 13)).toEqual(12);
    expect(cycle(19, 12, 13)).toEqual(13);

    expect(cycle(118, 12, 13)).toEqual(12);
    expect(cycle(119, 12, 13)).toEqual(13);
  });

  it('works with negative ranges', () => {
    expect(cycle(1, - 7, - 5)).toEqual(- 5);
    expect(cycle(0, - 7, - 5)).toEqual(- 6);
    expect(cycle(- 1, - 7, - 5)).toEqual(- 7);

    expect(cycle(- 2, - 7, - 5)).toEqual(- 5);
    expect(cycle(- 3, - 7, - 5)).toEqual(- 6);
    expect(cycle(- 4, - 7, - 5)).toEqual(- 7);

    expect(cycle(- 5, - 7, - 5)).toEqual(- 5);
    expect(cycle(- 6, - 7, - 5)).toEqual(- 6);
    expect(cycle(- 7, - 7, - 5)).toEqual(- 7);

    expect(cycle(- 8, - 7, - 5)).toEqual(- 5);
    expect(cycle(- 9, - 7, - 5)).toEqual(- 6);
    expect(cycle(- 10, - 7, - 5)).toEqual(- 7);

    expect(cycle(- 11, - 7, - 5)).toEqual(- 5);
    expect(cycle(- 12, - 7, - 5)).toEqual(- 6);
    expect(cycle(- 13, - 7, - 5)).toEqual(- 7);
  });
});
