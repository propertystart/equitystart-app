import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";
import { useAppContext } from '@/contexts/AppContext';
import ApplicationFormWrapper from '@/components/ApplicationFormWrapper';
import FormInput from '@/components/FormInput';
import RadioButtonGroup, { RadioOption } from '@/components/RadioButtonGroup';

const TOTAL_STEPS = 8;

const ApplicationForm = () => {
  const { step } = useParams();
  const navigate = useNavigate();
  const currentStep = parseInt(step || '1');
  const { applicationData, updateApplicationData } = useAppContext();
  
  // Form state
  const [formData, setFormData] = useState({
    ...applicationData
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleRadioChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleNext = () => {
    // Update context with current form data
    updateApplicationData(formData);
    
    // Validate the current step (simplified validation)
    if (currentStep === 1 && !formData.name) {
      toast({
        title: "Please complete required fields",
        description: "Your name is required to proceed.",
        variant: "destructive",
      });
      return;
    }
    
    // For the last step, navigate to confirmation
    if (currentStep === TOTAL_STEPS) {
      // Generate unique IDs
      const borrowerId = `bfjd${Math.random().toString(36).substring(2, 8)}`;
      const applicationId = `lapp${Math.random().toString(36).substring(2, 8)}`;
      
      updateApplicationData({
        borrowerId,
        applicationId
      });
      
      navigate('/confirmation');
      return;
    }
    
    // Navigate to the next step
    navigate(`/application/${currentStep + 1}`);
  };
  
  const handlePrevious = () => {
    // Update context with current form data
    updateApplicationData(formData);
    
    // Navigate to previous step
    navigate(`/application/${Math.max(1, currentStep - 1)}`);
  };
  
  // Step 1: Basic information
  const renderStep1 = () => {
    return (
      <>
        <h2 className="text-xl font-medium mb-6">Tell us about the home you want to buy or refinance</h2>
        
        <FormInput
          label="Your Name"
          name="name"
          value={formData.name || ''}
          onChange={handleInputChange}
          required
        />
        
        <FormInput
          label="Your email address"
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleInputChange}
          required
        />
        
        <FormInput
          label="Your mobile [cell] number"
          type="tel"
          name="mobile"
          value={formData.mobile || ''}
          onChange={handleInputChange}
          required
        />
        
        <div className="p-4 bg-blue-50 rounded mt-8 mb-4">
          <p className="text-xs text-gray-600">Watch out for it...we are sending you a one time SMS code</p>
        </div>
        
        <div className="mt-8 p-4 border border-gray-300 rounded bg-gray-50">
          <p className="text-sm mb-2">
            [Your automatically generated Borrower ID is – bjfhsiurehp4wlkrt5]
          </p>
          <p className="text-sm">
            Please enter the following one-time code: djhfkhor4
          </p>
        </div>
      </>
    );
  };
  
  // Step 2: Partner information
  const renderStep2 = () => {
    const applyingWithOptions: RadioOption[] = [
      { value: 'own', label: 'Own' },
      { value: 'partner', label: 'Partner' }
    ];
    
    const relationshipOptions: RadioOption[] = [
      { value: 'wife', label: 'Wife' },
      { value: 'husband', label: 'Husband' },
      { value: 'defacto', label: 'Defacto' },
      { value: 'other', label: 'Other' }
    ];
    
    const livingOptions: RadioOption[] = [
      { value: 'own', label: 'Own my home' },
      { value: 'renting', label: 'Currently renting' },
      { value: 'parents', label: 'With parents' },
      { value: 'other', label: 'Other [house sharing etc]' }
    ];
    
    const applicationTypeOptions: RadioOption[] = [
      { value: 'buying', label: 'Buying' },
      { value: 'refinancing', label: 'Refinancing' }
    ];
    
    return (
      <>
        <h2 className="text-xl font-medium mb-6">
          Hi {formData.name || 'there'}, are you applying on your own or with your partner?
        </h2>
        
        <div className="mb-6">
          <RadioButtonGroup
            name="applyingWith"
            options={applyingWithOptions}
            value={formData.applyingWith || 'own'}
            onChange={(value) => handleRadioChange('applyingWith', value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <FormInput
              label="Your name"
              name="name"
              value={formData.name || ''}
              onChange={handleInputChange}
            />
            
            <FormInput
              label="Your email address"
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
            />
            
            <FormInput
              label="Your mobile [cell] number"
              type="tel"
              name="mobile"
              value={formData.mobile || ''}
              onChange={handleInputChange}
            />
          </div>
          
          {formData.applyingWith === 'partner' && (
            <div>
              <FormInput
                label="Your partner's name"
                name="partnerName"
                value={formData.partnerName || ''}
                onChange={handleInputChange}
              />
              
              <div className="mb-4">
                <label className="form-label">What is your relationship</label>
                <RadioButtonGroup
                  name="relationship"
                  options={relationshipOptions}
                  value={formData.relationship || 'wife'}
                  onChange={(value) => handleRadioChange('relationship', value)}
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-8">
          <h3 className="font-medium mb-3">Tell us about where you are living now</h3>
          <RadioButtonGroup
            name="currentLiving"
            options={livingOptions}
            value={formData.currentLiving || 'renting'}
            onChange={(value) => handleRadioChange('currentLiving', value)}
            layout="vertical"
          />
        </div>
        
        <div className="mt-4">
          <FormInput
            label="What is your current address?"
            name="currentAddress"
            value={formData.currentAddress || ''}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="mt-6">
          <h3 className="font-medium mb-3">Are you buying a new home or refinancing?</h3>
          <RadioButtonGroup
            name="applicationType"
            options={applicationTypeOptions}
            value={formData.applicationType || 'buying'}
            onChange={(value) => handleRadioChange('applicationType', value)}
          />
        </div>
      </>
    );
  };
  
  // Step 3: Property information
  const renderStep3 = () => {
    const hasAddressOptions: RadioOption[] = [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'Not yet, seeking pre-approval' }
    ];
    
    const saleTypeOptions: RadioOption[] = [
      { value: 'auction', label: 'Auction' },
      { value: 'eoi', label: 'Expression of Interest' },
      { value: 'private', label: 'Private Sale' },
      { value: 'contract', label: 'I\'ve signed the contract' },
      { value: 'other', label: 'Other' }
    ];
    
    const ownershipDurationOptions: RadioOption[] = [
      { value: '<1', label: '<1 year' },
      { value: '1-2', label: '1-2 yrs' },
      { value: '2-3', label: '2-3 yrs' },
      { value: '3+', label: '3yrs +' }
    ];
    
    const hasMortgageOptions: RadioOption[] = [
      { value: 'no', label: 'No' },
      { value: 'yes', label: 'Yes' }
    ];
    
    const propertyTypeOptions: RadioOption[] = [
      { value: 'house', label: 'House' },
      { value: 'townhouse', label: 'Townhouse' },
      { value: 'other', label: 'Other' }
    ];
    
    const bedroomOptions: RadioOption[] = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5+', label: '5 or more' }
    ];
    
    const title = formData.applicationType === 'buying'
      ? 'Now for the exciting part, tell us about your future home'
      : 'Now for the exciting part, tell us about your home';
    
    return (
      <>
        <h2 className="text-xl font-medium mb-6">{title}</h2>
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">Do you have an address?</h3>
          <RadioButtonGroup
            name="hasAddress"
            options={hasAddressOptions}
            value={formData.hasAddress || 'no'}
            onChange={(value) => handleRadioChange('hasAddress', value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput
            label="Address"
            name="propertyAddress"
            value={formData.propertyAddress || ''}
            onChange={handleInputChange}
          />
          
          <FormInput
            label="OR Suburb you are hoping to buy in"
            name="preferredSuburb"
            value={formData.preferredSuburb || ''}
            onChange={handleInputChange}
          />
        </div>
        
        {formData.applicationType === 'buying' && (
          <div className="mb-6">
            <h3 className="font-medium mb-2">Is the house being sold by</h3>
            <RadioButtonGroup
              name="saleType"
              options={saleTypeOptions}
              value={formData.saleType || 'private'}
              onChange={(value) => handleRadioChange('saleType', value)}
              layout="vertical"
            />
          </div>
        )}
        
        {formData.applicationType === 'refinancing' && (
          <>
            <div className="mb-6">
              <h3 className="font-medium mb-2">How long have you owned the home?</h3>
              <RadioButtonGroup
                name="ownershipDuration"
                options={ownershipDurationOptions}
                value={formData.ownershipDuration || '1-2'}
                onChange={(value) => handleRadioChange('ownershipDuration', value)}
              />
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Is there a mortgage on the home?</h3>
              <RadioButtonGroup
                name="hasMortgage"
                options={hasMortgageOptions}
                value={formData.hasMortgage || 'yes'}
                onChange={(value) => handleRadioChange('hasMortgage', value)}
              />
              
              {formData.hasMortgage === 'yes' && (
                <>
                  <FormInput
                    label="Bank details"
                    name="bankName"
                    value={formData.bankName || ''}
                    onChange={handleInputChange}
                    className="mt-3"
                  />
                  
                  <FormInput
                    label="What is the current loan amount?"
                    name="currentLoanAmount"
                    value={formData.currentLoanAmount?.toString() || ''}
                    onChange={handleInputChange}
                    type="number"
                  />
                  
                  <p className="text-xs text-green-600 mt-1">
                    [Upload a recent loan statement / Upload Later]
                  </p>
                </>
              )}
            </div>
          </>
        )}
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">Tell us about your home</h3>
          <RadioButtonGroup
            name="propertyType"
            options={propertyTypeOptions}
            value={formData.propertyType || 'house'}
            onChange={(value) => handleRadioChange('propertyType', value)}
          />
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">Bedrooms</h3>
          <RadioButtonGroup
            name="bedrooms"
            options={bedroomOptions}
            value={formData.bedrooms || '3'}
            onChange={(value) => handleRadioChange('bedrooms', value)}
          />
        </div>
      </>
    );
  };
  
  // Step 4: Financial information
  const renderStep4 = () => {
    const yesNoOptions: RadioOption[] = [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ];
    
    const title = formData.applicationType === 'buying'
      ? 'Borrower Application 4 "buying"'
      : 'Borrower Application 4 "refinancing"';
    
    return (
      <>
        <h2 className="text-xl font-medium mb-6">How much is your new home going to cost?</h2>
        
        <FormInput
          label="Property Value/Price"
          name="propertyValue"
          value={formData.propertyValue?.toString() || ''}
          onChange={handleInputChange}
          type="number"
        />
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">Do you have a Contract of Sale?</h3>
          <RadioButtonGroup
            name="hasContract"
            options={yesNoOptions}
            value={formData.hasContract || 'no'}
            onChange={(value) => handleRadioChange('hasContract', value)}
          />
          <p className="text-xs text-green-600 mt-1">[Upload Now/Upload Later]</p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">Do you have a property valuation report?</h3>
          <RadioButtonGroup
            name="hasValuation"
            options={yesNoOptions}
            value={formData.hasValuation || 'no'}
            onChange={(value) => handleRadioChange('hasValuation', value)}
          />
          <p className="text-xs text-green-600 mt-1">[Upload Now/Upload Later]</p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">
            Have you organised a bank loan, noting the EquityStart loan is in addition to and will rank behind the bank?
          </h3>
          <RadioButtonGroup
            name="hasBankLoan"
            options={yesNoOptions}
            value={formData.hasBankLoan || 'no'}
            onChange={(value) => handleRadioChange('hasBankLoan', value)}
          />
          
          {formData.hasBankLoan === 'yes' && (
            <>
              <FormInput
                label="Bank details"
                name="bankName"
                value={formData.bankName || ''}
                onChange={handleInputChange}
                className="mt-3"
              />
              
              <FormInput
                label="Loan Amount"
                name="bankLoanAmount"
                value={formData.bankLoanAmount?.toString() || ''}
                onChange={handleInputChange}
                type="number"
              />
            </>
          )}
        </div>
        
        <div className="mb-6">
          <p className="font-medium mb-4">At EquityStart we partner with the following banks</p>
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Macquarie Bank
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Members Equity
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Etc
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">Would you like EquityStart to also assist you in organising a bank loan?</h3>
          <RadioButtonGroup
            name="needBankAssistance"
            options={yesNoOptions}
            value={formData.needBankAssistance || 'no'}
            onChange={(value) => handleRadioChange('needBankAssistance', value)}
          />
        </div>
      </>
    );
  };
  
  // Step 5: Loan details
  const renderStep5 = () => {
    const loanPurposeOptions: RadioOption[] = [
      { value: 'unlock', label: 'Unlock equity' },
      { value: 'renovation', label: 'Renovation' },
      { value: 'personal', label: 'Personal use' },
      { value: 'other', label: 'Other' }
    ];
    
    // Calculate potential loan amounts (simplified examples)
    const bankLoanAmount = formData.bankLoanAmount || 0;
    const propertyValue = formData.propertyValue || 0;
    const contribution = formData.contribution || 0;
    
    // Simplified loan calculation (79% of value - bank loan - contribution)
    const calculatedLoanNeeded = Math.max(0, (propertyValue * 0.79) - bankLoanAmount - contribution);
    
    return (
      <>
        <h2 className="text-xl font-medium mb-6">Financial Details</h2>
        
        <FormInput
          label="Assuming a bank loan of [COS / Valuation x 79%]"
          name="calculatedBankLoan"
          value={(propertyValue * 0.79).toFixed(0)}
          onChange={() => {}}
          disabled
        />
        
        <FormInput
          label="How much can you contribute to the purchase?"
          name="contribution"
          value={formData.contribution?.toString() || ''}
          onChange={handleInputChange}
          type="number"
        />
        <p className="text-xs text-green-600 -mt-3 mb-4">[Upload a recent bank statement/Upload later]</p>
        
        <div className="p-4 bg-gray-50 border border-gray-300 rounded mb-6">
          <p className="font-medium">
            It would appear you require an EquityStart loan of approximately
          </p>
          <FormInput
            label=""
            name="requiredEquityStartLoan"
            value={calculatedLoanNeeded.toFixed(0)}
            onChange={() => {}}
            disabled
          />
          <p className="text-sm">
            including an allowance for stamp duty, legal costs and other costs
          </p>
          <p className="text-xs text-amber-600">
            [platform calcs these costs] [COS price/valuation LESS contribution LESS Bank PLUS costs]
          </p>
        </div>
        
        <FormInput
          label="Please estimate what your home is currently worth"
          name="currentPropertyWorth"
          value={formData.currentPropertyWorth?.toString() || ''}
          onChange={handleInputChange}
          type="number"
        />
        
        <div className="mb-6">
          <p className="mb-2">You appear to have</p>
          <FormInput
            label=""
            name="currentEquity"
            value={((formData.currentPropertyWorth || 0) - (formData.currentLoanAmount || 0)).toString()}
            onChange={() => {}}
            disabled
          />
          <p className="text-xs text-gray-500">
            in equity [Calc – Value LESS current loan]
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">What do you need the EquityStart loan for?</h3>
          <RadioButtonGroup
            name="loanPurpose"
            options={loanPurposeOptions}
            value={formData.loanPurpose || 'unlock'}
            onChange={(value) => handleRadioChange('loanPurpose', value)}
          />
        </div>
      </>
    );
  };
  
  // Step 6: Employment information
  const renderStep6 = () => {
    const employmentOptions: RadioOption[] = [
      { value: 'fulltime', label: 'Full time' },
      { value: 'parttime', label: 'Part time' },
      { value: 'selfemployed', label: 'Self employed' }
    ];
    
    const durationOptions: RadioOption[] = [
      { value: '<12', label: '<12 months' },
      { value: '12-24', label: '12-24 months' },
      { value: '2-3', label: '2-3 yrs' },
      { value: '3-5', label: '3-5 yrs' },
      { value: '5+', label: '5 yrs or more' }
    ];
    
    const educationOptions: RadioOption[] = [
      { value: 'university', label: 'University graduate' },
      { value: 'college', label: 'Tafe/College' },
      { value: 'highschool', label: 'High school certificate' },
      { value: 'other', label: 'Other' }
    ];
    
    return (
      <>
        <h2 className="text-xl font-medium mb-6">Now tell us more about you</h2>
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">I am employed</h3>
          <RadioButtonGroup
            name="employmentStatus"
            options={employmentOptions}
            value={formData.employmentStatus || 'fulltime'}
            onChange={(value) => handleRadioChange('employmentStatus', value)}
          />
        </div>
        
        {formData.applyingWith === 'partner' && (
          <div className="mb-6">
            <h3 className="font-medium mb-2">My partner is employed</h3>
            <RadioButtonGroup
              name="partnerEmploymentStatus"
              options={employmentOptions}
              value={formData.partnerEmploymentStatus || 'fulltime'}
              onChange={(value) => handleRadioChange('partnerEmploymentStatus', value)}
            />
          </div>
        )}
        
        <div className="mb-6">
          <h3 className="font-medium mb-2">I have been in the same employment for</h3>
          <RadioButtonGroup
            name="employmentDuration"
            options={durationOptions}
            value={formData.employmentDuration || '3-5'}
            onChange={(value) => handleRadioChange('employmentDuration', value)}
            layout="vertical"
          />
          
          {formData.applyingWith === 'partner' && (
            <p className="text-sm mt-2">
              Note: same for partner "My partner has been in the same..."
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput
            label="What is your annual salary"
            name="annualSalary"
            value={formData.annualSalary?.toString() || ''}
            onChange={handleInputChange}
            type="number"
          />
          
          {formData.applyingWith === 'partner' && (
            <FormInput
              label="Partner"
              name="partnerAnnualSalary"
              value={formData.partnerAnnualSalary?.toString() || ''}
              onChange={handleInputChange}
              type="number"
            />
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput
            label="How much do you earn, each month after tax?"
            name="monthlyIncome"
            value={formData.monthlyIncome?.toString() || ''}
            onChange={handleInputChange}
            type="number"
          />
          
          {formData.applyingWith === 'partner' && (
            <FormInput
              label="Partner"
              name="partnerMonthlyIncome"
              value={formData.partnerMonthlyIncome?.toString() || ''}
              onChange={handleInputChange}
              type="number"
            />
          )}
        </div>
        
        <p className="text-green-600 mb-6">[Upload three (3) recent payslips/Upload Later]</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FormInput
            label="I am employed as"
            name="occupation"
            value={formData.occupation || ''}
            onChange={handleInputChange}
          />
          
          {formData.applyingWith === 'partner' && (
            <FormInput
              label="Partner"
              name="partnerOccupation"
              value={formData.partnerOccupation || ''}
              onChange={handleInputChange}
            />
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-medium mb-2">My level of education is</h3>
            <RadioButtonGroup
              name="education"
              options={educationOptions}
              value={formData.education || 'university'}
              onChange={(value) => handleRadioChange('education', value)}
              layout="vertical"
            />
          </div>
          
          {formData.applyingWith === 'partner' && (
            <div>
              <h3 className="font-medium mb-2">My partner's level of education is</h3>
              <RadioButtonGroup
                name="partnerEducation"
                options={educationOptions}
                value={formData.partnerEducation || 'university'}
                onChange={(value) => handleRadioChange('partnerEducation', value)}
                layout="vertical"
              />
            </div>
          )}
        </div>
      </>
    );
  };
  
  // Step 7: Expenses
  const renderStep7 = () => {
    // Calculate
    const monthlyIncome = formData.monthlyIncome || 0;
    const partnerMonthlyIncome = formData.partnerMonthlyIncome || 0;
    const totalMonthlyIncome = monthlyIncome + partnerMonthlyIncome;
    
    // Sum up all expenses
    const expenseFields = [
      'mortgageExpense', 'carExpense', 'creditCardExpense', 'ratesExpense',
      'healthInsuranceExpense', 'schoolFeesExpense', 'educationExpense',
      'groceriesExpense', 'entertainmentExpense', 'generalExpense', 'otherExpense'
    ];
    
    let totalExpenses = 0;
    expenseFields.forEach(field => {
      totalExpenses += Number(formData[field as keyof typeof formData] || 0);
    });
    
    // Calculate bank loan payment (simplified)
    const bankLoanAmount = formData.bankLoanAmount || 0;
    const bankLoanPayment = (bankLoanAmount * 0.04) / 12; // Simple 4% annual interest
    
    // Update these in form data for next steps
    formData.totalExpenses = totalExpenses;
    formData.bankLoanRepayment = bankLoanPayment;
    
    return (
      <>
        <h2 className="text-xl font-medium mb-6">What are your monthly expenses?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <FormInput
              label="Mortgage loans"
              name="mortgageExpense"
              value={formData.mortgageExpense?.toString() || '0'}
              onChange={handleInputChange}
              type="number"
            />
            <p className="text-xs text-green-600 -mt-3 mb-3">[Upload loan statement/Upload later]</p>
          </div>
          
          <div>
            <FormInput
              label="Car repayments"
              name="carExpense"
              value={formData.carExpense?.toString() || '0'}
              onChange={handleInputChange}
              type="number"
            />
            <p className="text-xs text-green-600 -mt-3 mb-3">[Upload loan statement/Upload later]</p>
          </div>
          
          <div>
            <FormInput
              label="Credit Cards"
              name="creditCardExpense"
              value={formData.creditCardExpense?.toString() || '0'}
              onChange={handleInputChange}
              type="number"
            />
            <p className="text-xs text-green-600 -mt-3 mb-3">[Upload loan statement/Upload later]</p>
          </div>
          
          <FormInput
            label="What is your current credit card limit?"
            name="creditCardLimit"
            value={formData.creditCardLimit?.toString() || '0'}
            onChange={handleInputChange}
            type="number"
          />
          
          <FormInput
            label="Your credit card is with"
            name="creditCardBank"
            value={formData.creditCardBank || ''}
            onChange={handleInputChange}
          />
          
          <FormInput
            label="Rates/Taxes"
            name="ratesExpense"
            value={formData.ratesExpense?.toString() || '0'}
            onChange={handleInputChange}
            type="number"
          />
          
          <FormInput
            label="Health insurance"
            name="healthInsuranceExpense"
            value={formData.healthInsuranceExpense?.toString() || '0'}
            onChange={handleInputChange}
            type="number"
          />
          
          <div>
            <FormInput
              label="Do you have dependent children? If yes ="
              name="schoolFeesExpense"
              value={formData.schoolFeesExpense?.toString() || '0'}
              onChange={(e) => {
                handleInputChange(e);
                handleRadioChange('hasChildren', e.target.value !== '0' ? 'true' : 'false');
              }}
              type="number"
            />
          </div>
          
          <FormInput
            label="Education expenses"
            name="educationExpense"
            value={formData.educationExpense?.toString() || '0'}
            onChange={handleInputChange}
            type="number"
          />
          
          <FormInput
            label="Groceries"
            name="groceriesExpense"
            value={formData.groceriesExpense?.toString() || '0'}
            onChange={handleInputChange}
            type="number"
          />
          
          <FormInput
            label="Entertainment"
            name="entertainmentExpense"
            value={formData.entertainmentExpense?.toString() || '0'}
            onChange={handleInputChange}
            type="number"
          />
          
          <div>
            <FormInput
              label="General Living"
              name="generalExpense"
              value={formData.generalExpense?.toString() || '0'}
              onChange={handleInputChange}
              type="number"
            />
            <p className="text-xs text-gray-600 -mt-3 mb-3">[petrol, insurances, etc]</p>
          </div>
          
          <FormInput
            label="Other expenses"
            name="otherExpense"
            value={formData.otherExpense?.toString() || '0'}
            onChange={handleInputChange}
            type="number"
          />
          
          <div className="col-span-full">
            <FormInput
              label="TOTAL"
              name="totalExpensesDisplay"
              value={totalExpenses.toString()}
              onChange={() => {}}
              disabled
              className="mt-4 bg-yellow-50"
            />
            <p className="text-xs text-gray-500 -mt-3">[calculation]</p>
          </div>
        </div>
        
        <div className="mt-8">
          <p className="font-medium mb-4">
            The monthly cost of your bank loan before any cost of the EquityStart loan would be approximately
          </p>
          <FormInput
            label=""
            name="bankLoanRepaymentDisplay"
            value={bankLoanPayment.toFixed(2)}
            onChange={() => {}}
            disabled
          />
          <p className="text-xs text-gray-500 -mt-3">
            [PCM [Calculation = 79% of cost/val * av int rate / 12 ]
          </p>
          
          <p className="font-medium mt-4 mb-2">
            Your monthly living expenses are
          </p>
          <FormInput
            label=""
            name="totalExpensesDisplayAgain"
            value={totalExpenses.toString()}
            onChange={() => {}}
            disabled
          />
          
          <p className="font-medium mt-4 mb-2">
            Your total monthly expenses, before any EquityStart loan are
          </p>
          <FormInput
            label=""
            name="totalWithBankLoan"
            value={(totalExpenses + bankLoanPayment).toFixed(2)}
            onChange={() => {}}
            disabled
          />
        </div>
      </>
    );
  };
  
  // Step 8: Final verification
  const renderStep8 = () => {
    // Calculate loan amount based on income and expenses
    const monthlyIncome = formData.monthlyIncome || 0;
    const partnerMonthlyIncome = formData.partnerMonthlyIncome || 0;
    const totalMonthlyIncome = monthlyIncome + partnerMonthlyIncome;
    const totalExpenses = formData.totalExpenses || 0;
    const surplus = totalMonthlyIncome - totalExpenses;
    
    // Simple loan amount calculation (10x annual surplus)
    const possibleLoanAmount = Math.max(0, surplus * 12 * 10);
    const loanTerm = 10; // Default to 10 years
    
    const yesNoOptions: RadioOption[] = [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ];
    
    const idOptions: RadioOption[] = [
      { value: 'passport', label: 'Passport' },
      { value: 'drivers', label: 'Drivers license' },
      { value: 'birth', label: 'Full birth certificate' },
      { value: 'citizenship', label: 'Australian Citizenship certificate' },
      { value: 'refugee', label: 'Certificate of identity issued by Australian Government to refugees for entry' }
    ];
    
    const secondaryIdOptions: RadioOption[] = [
      { value: 'medicare', label: 'Medicare Card' },
      { value: 'centrelink', label: 'Centrelink Card' },
      { value: 'birthextract', label: 'Birth certificate extract' },
      { value: 'creditcard', label: 'Credit Card or account card' },
      { value: 'marriage', label: 'Marriage Certificate' },
      { value: 'bank', label: 'Bank Statement showing transactions' },
      { value: 'tax', label: 'Taxation Notice' },
      { value: 'rates', label: 'Rates Notice, current address' },
      { value: 'utility', label: 'Utility Bill (electricity, gas, phone etc) current address < 12 months old' }
    ];
    
    // Update form data with calculated values
    formData.equityStartLoanAmount = possibleLoanAmount;
    formData.preferredLoanTerm = loanTerm;
    
    return (
      <>
        <div className="mb-8">
          <h2 className="text-xl font-medium mb-4">
            The information you have given tells us you can afford an EquityStart home loan of
          </h2>
          
          <FormInput
            label=""
            name="equityStartLoanAmount"
            value={possibleLoanAmount.toFixed(0)}
            onChange={() => {}}
            disabled
          />
          
          <p className="text-xs text-gray-500 mt-1">
            [Income LESS Total Expenses = Surplus mthly Income] [Loan Required (or as close to) * average % rate +1.00% AND must service minimum 1.0X]
          </p>
          
          <div className="flex items-end gap-4 mt-6">
            <FormInput
              label="The preferred loan term is"
              name="preferredLoanTerm"
              value={loanTerm.toString()}
              onChange={handleInputChange}
              className="mb-0 flex-grow"
            />
            <span className="mb-2">years</span>
          </div>
          
          <div className="bg-gray-50 p-4 rounded mt-4">
            <p className="font-medium mb-2">[How is this calculated]</p>
            <p className="text-sm">
              EquityStart's AI uses historical locational sales data from multiple external data inputs to calculate how the home you are purchasing/refinancing has appreciated or depreciated over a set period and then applies various macro factors to arrive at a predictive Loan Term that is forecast to meet investor return hurdles and provide sufficient equity to you, the Borrower, to enable repayment of the EquityStart loan at expiration of the Loan.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-medium mb-4">Now, we need to run a few simple checks</h3>
            
            <div className="mb-4">
              <p className="mb-2">Do you have a recent Credit Report? [Partner]</p>
              <RadioButtonGroup
                name="hasRecentCreditReport"
                options={yesNoOptions}
                value={formData.hasRecentCreditReport ? 'yes' : 'no'}
                onChange={(value) => handleRadioChange('hasRecentCreditReport', value)}
              />
            </div>
            
            <button className="bg-equityblue text-white py-2 px-4 rounded w-full mb-2">
              Upload your Credit Report
            </button>
            
            <button className="bg-equityblue text-white py-2 px-4 rounded w-full mb-2">
              Organise a Credit Report now
            </button>
            
            <button className="bg-equityblue text-white py-2 px-4 rounded w-full mb-4">
              Let me come back to it later
            </button>
            
            <p className="text-xs text-gray-600">
              [please note, this is a requirement of your EquityStart Loan approval and will be required prior to finalising your loan documents]
            </p>
          </div>
          
          <div>
            <button className="bg-equityblue text-white py-2 px-4 rounded w-full mb-6">
              Wow! Lets finish applying now
            </button>
            
            <button className="bg-equityblue text-white py-2 px-4 rounded w-full mb-6">
              Let me come back to it later
            </button>
            
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-medium">Saves Application</p>
              <p className="mb-1">Loan Application id [bfjoshohds573n]</p>
              <p className="mb-4">has been generated. Please save this id number as it will be required along with your Borrower id when completing your application</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-xl font-medium mb-6">
            You're almost there! Now we need to make sure you are not a robot!
          </h2>
          
          <p className="mb-4">
            Please provide one of the following identification documents
          </p>
          
          <div className="mb-6">
            <RadioButtonGroup
              name="identificationDocuments"
              options={idOptions}
              value={formData.identificationDocuments?.[0] || 'passport'}
              onChange={(value) => handleRadioChange('identificationDocuments', value)}
              layout="vertical"
            />
          </div>
          
          <p className="mb-4">
            And at least one of
          </p>
          
          <div className="mb-6">
            <RadioButtonGroup
              name="secondaryDocuments"
              options={secondaryIdOptions}
              value={formData.secondaryDocuments?.[0] || 'medicare'}
              onChange={(value) => handleRadioChange('secondaryDocuments', value)}
              layout="vertical"
            />
          </div>
          
          <p className="text-xs text-green-600">
            [Provide for Upload button for each one]
          </p>
        </div>
      </>
    );
  };
  
  // Render the appropriate step content
  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      case 5:
        return renderStep5();
      case 6:
        return renderStep6();
      case 7:
        return renderStep7();
      case 8:
        return renderStep8();
      default:
        return <p>Step not found.</p>;
    }
  };
  
  // Title for each step
  const getStepTitle = () => {
    switch(currentStep) {
      case 1:
        return "Borrower Application 1";
      case 2:
        return "Borrower Application 2";
      case 3:
        return formData.applicationType === 'buying' 
          ? 'Borrower Application 3 "buying"' 
          : 'Borrower Application 3 "refinancing"';
      case 4:
        return formData.applicationType === 'buying'
          ? 'Borrower Application 4 "buying"'
          : 'Borrower Application 4 "refinancing"';
      case 5:
        return formData.applicationType === 'buying'
          ? 'Borrower Application 4 "buying" — "refinancing"'
          : 'Borrower Application 4 "buying" — "refinancing"';
      case 6:
        return "Borrower Application 5";
      case 7:
        return "Borrower Application 6";
      case 8:
        return "Borrower Application 7";
      default:
        return "Borrower Application";
    }
  };
  
  return (
    <ApplicationFormWrapper
      title={getStepTitle()}
      currentStep={currentStep}
      totalSteps={TOTAL_STEPS}
      onNext={handleNext}
      onPrevious={handlePrevious}
      showPrevious={currentStep > 1}
      nextButtonText={currentStep === TOTAL_STEPS ? "Submit Application" : "Next"}
    >
      {renderStepContent()}
    </ApplicationFormWrapper>
  );
};

export default ApplicationForm;
