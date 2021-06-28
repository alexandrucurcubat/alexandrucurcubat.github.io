import styles from './ConstructionSign.module.css';
import { ReactComponent as IconConstruction } from '../assets/construction_black_48dp.svg';
import { ReactComponent as IconTexture } from '../assets/texture_black_48dp.svg';
import useWindowDimensions from '../hooks/useWindowsDimensions';

const ConstructionSign = () => {
  const { width } = useWindowDimensions();
  const bottomBorderReplics = width / 30;
  return (
    <div className={styles.construction}>
      <div className={styles.border}>
        {Array.from({ length: bottomBorderReplics }, (_, k) => (
          <IconTexture key={k} fill='orange' className={styles.fixMargin} />
        ))}
      </div>
      <div className={styles.message}>
        <h1>This page is currently under construction.</h1>
        <IconConstruction fill='orange' />
      </div>
      <div className={styles.border}>
        {Array.from({ length: bottomBorderReplics }, (_, k) => (
          <IconTexture key={k} fill='orange' className={styles.fixMargin} />
        ))}
      </div>
    </div>
  );
};

export default ConstructionSign;
