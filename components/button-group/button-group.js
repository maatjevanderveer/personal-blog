import React from 'react';
import styles from './button-group.module.css';

const ButtonGroup = (props) => {
    return (
        <div className={styles.buttonGroup}>{props.children}</div>
    )
}

export default ButtonGroup;