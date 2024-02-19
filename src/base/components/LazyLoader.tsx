import { ElementType, Suspense } from "react";
import Loader from "./Loader";

const LazyLoader = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<Loader type="page" />}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyLoader;
