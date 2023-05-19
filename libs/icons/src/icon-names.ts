export const iconNames = [
  'Calendar',
  'CalendarBlank',
  'CalendarCheck',
  'CalendarPlus',
  'CalendarX',
  'CaretDown',
  'CaretLeft',
  'CaretRight',
  'CaretUp',
  'House',
] as const;

export type IconName = typeof iconNames[number];
