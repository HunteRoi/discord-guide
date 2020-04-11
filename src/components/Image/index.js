import React from 'react';
import styles from './styles.module.css';

export default function Image({ alt, src, className }) {
  if (!className) {
    className = styles.centeredImage;
  }

  return <img className={className} src={src} alt={alt} />;
}
