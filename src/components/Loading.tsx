import { motion } from 'framer-motion';
type LoadingProps = {
  progress: number;
  loaderRef: React.RefObject<HTMLDivElement>;
};

function Loading({ progress, loaderRef }: LoadingProps) {

  return (
    <div ref={loaderRef}
      style={{ fontFamily: "Saira, sans-serif" }}
      className='h-screen absolute left-0 top-0 z-50 text-white w-full bg-black'>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="h-1 bg-white absolute top-0 left-0"
      ></motion.div>
      <h1 className='absolute top-10 leading-none right-10 md:text-[14vw] text-[22vw]'>{progress}%</h1>
    </div>
  )
}

export default Loading