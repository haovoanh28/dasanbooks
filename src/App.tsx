import ThemeCustomization from "base/themes";
import AppRoutes from "base/routes";
import PageLayout from "base/layouts/PageLayout";

function App() {
  return (
    <ThemeCustomization>
      <AppRoutes />
    </ThemeCustomization>
  );
}

export default App;
