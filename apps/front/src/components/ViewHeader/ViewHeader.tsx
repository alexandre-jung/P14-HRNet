import { SVGProps } from 'react';
import { Link } from 'react-router-dom';

import styles from './ViewHeader.module.css';

type ViewHeaderProps = {
  icon: IconComponent;
  iconColor: string;
  title: string;
  linkText: string;
  linkTo: string;
}

type SVGRProps = {
  title?: string;
  titleId?: string;
}

type IconComponent = (props: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element

export function ViewHeader ({
  icon: Icon,
  iconColor,
  title,
  linkText,
  linkTo,
}: ViewHeaderProps) {
  return (
    <header className={styles.root}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <Link
        className={styles.link}
        to={linkTo}
      >
        <Icon
          color={iconColor}
          fontSize={24}
        />
        {linkText}
      </Link>
    </header>
  );
}
