// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { FeatureCatalog } from '@acme-commerce/feature-catalog';

export function App() {
  return (
    <>
      <FeatureCatalog />

      <div />
    </>
  );
}

export default App;
