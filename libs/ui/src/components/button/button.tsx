import classNames from 'classnames';
import styles from './button.module.scss';

export type ButtonProps = JSX.IntrinsicElements['button']

export const Button = ({ className, disabled, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        className,
        styles.Button,
        disabled && styles.disabled,
      )}
      disabled={disabled}
      {...props}
    />
  );
};
