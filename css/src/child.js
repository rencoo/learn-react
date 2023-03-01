import React from 'react';
// import './child.css'
import styles from './child.module.css'

export default function Child() {
  return (
    <div className={`${styles.div} div`}>world</div>
  )
}