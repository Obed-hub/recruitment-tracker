export type Branch =
  // Military
  | 'Army' | 'Navy' | 'Air Force' | 'NDA'
  // Paramilitary & Security
  | 'Police' | 'Civil Defence' | 'Fire Service' | 'Immigration' | 'Customs' | 'FRSC'
  // Law Enforcement / Anti-Corruption
  | 'EFCC'
  // Civil Service & Federal Commissions
  | 'FCSC'
  // Oil, Gas & Energy
  | 'NNPC'
  // Finance & Banking
  | 'CBN'
  // Identity & Technology
  | 'NIMC' | 'NCC' | 'NITDA'
  // Transport & Maritime
  | 'FAAN' | 'NIMASA'
  // Health & Food Safety
  | 'NAFDAC';
export type RecruitmentStatus = 'Open' | 'Closed' | 'Shortlist Out' | 'Unknown';
export type RecruitmentCategory = 'Regular Recruit' | 'DSSC' | 'SSC' | 'Constable' | 'Inspector' | 'Cadet' | 'Entry Level' | 'Graduate Trainee';
export type Grade = 'A1' | 'B2' | 'B3' | 'C4' | 'C5' | 'C6' | 'D7' | 'E8' | 'F9';

export interface ExamCenter {
  zone: string;
  venue: string;
  address: string;
  coordinator_contact: string;
}

export interface RecruitmentUpdate {
  id: string;
  branch: Branch;
  title: string;
  category: RecruitmentCategory;
  status: RecruitmentStatus;
  deadline_date: string; // ISO date string
  portal_url: string;
  updated_at: string;
  description?: string;
  requirements?: string[];
  application_process?: string[];
  exam_centers?: ExamCenter[];
  site_status?: 'online' | 'offline' | 'unknown';
  latency?: number;
  shortlistDetected?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  content_summary: string;
  source_link: string;
  date_posted: string;
  is_official: boolean;
  image_url?: string | null;
  source?: string;
}

export interface UserEligibility {
  age: number;
  height: number; // in meters
  gender: 'Male' | 'Female';
  maritalStatus: 'Single' | 'Married' | 'Divorced';
  qualification: 'SSCE' | 'OND' | 'NCE' | 'HND' | 'Degree' | 'Medical Degree' | 'PhD';
  examGrades: {
    english: Grade;
    maths: Grade;
    numberOfCredits: number;
  };
  medical: {
    isPregnant: boolean;
    hasFlatFoot: boolean;
    hasTattoos: boolean;
    hasSurgery: boolean;
    hasVisualImpairment: boolean;
    genotype: 'AA' | 'AS' | 'SS' | 'AC';
    // New Detailed Medical Fields
    hasHernia: boolean;
    hasAsthma: boolean;
    hasPastFracture: boolean;
    hasPhysicalDeformity: boolean; // Knock knees, Bow legs, K-legs
    historyOfMentalIllness: boolean;
  };
  hasCriminalRecord: boolean;
}

export interface ShortlistCandidate {
  id: string;
  name: string;
  state: string;
  exam_number: string;
  status: 'Shortlisted' | 'Pending';
}

export interface Question {
  id: string;
  branch: Branch | 'General';
  question: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation?: string;
}

export interface QuizResult {
  totalQuestions: number;
  score: number;
  percentage: number;
}

export const SLUG_TO_BRANCH: Record<string, Branch | 'General'> = {
  'army': 'Army',
  'navy': 'Navy',
  'air-force': 'Air Force',
  'nda': 'NDA',
  'police': 'Police',
  'civil-defence': 'Civil Defence',
  'fire-service': 'Fire Service',
  'immigration': 'Immigration',
  'customs': 'Customs',
  'frsc': 'FRSC',
  'efcc': 'EFCC',
  'fcsc': 'FCSC',
  'nnpc': 'NNPC',
  'cbn': 'CBN',
  'nimc': 'NIMC',
  'ncc': 'NCC',
  'nitda': 'NITDA',
  'faan': 'FAAN',
  'nimasa': 'NIMASA',
  'nafdac': 'NAFDAC',
  'general': 'General'
};

export const BRANCH_TO_SLUG: Record<string, string> = {
  'Army': 'army',
  'Navy': 'navy',
  'Air Force': 'air-force',
  'NDA': 'nda',
  'Police': 'police',
  'Civil Defence': 'civil-defence',
  'Fire Service': 'fire-service',
  'Immigration': 'immigration',
  'Customs': 'customs',
  'FRSC': 'frsc',
  'EFCC': 'efcc',
  'FCSC': 'fcsc',
  'NNPC': 'nnpc',
  'CBN': 'cbn',
  'NIMC': 'nimc',
  'NCC': 'ncc',
  'NITDA': 'nitda',
  'FAAN': 'faan',
  'NIMASA': 'nimasa',
  'NAFDAC': 'nafdac',
  'General': 'general'
};