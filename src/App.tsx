import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Catalog from "@/pages/Catalog";

const queryClient = new QueryClient();

function App() {
  return (
    <main className="min-h-screen items-start pt-10 pb-24 bg-gray-200 px-5 xl:px-24 lg:px-18 md:px-14">
      <QueryClientProvider client={queryClient}>
        <Catalog />
      </QueryClientProvider>
    </main>
  );
}

export default App;
