import AppLayout from "./AppLayout";
import { PagesProvider } from "./contexts/PageContext";

function App() {
  return (
    <>
      <PagesProvider>
        <AppLayout />
      </PagesProvider>
    </>
  );
}

export default App;
