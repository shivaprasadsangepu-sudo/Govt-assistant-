
export enum EducationLevel {
  TENTH = '10th Pass',
  TWELFTH = '12th Pass',
  GRADUATE = 'Graduate',
  POST_GRADUATE = 'Post Graduate',
  PHD = 'PhD',
  DIPLOMA = 'Diploma',
  ITI = 'ITI'
}

export enum CasteCategory {
  GENERAL = 'General',
  OBC = 'OBC',
  SC = 'SC',
  ST = 'ST',
  EWS = 'EWS'
}

export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHERS = 'Others'
}

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  gender: Gender;
  state: string;
  education: EducationLevel;
  caste: CasteCategory;
  annualIncome: number;
  physicalDisability: boolean;
  jobInterests: string[];
}

export interface GovJob {
  id: string;
  title: string;
  department: string;
  minAge: number;
  maxAge: number;
  education: EducationLevel[];
  states: string[];
  casteRestrictions: CasteCategory[];
  salaryRange: string;
  deadline: string;
  applyLink: string;
  description: string;
  category: 'Police' | 'Banking' | 'Railway' | 'UPSC' | 'SSC' | 'State Govt';
}

export interface GovScheme {
  id: string;
  title: string;
  ministry: string;
  benefits: string;
  eligibilityDescription: string;
  maxIncome: number;
  states: string[];
  gender: Gender | 'All';
  caste: CasteCategory[];
  link: string;
}

export interface ApplicationStatus {
  jobId: string;
  status: 'Draft' | 'Applied' | 'Under Review' | 'Accepted' | 'Rejected';
  updatedAt: string;
}
