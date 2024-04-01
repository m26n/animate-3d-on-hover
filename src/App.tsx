import { scaleLinear } from "d3";
import { motion } from "framer-motion";

function App() {
  const x = scaleLinear([0, 20], ["0px", "-25px"]);
  const y = scaleLinear([0, 20], ["0px", "-10px"]);
  const shadow = Array.from(
    { length: 21 },
    (_, i) => `${x(i)} ${y(i)} var(--color-hot-pink-200)`,
  ).join(", ");

  return (
    <div className="bg-hot-pink-400 flex h-lvh w-full items-center justify-center">
      {/* 3xl:hidden drop-shadow-lg */}
      <motion.div
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        style={{
          perspective: "1000px",
          perspectiveOrigin: "50% 50%",
          backgroundColor: "var(--color-hot-pink-500)",
        }}
        whileHover={{
          perspective: "1100px",
          perspectiveOrigin: "-80% 50%",
          backgroundColor: "var(--color-hot-pink-600)",
          // scale: 1.1,
        }}
        className="relative size-80"
      >
        <motion.h1
          style={{
            textShadow: shadow,
            transform: "rotateX(0deg) rotateY(22deg) rotateZ(354deg)",
            letterSpacing: "var(--letter-spacing-normal)"
            // transform:
            //   "rotateX(15deg) rotateY(51deg) rotateZ(348deg) translateX(30%) translateY(-5%)",
          }}
          whileHover={{
            transform: "rotateX(0deg) rotateY(0deg) rotateZ(360deg)",
            letterSpacing: "var(--letter-spacing-wide)"
          }}
          className="text-hot-pink-50 absolute inset-0 inline-flex h-full w-full items-center justify-center text-[20rem] font-black tracking-wide"
        >
          SPIN
        </motion.h1>
      </motion.div>
    </div>
  );
}

export default App;
