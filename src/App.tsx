
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import NotFound from "./pages/NotFound";
import BorrowerApply from "./pages/BorrowerApply";
import BorrowerLearn from "./pages/BorrowerLearn";
import InvestorLearn from "./pages/InvestorLearn";
import ApplicationForm from "./pages/ApplicationForm";
import ApplicationConfirmation from "./pages/ApplicationConfirmation";
import { AppContextProvider } from "./contexts/AppContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppContextProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/borrower/apply" element={<BorrowerApply />} />
            <Route path="/borrower/learn" element={<BorrowerLearn />} />
            <Route path="/investor/learn" element={<InvestorLearn />} />
            <Route path="/application/:step" element={<ApplicationForm />} />
            <Route path="/confirmation" element={<ApplicationConfirmation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppContextProvider>
  </QueryClientProvider>
);

export default App;
