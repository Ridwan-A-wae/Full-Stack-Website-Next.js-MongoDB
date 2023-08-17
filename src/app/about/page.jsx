import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            corporis dolorum voluptatibus asperiores quam, nemo distinctio ullam
            dolor excepturi iste corrupti autem aliquam optio, cumque, dolores
            perferendis hic impedit aspernatur quae odit magnam illum! Illo,
            saepe. Perspiciatis quis odio iure eligendi atque
            <br />
            <br />
            maiores provident ad, similique omnis quaerat harum quod
            consequuntur ipsa amet rerum consequatur inventore optio odit
            quibusdam? Ullam sapiente quis quam aliquam inventore repellendus
            quidem alias dolorem voluptatem.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What We Do?</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, amet adipisci! Totam voluptatum commodi velit expedita officiis, sed perspiciatis ullam libero vero aliquam error eligendi, repellendus optio distinctio, dolore quisquam.
          <br /><br />
          - Dynamic Websites 
          <br />
          <br />
          - Fast and Handy 
          <br />
          <br />
          - Mobile Apps
          <br />
          <br />
        </p>
        <Button url="contact" text="Contact"  />
        </div>
      </div>
    </div>
  );
}

export default About;
