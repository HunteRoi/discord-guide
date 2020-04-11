import React from 'react';
import styles from './styles.module.css';

export default function FlagEmoji({name}) {
  switch (name) {
    case 'flag_fr':
      break;
    case 'flag_gb':
      break;
    default:
      name = 'logo';
  }

  return <img src={`../static/img/${name}.svg`} className={styles.emoji} alt={name} />;
}
