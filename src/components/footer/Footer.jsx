import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() {
  console.log('Hello World')
  return (
    <div className={styles.container}>
      <div>©2023 Ridwan. All rights reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} alt='social'className={styles.icon} />
        <Image src="/2.png" width={15} height={15} alt='social'className={styles.icon} />
        <Image src="/3.png" width={15} height={15} alt='social'className={styles.icon} />
        <Image src="/4.png" width={15} height={15} alt='social'className={styles.icon} />
      </div>
    </div>
  )
}

export default Footer