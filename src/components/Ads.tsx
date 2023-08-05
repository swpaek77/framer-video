import { motion } from "framer-motion";
import { useState } from "react";

const duration = 1;
const initClipPath = "inset(0px 16px 0px 500px round 10px)";

const variants = {
  visible: {
    height: ["90px", "200px"],
    clipPath: [initClipPath, "inset(0px 0px 0px 0px)"],
  },
  hidden: {},
};

const Ads = () => {
  const [show, setShow] = useState(false);
  const [videoShow, setVideoShow] = useState(false);

  return (
    <div>
      <motion.div className="relative">
        <motion.div
          className="cursor-pointer h-[90px] px-4"
          onClick={() => setShow(!show)}
        >
          <img
            className="rounded-[10px] h-full"
            src="/assets/kakaotalk_ads_1.png"
          />
        </motion.div>

        <motion.div
          className="w-full absolute top-0 overflow-hidden"
          initial={{ clipPath: initClipPath }}
          variants={variants}
          animate={show ? "visible" : "hidden"}
          transition={{
            duration: duration,
            ...(show
              ? {
                  height: {
                    delay: duration,
                  },
                }
              : {
                  clipPath: {
                    delay: duration,
                  },
                }),
          }}
          onAnimationStart={() => setVideoShow(false)}
          onAnimationComplete={() => setVideoShow(true)}
        >
          <img className="image" src="/assets/kakaotalk_ads_thumb_1.png" />
          <motion.div
            className="absolute top-0"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{ duration: 1 }}
            animate={videoShow ? "visible" : "hidden"}
          >
            {videoShow && (
              <>
                <video
                  //
                  src="/assets/main_ads.mp4"
                  autoPlay
                  loop
                  muted
                />
                <div
                  className="absolute top-0 right-2 p-1 cursor-pointer text-white font-bold"
                  onClick={() => setShow(false)}
                >
                  x
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Ads;
