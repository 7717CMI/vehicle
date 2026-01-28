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

// Sample data for Vehicle Scrapping Industry - India Focus
const sampleCustomerData: CustomerData[] = [
  {
    customerName: 'Mahindra MSTC Recycling Pvt Ltd',
    businessType: 'OEM Partner',
    coreBusinessActivities: 'Scrapping, Dismantling, Recycling',
    geographicPresence: 'Pan India',
    authorizedRVSFStatus: 'Yes',
    vehicleCategoriesHandled: 'Passenger Vehicles, Commercial Vehicles',
    keyContactPerson: 'Rajesh Sharma',
    designation: 'CEO',
    emailAddress: 'r.sharma@mahindramstc.com',
    phoneNumber: '+91 22 6789 0000',
    linkedInProfile: 'linkedin.com/in/rajeshsharma-mmr',
    websiteUrl: 'www.mahindramstcrecycling.com',
    primaryBusinessObjective: 'Revenue, Circular Economy Focus, ESG and Sustainability Targets',
    keyPainPoints: 'ELV Supply Availability, Infrastructure and Technology Gaps',
    upcomingTriggersAndInitiatives: 'Partnerships with OEMs, Government policy alignment',
    vendorSelectionCriteria: 'Compliance, Efficiency',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Long-term (3-5 years)',
    preferredSolutionType: 'Depollution and Hazardous Waste Handling Systems, Battery Recycling and EV Processing Solutions',
    preferredDeploymentModel: 'Own Facility',
    performanceExpectations: 'Processing Efficiency Targets, Recovery Rate Expectations, Environmental Impact Reduction Goals',
    customerBenchmarking: 'High potential - Market Leader',
    additionalComments: 'Joint venture between Mahindra and MSTC, first mover advantage in organized vehicle scrapping'
  },
  {
    customerName: 'Tata Motors EV Recycling',
    businessType: 'OEM Partner',
    coreBusinessActivities: 'Recycling, Dismantling',
    geographicPresence: 'Pan India',
    authorizedRVSFStatus: 'Yes',
    vehicleCategoriesHandled: 'Passenger Vehicles, Commercial Vehicles, Two-Wheelers EVs',
    keyContactPerson: 'Anand Kulkarni',
    designation: 'VP - Sustainability',
    emailAddress: 'a.kulkarni@tatamotors.com',
    phoneNumber: '+91 22 6613 0000',
    linkedInProfile: 'linkedin.com/in/anandkulkarni-tata',
    websiteUrl: 'www.tatamotors.com',
    primaryBusinessObjective: 'Sustainability, ESG and Sustainability Targets, EV and Battery',
    keyPainPoints: 'Infrastructure and Technology Gaps, Regulatory and Licensing Challenges',
    upcomingTriggersAndInitiatives: 'Partnerships with OEMs, EV battery recycling expansion',
    vendorSelectionCriteria: 'Efficiency, ROI',
    preferredVendorType: 'Global',
    contractDurationPreference: 'Long-term (5+ years)',
    preferredSolutionType: 'Battery Recycling and EV Processing Solutions, Data Reporting and Audit Tools',
    preferredDeploymentModel: 'Own Facility, Long Term Service Agreement Interest',
    performanceExpectations: 'Recovery Rate Expectations, Environmental Impact Reduction Goals, ROI and Payback Period Expectations',
    customerBenchmarking: 'High potential - OEM Leader',
    additionalComments: 'Strong EV push with Nexon EV, focus on closed-loop battery recycling'
  },
  {
    customerName: 'Maruti Suzuki Toyotsu India (MSTI)',
    businessType: 'OEM Partner',
    coreBusinessActivities: 'Scrapping, Dismantling, Recycling',
    geographicPresence: 'Regional',
    authorizedRVSFStatus: 'Yes',
    vehicleCategoriesHandled: 'Passenger Vehicles',
    keyContactPerson: 'Kenichi Ayukawa',
    designation: 'Managing Director',
    emailAddress: 'k.ayukawa@msti.co.in',
    phoneNumber: '+91 124 4789 000',
    linkedInProfile: 'linkedin.com/in/kenichi-msti',
    websiteUrl: 'www.marutisuzukitoyotsu.com',
    primaryBusinessObjective: 'Compliance, Circular Economy Focus',
    keyPainPoints: 'ELV Supply Availability, Regulatory and Licensing Challenges',
    upcomingTriggersAndInitiatives: 'Government policy alignment, expansion to more states',
    vendorSelectionCriteria: 'Compliance, Cost',
    preferredVendorType: 'Global',
    contractDurationPreference: 'Long-term (3-5 years)',
    preferredSolutionType: 'Depollution and Hazardous Waste Handling Systems',
    preferredDeploymentModel: 'Own Facility',
    performanceExpectations: 'Processing Efficiency Targets, Recovery Rate Expectations',
    customerBenchmarking: 'High potential - OEM Partnership',
    additionalComments: 'JV between Maruti Suzuki and Toyota Tsusho for vehicle dismantling'
  },
  {
    customerName: 'GreenTech Auto Recyclers',
    businessType: 'Independent',
    coreBusinessActivities: 'Scrapping, Recycling',
    geographicPresence: 'Regional',
    authorizedRVSFStatus: 'Yes',
    vehicleCategoriesHandled: 'Passenger Vehicles, Two-Wheelers EVs',
    keyContactPerson: 'Priya Mehta',
    designation: 'Founder & CEO',
    emailAddress: 'p.mehta@greentechauto.in',
    phoneNumber: '+91 79 2658 1234',
    linkedInProfile: 'linkedin.com/in/priyamehta-greentech',
    websiteUrl: 'www.greentechauto.in',
    primaryBusinessObjective: 'Revenue, Expansion, Sustainability',
    keyPainPoints: 'ELV Supply Availability, Infrastructure and Technology Gaps',
    upcomingTriggersAndInitiatives: 'Partnerships with Government, regional expansion',
    vendorSelectionCriteria: 'Cost, ROI',
    preferredVendorType: 'Local',
    contractDurationPreference: 'Medium-term (1-3 years)',
    preferredSolutionType: 'Data Reporting and Audit Tools, Depollution and Hazardous Waste Handling Systems',
    preferredDeploymentModel: 'JV, Third Party',
    performanceExpectations: 'ROI and Payback Period Expectations, Processing Efficiency Targets',
    customerBenchmarking: 'Medium potential - Regional Player',
    additionalComments: 'Growing independent player in Gujarat region, seeking technology partnerships'
  },
  {
    customerName: 'CERO Recycling (by Mahindra Accelo)',
    businessType: 'OEM Partner',
    coreBusinessActivities: 'Scrapping, Dismantling, Recycling, Logistics',
    geographicPresence: 'Pan India',
    authorizedRVSFStatus: 'Yes',
    vehicleCategoriesHandled: 'Passenger Vehicles, Commercial Vehicles, Two-Wheelers EVs',
    keyContactPerson: 'Sumit Issar',
    designation: 'Managing Director',
    emailAddress: 's.issar@cerorecycling.com',
    phoneNumber: '+91 22 6200 0000',
    linkedInProfile: 'linkedin.com/in/sumitissar-cero',
    websiteUrl: 'www.cerorecycling.com',
    primaryBusinessObjective: 'Circular Economy Focus, Revenue, ESG and Sustainability Targets',
    keyPainPoints: 'ELV Supply Availability, Regulatory and Licensing Challenges',
    upcomingTriggersAndInitiatives: 'Partnerships with OEMs, Government tie-ups for ELV collection',
    vendorSelectionCriteria: 'Efficiency, Compliance',
    preferredVendorType: 'Integrated',
    contractDurationPreference: 'Long-term (3-5 years)',
    preferredSolutionType: 'Depollution and Hazardous Waste Handling Systems, Battery Recycling and EV Processing Solutions, Data Reporting and Audit Tools',
    preferredDeploymentModel: 'Own Facility, Long Term Service Agreement Interest',
    performanceExpectations: 'Processing Efficiency Targets, Recovery Rate Expectations, Environmental Impact Reduction Goals',
    customerBenchmarking: 'High potential - Pioneer',
    additionalComments: 'First organized vehicle recycling brand in India under Mahindra Group'
  },
  {
    customerName: 'Rajasthan Auto Recyclers Pvt Ltd',
    businessType: 'Scrapper Recycler',
    coreBusinessActivities: 'Scrapping, Dismantling',
    geographicPresence: 'Local',
    authorizedRVSFStatus: 'Yes',
    vehicleCategoriesHandled: 'Commercial Vehicles, Two-Wheelers EVs',
    keyContactPerson: 'Vikram Singh Shekhawat',
    designation: 'Director',
    emailAddress: 'v.shekhawat@rajautorecyclers.in',
    phoneNumber: '+91 141 2345 678',
    linkedInProfile: 'linkedin.com/in/vikramshekhawat-rar',
    websiteUrl: 'www.rajautorecyclers.in',
    primaryBusinessObjective: 'Compliance, Revenue',
    keyPainPoints: 'Regulatory and Licensing Challenges, Infrastructure and Technology Gaps',
    upcomingTriggersAndInitiatives: 'Government RVSF expansion, local policy incentives',
    vendorSelectionCriteria: 'Cost, Compliance',
    preferredVendorType: 'Local',
    contractDurationPreference: 'Short-term (1 year)',
    preferredSolutionType: 'Depollution and Hazardous Waste Handling Systems',
    preferredDeploymentModel: 'Third Party',
    performanceExpectations: 'Processing Efficiency Targets, ROI and Payback Period Expectations',
    customerBenchmarking: 'Medium potential - Local Operator',
    additionalComments: 'Established local player transitioning to organized RVSF model'
  },
  {
    customerName: 'Ashok Leyland Green Initiative',
    businessType: 'OEM Partner',
    coreBusinessActivities: 'Dismantling, Recycling',
    geographicPresence: 'Pan India',
    authorizedRVSFStatus: 'Yes',
    vehicleCategoriesHandled: 'Commercial Vehicles',
    keyContactPerson: 'Dheeraj Hinduja',
    designation: 'Head - Sustainability Programs',
    emailAddress: 'd.hinduja@ashokleyland.com',
    phoneNumber: '+91 44 2220 0000',
    linkedInProfile: 'linkedin.com/in/dheerajhinduja-al',
    websiteUrl: 'www.ashokleyland.com',
    primaryBusinessObjective: 'ESG and Sustainability Targets, Circular Economy Focus',
    keyPainPoints: 'ELV Supply Availability, Infrastructure and Technology Gaps',
    upcomingTriggersAndInitiatives: 'Partnerships with Government, commercial vehicle scrappage policy',
    vendorSelectionCriteria: 'Compliance, Efficiency',
    preferredVendorType: 'Global',
    contractDurationPreference: 'Long-term (3-5 years)',
    preferredSolutionType: 'Depollution and Hazardous Waste Handling Systems, Data Reporting and Audit Tools',
    preferredDeploymentModel: 'JV, Long Term Service Agreement Interest',
    performanceExpectations: 'Recovery Rate Expectations, Environmental Impact Reduction Goals',
    customerBenchmarking: 'High potential - CV Segment Leader',
    additionalComments: 'Major commercial vehicle OEM with focus on fleet scrappage programs'
  },
  {
    customerName: 'Delhi Fleet Operators Association',
    businessType: 'Fleet Operator',
    coreBusinessActivities: 'Logistics',
    geographicPresence: 'Regional',
    authorizedRVSFStatus: 'No',
    vehicleCategoriesHandled: 'Commercial Vehicles, Passenger Vehicles',
    keyContactPerson: 'Ramesh Gupta',
    designation: 'President',
    emailAddress: 'r.gupta@dfoa.org.in',
    phoneNumber: '+91 11 4567 8900',
    linkedInProfile: 'linkedin.com/in/rameshgupta-dfoa',
    websiteUrl: 'www.dfoa.org.in',
    primaryBusinessObjective: 'Compliance, Revenue',
    keyPainPoints: 'Regulatory and Licensing Challenges, ELV Supply Availability',
    upcomingTriggersAndInitiatives: 'Government mandated scrapping for 15+ year vehicles, fleet modernization',
    vendorSelectionCriteria: 'Cost, ROI',
    preferredVendorType: 'Local',
    contractDurationPreference: 'Short-term (1 year)',
    preferredSolutionType: 'Data Reporting and Audit Tools',
    preferredDeploymentModel: 'Third Party',
    performanceExpectations: 'ROI and Payback Period Expectations',
    customerBenchmarking: 'Medium potential - Fleet Aggregator',
    additionalComments: 'Represents large fleet operators in NCR region, bulk vehicle retirement potential'
  },
  {
    customerName: 'TVS Motor Company',
    businessType: 'OEM Partner',
    coreBusinessActivities: 'Recycling, Dismantling',
    geographicPresence: 'Pan India',
    authorizedRVSFStatus: 'Yes',
    vehicleCategoriesHandled: 'Two-Wheelers EVs',
    keyContactPerson: 'Sudarshan Venu',
    designation: 'Joint Managing Director',
    emailAddress: 's.venu@tvsmotor.com',
    phoneNumber: '+91 44 2833 0000',
    linkedInProfile: 'linkedin.com/in/sudarshanvenu-tvs',
    websiteUrl: 'www.tvsmotor.com',
    primaryBusinessObjective: 'EV and Battery, Sustainability, Circular Economy Focus',
    keyPainPoints: 'Infrastructure and Technology Gaps, Regulatory and Licensing Challenges',
    upcomingTriggersAndInitiatives: 'Partnerships with OEMs, EV two-wheeler battery recycling',
    vendorSelectionCriteria: 'Efficiency, ROI',
    preferredVendorType: 'Global',
    contractDurationPreference: 'Long-term (5+ years)',
    preferredSolutionType: 'Battery Recycling and EV Processing Solutions',
    preferredDeploymentModel: 'Own Facility, JV',
    performanceExpectations: 'Recovery Rate Expectations, Environmental Impact Reduction Goals, ROI and Payback Period Expectations',
    customerBenchmarking: 'High potential - Two-Wheeler EV Leader',
    additionalComments: 'Focus on iQube EV battery lifecycle management and recycling'
  },
  {
    customerName: 'Bharat Scrap Dealers Cooperative',
    businessType: 'Scrapper Recycler',
    coreBusinessActivities: 'Scrapping',
    geographicPresence: 'Local',
    authorizedRVSFStatus: 'No',
    vehicleCategoriesHandled: 'Passenger Vehicles, Commercial Vehicles, Two-Wheelers EVs',
    keyContactPerson: 'Anil Jain',
    designation: 'Chairman',
    emailAddress: 'a.jain@bharatscrap.co.in',
    phoneNumber: '+91 261 2345 678',
    linkedInProfile: 'linkedin.com/in/aniljain-bsdc',
    websiteUrl: 'www.bharatscrap.co.in',
    primaryBusinessObjective: 'Compliance, Expansion',
    keyPainPoints: 'Regulatory and Licensing Challenges, Infrastructure and Technology Gaps, ELV Supply Availability',
    upcomingTriggersAndInitiatives: 'Government RVSF licensing, transition from informal to formal sector',
    vendorSelectionCriteria: 'Cost, Compliance',
    preferredVendorType: 'Local',
    contractDurationPreference: 'Short-term (1 year)',
    preferredSolutionType: 'Depollution and Hazardous Waste Handling Systems, Data Reporting and Audit Tools',
    preferredDeploymentModel: 'Third Party',
    performanceExpectations: 'Processing Efficiency Targets, ROI and Payback Period Expectations',
    customerBenchmarking: 'Low potential - Transitioning Informal',
    additionalComments: 'Cooperative of informal scrap dealers seeking RVSF authorization'
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
