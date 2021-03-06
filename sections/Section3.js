import React from "react";
import Image from "next/image";
import globes from "../assets/globes.png";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
function Section3({ menuRef }) {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const effect1 = useAnimation();
  const effect2 = useAnimation();

  useEffect(() => {
    if (inView) {
      effect1.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0,
        },
      });
      effect2.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0,
        },
      });
    }
    if (!inView) {
      effect1.start({
        x: "-100vw",
      });
      effect2.start({
        x: "-50vw",
      });
    }
  }, [inView]);
  return (
    <div ref={menuRef}>
      <div
        id="home"
        ref={ref}
        className="bg-vid flex lg:pt-0 pt-20  flex-col-reverse lg:flex-row lg:space-x-8 lg:justify-evenly justify-between items-center   w-screen lg:h-screen h-[110vh]"
      >
        {/* main red box */}

        {/* glass yellow box */}
        {/* {//45%% width} */}
        <motion.div
          animate={effect1}
          className="flex rounded-lg bg-glass text-white flex-col  justify-evenly items-start px-14  lg:w-[45%] w-[90%]	 h-[613px]"
        >
          <h1 className=" lg:-ml-0 -ml-9 lg:w-full w-[300px] lg:text-[45px] text-2xl md:text-3xl ">
            Introducing Streamer Token
          </h1>
          <h2 className="lg:text-[24px] text-sm md:text-xl ">
            Every streamer mints 11.3 millions of his personal streamer tokens
            and viewers are able to access streamer tokens on Neebmle-swap
            <br />
            <br />
            Token utility and values are measured by: revenue generated by the
            streamer, hours of watched streams, # of unique viewers, followers
            etc.
          </h2>

          <div className="space-x-2 lg:space-x-2 items-center  w-full flex lg:flex-row flex-col  ">
            <button className="lg:w-[20vw] w-[70vw] rounded py-2 px-4 lg:text-lg md:text-sm text-xs border-2 border-white">
              More on this in Neemble Whitepaper
            </button>
            <div className="lg:py-0 py-2">
              <button className="rounded bg-[#0E491E] py-1 md:py-2 px-5 md:text-sm text-xs lg:text-lg border-[3px]  border-[#33BD27]">
                Buy NMBL
              </button>
            </div>
          </div>
        </motion.div>

        {/* glass box */}

        {/* image box */}

        {/* {//50%% width} */}
        <motion.div
          animate={effect2}
          className="lg:w-[40%] w-full lg:pt-0 pt-14  h-[640px] "
        >
          <Image src={globes} />
        </motion.div>

        {/* image box */}
      </div>
    </div>
  );
}

export default Section3;
