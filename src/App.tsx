import ThemeCustomization from "base/themes";
import AppRoutes from "base/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CookiesProvider>
          <ThemeCustomization>
            <AppRoutes />
          </ThemeCustomization>
        </CookiesProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

export default App;
