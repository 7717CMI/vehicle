'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // Customer Information
  customerName: string
  businessType: string
  coreBusinessActivities: string
  geographicPresence: string
  authorizedRVSFStatus: string
  vehicleCategoriesHandled: string
  // Contact Details
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Professional Drivers (for Proposition 2)
  primaryBusinessObjective: string
  keyPainPoints: string
  upcomingTriggersAndInitiatives: string
  // Purchasing Behaviour Metrics (for Proposition 3)
  vendorSelectionCriteria: string
  preferredVendorType: string
  contractDurationPreference: string
  // Solution Requirements (for Proposition 3)
  preferredSolutionType: string
  preferredDeploymentModel: string
  performanceExpectations: string
  // CMI Insights (for Proposition 3)
  customerBenchmarking: string
  additionalComments: string
}

// Sample data - Customers of Vehicle Scrapping/Recycling Companies in India
const sampleCustomerData: CustomerData[] = [
  {
    customerName: 'Maharashtra State Road Transport Corporation (MSRTC)',
    businessType: 'Fleet Operator',
    coreBusinessActivities: 'Logistics',
    geographicPresence: 'Regional',
    authorizedRVSFStatus: 'No',
    vehicleCategoriesHandled: 'Commercial Vehicles',
    keyContactPerson: 'Shekhar Channe',
    designation: 'Vice Chairman & Managing Director',
    emailAddress: 'vc.md@msrtc.gov.in',
    phoneNumber: '+91 20 2604 1200',
    linkedInProfile: 'linkedin.com/in/shekharchanne-msrtc',
    websiteUrl: 'www.msrtc.gov.in',
    primaryBusinessObjective: 'Compliance, Sustainability',
    keyPainPoints: 'ELV Supply Availability, Regulatory and Licensing Challenges',
    upcomingTriggersAndInitiatives: 'Government mandated scrapping of 15+ year buses, fleet modernization under FAME scheme',
    vendorSelectionCriteria: 'Compliance, Cost',
    preferredVendorType: 'Local',
    contractDurationPreference: 'Long-term (3-5 years)',
    preferredSolutionType: 'Depollution and Hazardous Waste Handling Systems',
    preferredDeploymentModel: 'Third Party, Long Term Service Agreement Interest',
    performanceExpectations: 'Processing Efficiency Targets, Environmental Impact Reduction Goals',
    customerBenchmarking: 'High potential - Large Government Fleet',
    additionalComments: 'Operates 16,000+ buses, 3,000+ vehicles due for retirement under scrappage policy'
  },
  {
    customerName: 'Delhivery Ltd',
    businessType: 'Fleet Operator',
    coreBusinessActivities: 'Logistics',
    geographicPresence: 'Pan India',
    authorizedRVSFStatus: 'No',
    vehicleCategoriesHandled: 'Commercial Vehicles, Two-Wheelers EVs',
    keyContactPerson: 'Sahil Barua',
    designation: 'CEO & Managing Director',
    emailAddress: 's.barua@delhivery.com',
    phoneNumber: '+91 124 6725 100',
    linkedInProfile: 'linkedin.com/in/sahilbarua-delhivery',
    websiteUrl: 'www.delhivery.com',
    primaryBusinessObjective: 'Sustainability, ESG and Sustainability Targets, EV and Battery',
    keyPainPoints: 'ELV Supply Availability, Infrastructure and Technology Gaps',
    upcomingTriggersAndInitiatives: 'Partnerships with OEMs, EV fleet transition and old diesel vehicle retirement',
    vendorSelectionCriteria: 'Efficiency, ROI',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Long-term (3-5 years)',
    preferredSolutionType: 'Data Reporting and Audit Tools, Battery Recycling and EV Processing Solutions',
    preferredDeploymentModel: 'Third Party, Long Term Service Agreement Interest',
    performanceExpectations: 'ROI and Payback Period Expectations, Environmental Impact Reduction Goals',
    customerBenchmarking: 'High potential - Logistics Leader',
    additionalComments: 'Large last-mile delivery fleet transitioning to EVs, bulk retirement of aging diesel vehicles'
  },
  {
    customerName: 'Indian Army - Corps of EME',
    businessType: 'Independent',
    coreBusinessActivities: 'Logistics',
    geographicPresence: 'Pan India',
    authorizedRVSFStatus: 'No',
    vehicleCategoriesHandled: 'Commercial Vehicles, Passenger Vehicles',
    keyContactPerson: 'Lt Gen Rajiv Kochhar',
    designation: 'Director General - EME',
    emailAddress: 'dgeme@army.gov.in',
    phoneNumber: '+91 11 2301 5678',
    linkedInProfile: 'linkedin.com/in/dgeme-indianarmy',
    websiteUrl: 'www.indianarmy.nic.in',
    primaryBusinessObjective: 'Compliance, Circular Economy Focus',
    keyPainPoints: 'Regulatory and Licensing Challenges, Infrastructure and Technology Gaps',
    upcomingTriggersAndInitiatives: 'Government mandated disposal of vintage military vehicles, defence modernization',
    vendorSelectionCriteria: 'Compliance, Efficiency',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Long-term (5+ years)',
    preferredSolutionType: 'Depollution and Hazardous Waste Handling Systems, Data Reporting and Audit Tools',
    preferredDeploymentModel: 'Own Facility',
    performanceExpectations: 'Processing Efficiency Targets, Recovery Rate Expectations',
    customerBenchmarking: 'High potential - Defence Sector',
    additionalComments: 'Thousands of ageing military vehicles (trucks, jeeps, armored) pending disposal through authorized channels'
  },
  {
    customerName: 'ICICI Lombard General Insurance',
    businessType: 'Independent',
    coreBusinessActivities: 'Logistics',
    geographicPresence: 'Pan India',
    authorizedRVSFStatus: 'No',
    vehicleCategoriesHandled: 'Passenger Vehicles, Commercial Vehicles, Two-Wheelers EVs',
    keyContactPerson: 'Bhargav Dasgupta',
    designation: 'MD & CEO',
    emailAddress: 'b.dasgupta@icicilombard.com',
    phoneNumber: '+91 22 6196 1000',
    linkedInProfile: 'linkedin.com/in/bhargavdasgupta-icici',
    websiteUrl: 'www.icicilombard.com',
    primaryBusinessObjective: 'Revenue, Compliance',
    keyPainPoints: 'ELV Supply Availability, Regulatory and Licensing Challenges',
    upcomingTriggersAndInitiatives: 'Partnerships with Government, streamlining total loss vehicle disposal',
    vendorSelectionCriteria: 'Cost, ROI',
    preferredVendorType: 'Local',
    contractDurationPreference: 'Medium-term (1-3 years)',
    preferredSolutionType: 'Data Reporting and Audit Tools',
    preferredDeploymentModel: 'Third Party',
    performanceExpectations: 'ROI and Payback Period Expectations',
    customerBenchmarking: 'High potential - Insurance Leader',
    additionalComments: 'Handles thousands of total loss / write-off vehicles annually, needs authorized scrapping partners'
  },
  {
    customerName: 'BluSmart Mobility',
    businessType: 'Fleet Operator',
    coreBusinessActivities: 'Logistics',
    geographicPresence: 'Regional',
    authorizedRVSFStatus: 'No',
    vehicleCategoriesHandled: 'Passenger Vehicles, Two-Wheelers EVs',
    keyContactPerson: 'Anmol Jaggi',
    designation: 'Co-Founder & CEO',
    emailAddress: 'a.jaggi@blusmart.in',
    phoneNumber: '+91 124 4567 890',
    linkedInProfile: 'linkedin.com/in/anmoljaggi-blusmart',
    websiteUrl: 'www.blusmart.in',
    primaryBusinessObjective: 'EV and Battery, Sustainability, Circular Economy Focus',
    keyPainPoints: 'Infrastructure and Technology Gaps, Regulatory and Licensing Challenges',
    upcomingTriggersAndInitiatives: 'Partnerships with OEMs, EV battery end-of-life management',
    vendorSelectionCriteria: 'Efficiency, ROI',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Long-term (3-5 years)',
    preferredSolutionType: 'Battery Recycling and EV Processing Solutions, Data Reporting and Audit Tools',
    preferredDeploymentModel: 'Third Party, Long Term Service Agreement Interest',
    performanceExpectations: 'Recovery Rate Expectations, Environmental Impact Reduction Goals, ROI and Payback Period Expectations',
    customerBenchmarking: 'High potential - EV Fleet Pioneer',
    additionalComments: 'All-electric ride-hailing fleet, early EV battery retirement and recycling needs as fleet ages'
  },
  {
    customerName: 'Brihanmumbai Electric Supply & Transport (BEST)',
    businessType: 'Fleet Operator',
    coreBusinessActivities: 'Logistics',
    geographicPresence: 'Local',
    authorizedRVSFStatus: 'No',
    vehicleCategoriesHandled: 'Commercial Vehicles',
    keyContactPerson: 'Lokesh Chandra',
    designation: 'General Manager',
    emailAddress: 'gm@bestundertaking.com',
    phoneNumber: '+91 22 2561 5000',
    linkedInProfile: 'linkedin.com/in/lokeshchandra-best',
    websiteUrl: 'www.bestundertaking.com',
    primaryBusinessObjective: 'Compliance, Sustainability',
    keyPainPoints: 'ELV Supply Availability, Regulatory and Licensing Challenges',
    upcomingTriggersAndInitiatives: 'Government mandated scrapping of old diesel buses, transition to electric buses',
    vendorSelectionCriteria: 'Compliance, Cost',
    preferredVendorType: 'Local',
    contractDurationPreference: 'Short-term (1 year)',
    preferredSolutionType: 'Depollution and Hazardous Waste Handling Systems',
    preferredDeploymentModel: 'Third Party',
    performanceExpectations: 'Processing Efficiency Targets, Environmental Impact Reduction Goals',
    customerBenchmarking: 'High potential - Municipal Fleet',
    additionalComments: 'Retiring 2,000+ old diesel buses as it transitions to fully electric fleet by 2028'
  },
  {
    customerName: 'Maruti Suzuki India Ltd',
    businessType: 'OEM Partner',
    coreBusinessActivities: 'Scrapping, Recycling',
    geographicPresence: 'Pan India',
    authorizedRVSFStatus: 'Yes',
    vehicleCategoriesHandled: 'Passenger Vehicles',
    keyContactPerson: 'Hisashi Takeuchi',
    designation: 'MD & CEO',
    emailAddress: 'h.takeuchi@maruti.co.in',
    phoneNumber: '+91 124 4781 000',
    linkedInProfile: 'linkedin.com/in/hisashitakeuchi-maruti',
    websiteUrl: 'www.marutisuzuki.com',
    primaryBusinessObjective: 'Circular Economy Focus, ESG and Sustainability Targets',
    keyPainPoints: 'ELV Supply Availability, Infrastructure and Technology Gaps',
    upcomingTriggersAndInitiatives: 'Partnerships with Government, trade-in scrappage incentive programs for new car buyers',
    vendorSelectionCriteria: 'Compliance, Efficiency',
    preferredVendorType: 'Global',
    contractDurationPreference: 'Long-term (5+ years)',
    preferredSolutionType: 'Depollution and Hazardous Waste Handling Systems, Data Reporting and Audit Tools',
    preferredDeploymentModel: 'JV, Long Term Service Agreement Interest',
    performanceExpectations: 'Recovery Rate Expectations, Environmental Impact Reduction Goals',
    customerBenchmarking: 'High potential - Largest OEM',
    additionalComments: 'Channeling old trade-in vehicles from dealership network to authorized RVSFs for scrapping'
  },
  {
    customerName: 'VRL Logistics Ltd',
    businessType: 'Fleet Operator',
    coreBusinessActivities: 'Logistics',
    geographicPresence: 'Pan India',
    authorizedRVSFStatus: 'No',
    vehicleCategoriesHandled: 'Commercial Vehicles',
    keyContactPerson: 'Vijay Sankeshwar',
    designation: 'Chairman & Managing Director',
    emailAddress: 'v.sankeshwar@vrllogistics.com',
    phoneNumber: '+91 836 2222 222',
    linkedInProfile: 'linkedin.com/in/vijaysankeshwar-vrl',
    websiteUrl: 'www.vrllogistics.com',
    primaryBusinessObjective: 'Compliance, Revenue',
    keyPainPoints: 'Regulatory and Licensing Challenges, ELV Supply Availability',
    upcomingTriggersAndInitiatives: 'Government mandated scrapping for 15+ year commercial vehicles, fleet renewal',
    vendorSelectionCriteria: 'Cost, ROI',
    preferredVendorType: 'Local',
    contractDurationPreference: 'Medium-term (1-3 years)',
    preferredSolutionType: 'Data Reporting and Audit Tools',
    preferredDeploymentModel: 'Third Party',
    performanceExpectations: 'ROI and Payback Period Expectations',
    customerBenchmarking: 'High potential - Large Private Fleet',
    additionalComments: 'Operates 5,000+ trucks and buses, regular fleet retirement cycle every 10-15 years'
  },
  {
    customerName: 'Ola Fleet Technologies',
    businessType: 'Fleet Operator',
    coreBusinessActivities: 'Logistics',
    geographicPresence: 'Pan India',
    authorizedRVSFStatus: 'No',
    vehicleCategoriesHandled: 'Passenger Vehicles, Two-Wheelers EVs',
    keyContactPerson: 'Hemant Bakshi',
    designation: 'CEO - Ola Fleet',
    emailAddress: 'h.bakshi@olafleet.com',
    phoneNumber: '+91 80 4690 0000',
    linkedInProfile: 'linkedin.com/in/hemantbakshi-ola',
    websiteUrl: 'www.olacabs.com',
    primaryBusinessObjective: 'EV and Battery, Compliance, Expansion',
    keyPainPoints: 'Infrastructure and Technology Gaps, Regulatory and Licensing Challenges',
    upcomingTriggersAndInitiatives: 'Partnerships with OEMs, Ola Electric S1 scooter battery end-of-life, fleet EV transition',
    vendorSelectionCriteria: 'Efficiency, Cost',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Long-term (3-5 years)',
    preferredSolutionType: 'Battery Recycling and EV Processing Solutions, Data Reporting and Audit Tools',
    preferredDeploymentModel: 'Third Party, JV',
    performanceExpectations: 'Recovery Rate Expectations, ROI and Payback Period Expectations, Environmental Impact Reduction Goals',
    customerBenchmarking: 'High potential - Ride-Hailing Fleet',
    additionalComments: 'Large driver-partner fleet with aging vehicles needing retirement, plus growing EV fleet needing battery recycling'
  },
  {
    customerName: 'Municipal Corporation of Greater Mumbai (MCGM)',
    businessType: 'Independent',
    coreBusinessActivities: 'Logistics',
    geographicPresence: 'Local',
    authorizedRVSFStatus: 'No',
    vehicleCategoriesHandled: 'Commercial Vehicles, Passenger Vehicles',
    keyContactPerson: 'Bhushan Gagrani',
    designation: 'Municipal Commissioner',
    emailAddress: 'mc@mcgm.gov.in',
    phoneNumber: '+91 22 2262 0251',
    linkedInProfile: 'linkedin.com/in/bhushangagrani-mcgm',
    websiteUrl: 'www.mcgm.gov.in',
    primaryBusinessObjective: 'Compliance, Sustainability',
    keyPainPoints: 'Regulatory and Licensing Challenges, Infrastructure and Technology Gaps, ELV Supply Availability',
    upcomingTriggersAndInitiatives: 'Government mandated scrapping of municipal vehicles, clean city initiatives',
    vendorSelectionCriteria: 'Compliance, Cost',
    preferredVendorType: 'Local',
    contractDurationPreference: 'Short-term (1 year)',
    preferredSolutionType: 'Depollution and Hazardous Waste Handling Systems, Data Reporting and Audit Tools',
    preferredDeploymentModel: 'Third Party',
    performanceExpectations: 'Processing Efficiency Targets, Environmental Impact Reduction Goals',
    customerBenchmarking: 'Medium potential - Municipal Body',
    additionalComments: 'Operates garbage trucks, fire engines, ambulances and utility vehicles needing periodic retirement'
  }
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Common Customer Information header cells
  const renderCustomerInfoHeaders = () => (
    <>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
        <div>Customer Name/Company Name</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
        <div>Business Type</div>
        <div className="font-normal text-[10px] text-gray-600">OEM Partner / Independent / Scrapper Recycler / Fleet Operator</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Core Business Activities</div>
        <div className="font-normal text-[10px] text-gray-600">Scrapping / Dismantling / Recycling / Logistics</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
        <div>Geographic Presence</div>
        <div className="font-normal text-[10px] text-gray-600">Pan India / Regional / Local</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">
        <div>Authorized RVSF Status</div>
        <div className="font-normal text-[10px] text-gray-600">Yes / No</div>
      </th>
      <th className="bg-[#E8D4B8] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
        <div>Vehicle Categories Handled</div>
        <div className="font-normal text-[10px] text-gray-600">Passenger Vehicles, Commercial Vehicles, Two Wheelers EVs</div>
      </th>
    </>
  )

  // Common Contact Details header cells
  const renderContactHeaders = () => (
    <>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
      <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
    </>
  )

  // Common Customer Information data cells
  const renderCustomerInfoCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessType}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.coreBusinessActivities}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.geographicPresence}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.authorizedRVSFStatus}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.vehicleCategoriesHandled}</td>
    </>
  )

  // Common Contact Details data cells
  const renderContactCells = (customer: CustomerData) => (
    <>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
      </td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
      </td>
      <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
        <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
      </td>
    </>
  )

  // Proposition 1 Table - Customer Information + Contact Details
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 2 Table - Customer Information + Contact Details + Professional Drivers
  const renderPreposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Professional Drivers
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
            {/* Professional Drivers */}
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Primary Business Objective</div>
              <div className="font-normal text-[10px] text-gray-600">Compliance / Revenue / Sustainability / Expansion / Circular Economy Focus / Level / ESG and Sustainability Targets / EV and Battery</div>
            </th>
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Key Pain Points</div>
              <div className="font-normal text-[10px] text-gray-600">ELV Supply Availability / Regulatory and Licensing Challenges / Infrastructure and Technology Gaps</div>
            </th>
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Upcoming Triggers and Initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">Partnerships with OEMs or Government</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
              {/* Professional Drivers */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryBusinessObjective}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyPainPoints}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.upcomingTriggersAndInitiatives}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 3 Table - All sections: Customer Info + Contact + Professional Drivers + Purchasing Behaviour + Solution Requirements + CMI Insights
  const renderPreposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#D4A574] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#90EE90] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Professional Drivers
            </th>
            <th colSpan={3} className="bg-[#D8BFD8] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Purchasing Behaviour Metrics
            </th>
            <th colSpan={3} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Solution Requirements
            </th>
            <th colSpan={2} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {renderCustomerInfoHeaders()}
            {renderContactHeaders()}
            {/* Professional Drivers */}
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Primary Business Objective</div>
              <div className="font-normal text-[10px] text-gray-600">Compliance / Revenue / Sustainability / Expansion / Circular Economy Focus / Level / ESG and Sustainability Targets / EV and Battery</div>
            </th>
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Key Pain Points</div>
              <div className="font-normal text-[10px] text-gray-600">ELV Supply Availability / Regulatory and Licensing Challenges / Infrastructure and Technology Gaps</div>
            </th>
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Upcoming Triggers and Initiatives</div>
              <div className="font-normal text-[10px] text-gray-600">Partnerships with OEMs or Government</div>
            </th>
            {/* Purchasing Behaviour Metrics */}
            <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Vendor Selection Criteria</div>
              <div className="font-normal text-[10px] text-gray-600">Cost / Compliance / Efficiency / ROI</div>
            </th>
            <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Preferred Vendor Type</div>
              <div className="font-normal text-[10px] text-gray-600">Local / Global / Integrated</div>
            </th>
            <th className="bg-[#E0CFE0] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Contract Duration Preference</div>
            </th>
            {/* Solution Requirements */}
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Preferred Solution Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Depollution and Hazardous Waste Handling Systems / Battery Recycling and EV Processing Solutions / Data Reporting and Audit Tools)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[220px]">
              <div>Preferred Deployment Model</div>
              <div className="font-normal text-[10px] text-gray-600">Own Facility / JV / Third Party / Long Term Service Agreement Interest</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Performance Expectations</div>
              <div className="font-normal text-[10px] text-gray-600">Processing Efficiency Targets / Recovery Rate Expectations / Environmental Impact Reduction Goals / ROI and Payback Period Expectations</div>
            </th>
            {/* CMI Insights */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Additional Comments/Notes By CMI team</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {renderCustomerInfoCells(customer)}
              {renderContactCells(customer)}
              {/* Professional Drivers */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryBusinessObjective}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyPainPoints}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.upcomingTriggersAndInitiatives}</td>
              {/* Purchasing Behaviour Metrics */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.vendorSelectionCriteria}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredVendorType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.contractDurationPreference}</td>
              {/* Solution Requirements */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredSolutionType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredDeploymentModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.performanceExpectations}</td>
              {/* CMI Insights */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarking}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Preposition
        title="Proposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderPreposition1Table()}
      </Preposition>

      <Preposition
        title="Proposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderPreposition2Table()}
      </Preposition>

      <Preposition
        title="Proposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderPreposition3Table()}
      </Preposition>
    </div>
  )
}
