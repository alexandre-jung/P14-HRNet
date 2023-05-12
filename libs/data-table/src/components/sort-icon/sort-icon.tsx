import classNames from 'classnames';
import { CaretDown, CaretUp } from '@hrnet-aj/icons';
import styles from './sort-icon.module.scss';

export interface SortIconProps {
  className?: string;
  direction?: 'asc' | 'desc';
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see
 * https://help.codux.com/kb/en/article/configuration-for-sort-icons-and-templates
 */
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
