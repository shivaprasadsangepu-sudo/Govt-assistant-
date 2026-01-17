
import { GovJob, GovScheme, EducationLevel, CasteCategory, Gender } from './types';

export const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu and Kashmir"
];

export const MOCK_JOBS: GovJob[] = [
  {
    id: 'j1',
    title: 'Assistant Section Officer',
    department: 'SSC CGL',
    minAge: 18,
    maxAge: 30,
    education: [EducationLevel.GRADUATE],
    states: ['All India'],
    casteRestrictions: [CasteCategory.GENERAL, CasteCategory.OBC, CasteCategory.SC, CasteCategory.ST, CasteCategory.EWS],
    salaryRange: '₹44,900 - ₹1,42,400',
    deadline: '2024-12-30',
    applyLink: 'https://ssc.nic.in',
    description: 'Recruitment for Group B posts in various Ministries/ Departments/ Organizations.',
    category: 'SSC'
  },
  {
    id: 'j2',
    title: 'Constable (General Duty)',
    department: 'Delhi Police',
    minAge: 18,
    maxAge: 25,
    education: [EducationLevel.TWELFTH],
    states: ['Delhi', 'All India'],
    casteRestrictions: [CasteCategory.GENERAL, CasteCategory.OBC, CasteCategory.SC, CasteCategory.ST],
    salaryRange: '₹21,700 - ₹69,100',
    deadline: '2024-11-15',
    applyLink: 'https://delhipolice.gov.in',
    description: 'Police force recruitment for physical and mental agility.',
    category: 'Police'
  },
  {
    id: 'j3',
    title: 'Junior Engineer',
    department: 'Indian Railways (RRB)',
    minAge: 18,
    maxAge: 33,
    education: [EducationLevel.DIPLOMA, EducationLevel.GRADUATE],
    states: ['All India'],
    casteRestrictions: [CasteCategory.GENERAL, CasteCategory.OBC, CasteCategory.SC, CasteCategory.ST],
    salaryRange: '₹35,400 - ₹1,12,400',
    deadline: '2024-12-05',
    applyLink: 'https://indianrailways.gov.in',
    description: 'Technical positions in various engineering departments of Indian Railways.',
    category: 'Railway'
  }
];

export const MOCK_SCHEMES: GovScheme[] = [
  {
    id: 's1',
    title: 'PM-Kisan Samman Nidhi',
    ministry: 'Ministry of Agriculture',
    benefits: '₹6,000 per year in three installments',
    eligibilityDescription: 'Small and marginal farmers with land holdings.',
    maxIncome: 200000,
    states: ['All India'],
    gender: 'All',
    caste: [CasteCategory.GENERAL, CasteCategory.OBC, CasteCategory.SC, CasteCategory.ST],
    link: 'https://pmkisan.gov.in'
  },
  {
    id: 's2',
    title: 'Sukanya Samriddhi Yojana',
    ministry: 'Ministry of Women and Child Development',
    benefits: 'High interest rate savings for girl children.',
    eligibilityDescription: 'Parents of girl children aged below 10 years.',
    maxIncome: 10000000,
    states: ['All India'],
    gender: Gender.FEMALE,
    caste: [CasteCategory.GENERAL, CasteCategory.OBC, CasteCategory.SC, CasteCategory.ST],
    link: 'https://nsiindia.gov.in'
  }
];
