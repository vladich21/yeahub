import styles from "./styles.module.scss";

interface SkeletonProps {
  width?: string;
  height?: string;
}

const Skeleton = ({ width = "100%", height = "20px" }: SkeletonProps) => {
  return <div className={styles.skeleton} style={{ width, height }}></div>;
};

export default Skeleton;
