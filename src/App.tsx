import { scaleLinear } from "d3";
import { motion } from "framer-motion";

function App() {
  const x = scaleLinear([0, 20], ["0px", "-25px"]);
  const y = scaleLinear([0, 20], ["0px", "-10px"]);

  const shadowColor = "var(--color-hot-pink-300)";
  const formatShadows = (_: unknown, i: number) =>
    `${x(i)} ${y(i)} ${shadowColor}`;
  const shadow = Array.from({ length: 21 }, formatShadows).join(", ");

  const textVariants = {
    initial: {
      transform: "rotateX(0deg) rotateY(22deg) rotateZ(354deg)",
      letterSpacing: "var(--letter-spacing-normal)",
    },
    animate: {
      transform: "rotateX(0deg) rotateY(0deg) rotateZ(360deg)",
      letterSpacing: "var(--letter-spacing-wide)",
    },
  };

  const boxVariants = {
    initial: {
      perspectiveOrigin: "50% 50%",
      backgroundColor: "var(--color-hot-pink-500)",
    },
    animate: {
      perspectiveOrigin: "-80% 50%",
      backgroundColor: "var(--color-hot-pink-600)",
    },
  };

  return (
    <div className="bg-hot-pink-400 flex h-lvh w-full items-center justify-center">
      <motion.div
        whileHover="animate"
        initial="initial"
        className="transform-style-3d relative grid h-[28rem] w-[60rem] overflow-clip perspective-midrange"
      >
        <motion.div
          transition={{ duration: 0.3, ease: "easeOut" }}
          variants={boxVariants}
          className="absolute inset-0 size-80 place-self-center"
        />
        <motion.span
          style={{ textShadow: shadow }}
          variants={textVariants}
          className="text-hot-pink-50 absolute place-self-center text-[20rem] font-black tracking-wide drop-shadow-2xl"
        >
          SPIN
        </motion.span>
      </motion.div>
    </div>
  );
}

export default App;
