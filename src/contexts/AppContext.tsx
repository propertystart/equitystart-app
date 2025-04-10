
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ApplicationData {
  // Personal Information
  name?: string;
  email?: string;
  mobile?: string;
  borrowerId?: string;
  
  // Partner Information
  applyingWith?: 'own' | 'partner';
  partnerName?: string;
  relationship?: 'wife' | 'husband' | 'defacto' | 'other';
  
  // Current Living Situation
  currentLiving?: 'own' | 'renting' | 'parents' | 'other';
  currentAddress?: string;
  
  // Property Information
  applicationType?: 'buying' | 'refinancing';
  hasAddress?: 'yes' | 'no';
  propertyAddress?: string;
  preferredSuburb?: string;
  saleType?: 'auction' | 'eoi' | 'private' | 'contract' | 'other';
  ownershipDuration?: '<1' | '1-2' | '2-3' | '3+';
  hasMortgage?: 'yes' | 'no';
  bankName?: string;
  currentLoanAmount?: number;
  propertyType?: 'house' | 'townhouse' | 'other';
  bedrooms?: '1' | '2' | '3' | '4' | '5+';
  
  // Financial Information
  propertyValue?: number;
  hasContract?: 'yes' | 'no';
  hasValuation?: 'yes' | 'no';
  hasBankLoan?: 'yes' | 'no';
  bankLoanAmount?: number;
  contribution?: number;
  requiredEquityStartLoan?: number;
  currentPropertyWorth?: number;
  currentEquity?: number;
  loanPurpose?: 'unlock' | 'renovation' | 'personal' | 'other';
  
  // Employment Information
  employmentStatus?: 'fulltime' | 'parttime' | 'selfemployed';
  partnerEmploymentStatus?: 'fulltime' | 'parttime' | 'selfemployed';
  employmentDuration?: '<12' | '12-24' | '2-3' | '3-5' | '5+';
  partnerEmploymentDuration?: '<12' | '12-24' | '2-3' | '3-5' | '5+';
  annualSalary?: number;
  partnerAnnualSalary?: number;
  monthlyIncome?: number;
  partnerMonthlyIncome?: number;
  occupation?: string;
  partnerOccupation?: string;
  education?: 'university' | 'college' | 'highschool' | 'other';
  partnerEducation?: 'university' | 'college' | 'highschool' | 'other';
  
  // Expenses
  mortgageExpense?: number;
  carExpense?: number;
  creditCardExpense?: number;
  creditCardLimit?: number;
  creditCardBank?: string;
  ratesExpense?: number;
  healthInsuranceExpense?: number;
  hasChildren?: boolean;
  schoolFeesExpense?: number;
  educationExpense?: number;
  groceriesExpense?: number;
  entertainmentExpense?: number;
  generalExpense?: number;
  otherExpense?: number;
  totalExpenses?: number;
  
  // Calculated Information
  bankLoanRepayment?: number;
  equityStartLoanAmount?: number;
  preferredLoanTerm?: number;
  
  // Verification Information
  hasRecentCreditReport?: boolean;
  identificationDocuments?: string[];
  secondaryDocuments?: string[];
  
  // Application tracking
  applicationId?: string;
  currentStep?: number;
}

interface AppContextValue {
  applicationData: ApplicationData;
  updateApplicationData: (data: Partial<ApplicationData>) => void;
  resetApplicationData: () => void;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    currentStep: 1
  });

  const updateApplicationData = (data: Partial<ApplicationData>) => {
    setApplicationData(prevData => ({
      ...prevData,
      ...data
    }));
  };

  const resetApplicationData = () => {
    setApplicationData({ currentStep: 1 });
  };

  return (
    <AppContext.Provider value={{ applicationData, updateApplicationData, resetApplicationData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};
