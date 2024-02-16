import { ElementType, Suspense } from "react";
import { Box } from "@mui/material";

const LazyLoader = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<Box>Loading...</Box>}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyLoader;
