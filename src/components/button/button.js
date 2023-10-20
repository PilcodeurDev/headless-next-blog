/**
 * The external imports
 */
import Link from "next/link"

/**
 * The internal imports
 */
import styles from './button.module.sass'

export const IconTypes = {
  ARROW_RIGHT: 'ARROW_RIGHT',
}

const Button = (props) => {
  if (props.href) {
    return (
      <Link className={styles.button} href={props.href}>
        {props.children}
        <Button.Icon iconType={props.icon} />
      </Link>
    );
  }

  return <button className={styles.button}>{props.children}</button>;
};

Button.Icon = ({ iconType }) => {
  if (iconType === 'ARROW_RIGHT') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="0.78em" height="0.78em" viewBox="0 0 32 32">
        <path fill="currentColor" d="M31.71,15.29l-10-10L20.29,6.71,28.59,15H0v2H28.59l-8.29,8.29,1.41,1.41,10-10A1,1,0,0,0,31.71,15.29Z"/>
      </svg>
    );
  };

  return null;
};

Button.Icon.displayName = 'Button.Icon';

export default Button;
