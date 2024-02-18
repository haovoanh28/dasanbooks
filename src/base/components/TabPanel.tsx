import Box from "@mui/material/Box";

interface Props<T> {
  children?: React.ReactNode;
  current: T;
  value: T;
}

export default function TabPanel<T>({
  current,
  value,
  children,
  ...other
}: Props<T>) {
  return (
    <div
      role="tabpanel"
      hidden={value !== current}
      id={`simple-tabpanel-${value}`}
      aria-labelledby={`simple-tab-${value}`}
      {...other}
    >
      {value === current && <Box sx={{ mt: 2 }}>{children}</Box>}
    </div>
  );
}
