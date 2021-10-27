import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";
import classnames from 'classnames';

const Button = (props) => {
  const buttonClass = classnames({
    [styles.base]: true,
    [styles[props.variant]]: true, // either primary or secondary
    [styles[props.size]]: true, // either sm, md or lg
  });

  return (
    <button
      variant="primary"
      className={buttonClass}
      size={props.size}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
