import ThemeCustomization from "base/themes";
import AppRoutes from "base/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeCustomization>
        <AppRoutes />
      </ThemeCustomization>
    </QueryClientProvider>
  );
}

export default App;
