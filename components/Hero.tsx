import Image from "next/image";
import image from "../public/vecteezy_ai-generated-cool-girl-wearing-mask-illustration-for-your_36628014.png";
import fixedImage from "../public/vecteezy_shirohige-pirate-one-piece-logo-anime_21623400.png";
function Hero() {
  return (
    <header className="bg-hero relative bg-center bg-cover bg-no-repeat sm:p-16 py-3 pb-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <Image
        src={fixedImage}
        width={100}
        height={100}
        style={{ position: "absolute", zIndex: 222,left:0,bottom:-50,transform:"rotate(90deg)" }}
        alt="11"
        
      />
      <Image
        src={fixedImage}
        width={100}
        height={100}
        style={{ position: "absolute", zIndex: 222,right:0,bottom:-50,transform:"rotate(-90deg)" }}
        alt="11"
        
      />
      <div className="flex-1 flex flex-col gap-10 justify-center items-center order-2">
        <Image
          src="./logo.svg"
          alt="logo"
          width={201}
          height={226}
          className="object-contain"
        />
        <h1 className="text-center sm:text-6xl text-[2rem] text-white lg:max-w-lg font-bold leading-[120%] goko">
          Explore The <span className="red-gradient">Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      <div className="lg:flex-1  relative w-full h-[50vh] justify-center">
        <Image src={image} alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

export default Hero;
