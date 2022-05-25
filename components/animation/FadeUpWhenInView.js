import { motion } from 'framer-motion';

const FadeUpWhenInView = (props) => {
  if (props.htmlTag === 'section') {
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 1,
          ease: 'easeOut',
          delay: 0.3,
        }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
      >
        {props.children}
      </motion.section>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 1,
        ease: 'easeOut',
        delay: 0.3,
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default FadeUpWhenInView;
