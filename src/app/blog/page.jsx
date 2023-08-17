import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Blog() {
  return (
    <div className={styles.mainContainer} >
      <Link href="/blog/testId" className={styles.container} > 
      <div className={styles.imageContainer} >
        <Image
          src="https://images.pexels.com/photos/1851637/pexels-photo-1851637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={400}
          height={250}
          alt="blog"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc} >Desc</p>
      </div>
      </Link>
      <Link href="/blog/testId" className={styles.container} > 
      <div className={styles.imageContainer} >
        <Image
          src="https://images.pexels.com/photos/1851637/pexels-photo-1851637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={400}
          height={250}
          alt="blog"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc} >Desc</p>
      </div>
      </Link>
      <Link href="/blog/testId" className={styles.container} > 
      <div className={styles.imageContainer} >
        <Image
          src="https://images.pexels.com/photos/1851637/pexels-photo-1851637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={400}
          height={250}
          alt="blog"
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc} >Desc</p>
      </div>
      </Link>
    </div>
  )
}

export default Blog