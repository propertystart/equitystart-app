
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

// Investor flow pages
import InvestorStep1 from "./pages/investor/InvestorStep1";
import InvestorStep2 from "./pages/investor/InvestorStep2";
import InvestorStep3 from "./pages/investor/InvestorStep3";
import InvestorStep4 from "./pages/investor/InvestorStep4";
import InvestorStep5 from "./pages/investor/InvestorStep5";
import InvestorStep6 from "./pages/investor/InvestorStep6";
import InvestorStep6a from "./pages/investor/InvestorStep6a";
import InvestorStep7 from "./pages/investor/InvestorStep7";
import InvestorStep8 from "./pages/investor/InvestorStep8";
import InvestorStep9 from "./pages/investor/InvestorStep9";
import InvestorStep10 from "./pages/investor/InvestorStep10";
import InvestorStep11 from "./pages/investor/InvestorStep11";

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
            
            {/* Investor flow routes */}
            <Route path="/investor/step1" element={<InvestorStep1 />} />
            <Route path="/investor/step2" element={<InvestorStep2 />} />
            <Route path="/investor/step3" element={<InvestorStep3 />} />
            <Route path="/investor/step4" element={<InvestorStep4 />} />
            <Route path="/investor/step5" element={<InvestorStep5 />} />
            <Route path="/investor/step6" element={<InvestorStep6 />} />
            <Route path="/investor/step6a" element={<InvestorStep6a />} />
            <Route path="/investor/step7" element={<InvestorStep7 />} />
            <Route path="/investor/step8" element={<InvestorStep8 />} />
            <Route path="/investor/step9" element={<InvestorStep9 />} />
            <Route path="/investor/step10" element={<InvestorStep10 />} />
            <Route path="/investor/step11" element={<InvestorStep11 />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppContextProvider>
  </QueryClientProvider>
);

export default App;
