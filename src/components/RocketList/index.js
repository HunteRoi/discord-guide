import React from 'react';
import styles from './styles.module.css';

export default function RocketList({children}) {
  return <ul className={styles.rocketList}>{children}</ul>;
}