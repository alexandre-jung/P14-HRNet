import classNames from 'classnames';
import { CaretDown, CaretUp } from '@hrnet-aj/icons';
import styles from './sort-icon.module.scss';

export interface SortIconProps {
  className?: string;
  direction?: 'asc' | 'desc';
}

export const SortIcon = ({ className, direction }: SortIconProps) => {
  return (
    <div className={classNames(styles.SortIcon, className)}>
      <CaretUp
        width={16}
        height={16}
        style={{ transform: 'translateY(4px)', opacity: direction == 'asc' ? 1 : 0.2 }}
      />
      <CaretDown
        width={16}
        height={16}
        style={{ transform: 'translateY(-4px)', opacity: direction == 'desc' ? 1 : 0.2 }}
      />
    </div>
  );
};
