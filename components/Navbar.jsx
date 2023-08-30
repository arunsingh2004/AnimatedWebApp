"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative  `}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src="/people-03.png" alt="search" className="w-[100px] h-[100px] " />
      {/* <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        METAVERSUS
      </h2> */}
      <div className="flex text-black font-bold ">
        <ul className="flex flex-row  gap-20  flex-wrap ">
          <li>Emotions</li>
          <li>Manifasto</li>
          <li>Self-awareness Test</li>
          <li>Work with us</li>
        </ul>
      </div>
      {/* <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      /> */}
      <button
        type="submit"
        className="bg-black w-[100px] h-[50px] text-white  rounded-2xl"
      >
        DownLoad
      </button>
    </div>
  </motion.nav>
);

export default Navbar;
