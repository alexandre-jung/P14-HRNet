import * as icons from '..';
import { IconName } from '../icon-names';

export interface IconProps {
  name: IconName;
  size?: number;
}

export const Icon = ({ name, size = 20 }: IconProps) => {
  const Component = icons[name];

  return <Component
    width={size}
    height={size}
  />;
};
