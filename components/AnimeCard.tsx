import Image from "next/image";
import { motion } from "framer-motion";
import { MotionDiv } from "./MotionDiv";
import ItemDiv from "./MotionDiv";
export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};
function AnimeCard({ anime, index }: Prop) {
  return (
    <>
      <ItemDiv anime={anime} index={index}/>
        
      
    </>
  );
}

export default AnimeCard;
