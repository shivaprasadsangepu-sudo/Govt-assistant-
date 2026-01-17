
import { UserProfile, GovJob, GovScheme, CasteCategory } from '../types';

export const calculateJobEligibility = (user: UserProfile, job: GovJob) => {
  const ageMatch = user.age >= job.minAge && user.age <= job.maxAge;
  const eduMatch = job.education.includes(user.education);
  const stateMatch = job.states.includes('All India') || job.states.includes(user.state);
  const casteMatch = job.casteRestrictions.length === 0 || job.casteRestrictions.includes(user.caste);

  const isEligible = ageMatch && eduMatch && stateMatch && casteMatch;
  
  // Scoring logic for recommendation
  let score = 0;
  if (isEligible) score += 50;
  if (eduMatch) score += 20;
  if (ageMatch) score += 10;
  if (user.jobInterests.some(interest => job.title.toLowerCase().includes(interest.toLowerCase()))) score += 20;

  return { isEligible, score, reasons: { ageMatch, eduMatch, stateMatch, casteMatch } };
};

export const calculateSchemeEligibility = (user: UserProfile, scheme: GovScheme) => {
  const incomeMatch = user.annualIncome <= scheme.maxIncome;
  const stateMatch = scheme.states.includes('All India') || scheme.states.includes(user.state);
  const genderMatch = scheme.gender === 'All' || scheme.gender === user.gender;
  const casteMatch = scheme.caste.length === 0 || scheme.caste.includes(user.caste);

  const isEligible = incomeMatch && stateMatch && genderMatch && casteMatch;
  
  let score = 0;
  if (isEligible) score += 60;
  if (incomeMatch) score += 20;
  if (genderMatch) score += 20;

  return { isEligible, score };
};
