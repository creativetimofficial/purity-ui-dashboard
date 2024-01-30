import React, { Suspense, ReactElement } from 'react';

// project imports
import { CircularLoader } from '../loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = <P extends object>(Component: React.ComponentType<P>): React.FC<P> => (
  props: P
): ReactElement => (
  <Suspense fallback={<CircularLoader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
