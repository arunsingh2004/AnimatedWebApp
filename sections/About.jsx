"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-12 ${styles.flexCenter}  gap-52 flex-row`}
    >
      <TypingText
        title="| EQ Beats IQ"
        textStyles="text-center text-black text-3xl"
      />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[10px] text-center text-secondary-black"
      >
        <span className="font-extrabold text-black">Lorem</span> Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Itaque eligendi voluptas
        corporis facere nihil nam alias rem dolore eum? Odio.{" "}
        <span className="font-extrabold text-black">Itaque eligendi</span> of
        today, using only <span className="font-extrabold text-black">VR</span>{" "}
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Let's{" "}
        <span className="font-extrabold text-black">explore</span> the madness
        of the metaverse by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain text-black bg-black mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
