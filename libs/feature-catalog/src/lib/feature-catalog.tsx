import { Product } from '@acme-commerce/model-product';
import styles from './feature-catalog.module.scss';

const foo: Product = {
  id: "1",
  title: "Widget",
  description: "A really cool widget",
  price: 1.50
}
console.log(foo)


/* eslint-disable-next-line */
export interface FeatureCatalogProps {}

export function FeatureCatalog(props: FeatureCatalogProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureCatalog!</h1>
    </div>
  );
}

export default FeatureCatalog;
