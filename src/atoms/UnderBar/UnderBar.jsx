import { motion } from 'framer-motion';

function UnderBar({ color = 'bg-black', position = 'absolute', margin = 'm-0', layoutId }) {
  return (
    <motion.div
      className={`w-full h-[2px] max-w-[41.53px] ${color} ${position} ${margin} `}
      layoutId={layoutId}
    ></motion.div>
  );
}
export default UnderBar;
