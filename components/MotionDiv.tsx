"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export const MotionDiv = motion.div;
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
const ItemDiv = ({ anime, index }: any) => {
  return (
    <MotionDiv
      variants={variants}
      initial={{
        opacity: 0,
        x: index % 2 == 0 ? 30 : -30,
        y: index > 5 ? (index % 2 == 0 ? 80 : -80) : index % 2 == 0 ? -80 : 80,
      }}
    //   animate={{ opacity: 1, x: 0, y: window.innerWidth > 678 ? undefined : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0}}
      viewport={{ once: true,amount:0.3 }}
      transition={{
        // delay: index * 0.125,
        // ease: "easeInOut",
        duration: 0.3,
      }}
      className="max-w-sm rounded relative w-full item card overflow-hidden"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ItemDiv;
