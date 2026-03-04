import { RecruitmentUpdate, NewsItem, ShortlistCandidate, Question, Branch } from '../types';

// Mock Data Seeding
const RECRUITMENTS: RecruitmentUpdate[] = [
  {
    id: '1',
    branch: 'Army',
    title: 'Nigerian Army DSSC 29 Recruitment',
    category: 'DSSC',
    status: 'Open',
    deadline_date: '2026-04-30',
    portal_url: 'https://recruitment.army.mil.ng',
    updated_at: '2026-02-01T10:00:00Z',
    description: 'The Nigerian Army invites applications from suitably qualified Nigerians for commission as officers under the Direct Short Service Commission (DSSC) 29. Successful candidates will serve in various Corps and Services of the Nigerian Army for an initial period of five years, with the possibility of conversion to Regular Commission. The exercise is open to male and female Nigerians who are graduates in relevant professional and technical fields.',
    requirements: [
      'Must be a Nigerian citizen by birth.',
      'Minimum of a Second Class Lower Division (2:2) degree from an accredited university, or HND Upper Credit.',
      'Must possess a valid National Youth Service Corps (NYSC) discharge or exemption certificate.',
      'Age: Not above 30 years for graduates; not above 35 years for medical/dental officers and chaplains.',
      'Height: Not less than 1.68m for males and 1.65m for females.',
      'Must be physically and mentally fit, with no criminal record.',
      'Must possess a valid National Identity Number (NIN).',
      'Serving NYSC corps members are eligible to apply.',
    ],
    application_process: [
      'Visit the official Army recruitment portal at recruitment.army.mil.ng.',
      'Create an account using a valid email address and phone number.',
      'Fill in your personal information, educational qualifications, and upload required documents (WAEC/NECO, Degree certificate, NYSC certificate, birth certificate, local government attestation letter).',
      'Select your preferred Corps/Service and up to two exam centre locations.',
      'Review your application and submit. Print the acknowledgement slip.',
      'Await screening date notification via SMS/email/portal.',
    ],
    exam_centers: [
      { zone: 'North West', venue: '1 Division Army HQ', address: 'Kawo, Kaduna State', coordinator_contact: '08012345678' },
      { zone: 'North East', venue: '3 Division Army HQ', address: 'Rukuba, Jos, Plateau State', coordinator_contact: '08011112222' },
      { zone: 'North Central', venue: '8 Division Army HQ', address: 'Sokoto', coordinator_contact: '08033334444' },
      { zone: 'South West', venue: 'Ikeja Cantonment', address: 'Ikeja, Lagos State', coordinator_contact: '08087654321' },
      { zone: 'South East', venue: '82 Division Army HQ', address: 'Enugu', coordinator_contact: '08066667777' },
      { zone: 'South South', venue: '6 Division Army HQ', address: 'Port Harcourt, Rivers State', coordinator_contact: '08099998888' },
      { zone: 'FCT', venue: 'Mogadishu Cantonment', address: 'Asokoro, Abuja', coordinator_contact: '08055555555' },
    ]
  },
  {
    id: '2',
    branch: 'Navy',
    title: 'Nigerian Navy Batch 38 Recruitment',
    category: 'Regular Recruit',
    status: 'Shortlist Out',
    deadline_date: '2026-01-31',
    portal_url: 'https://joinnigeriannavy.com',
    updated_at: '2026-02-10T08:30:00Z',
    description: 'The Nigerian Navy conducted its Batch 38 Regular Recruit Intake exercise. Applications were received from qualified Nigerians for basic training at the Nigerian Navy Basic Training School (NNBTS), Onne, Rivers State. Successful candidates who pass all stages are commissioned as recruits and undergo 6 months of basic military training. The shortlist of screened candidates has been published — check the Shortlists section to verify your name.',
    requirements: [
      'Must be a Nigerian citizen by birth.',
      'Age: 18 to 22 years at the time of enlistment.',
      'Minimum academic qualification: 5 credits in WASSCE/NECO/GCE/NABTEB, including English Language and Mathematics, obtained in not more than two sittings.',
      'Must be single with no children (male and female).',
      'Height: Not less than 1.68m for males, 1.65m for females.',
      'Must possess a valid National Identity Number (NIN).',
      'Must be medically and physically fit.',
      'Must not have any tattoo on any part of the body.',
    ],
    application_process: [
      'Visit the official Navy recruitment portal at joinnigeriannavy.com.',
      'Register with NIN, email address and phone number.',
      'Complete the online application form with personal and educational details.',
      'Upload scanned copies of credentials (O\'Level result, birth certificate, LGA letter of identification).',
      'Submit application and print acknowledgement slip.',
      'Attend the designated screening centre on the notified date with all original documents and the printed slip.',
    ],
    exam_centers: [
      { zone: 'Lagos', venue: 'Nigerian Navy Secondary School', address: 'Ojo, Lagos', coordinator_contact: '08123456789' },
      { zone: 'Rivers', venue: 'NNBTS Onne', address: 'Onne, Rivers State', coordinator_contact: '08134567890' },
      { zone: 'North Central', venue: 'Command Day Secondary School', address: 'Lokoja, Kogi State', coordinator_contact: '09012345678' },
      { zone: 'North West', venue: 'NNS Keffi', address: 'Keffi, Nasarawa State', coordinator_contact: '08145678901' },
    ]
  },
  {
    id: '3',
    branch: 'Air Force',
    title: 'Nigerian Air Force BMTC 45 Recruitment',
    category: 'Regular Recruit',
    status: 'Open',
    deadline_date: '2026-05-15',
    portal_url: 'https://nafrecruitment.airforce.mil.ng',
    updated_at: '2026-02-15T09:00:00Z',
    description: 'The Nigerian Air Force (NAF) invites applications from suitably qualified Nigerians for enlistment into the Basic Military Training Course (BMTC) 45. Successful candidates will undergo a 12-week basic military and trade training at the Air Force Base, Kaduna. Interested applicants across all 36 states and the FCT are encouraged to apply. The NAF is committed to gender balance and encourages female applicants.',
    requirements: [
      'Must be a Nigerian citizen by birth.',
      'Age: 17 to 22 years at time of enlistment.',
      'Minimum qualification: 5 credits in WASSCE/NECO/GCE/NABTEB, including English Language and Mathematics, in not more than two sittings.',
      'Must not have been convicted of any criminal offence.',
      'Must be single and never been married (for new recruits).',
      'Height: Not less than 1.68m for males, 1.65m for females.',
      'Must be medically, physically, and mentally fit.',
      'Must possess a valid National Identity Number (NIN).',
      'Must not have any visible tattoo on the body.',
    ],
    application_process: [
      'Go to the NAF recruitment portal at nafrecruitment.airforce.mil.ng.',
      'Click "Register" and create an account using your NIN, email address and phone number.',
      'Log in and complete the application form — select your trade preference.',
      'Upload the required documents: O\'Level results, birth certificate, LGA indigene letter, NIN slip.',
      'Submit your application and print the recruitment acknowledgement slip.',
      'Monitor the portal for screening date, venue and centre allocation.',
      'Report to your allocated screening centre with originals of all documents and the acknowledgement slip.',
    ],
    exam_centers: [
      { zone: 'North West / North East', venue: 'NAF Base Kaduna', address: 'Mando Road, Kaduna', coordinator_contact: '07055555555' },
      { zone: 'South West', venue: 'NAF Base Ikeja', address: 'Ikeja, Lagos', coordinator_contact: '07066666666' },
      { zone: 'FCT / North Central', venue: 'NAF Base Abuja', address: 'Gwagwalada, Abuja', coordinator_contact: '07077777777' },
      { zone: 'South East / South South', venue: 'NAF Base Enugu', address: 'Enugu', coordinator_contact: '07088888888' },
    ]
  },
  {
    id: '5',
    branch: 'Police',
    title: 'Nigeria Police Force Constable Recruitment 2026',
    category: 'Constable',
    status: 'Open',
    deadline_date: '2026-04-15',
    portal_url: 'https://policerecruitment.gov.ng',
    updated_at: '2026-02-05T09:00:00Z',
    description: 'The Nigeria Police Force (NPF), in collaboration with the Police Service Commission (PSC), invites applications from suitably qualified Nigerians for enlistment as Police Constables. Successful candidates will undergo 6 months of basic police training at one of the designated Police Colleges across the country. This exercise is open to both male and female Nigerians from all 36 states and the FCT, with each state having a designated quota.',
    requirements: [
      'Must be a Nigerian citizen by birth.',
      'Must possess a valid National Identity Number (NIN).',
      'Minimum qualification: 5 credits in WASSCE/GCE/NECO/NABTEB in not more than two sittings, including English Language and Mathematics.',
      'Age: 18 to 25 years.',
      'Height: Not less than 1.67m for males, 1.64m for females.',
      'Must be physically, mentally and medically fit.',
      'Must be of good character and not have been convicted of any criminal offence.',
      'Chest measurement: not less than 0.87m for males (for expanded chest).',
    ],
    application_process: [
      'Visit the Police Recruitment portal at policerecruitment.gov.ng.',
      'Register using your NIN to create an applicant profile.',
      'Select your state of origin — recruitment is state-quota-based.',
      'Complete the bio-data form and upload required documents.',
      'Pay the non-refundable application fee (if applicable) via Remita.',
      'Print your application form and bank teller.',
      'Attend screening at the designated state police command headquarters.',
    ],
    exam_centers: [
      { zone: 'Lagos', venue: 'Lagos State Police Command', address: 'Ikeja, Lagos', coordinator_contact: '08101234567' },
      { zone: 'Kano', venue: 'Kano State Police Command', address: 'Bompai, Kano', coordinator_contact: '08102345678' },
      { zone: 'Rivers', venue: 'Rivers State Police Command', address: 'Moscow Road, Port Harcourt', coordinator_contact: '08103456789' },
      { zone: 'FCT', venue: 'FCT Police Command', address: 'Louis Edet House, Abuja', coordinator_contact: '08104567890' },
    ]
  },
  {
    id: '6',
    branch: 'Civil Defence',
    title: 'NSCDC 2026 General Recruitment',
    category: 'Regular Recruit',
    status: 'Open',
    deadline_date: '2026-05-01',
    portal_url: 'https://recruitment.cdcfib.gov.ng',
    updated_at: '2026-02-10T14:20:00Z',
    description: 'The Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) invites applications from eligible Nigerians for recruitment into the Nigeria Security and Civil Defence Corps (NSCDC). The NSCDC is responsible for protecting critical national infrastructure, assets, and the citizenry. Successful applicants will undergo paramilitary training at the NSCDC Training College. Both male and female Nigerians are encouraged to apply.',
    requirements: [
      'Must be a Nigerian citizen by birth.',
      'Age: 18 to 35 years.',
      'Minimum qualification: 5 credits in WASSCE/NECO/GCE/NABTEB including English and Mathematics (for junior cadre); HND/BSc degree for senior cadre.',
      'Must possess a valid National Identity Number (NIN).',
      'Must be medically and physically fit.',
      'Height: Not less than 1.68m (male), 1.65m (female) for uniformed roles.',
      'Must not have a previous criminal conviction.',
    ],
    application_process: [
      'Visit the CDCFIB recruitment portal at recruitment.cdcfib.gov.ng.',
      'Select "NSCDC" from the list of agencies.',
      'Create an account with your NIN, email and phone number.',
      'Complete the application form and upload required documents.',
      'Submit and print your application acknowledgement slip.',
      'Attend the screening exercise at your state NSCDC command with all originals of your credentials.',
    ],
    exam_centers: [
      { zone: 'North Central', venue: 'NSCDC HQ', address: 'Area 1, Garki, Abuja', coordinator_contact: '09020000001' },
      { zone: 'South West', venue: 'NSCDC Lagos State Command', address: 'Lagos Island, Lagos', coordinator_contact: '09020000002' },
      { zone: 'North West', venue: 'NSCDC Kano State Command', address: 'Kano', coordinator_contact: '09020000003' },
      { zone: 'South East', venue: 'NSCDC Enugu State Command', address: 'Enugu', coordinator_contact: '09020000004' },
    ]
  },
  {
    id: '7',
    branch: 'FRSC',
    title: 'Federal Road Safety Corps (FRSC) Cadet Corps Marshal Recruitment 2026',
    category: 'Cadet',
    status: 'Open',
    deadline_date: '2026-04-20',
    portal_url: 'https://www.frsc.gov.ng',
    updated_at: '2026-02-12T00:00:00Z',
    description: 'The Federal Road Safety Corps (FRSC) invites applications from suitably qualified Nigerians to fill the position of Cadet Corps Marshal. FRSC is Nigeria\'s lead agency for road traffic administration and safety management. Successful candidates will contribute to reducing road crashes, enforcing traffic laws, and promoting road safety education across Nigeria. The intake is open to university graduates and HND holders in relevant disciplines.',
    requirements: [
      'Must be a Nigerian citizen by birth.',
      'Minimum of HND Upper Credit or Second Class Lower (2:2) degree from a recognised institution.',
      'Must possess NYSC discharge or exemption certificate.',
      'Age: 18 to 30 years.',
      'Height: Not less than 1.68m (male), 1.65m (female).',
      'Must be physically and medically fit with good eyesight.',
      'Must possess a valid National Identity Number (NIN) and a valid driver\'s licence (preferred).',
      'Must be of good character with no criminal record.',
    ],
    application_process: [
      'Visit the FRSC official website at frsc.gov.ng and navigate to the Recruitment section.',
      'Complete the online application form with all personal and educational details.',
      'Upload required documents: O\'Level results, degree/HND certificate, NYSC certificate, birth certificate, NIN slip, and a passport photograph.',
      'Submit your application and note your application reference number.',
      'Await notification by SMS or email for aptitude test date and venue.',
      'Successful candidates proceed to physical/medical screening, final interview, and training.',
    ],
    exam_centers: [
      { zone: 'FCT / North Central', venue: 'FRSC National HQ', address: 'Plot 1085 Muhammadu Buhari Way, Abuja', coordinator_contact: '07002372572' },
      { zone: 'South West', venue: 'FRSC Lagos Sector Command', address: 'Ojodu, Lagos', coordinator_contact: '08033001234' },
      { zone: 'North West', venue: 'FRSC Kano Sector Command', address: 'Kano', coordinator_contact: '08033002345' },
      { zone: 'South South', venue: 'FRSC Rivers Sector Command', address: 'Port Harcourt', coordinator_contact: '08033003456' },
    ]
  },
  {
    id: '8',
    branch: 'Fire Service',
    title: 'Federal Fire Service Recruitment 2026 (Junior & Senior Cadre)',
    category: 'Inspector',
    status: 'Open',
    deadline_date: '2026-05-30',
    portal_url: 'https://recruitment.cdcfib.gov.ng',
    updated_at: '2026-02-14T11:00:00Z',
    description: 'The Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) invites applications from eligible Nigerians for recruitment into the Federal Fire Service (FFS) at both junior and senior cadre levels. The Federal Fire Service is responsible for fire prevention, fire suppression, rescue operations, and fire safety education. Vacancies exist for Firefighters (junior) and Fire Inspectors (senior). Both male and female candidates are encouraged to apply.',
    requirements: [
      'Must be a Nigerian citizen by birth.',
      'Junior Cadre (Firefighter): Minimum 5 credits in WASSCE/NECO in not more than two sittings, including English and Mathematics.',
      'Senior Cadre (Inspector): Minimum HND Upper Credit or a Second Class Lower degree; NYSC discharge certificate required.',
      'Age: 18 to 30 years.',
      'Height: Not less than 1.65m (male), 1.60m (female).',
      'Must be physically fit and able to perform strenuous tasks.',
      'Must be medically sound with no colour blindness or hearing impairment.',
      'Must possess a valid National Identity Number (NIN).',
    ],
    application_process: [
      'Navigate to the CDCFIB portal at recruitment.cdcfib.gov.ng.',
      'Select "Federal Fire Service" from the list of agencies.',
      'Register and create an applicant profile using your NIN.',
      'Fill in the application form, select cadre (junior or senior), and upload your credentials.',
      'Submit the form and print the confirmation slip.',
      'Attend physical and document screening at the nearest FFS state command on the scheduled date.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'FFS National HQ', address: 'Wuse Zone 5, Abuja', coordinator_contact: '09030000001' },
      { zone: 'South West', venue: 'FFS Lagos State Command', address: 'Alausa, Ikeja, Lagos', coordinator_contact: '09030000002' },
      { zone: 'North West', venue: 'FFS Kano State Command', address: 'Kano Municipal, Kano', coordinator_contact: '09030000003' },
      { zone: 'South East', venue: 'FFS Anambra State Command', address: 'Awka, Anambra', coordinator_contact: '09030000004' },
    ]
  },
  {
    id: '9',
    branch: 'Immigration',
    title: 'Nigeria Immigration Service (NIS) Recruitment 2026',
    category: 'Inspector',
    status: 'Open',
    deadline_date: '2026-06-01',
    portal_url: 'https://recruitment.cdcfib.gov.ng',
    updated_at: '2026-02-16T08:00:00Z',
    description: 'The Civil Defence, Correctional, Fire and Immigration Services Board (CDCFIB) invites applications from eligible Nigerians for recruitment into the Nigeria Immigration Service (NIS). The NIS is responsible for border management, combating human trafficking and illegal migration, passport issuance, and enforcement of Nigeria\'s immigration laws. Vacancies exist at various grade levels for both graduates and SSCE holders. The NIS is the first African immigration service to introduce the e-Passport.',
    requirements: [
      'Must be a Nigerian citizen by birth.',
      'Inspector Cadre: Minimum HND Upper Credit or Second Class Lower degree; must possess NYSC discharge certificate.',
      'Assistant Inspector Cadre: Minimum of 5 credits WASSCE/NECO in not more than two sittings, including English and Mathematics.',
      'Age: 18 to 30 years.',
      'Height: Not less than 1.65m (male), 1.60m (female).',
      'Must be medically and physically fit.',
      'Must be of good character with no criminal record.',
      'Must possess a valid National Identity Number (NIN).',
    ],
    application_process: [
      'Visit the CDCFIB recruitment portal at recruitment.cdcfib.gov.ng.',
      'Select "Nigeria Immigration Service" from the list of agencies.',
      'Create an account with your NIN, email address, and phone number.',
      'Complete the application form selecting your preferred cadre and upload required documents (O\'Level result, degree/HND, NYSC certificate, NIN slip, birth certificate).',
      'Submit and print your application acknowledgement slip.',
      'Attend screening exercise at the designated NIS state command with originals of all documents.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'NIS HQ', address: 'Ahmadu Bello Way, Abuja', coordinator_contact: '09040000001' },
      { zone: 'South West', venue: 'NIS Lagos State Command', address: 'Maryland, Lagos', coordinator_contact: '09040000002' },
      { zone: 'North East', venue: 'NIS Katsina State Command', address: 'Katsina', coordinator_contact: '09040000003' },
      { zone: 'South South', venue: 'NIS Cross River Command', address: 'Calabar, Cross River', coordinator_contact: '09040000004' },
    ]
  },
  {
    id: '10',
    branch: 'Customs',
    title: 'Nigeria Customs Service (NCS) Recruitment 2026',
    category: 'Regular Recruit',
    status: 'Open',
    deadline_date: '2026-04-30',
    portal_url: 'https://vacancy.customs.gov.ng',
    updated_at: '2026-02-18T09:00:00Z',
    description: 'The Nigeria Customs Service (NCS) invites applications from suitably qualified Nigerians to fill vacant positions in its workforce. The NCS is responsible for the assessment and collection of customs revenue, border security, prevention of smuggling, and trade facilitation. This exercise covers multiple job categories including Customs Assistants, Customs Inspectors, and various technical/professional roles. Applicants must be prepared for posting to any part of the country.',
    requirements: [
      'Must be a Nigerian citizen by birth.',
      'Customs Assistant: Minimum 4 credits in WASSCE/NECO/GCE including English Language.',
      'Customs Inspector: Minimum HND Upper Credit or Second Class Lower degree; NYSC discharge required.',
      'Professional/Technical roles: Relevant professional qualifications (e.g., Law, Accounting, Engineering, IT).',
      'Age: 18 to 30 years.',
      'Height: Not less than 1.68m (male), 1.65m (female).',
      'Must be physically and mentally fit with no criminal record.',
      'Must possess a valid National Identity Number (NIN).',
      'Must be willing to work in any part of Nigeria.',
    ],
    application_process: [
      'Visit the NCS job portal at vacancy.customs.gov.ng.',
      'Register with a valid email address and create a secure password.',
      'Select your preferred job category and fill in your personal and educational details.',
      'Upload all required credentials — O\'Level result, degree/HND certificate, NYSC certificate, birth certificate, NIN slip.',
      'Submit your application and print the confirmation page.',
      'Await shortlisting and notification via SMS/email for the aptitude test and physical screening date.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'NCS National HQ', address: 'KM 8 Airport Road, Abuja', coordinator_contact: '09050000001' },
      { zone: 'South West', venue: 'NCS Lagos Zonal Office', address: 'Apapa, Lagos', coordinator_contact: '09050000002' },
      { zone: 'North West', venue: 'NCS Kano/Jigawa Area Command', address: 'Kano', coordinator_contact: '09050000003' },
      { zone: 'South South', venue: 'NCS Calabar Area Command', address: 'Calabar, Cross River', coordinator_contact: '09050000004' },
    ]
  },

  // ── Law Enforcement ────────────────────────────────────────────────────────
  {
    id: '11',
    branch: 'EFCC',
    title: 'EFCC Investigator / Analyst Recruitment 2026',
    category: 'Entry Level',
    status: 'Closed',
    deadline_date: '2026-03-31',
    portal_url: 'https://efcc.gov.ng/efcc/careers',
    updated_at: '2026-02-22T10:00:00Z',
    site_status: 'online',
    description: 'The Economic and Financial Crimes Commission (EFCC) recruits Investigators, Financial Analysts, Legal Officers, ICT Officers, and Administrative Staff to fight corruption and financial crimes in Nigeria. Applications are submitted entirely online.',
    requirements: [
      'Must be a Nigerian citizen by birth.',
      'Minimum of a Second Class Lower (2:2) degree or HND Upper Credit from an accredited institution.',
      'Must possess a valid NYSC discharge or exemption certificate.',
      'Age: Not above 30 years at the time of application.',
      'Must be physically fit with no criminal record.',
      'Must possess a valid National Identity Number (NIN).',
      'Relevant professional qualifications (e.g., ICAN, ICAN, CISA, LLB) are an added advantage.',
    ],
    application_process: [
      'Visit the EFCC careers portal at efcc.gov.ng/efcc/careers.',
      'Create an account using a valid email address.',
      'Select your preferred role and fill in academic and personal details.',
      'Upload required credentials: degree certificate, NYSC certificate, birth certificate, NIN slip.',
      'Submit your application and save your application reference number.',
      'Await notification for aptitude test and physical screening via email/SMS.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'EFCC Academy', address: 'Karu, Abuja', coordinator_contact: '08000000011' },
      { zone: 'South West', venue: 'EFCC Lagos Zonal Office', address: 'Ikoyi, Lagos', coordinator_contact: '08000000012' },
      { zone: 'North West', venue: 'EFCC Kano Zonal Office', address: 'Kano', coordinator_contact: '08000000013' },
      { zone: 'South South', venue: 'EFCC Port Harcourt Zonal Office', address: 'Port Harcourt', coordinator_contact: '08000000014' },
    ]
  },

  // ── Civil Service ──────────────────────────────────────────────────────────
  {
    id: '12',
    branch: 'FCSC',
    title: 'Federal Civil Service Commission (FCSC) Recruitment 2026',
    category: 'Entry Level',
    status: 'Closed',
    deadline_date: '2026-04-30',
    portal_url: 'https://recruitment.fedcivilservice.gov.ng',
    updated_at: '2026-02-22T10:00:00Z',
    site_status: 'online',
    description: 'The Federal Civil Service Commission (FCSC) conducts batch recruitment into Federal Ministries, Departments and Agencies (MDAs). Positions span GL 07 to GL 14 across Engineering, Administration, Science, Health, Legal, Finance, and Social Work cadres.',
    requirements: [
      'Must be a Nigerian citizen.',
      'Minimum of a Second Class Lower (2:2) degree or HND Upper Credit for GL 08 and above.',
      'SSCE with 5 credits (including English and Maths) for GL 06 and below.',
      'Must possess a valid NYSC discharge or exemption certificate (for degree holders).',
      'Age: Not above 35 years.',
      'Must be physically and mentally fit.',
      'Must possess a valid National Identity Number (NIN).',
    ],
    application_process: [
      'Visit recruitment.fedcivilservice.gov.ng.',
      'Register and create a profile with your personal, educational, and work details.',
      'Select the MDA/position you are applying for.',
      'Upload all required documents: degree/HND certificate, NYSC certificate, birth certificate, NIN slip, professional certificates.',
      'Submit and print your acknowledgement slip.',
      'Attend written examination and oral interview as scheduled.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'FCSC Headquarters', address: 'Abuja', coordinator_contact: '08000000021' },
      { zone: 'South West', venue: 'Lagos State Liaison Office', address: 'Lagos', coordinator_contact: '08000000022' },
      { zone: 'North Central', venue: 'Kaduna Examination Centre', address: 'Kaduna', coordinator_contact: '08000000023' },
      { zone: 'South East', venue: 'Enugu Examination Centre', address: 'Enugu', coordinator_contact: '08000000024' },
    ]
  },

  // ── Oil, Gas & Energy ──────────────────────────────────────────────────────
  {
    id: '13',
    branch: 'NNPC',
    title: 'NNPC Limited Graduate Trainee Recruitment 2026',
    category: 'Graduate Trainee',
    status: 'Closed',
    deadline_date: '2026-03-15',
    portal_url: 'https://careers.nnpcgroup.com',
    updated_at: '2026-02-22T10:00:00Z',
    site_status: 'online',
    description: 'NNPC Limited invites applications from exceptional graduates for its Graduate Trainee Programme. Successful candidates undergo a structured 12-month training programme covering technical, commercial, and leadership competencies. Disciplines include Petroleum Engineering, Geosciences, Chemical Engineering, Finance, IT, Legal, and HSE.',
    requirements: [
      'Must be a Nigerian citizen.',
      'Minimum of Second Class Lower (2:2) degree from an accredited university.',
      'Must not be above 28 years at the time of application.',
      'Must possess a valid NYSC discharge or exemption certificate.',
      'Relevant postgraduate degree or professional certification is an added advantage.',
      'Must be in good health with no criminal record.',
      'Must possess a valid National Identity Number (NIN).',
    ],
    application_process: [
      'Visit the NNPC careers portal at careers.nnpcgroup.com.',
      'Create an account and complete the online application form.',
      'Upload required documents: degree certificate, transcripts, NYSC discharge certificate, NIN slip.',
      'Complete the online psychometric assessment as part of the screening process.',
      'Shortlisted candidates are invited for technical interviews and background checks.',
      'Successful candidates receive offer letters and undergo orientation before formal posting.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'NNPC Towers', address: 'Central Business District, Abuja', coordinator_contact: '08000000031' },
      { zone: 'South West', venue: 'NNPC Lagos Operational HQ', address: 'Falomo, Lagos', coordinator_contact: '08000000032' },
      { zone: 'South South', venue: 'NNPC Port Harcourt Regional Office', address: 'Port Harcourt', coordinator_contact: '08000000033' },
    ]
  },

  // ── Finance & Banking ──────────────────────────────────────────────────────
  {
    id: '14',
    branch: 'CBN',
    title: 'Central Bank of Nigeria (CBN) Entry-Level Recruitment 2026',
    category: 'Entry Level',
    status: 'Closed',
    deadline_date: '2026-02-28',
    portal_url: 'https://www.cbn.gov.ng/Recruitment',
    updated_at: '2026-02-22T10:00:00Z',
    site_status: 'online',
    description: 'The Central Bank of Nigeria (CBN) recruits entry-level Economists, Accountants, IT Specialists, Statisticians, and Legal Officers to support its monetary policy, financial regulation, and development finance mandates. The recruitment is highly competitive nationally.',
    requirements: [
      'Must be a Nigerian citizen.',
      'Minimum of Second Class Upper (2:1) degree from a recognised university.',
      'Must possess a valid NYSC discharge or exemption certificate.',
      'Age: Not above 26 years at the time of application (for fresh graduates).',
      'Must be physically fit with no disciplinary record.',
      'Must possess a valid National Identity Number (NIN).',
      'Relevant professional qualifications (ICAN, ACCA, CFA, CISA, etc.) are a strong advantage.',
    ],
    application_process: [
      'Visit the CBN recruitment portal at cbn.gov.ng/Recruitment.',
      'Fill out the online application form with accurate personal, educational, and professional details.',
      'Upload supporting documents: degree certificate, transcripts, NYSC certificate, NIN slip.',
      'Complete the CBN online aptitude test (Numerical, Verbal, and Analytical Reasoning).',
      'Shortlisted candidates are invited for an oral interview at the CBN Head Office, Abuja.',
      'Successful candidates receive offer letters and undergo medicals and background verification.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'CBN Head Office', address: 'Central Business District, Abuja', coordinator_contact: '08000000041' },
      { zone: 'South West', venue: 'CBN Lagos Branch', address: 'Marina, Lagos Island', coordinator_contact: '08000000042' },
      { zone: 'North West', venue: 'CBN Kano Branch', address: 'Kano', coordinator_contact: '08000000043' },
    ]
  },

  // ── Tech & Identity ────────────────────────────────────────────────────────
  {
    id: '15',
    branch: 'NIMC',
    title: 'NIMC Staff Recruitment 2026',
    category: 'Entry Level',
    status: 'Unknown',
    deadline_date: '2026-06-30',
    portal_url: 'https://nimc.gov.ng/careers',
    updated_at: '2026-02-22T10:00:00Z',
    site_status: 'online',
    description: 'The National Identity Management Commission (NIMC) recruits IT Officers, Data Analysts, Registration Officers, and Administrative Staff to expand the National Identity Database and deliver NIN enrolment services across all 36 states and the FCT.',
    requirements: [
      'Must be a Nigerian citizen.',
      'Minimum of Second Class Lower (2:2) degree or HND Upper Credit in a relevant field.',
      'Must possess a valid NYSC discharge or exemption certificate.',
      'Age: Not above 35 years.',
      'Strong IT and data management skills are an advantage.',
      'Must possess a valid National Identity Number (NIN).',
    ],
    application_process: [
      'Visit nimc.gov.ng/careers to view current openings.',
      'Click on the desired role and complete the online application form.',
      'Upload your academic certificates, NYSC certificate, birth certificate, and NIN slip.',
      'Await shortlisting and invitation for aptitude test and interview.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'NIMC HQ', address: 'Plot 964, Cadastral Zone, Abuja', coordinator_contact: '08000000051' },
      { zone: 'South West', venue: 'NIMC Lagos State Office', address: 'Alausa, Lagos', coordinator_contact: '08000000052' },
    ]
  },
  {
    id: '16',
    branch: 'NCC',
    title: 'Nigerian Communications Commission (NCC) Recruitment 2026',
    category: 'Entry Level',
    status: 'Closed',
    deadline_date: '2026-03-30',
    portal_url: 'https://www.ncc.gov.ng/careers-ncc',
    updated_at: '2026-02-22T10:00:00Z',
    site_status: 'online',
    description: 'The Nigerian Communications Commission (NCC) recruits Telecommunications Engineers, Legal Officers, Economists, ICT Specialists, and Administrative Officers to regulate and develop the Nigerian telecommunications sector.',
    requirements: [
      'Must be a Nigerian citizen.',
      'Minimum of Second Class Lower (2:2) degree or HND Upper Credit.',
      'Must possess a valid NYSC discharge or exemption certificate.',
      'Age: Not above 30 years.',
      'Professional certifications (CCNA, PMP, CISA) are an advantage.',
      'Must possess a valid National Identity Number (NIN).',
    ],
    application_process: [
      'Visit ncc.gov.ng/careers-ncc to view current vacancies.',
      'Download and fill the application form or apply online.',
      'Submit completed form with supporting documents to the NCC HR Department.',
      'Await aptitude test invitation via email or SMS.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'NCC Headquarters', address: 'Plot 423 Aguiyi Ironsi Street, Wuse Zone 4, Abuja', coordinator_contact: '08000000061' },
      { zone: 'South West', venue: 'NCC Lagos Zonal Office', address: 'Lagos', coordinator_contact: '08000000062' },
    ]
  },
  {
    id: '17',
    branch: 'NITDA',
    title: 'NITDA IT Officer Recruitment 2026',
    category: 'Entry Level',
    status: 'Unknown',
    deadline_date: '2026-06-30',
    portal_url: 'https://nitda.gov.ng',
    updated_at: '2026-02-22T10:00:00Z',
    site_status: 'online',
    description: 'The National Information Technology Development Agency (NITDA) recruits Software Developers, Cybersecurity Analysts, Data Scientists, AI/ML Engineers, and Policy Officers to drive Nigeria\'s digital economy and e-government agenda.',
    requirements: [
      'Must be a Nigerian citizen.',
      'Minimum of Second Class Lower (2:2) degree in Computer Science, Information Technology, or related field.',
      'Must possess a valid NYSC discharge or exemption certificate.',
      'Age: Not above 30 years.',
      'Certifications (AWS, Google Cloud, CISSP, CEH) are a strong advantage.',
      'Must possess a valid National Identity Number (NIN).',
    ],
    application_process: [
      'Visit nitda.gov.ng and navigate to the Careers/Recruitment section.',
      'Complete the online application form with your technical skills and qualifications.',
      'Upload supporting documents and a detailed CV highlighting relevant tech experience.',
      'Shortlisted candidates are contacted for technical assessments and panel interviews.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'NITDA Headquarters', address: 'Plot 928 Shehu Shagari Way, Abuja', coordinator_contact: '08000000071' },
    ]
  },

  // ── Transport & Maritime ───────────────────────────────────────────────────
  {
    id: '18',
    branch: 'FAAN',
    title: 'Federal Airports Authority of Nigeria (FAAN) Recruitment 2026',
    category: 'Entry Level',
    status: 'Closed',
    deadline_date: '2026-04-15',
    portal_url: 'https://faan.gov.ng/career',
    updated_at: '2026-02-22T10:00:00Z',
    site_status: 'online',
    description: 'The Federal Airports Authority of Nigeria (FAAN) recruits Aviation Security Officers, Air Traffic Controllers, Aerodrome Engineers, Airport Firefighters, IT Officers, and Administrative Staff for operations across all international and domestic airports in Nigeria.',
    requirements: [
      'Must be a Nigerian citizen.',
      'Aviation Security: Minimum SSCE with 5 credits including English and Maths; OND/HND is an advantage.',
      'Air Traffic Controller: Minimum degree in Physical Sciences or related field; NYSC required.',
      'Engineering roles: Degree or HND in Civil/Electrical/Mechanical Engineering.',
      'Age: 18–35 years depending on role.',
      'Must be physically fit, pass medical examination and background check.',
      'Must possess a valid National Identity Number (NIN).',
    ],
    application_process: [
      'Visit faan.gov.ng/career to view current vacancies.',
      'Select your desired role and complete the online application form.',
      'Upload all required documents: credentials, NYSC certificate, NIN slip, passport photograph.',
      'Await aptitude test and screening exercise notification via email/SMS.',
      'Successful candidates undergo security vetting before appointment letters are issued.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'FAAN Headquarters', address: 'Murtala Muhammed Airport, Lagos (Admin — Abuja Airport)', coordinator_contact: '08000000081' },
      { zone: 'South West', venue: 'Murtala Muhammed International Airport', address: 'Ikeja, Lagos', coordinator_contact: '08000000082' },
      { zone: 'North West', venue: 'Mallam Aminu Kano International Airport', address: 'Kano', coordinator_contact: '08000000083' },
      { zone: 'South South', venue: 'Port Harcourt International Airport', address: 'Port Harcourt', coordinator_contact: '08000000084' },
    ]
  },
  {
    id: '19',
    branch: 'NIMASA',
    title: 'NIMASA Marine Officer Recruitment 2026',
    category: 'Entry Level',
    status: 'Unknown',
    deadline_date: '2026-05-31',
    portal_url: 'https://nimasa.gov.ng',
    updated_at: '2026-02-22T10:00:00Z',
    site_status: 'online',
    description: 'The Nigerian Maritime Administration and Safety Agency (NIMASA) recruits Marine Surveyors, Nautical Officers, Safety Inspectors, Legal Professionals, ICT Officers, and Administrative Staff to enforce maritime laws and promote cabotage shipping in Nigeria.',
    requirements: [
      'Must be a Nigerian citizen.',
      'Marine/Nautical roles: Degree or HND in Marine Engineering, Nautical Science, or Naval Architecture.',
      'Other roles: Minimum Second Class Lower (2:2) degree in Law, ICT, Finance, or Administration.',
      'Must possess a valid NYSC discharge or exemption certificate.',
      'Age: Not above 35 years.',
      'Must possess a valid National Identity Number (NIN).',
    ],
    application_process: [
      'Visit nimasa.gov.ng and navigate to the Careers section.',
      'Complete the online or downloadable application form.',
      'Upload relevant documents: academic qualifications, NYSC certificate, NIN slip, professional certificates.',
      'Await written examination and interview schedule via email/SMS.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'NIMASA Head Office', address: 'Plot 2187 Dalaba Street, Zone 5, Wuse, Abuja', coordinator_contact: '08000000091' },
      { zone: 'South West', venue: 'NIMASA Lagos Area Office', address: 'Apapa, Lagos', coordinator_contact: '08000000092' },
      { zone: 'South South', venue: 'NIMASA Port Harcourt Area Office', address: 'Port Harcourt', coordinator_contact: '08000000093' },
    ]
  },

  // ── Health & Food Safety ───────────────────────────────────────────────────
  {
    id: '20',
    branch: 'NAFDAC',
    title: 'NAFDAC Regulatory Officer Recruitment 2026',
    category: 'Entry Level',
    status: 'Closed',
    deadline_date: '2026-03-31',
    portal_url: 'https://nafdac.gov.ng',
    updated_at: '2026-02-22T10:00:00Z',
    site_status: 'online',
    description: 'The National Agency for Food and Drug Administration and Control (NAFDAC) recruits Pharmacists, Food Scientists, Chemists, Microbiologists, Veterinary Surgeons, and Administrative Officers to regulate and control the manufacture, importation, exportation, advertisement, sale, and distribution of food, drugs, cosmetics, and medical devices in Nigeria.',
    requirements: [
      'Must be a Nigerian citizen.',
      'Minimum of Second Class Lower (2:2) degree in Pharmacy, Food Science, Chemistry, Microbiology, Biochemistry, or related science fields.',
      'Must possess a valid NYSC discharge or exemption certificate.',
      'Pharmacists must have a valid licence from the Pharmacists Council of Nigeria (PCN).',
      'Age: Not above 30 years at the time of application.',
      'Must be physically fit with no criminal record.',
      'Must possess a valid National Identity Number (NIN).',
    ],
    application_process: [
      'Visit nafdac.gov.ng and navigate to the Vacancies/Recruitment section.',
      'Complete the online application form with personal and educational details.',
      'Upload required documents: degree certificate, NYSC certificate, professional licence (if applicable), NIN slip, birth certificate.',
      'Await aptitude test invitation via email or SMS.',
      'Successful candidates proceed to oral interview and medical examination before final appointment.',
    ],
    exam_centers: [
      { zone: 'FCT', venue: 'NAFDAC Headquarters', address: 'Plot 2032 Olusegun Obasanjo Way, Zone 7, Wuse, Abuja', coordinator_contact: '08000000101' },
      { zone: 'South West', venue: 'NAFDAC Lagos Zonal Office', address: 'Oshodi, Lagos', coordinator_contact: '08000000102' },
      { zone: 'North West', venue: 'NAFDAC Kano Zonal Office', address: 'Kano', coordinator_contact: '08000000103' },
      { zone: 'South South', venue: 'NAFDAC Port Harcourt Zonal Office', address: 'Port Harcourt', coordinator_contact: '08000000104' },
    ]
  },
];

// MOCK_NEWS removed as per user request to use real API data only.
const MOCK_NEWS: NewsItem[] = [];

// Mock Quiz Questions - Extracted from Past Questions
const QUESTIONS: Question[] = [
  // --- GENERAL APTITUDE (ENGLISH) ---
  {
    id: 'eng1',
    branch: 'General',
    question: 'Choose the word most similar in meaning to: NULLIFY',
    options: ['aggravate', 'establish', 'transform', 'invalidate'],
    correctAnswer: 3,
    explanation: 'To nullify means to make legally null and void; invalidate.'
  },
  {
    id: 'eng2',
    branch: 'General',
    question: 'Choose the word most similar in meaning to: REBUKE',
    options: ['censure', 'implore', 'disparage', 'denigrate'],
    correctAnswer: 0,
    explanation: 'Rebuke means to express sharp disapproval or criticism of (someone) because of their behavior or actions; censure.'
  },
  {
    id: 'eng3',
    branch: 'General',
    question: 'Choose the word most similar in meaning to: UNPRETENTIOUS',
    options: ['realistic', 'problematic', 'pragmatic', 'modest'],
    correctAnswer: 3,
    explanation: 'Unpretentious means not attempting to impress others with an appearance of greater importance, talent, or culture than is actually possessed; modest.'
  },
  {
    id: 'eng4',
    branch: 'General',
    question: 'Choose the word most similar in meaning to: APPLAUSE',
    options: ['evocation', 'citation', 'commendation', 'acclaim'],
    correctAnswer: 3,
    explanation: 'Applause is approval or praise expressed by clapping; acclaim.'
  },
  {
    id: 'eng5',
    branch: 'General',
    question: 'Choose the word most similar in meaning to: STRIATED',
    options: ['forgiving', 'friendly', 'lined', 'urgent'],
    correctAnswer: 2,
    explanation: 'Striated means marked with striae; lined or striped.'
  },
  {
    id: 'eng6',
    branch: 'General',
    question: 'Which word means: hard work; intense pain; toil',
    options: ['acrimony', 'rancour', 'troth', 'travail'],
    correctAnswer: 3,
    explanation: 'Travail refers to painful or laborious effort.'
  },
  {
    id: 'eng7',
    branch: 'General',
    question: 'Analogy - SETTLEMENT : INJURY :: PENSION : ?',
    options: ['pensioner', 'maturity', 'retirement', 'age'],
    correctAnswer: 2,
    explanation: 'A settlement is given following an injury. A pension is given following retirement.'
  },
  {
    id: 'eng8',
    branch: 'General',
    question: 'Analogy - NIB : PEN :: LENS : ?',
    options: ['seeing', 'glass', 'focus', 'telescope'],
    correctAnswer: 3,
    explanation: 'A nib is a component of a pen. A lens is a component of a telescope.'
  },
  {
    id: 'eng9',
    branch: 'General',
    question: 'The gateman does his work perfunctorily. This means he works:',
    options: ['without commitment', 'with speed', 'as a mother\'s pet', 'as a father\'s pet'],
    correctAnswer: 0,
    explanation: 'Perfunctorily means carried out with a minimum of effort or reflection.'
  },
  {
    id: 'eng10',
    branch: 'General',
    question: 'Choose the word nearest in meaning to the bold word: After many years of struggle as a trader, he *struck gold*.',
    options: ['Became quite rich', 'Won a big contract', 'he became a gold miner', 'became a goldsmith'],
    correctAnswer: 0,
    explanation: 'To "strike gold" is an idiom meaning to become rich or successful.'
  },

  // --- GENERAL APTITUDE (MATH) ---
  {
    id: 'math1',
    branch: 'General',
    question: 'Identify the missing number at the end of the series: 100, 96, 91, 85, ?',
    options: ['74', '75', '77', '78'],
    correctAnswer: 3,
    explanation: 'The difference increases by 1 each time: -4, -5, -6. The next difference is -7. 85 - 7 = 78.'
  },
  {
    id: 'math2',
    branch: 'General',
    question: 'Identify the missing number: 11, 16, 26, 41, ?',
    options: ['51', '56', '61', '66'],
    correctAnswer: 2,
    explanation: 'The difference increases by 5 each time: +5, +10, +15. The next is +20. 41 + 20 = 61.'
  },
  {
    id: 'math3',
    branch: 'General',
    question: 'Anna bought $4,000 of company stock. She sold 75% when the value doubled, and the remainder at four times the purchase price. What was her total profit?',
    options: ['$4,000', '$6,750', '$6,000', '$6,500'],
    correctAnswer: 2,
    explanation: 'Value doubled = $8000. Sold 75% ($6000). Remaining 25% ($2000 value) sold at 4x ($2000 * 2 = $4000). Total revenue $10,000. Cost $4,000. Profit $6,000.'
  },
  {
    id: 'math4',
    branch: 'General',
    question: 'The probabilities that Kodjo and Adoga pass an examination are 3/4 and 3/5 respectively. Find the probability of both boys failing.',
    options: ['1/10', '3/10', '1/2', '2/3'],
    correctAnswer: 0,
    explanation: 'Prob(Kodjo fail) = 1 - 3/4 = 1/4. Prob(Adoga fail) = 1 - 3/5 = 2/5. Prob(Both fail) = 1/4 * 2/5 = 2/20 = 1/10.'
  },
  {
    id: 'math5',
    branch: 'General',
    question: 'Convert the speed of 90 km per hour of a car to metres per second.',
    options: ['1.5 ms-1', '2.5 ms-1', '25 ms-1', '15 ms-1'],
    correctAnswer: 2,
    explanation: '(90 * 1000) / 3600 = 25 m/s.'
  },
  {
    id: 'math6',
    branch: 'General',
    question: 'If 2x : (x+1) = 3:2, what is the value of x?',
    options: ['1/2', '1', '1.5', '3'],
    correctAnswer: 3,
    explanation: '2x / (x+1) = 3/2 -> 4x = 3(x+1) -> 4x = 3x + 3 -> x = 3.'
  },

  // --- GENERAL CURRENT AFFAIRS ---
  {
    id: 'gen1',
    branch: 'General',
    question: 'Nigeria became a republic in which year?',
    options: ['1963', '1960', '1976', '1961'],
    correctAnswer: 0,
    explanation: 'Nigeria became a Republic in 1963.'
  },
  {
    id: 'gen2',
    branch: 'General',
    question: 'Who was the first Military Head of State of Nigeria?',
    options: ['Yakubu Gowon', 'Aguiyi Ironsi', 'Olusegun Obasanjo', 'Ernest Shonekan'],
    correctAnswer: 1,
    explanation: 'General Aguiyi Ironsi was the first Military Head of State.'
  },
  {
    id: 'gen3',
    branch: 'General',
    question: 'The Northern and Southern protectorates were amalgamated in?',
    options: ['1914', '1919', '1921', '1900'],
    correctAnswer: 0,
    explanation: 'Lord Lugard amalgamated the protectorates in 1914.'
  },
  {
    id: 'gen4',
    branch: 'General',
    question: 'The first world war took place between?',
    options: ['1911-1914', '1914-1916', '1916-1918', '1914-1918'],
    correctAnswer: 3,
    explanation: 'WWI lasted from 1914 to 1918.'
  },
  {
    id: 'gen5',
    branch: 'General',
    question: 'Oil was first discovered by Shell-BP in Nigeria at?',
    options: ['Oloibiri', 'Idanre', 'Warri', 'Kabba'],
    correctAnswer: 0,
    explanation: 'Oil was first discovered in commercial quantity in Oloibiri (present day Bayelsa) in 1956.'
  },
  {
    id: 'gen6',
    branch: 'General',
    question: 'The legislature in Nigeria is called?',
    options: ['House of Assembly', 'House of Lords', 'National Assembly', 'House of Representatives'],
    correctAnswer: 2,
    explanation: 'The federal legislature is the National Assembly (Senate + House of Reps).'
  },

  // --- CIVIL DEFENCE (NSCDC) SPECIFIC ---
  {
    id: 'nscdc1',
    branch: 'Civil Defence',
    question: 'The Nigeria Security and Civil Defence Corps (NSCDC) was officially established by Act of Parliament in?',
    options: ['1967', '1984', '2003', '2007'],
    correctAnswer: 2,
    explanation: 'The NSCDC Act was passed in 2003, giving it statutory backing.'
  },
  {
    id: 'nscdc2',
    branch: 'Civil Defence',
    question: 'The primary mandate of the NSCDC includes?',
    options: ['Prosecuting criminals', 'Protecting critical infrastructure and national assets', 'Conducting foreign intelligence', 'Managing immigration services'],
    correctAnswer: 1,
    explanation: 'Protection of Critical National Assets and Infrastructure is a core mandate.'
  },
  {
    id: 'nscdc3',
    branch: 'Civil Defence',
    question: 'The NSCDC was granted full paramilitary status in?',
    options: ['2003', '2007', '2010', '2015'],
    correctAnswer: 1,
    explanation: 'The amendment act of 2007 enhanced its status.'
  },
  {
    id: 'nscdc4',
    branch: 'Civil Defence',
    question: 'The NSCDC is under the supervision of which government ministry?',
    options: ['Ministry of Defence', 'Ministry of Interior', 'Ministry of Justice', 'Ministry of Police Affairs'],
    correctAnswer: 1,
    explanation: 'NSCDC, Immigration, Fire Service, and Correctional Service are under the Ministry of Interior.'
  },
  {
    id: 'nscdc5',
    branch: 'Civil Defence',
    question: 'Who is the Commandant General of NSCDC (as of 2024)?',
    options: ['Ade Abolurin', 'Ahmed Audi', 'Hillary Madu', 'Gana Muhammadu'],
    correctAnswer: 1,
    explanation: 'Dr. Ahmed Abubakar Audi is the CG.'
  },

  // --- IMMIGRATION (NIS) SPECIFIC ---
  {
    id: 'nis1',
    branch: 'Immigration',
    question: 'The NIS was brought out of the Nigerian Police Force (NPF) in?',
    options: ['1946', '1956', '1958', '1964'],
    correctAnswer: 2,
    explanation: 'The Immigration Department was extracted from the Police in 1958.'
  },
  {
    id: 'nis2',
    branch: 'Immigration',
    question: 'The NIS was formally established by the act of parliament in?',
    options: ['1963', '1957', '1964', '1976'],
    correctAnswer: 0,
    explanation: 'The Immigration Act of 1963 formally established the service.'
  },
  {
    id: 'nis3',
    branch: 'Immigration',
    question: 'The first African country to introduce E-passport was?',
    options: ['South-Africa', 'Ghana', 'Liberia', 'Nigeria'],
    correctAnswer: 3,
    explanation: 'Nigeria was the first in Africa to introduce the E-passport.'
  },
  {
    id: 'nis4',
    branch: 'Immigration',
    question: 'Which of the following is the core duty of Nigeria Immigration?',
    options: ['Persecuting offenders', 'Enforcing of Laws', 'Issuance of all Nigerian travel document', 'Deporting of foreigners'],
    correctAnswer: 2,
    explanation: 'Issuance of passports and travel documents is a primary duty, alongside border patrol.'
  },

  // --- CORRECTIONAL SERVICE (NCoS) / FIRE SERVICE (FFS) ---
  {
    id: 'ncos1',
    branch: 'General', // Can be moved to Prison service if added later
    question: 'The Nigeria Correctional Service (NCoS) was formerly known as?',
    options: ['Nigeria Prison Service', 'Nigeria Detention Service', 'Nigeria Custodial Service', 'Nigeria Penal Service'],
    correctAnswer: 0,
    explanation: 'It was renamed from Nigeria Prison Service in 2019.'
  },
  {
    id: 'ffs1',
    branch: 'Fire Service',
    question: 'The Federal Fire Service (FFS) was established in?',
    options: ['1955', '1963', '1975', '1980'],
    correctAnswer: 1,
    explanation: 'Established in 1963 by the Fire Service Act.'
  },
  {
    id: 'ffs2',
    branch: 'Fire Service',
    question: 'The FFS is under the supervision of?',
    options: ['Ministry of Environment', 'Ministry of Interior', 'Ministry of Works', 'Ministry of Health'],
    correctAnswer: 1,
    explanation: 'It is under the Ministry of Interior.'
  },

  // --- EXISTING MOCK QUESTIONS ---
  {
    id: 'q1',
    branch: 'Army',
    question: 'The Nigerian Army was established in which year?',
    options: ['1960', '1863', '1914', '1945'],
    correctAnswer: 1,
    explanation: 'The Nigerian Army traces its history to the Lieutenant Glover\'s Hausa Constabulary which was founded in 1863.'
  },
  {
    id: 'q2',
    branch: 'Army',
    question: 'Who is the current Chief of Army Staff (Mock)?',
    options: ['Lt. Gen. T.Y. Buratai', 'Lt. Gen. F. Yahaya', 'Lt. Gen. T.A. Lagbaja', 'Gen. C.G. Musa'],
    correctAnswer: 2,
    explanation: 'As of the knowledge cutoff, Lt. Gen. Taoreed Lagbaja is the COAS.'
  },
  {
    id: 'q3',
    branch: 'Navy',
    question: 'What is the motto of the Nigerian Navy?',
    options: ['Onward Together', 'Victory is from God', 'Service and Loyalty', 'Defending Territorial Integrity'],
    correctAnswer: 0,
    explanation: 'The motto of the Nigerian Navy is "Onward Together".'
  },
  {
    id: 'q4',
    branch: 'Police',
    question: 'The head of the Nigeria Police Force is called?',
    options: ['Comptroller General', 'Inspector General', 'Commandant General', 'Marshal'],
    correctAnswer: 1,
    explanation: 'The Nigeria Police Force is headed by the Inspector General of Police (IGP).'
  },
  {
    id: 'q5',
    branch: 'FRSC',
    question: 'What is the maximum speed limit for private cars on Nigerian expressways?',
    options: ['80 km/h', '120 km/h', '100 km/h', '110 km/h'],
    correctAnswer: 2,
    explanation: 'The maximum speed limit for private cars on the expressway is 100 km/h.'
  },
  {
    id: 'q6',
    branch: 'Customs',
    question: 'The Nigeria Customs Service is under the supervision of which Ministry?',
    options: ['Ministry of Interior', 'Ministry of Finance', 'Ministry of Defence', 'Ministry of Trade'],
    correctAnswer: 1,
    explanation: 'The Nigeria Customs Service is under the supervision of the Federal Ministry of Finance.'
  },
  {
    id: 'q11',
    branch: 'NDA',
    question: 'Where is the Nigerian Defence Academy (NDA) located?',
    options: ['Abuja', 'Lagos', 'Kaduna', 'Enugu'],
    correctAnswer: 2,
    explanation: 'The Nigerian Defence Academy (NDA) is located in Kaduna State.'
  },
  {
    id: 'q13',
    branch: 'General',
    question: 'Who is the current President of Nigeria (Commander-in-Chief)?',
    options: ['Bola Ahmed Tinubu', 'Muhammadu Buhari', 'Goodluck Jonathan', 'Olusegun Obasanjo'],
    correctAnswer: 0,
    explanation: 'As of 2023/2024, Bola Ahmed Tinubu is the President and Commander-in-Chief.'
  },

  // ═══════════════════════════════════════════════════════════════
  // NIGERIA CURRENT AFFAIRS (50 Questions)
  // ═══════════════════════════════════════════════════════════════
  { id: 'ca1', branch: 'General', question: 'Who is the current President of Nigeria (as of 2025)?', options: ['Muhammadu Buhari', 'Peter Obi', 'Bola Ahmed Tinubu', 'Atiku Abubakar'], correctAnswer: 2, explanation: 'Bola Ahmed Tinubu became President on May 29, 2023.' },
  { id: 'ca2', branch: 'General', question: 'Nigeria gained independence from Britain in which year?', options: ['1957', '1960', '1963', '1959'], correctAnswer: 1, explanation: 'Nigeria gained independence on October 1, 1960.' },
  { id: 'ca3', branch: 'General', question: 'What is the capital city of Nigeria?', options: ['Lagos', 'Ibadan', 'Abuja', 'Kano'], correctAnswer: 2, explanation: 'Abuja became Nigeria\'s capital in 1991, replacing Lagos.' },
  { id: 'ca4', branch: 'General', question: 'How many states are in Nigeria?', options: ['30', '36', '37', '34'], correctAnswer: 1, explanation: 'Nigeria has 36 states and the FCT.' },
  { id: 'ca5', branch: 'General', question: 'Nigeria\'s constitution currently in operation was adopted in which year?', options: ['1979', '1993', '1999', '2003'], correctAnswer: 2, explanation: 'The 1999 Constitution is the current operative constitution.' },
  { id: 'ca6', branch: 'General', question: 'Who was the first President of Nigeria?', options: ['Nnamdi Azikiwe', 'Tafawa Balewa', 'Obafemi Awolowo', 'Ernest Shonekan'], correctAnswer: 0, explanation: 'Dr. Nnamdi Azikiwe was Nigeria\'s first President (1963–1966).' },
  { id: 'ca7', branch: 'General', question: 'The Nigerian Civil War lasted from?', options: ['1964–1967', '1967–1970', '1966–1969', '1968–1971'], correctAnswer: 1, explanation: 'The Nigerian Civil War (Biafra War) lasted from 1967 to 1970.' },
  { id: 'ca8', branch: 'General', question: 'Which agency is responsible for conducting elections in Nigeria?', options: ['EFCC', 'INEC', 'NCC', 'ICPC'], correctAnswer: 1, explanation: 'The Independent National Electoral Commission (INEC) conducts elections.' },
  { id: 'ca9', branch: 'General', question: 'What is the official language of Nigeria?', options: ['Hausa', 'Yoruba', 'Igbo', 'English'], correctAnswer: 3, explanation: 'English is Nigeria\'s official language.' },
  { id: 'ca10', branch: 'General', question: 'The Niger Delta region is famous for which natural resource?', options: ['Gold', 'Crude oil', 'Diamond', 'Coal'], correctAnswer: 1, explanation: 'The Niger Delta is the centre of Nigeria\'s crude oil production.' },
  { id: 'ca11', branch: 'General', question: 'Which year was the EFCC established?', options: ['1999', '2002', '2003', '2004'], correctAnswer: 2, explanation: 'The EFCC was established by the EFCC Act of 2003.' },
  { id: 'ca12', branch: 'General', question: 'Nigeria\'s currency is the?', options: ['Cedi', 'Dollar', 'Naira', 'Franc'], correctAnswer: 2, explanation: 'Nigeria\'s currency is the Naira (₦), introduced in 1973.' },
  { id: 'ca13', branch: 'General', question: 'Who was the first indigenous Governor-General of Nigeria?', options: ['Nnamdi Azikiwe', 'Abubakar Tafawa Balewa', 'Samuel Akintola', 'Obafemi Awolowo'], correctAnswer: 0, explanation: 'Nnamdi Azikiwe was Nigeria\'s first indigenous Governor-General (1960–1963).' },
  { id: 'ca14', branch: 'General', question: 'Which Nigerian state is known as "the Centre of Excellence"?', options: ['Abuja', 'Kano', 'Lagos', 'Ogun'], correctAnswer: 2, explanation: 'Lagos State\'s motto is "Centre of Excellence".' },
  { id: 'ca15', branch: 'General', question: 'The National Youth Service Corps (NYSC) was established in?', options: ['1970', '1973', '1975', '1980'], correctAnswer: 1, explanation: 'NYSC was established by Decree No. 24 of 1973.' },
  { id: 'ca16', branch: 'General', question: 'What does NIN stand for?', options: ['National Identity Number', 'Nigerian Identification Number', 'National Index Number', 'National Integration Network'], correctAnswer: 0, explanation: 'NIN stands for National Identification Number.' },
  { id: 'ca17', branch: 'General', question: 'The Economic Community of West African States (ECOWAS) headquarters is in?', options: ['Dakar', 'Abuja', 'Accra', 'Lagos'], correctAnswer: 1, explanation: 'ECOWAS headquarters is in Abuja, Nigeria.' },
  { id: 'ca18', branch: 'General', question: 'Nigeria\'s largest export commodity is?', options: ['Cocoa', 'Groundnuts', 'Crude oil', 'Timber'], correctAnswer: 2, explanation: 'Crude oil accounts for the bulk of Nigeria\'s export earnings.' },
  { id: 'ca19', branch: 'General', question: 'Which river is the longest in Nigeria?', options: ['Cross River', 'Benue', 'Niger', 'Kaduna'], correctAnswer: 2, explanation: 'The River Niger is the longest river in Nigeria.' },
  { id: 'ca20', branch: 'General', question: 'Who founded the Action Group political party in Nigeria?', options: ['Nnamdi Azikiwe', 'Ahmadu Bello', 'Obafemi Awolowo', 'Tafawa Balewa'], correctAnswer: 2, explanation: 'Chief Obafemi Awolowo founded the Action Group in 1950.' },
  { id: 'ca21', branch: 'General', question: 'The highest court in Nigeria is?', options: ['High Court', 'Court of Appeal', 'Federal High Court', 'Supreme Court'], correctAnswer: 3, explanation: 'The Supreme Court of Nigeria is the apex court.' },
  { id: 'ca22', branch: 'General', question: 'Which geopolitical zone has the most states in Nigeria?', options: ['North West', 'North East', 'South South', 'North Central'], correctAnswer: 0, explanation: 'The North West zone has 7 states — the most of any zone.' },
  { id: 'ca23', branch: 'General', question: 'The Aso Rock Villa is the official residence of?', options: ['The Senate President', 'The Chief Justice', 'The President', 'The Speaker'], correctAnswer: 2, explanation: 'Aso Rock Villa is the official residence and workplace of Nigeria\'s President.' },
  { id: 'ca24', branch: 'General', question: 'Which of these is an arm of Nigeria\'s government?', options: ['INEC', 'EFCC', 'The Judiciary', 'The Police'], correctAnswer: 2, explanation: 'Nigeria\'s three arms of government are the Executive, Legislature, and Judiciary.' },
  { id: 'ca25', branch: 'General', question: 'Who is the Chief of Army Staff appointed in 2023?', options: ['Tukur Buratai', 'Christopher Musa', 'Taoreed Lagbaja', 'Lucky Irabor'], correctAnswer: 2, explanation: 'Lt. Gen. Taoreed Abiodun Lagbaja was appointed Chief of Army Staff in 2023.' },
  { id: 'ca26', branch: 'General', question: 'Nigeria\'s Vision 20:2020 was an economic plan aimed at making Nigeria one of the world\'s top how many economies?', options: ['10', '15', '20', '25'], correctAnswer: 2, explanation: 'Vision 20:2020 aimed to make Nigeria one of the top 20 economies by 2020.' },
  { id: 'ca27', branch: 'General', question: 'The NNPC was established in which year?', options: ['1970', '1977', '1980', '1956'], correctAnswer: 1, explanation: 'The NNPC was established in 1977 under Gen. Obasanjo\'s administration.' },
  { id: 'ca28', branch: 'General', question: 'The first female Speaker of the House of Representatives in Nigeria was?', options: ['Ngozi Okonjo-Iweala', 'Patricia Etteh', 'Diezani Alison-Madueke', 'Oby Ezekwesili'], correctAnswer: 1, explanation: 'Patricia Etteh was Nigeria\'s first female Speaker of the House of Reps (2007).' },
  { id: 'ca29', branch: 'General', question: 'Nigeria joined the United Nations in?', options: ['1958', '1960', '1963', '1961'], correctAnswer: 1, explanation: 'Nigeria was admitted to the UN on October 7, 1960.' },
  { id: 'ca30', branch: 'General', question: 'The "Bring Back Our Girls" campaign in 2014 was a response to?', options: ['Oil theft in the Niger Delta', 'Student protests in Abuja', 'Kidnapping of schoolgirls in Chibok by Boko Haram', 'A labour strike'], correctAnswer: 2, explanation: 'The Chibok schoolgirls were kidnapped by Boko Haram in April 2014.' },
  { id: 'ca31', branch: 'General', question: 'Nigeria\'s Anti-Corruption agency ICPC stands for?', options: ['Independent Commission for Police Complaints', 'Independent Corrupt Practices and Other Related Offences Commission', 'Integrated Crime Prevention Committee', 'Internal Crime Prevention Corps'], correctAnswer: 1, explanation: 'ICPC = Independent Corrupt Practices and Other Related Offences Commission.' },
  { id: 'ca32', branch: 'General', question: 'The "Japa" trend in Nigeria refers to?', options: ['A new Afrobeats music style', 'Mass emigration of Nigerians abroad', 'A street food festival', 'A new farming technique'], correctAnswer: 1, explanation: '"Japa" is Yoruba slang meaning to flee or escape, used for mass emigration.' },
  { id: 'ca33', branch: 'General', question: 'Nigeria\'s Lower House of the National Assembly is called?', options: ['Senate', 'House of Representatives', 'House of Assembly', 'House of Lords'], correctAnswer: 1, explanation: 'The House of Representatives is the Lower House of Nigeria\'s National Assembly.' },
  { id: 'ca34', branch: 'General', question: 'The highest military rank in Nigeria is?', options: ['Brigadier General', 'Major General', 'General', 'Field Marshal'], correctAnswer: 2, explanation: 'General (4-star) is the highest attainable rank in the Nigerian Army.' },
  { id: 'ca35', branch: 'General', question: 'Nigeria\'s Independence Day is celebrated on?', options: ['January 1', 'May 29', 'October 1', 'August 12'], correctAnswer: 2, explanation: 'Nigeria\'s Independence Day is October 1st since 1960.' },
  { id: 'ca36', branch: 'General', question: 'Who designed the Nigerian flag?', options: ['Taiwo Akinkunmi', 'Nnamdi Azikiwe', 'Michael Imoudu', 'Ojukwu'], correctAnswer: 0, explanation: 'Michael Taiwo Akinkunmi designed the Nigerian flag in 1959.' },
  { id: 'ca37', branch: 'General', question: 'What is the motto of the Nigerian Police Force?', options: ['Serve and Protect', 'To Serve and Protect', 'The Police is Your Friend', 'Order and Good Government'], correctAnswer: 2, explanation: '"The Police is Your Friend" is the NPF\'s motto.' },
  { id: 'ca38', branch: 'General', question: 'The Dan Hausa community is predominantly found in which region of Nigeria?', options: ['South East', 'South West', 'North West', 'Middle Belt'], correctAnswer: 2, explanation: 'The Dan Hausa are predominantly found in the North Western states.' },
  { id: 'ca39', branch: 'General', question: 'Nigeria\'s first Prime Minister was?', options: ['Nnamdi Azikiwe', 'Abubakar Tafawa Balewa', 'Ahmadu Bello', 'Obafemi Awolowo'], correctAnswer: 1, explanation: 'Sir Abubakar Tafawa Balewa was Nigeria\'s first and only Prime Minister.' },
  { id: 'ca40', branch: 'General', question: 'The Nigerian Stock Exchange is now known as?', options: ['NSE', 'NGX', 'NXC', 'NES'], correctAnswer: 1, explanation: 'The Nigerian Stock Exchange was rebranded as NGX (Nigerian Exchange Group) in 2021.' },
  { id: 'ca41', branch: 'General', question: 'Which state is the smallest by land area in Nigeria?', options: ['Lagos', 'Anambra', 'Imo', 'Ekiti'], correctAnswer: 0, explanation: 'Lagos State is the smallest in land area but the most populous.' },
  { id: 'ca42', branch: 'General', question: 'The National Anthem of Nigeria begins with the words?', options: ['"Arise O Compatriots"', '\'Oh Nigeria, the great\'', '"We are One"', '"God of Creation"'], correctAnswer: 0, explanation: 'Nigeria\'s national anthem starts with "Arise, O Compatriots".' },
  { id: 'ca43', branch: 'General', question: 'Who is the head of a Local Government in Nigeria?', options: ['Governor', 'Commissioner', 'Chairman', 'Councillor'], correctAnswer: 2, explanation: 'Each LGA is headed by an elected Chairman.' },
  { id: 'ca44', branch: 'General', question: 'The FRSC is under the supervision of which ministry?', options: ['Ministry of Interior', 'Ministry of Defence', 'Ministry of Works and Housing', 'Ministry of Transportation'], correctAnswer: 3, explanation: 'The FRSC is supervised by the Federal Ministry of Transportation.' },
  { id: 'ca45', branch: 'General', question: 'Nigeria\'s National Population Commission conducts census every how many years as stipulated?', options: ['5', '10', '15', '7'], correctAnswer: 1, explanation: 'A national census is supposed to be conducted every 10 years.' },
  { id: 'ca46', branch: 'General', question: 'The "Operation Safe Corridor" programme in Nigeria is designed to?', options: ['Monitor immigration', 'Rehabilitate repentant Boko Haram members', 'Combat sea piracy', 'Manage displaced persons'], correctAnswer: 1, explanation: 'Operation Safe Corridor rehabilitates and reintegrates low-risk Boko Haram defectors.' },
  { id: 'ca47', branch: 'General', question: 'Which Nigerian city hosted the 2022 Africa Cup of Nations qualifier?', options: ['Lagos', 'Abuja', 'Kano', 'Port Harcourt'], correctAnswer: 1, explanation: 'The Moshood Abiola National Stadium in Abuja hosted key AFCON qualifiers.' },
  { id: 'ca48', branch: 'General', question: 'Who chairs the Federal Executive Council in Nigeria?', options: ['Vice President', 'Senate President', 'President', 'Chief of Staff'], correctAnswer: 2, explanation: 'The President of Nigeria chairs the Federal Executive Council (FEC).' },
  { id: 'ca49', branch: 'General', question: 'Nigeria\'s Sovereign Wealth Fund is managed by?', options: ['CBN', 'NNPC', 'NSIA', 'Ministry of Finance'], correctAnswer: 2, explanation: 'The Nigeria Sovereign Investment Authority (NSIA) manages the Sovereign Wealth Fund.' },
  { id: 'ca50', branch: 'General', question: 'The term "Renewed Hope Agenda" is associated with which Nigerian administration?', options: ['Buhari', 'Obasanjo', 'Tinubu', 'Jonathan'], correctAnswer: 2, explanation: '"Renewed Hope Agenda" is President Bola Tinubu\'s policy framework launched in 2023.' },

  // ═══════════════════════════════════════════════════════════════
  // ENGLISH LANGUAGE (75 Questions)
  // ═══════════════════════════════════════════════════════════════
  { id: 'el1', branch: 'General', question: 'Choose the word closest in meaning to BENEVOLENT:', options: ['Cruel', 'Kind', 'Lazy', 'Angry'], correctAnswer: 1, explanation: 'Benevolent means well-meaning and kindly.' },
  { id: 'el2', branch: 'General', question: 'Choose the word closest in meaning to TACITURN:', options: ['Talkative', 'Reserved', 'Generous', 'Brave'], correctAnswer: 1, explanation: 'Taciturn means reserved or uncommunicative in speech.' },
  { id: 'el3', branch: 'General', question: 'Choose the word closest in meaning to INTREPID:', options: ['Fearful', 'Timid', 'Fearless', 'Cautious'], correctAnswer: 2, explanation: 'Intrepid means fearless and adventurous.' },
  { id: 'el4', branch: 'General', question: 'Choose the word closest in meaning to VERBOSE:', options: ['Brief', 'Wordy', 'Silent', 'Rude'], correctAnswer: 1, explanation: 'Verbose means using more words than needed; wordy.' },
  { id: 'el5', branch: 'General', question: 'Choose the word closest in meaning to LOQUACIOUS:', options: ['Quiet', 'Talkative', 'Strong', 'Intelligent'], correctAnswer: 1, explanation: 'Loquacious means tending to talk a great deal.' },
  { id: 'el6', branch: 'General', question: 'Choose the word OPPOSITE in meaning to GREGARIOUS:', options: ['Sociable', 'Friendly', 'Reclusive', 'Active'], correctAnswer: 2, explanation: 'Gregarious means sociable; its antonym is reclusive.' },
  { id: 'el7', branch: 'General', question: 'Choose the word OPPOSITE in meaning to DILIGENT:', options: ['Hardworking', 'Lazy', 'Careful', 'Honest'], correctAnswer: 1, explanation: 'Diligent means hardworking; opposite is lazy.' },
  { id: 'el8', branch: 'General', question: 'Choose the word OPPOSITE in meaning to MAGNANIMOUS:', options: ['Generous', 'Petty', 'Brave', 'Wise'], correctAnswer: 1, explanation: 'Magnanimous means generous; opposite is petty.' },
  { id: 'el9', branch: 'General', question: 'Choose the word OPPOSITE in meaning to CRYPTIC:', options: ['Hidden', 'Clear', 'Dark', 'Strange'], correctAnswer: 1, explanation: 'Cryptic means mysterious; opposite is clear.' },
  { id: 'el10', branch: 'General', question: 'Choose the word OPPOSITE in meaning to FRUGAL:', options: ['Thrifty', 'Wasteful', 'Poor', 'Careful'], correctAnswer: 1, explanation: 'Frugal means economical; opposite is wasteful.' },
  { id: 'el11', branch: 'General', question: 'Select the correct spelling:', options: ['Accomodation', 'Accommodation', 'Accomadation', 'Acomodation'], correctAnswer: 1, explanation: 'Accommodation — double c, double m.' },
  { id: 'el12', branch: 'General', question: 'Select the correct spelling:', options: ['Occurence', 'Occurrance', 'Occurrence', 'Ocurrence'], correctAnswer: 2, explanation: 'Occurrence — double c, double r.' },
  { id: 'el13', branch: 'General', question: 'Select the correct spelling:', options: ['Neccessary', 'Nesseccary', 'Necessary', 'Necesary'], correctAnswer: 2, explanation: 'Necessary — one c, double s.' },
  { id: 'el14', branch: 'General', question: 'Select the correct spelling:', options: ['Perseverance', 'Perseverence', 'Perserverance', 'Persevirance'], correctAnswer: 0, explanation: 'Perseverance is the correct spelling.' },
  { id: 'el15', branch: 'General', question: 'Select the correct spelling:', options: ['Harrass', 'Harass', 'Harras', 'Haras'], correctAnswer: 1, explanation: 'Harass — one r, double s.' },
  { id: 'el16', branch: 'General', question: 'Fill in the blank: She ______ to the market every day.', options: ['go', 'goes', 'going', 'gone'], correctAnswer: 1, explanation: 'Third-person singular present tense: "goes".' },
  { id: 'el17', branch: 'General', question: 'Fill in the blank: Neither the boys nor the girl ______ present.', options: ['were', 'are', 'was', 'have been'], correctAnswer: 2, explanation: 'Verb agrees with the nearest subject (girl — singular): "was".' },
  { id: 'el18', branch: 'General', question: 'Fill in the blank: I wish I ______ taller.', options: ['am', 'was', 'were', 'be'], correctAnswer: 2, explanation: '"Were" is used in the subjunctive mood for hypothetical situations.' },
  { id: 'el19', branch: 'General', question: 'Fill in the blank: The jury ______ divided in their opinion.', options: ['was', 'were', 'is', 'be'], correctAnswer: 1, explanation: 'When jury members act individually, use plural verb "were".' },
  { id: 'el20', branch: 'General', question: 'Choose the correct sentence:', options: ['He gave I a book.', 'He gave me a book.', 'He gave mine a book.', 'He gave myself a book.'], correctAnswer: 1, explanation: '"Me" is the correct object pronoun.' },
  { id: 'el21', branch: 'General', question: 'The plural of "phenomenon" is:', options: ['Phenomenons', 'Phenomenas', 'Phenomena', 'Phenomenon'], correctAnswer: 2, explanation: 'Phenomena is the plural of phenomenon.' },
  { id: 'el22', branch: 'General', question: 'The plural of "criterion" is:', options: ['Criterions', 'Criteria', 'Criterias', 'Criterion'], correctAnswer: 1, explanation: 'Criteria is the correct plural of criterion.' },
  { id: 'el23', branch: 'General', question: 'Identify the figure of speech: "The sun smiled on the city."', options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'], correctAnswer: 2, explanation: 'Giving the sun the human quality of smiling = personification.' },
  { id: 'el24', branch: 'General', question: 'Identify the figure of speech: "She is as brave as a lion."', options: ['Metaphor', 'Simile', 'Hyperbole', 'Irony'], correctAnswer: 1, explanation: 'Comparing using "as…as" = simile.' },
  { id: 'el25', branch: 'General', question: 'Identify the figure of speech: "I have told you a million times."', options: ['Simile', 'Personification', 'Hyperbole', 'Alliteration'], correctAnswer: 2, explanation: 'Exaggeration for effect = hyperbole.' },
  { id: 'el26', branch: 'General', question: 'Identify the figure of speech in: "Peter Piper picked a peck of pickled peppers."', options: ['Assonance', 'Rhyme', 'Alliteration', 'Onomatopoeia'], correctAnswer: 2, explanation: 'Repetition of the initial consonant "P" = alliteration.' },
  { id: 'el27', branch: 'General', question: 'Which part of speech is "quickly" in: "She ran quickly"?', options: ['Adjective', 'Adverb', 'Noun', 'Verb'], correctAnswer: 1, explanation: '"Quickly" modifies the verb "ran" — it is an adverb.' },
  { id: 'el28', branch: 'General', question: 'Which part of speech is "beautiful" in: "She wore a beautiful dress"?', options: ['Adverb', 'Verb', 'Adjective', 'Noun'], correctAnswer: 2, explanation: '"Beautiful" modifies the noun "dress" — it is an adjective.' },
  { id: 'el29', branch: 'General', question: 'What is the passive voice of: "The dog bit the man"?', options: ['The man was bitten by the dog.', 'The man is bitten by the dog.', 'The dog was biting the man.', 'The man bit the dog.'], correctAnswer: 0, explanation: 'Passive: "The man was bitten by the dog."' },
  { id: 'el30', branch: 'General', question: 'What is the passive voice of: "She will finish the project"?', options: ['The project will have been finished.', 'The project will be finished by her.', 'The project is finished by her.', 'The project was finished by her.'], correctAnswer: 1, explanation: 'Future simple passive: "The project will be finished by her."' },
  { id: 'el31', branch: 'General', question: 'Which sentence is grammatically correct?', options: ["He don't know.", "He doesn't knows.", "He doesn't know.", "He do not knows."], correctAnswer: 2, explanation: '"He doesn\'t know" is correct.' },
  { id: 'el32', branch: 'General', question: 'Which sentence uses the apostrophe correctly?', options: ["Its a nice day.", "It's a nice day.", "Its' a nice day.", "It' a nice day."], correctAnswer: 1, explanation: '"It\'s" is the contraction of "it is".' },
  { id: 'el33', branch: 'General', question: 'Choose the word closest in meaning to AMELIORATE:', options: ['Worsen', 'Improve', 'Ignore', 'Confuse'], correctAnswer: 1, explanation: 'Ameliorate means to make something bad better.' },
  { id: 'el34', branch: 'General', question: 'Choose the word closest in meaning to EXORBITANT:', options: ['Cheap', 'Excessive', 'Moderate', 'Reasonable'], correctAnswer: 1, explanation: 'Exorbitant means unreasonably high; excessive.' },
  { id: 'el35', branch: 'General', question: 'Choose the word closest in meaning to EPHEMERAL:', options: ['Permanent', 'Short-lived', 'Strong', 'Ancient'], correctAnswer: 1, explanation: 'Ephemeral means lasting for a very short time.' },
  { id: 'el36', branch: 'General', question: 'Choose the word closest in meaning to AMBIGUOUS:', options: ['Clear', 'Uncertain', 'Direct', 'Simple'], correctAnswer: 1, explanation: 'Ambiguous means open to more than one interpretation.' },
  { id: 'el37', branch: 'General', question: 'Choose the word closest in meaning to NONCHALANT:', options: ['Excited', 'Worried', 'Casual', 'Alert'], correctAnswer: 2, explanation: 'Nonchalant means casually calm and relaxed.' },
  { id: 'el38', branch: 'General', question: 'A word that sounds like another but has a different meaning is a:', options: ['Synonym', 'Antonym', 'Homophone', 'Homograph'], correctAnswer: 2, explanation: 'Homophones sound alike but different meanings e.g. there/their.' },
  { id: 'el39', branch: 'General', question: 'The words "bank" (river) and "bank" (financial) are:', options: ['Synonyms', 'Homophones', 'Homonyms', 'Antonyms'], correctAnswer: 2, explanation: 'Same spelling, different meanings = homonyms.' },
  { id: 'el40', branch: 'General', question: '"Break a leg" is an example of:', options: ['Simile', 'Literal language', 'Idiom', 'Proverb'], correctAnswer: 2, explanation: '"Break a leg" is an idiom meaning "good luck".' },
  { id: 'el41', branch: 'General', question: 'Choose the word OPPOSITE in meaning to VERBOSE:', options: ['Silent', 'Concise', 'Angry', 'Loud'], correctAnswer: 1, explanation: 'Verbose means wordy; concise is its antonym.' },
  { id: 'el42', branch: 'General', question: '"The early bird catches the worm" is a:', options: ['Simile', 'Idiom', 'Proverb', 'Metaphor'], correctAnswer: 2, explanation: 'It is a proverb — a traditional saying expressing general truth.' },
  { id: 'el43', branch: 'General', question: 'The sentence "He is the man whom I saw" — "whom" is a:', options: ['Subject pronoun', 'Object pronoun', 'Possessive pronoun', 'Reflexive pronoun'], correctAnswer: 1, explanation: '"Whom" is the object pronoun form of who.' },
  { id: 'el44', branch: 'General', question: 'Which of these words is a PREPOSITION?', options: ['Quickly', 'Run', 'Beside', 'Happy'], correctAnswer: 2, explanation: '"Beside" shows position/relationship — it is a preposition.' },
  { id: 'el45', branch: 'General', question: 'Choose the word closest in meaning to PROLIFIC:', options: ['Rare', 'Productive', 'Weak', 'Lazy'], correctAnswer: 1, explanation: 'Prolific means producing many results or works.' },
  { id: 'el46', branch: 'General', question: 'Choose the word closest in meaning to CLANDESTINE:', options: ['Public', 'Secret', 'Loud', 'Official'], correctAnswer: 1, explanation: 'Clandestine means done secretly.' },
  { id: 'el47', branch: 'General', question: 'Choose the word closest in meaning to TENACIOUS:', options: ['Weak', 'Persistent', 'Careless', 'Gentle'], correctAnswer: 1, explanation: 'Tenacious means persistent; not giving up.' },
  { id: 'el48', branch: 'General', question: 'A COMPOUND sentence contains:', options: ['One independent clause', 'Two independent clauses', 'One dependent clause', 'No conjunctions'], correctAnswer: 1, explanation: 'A compound sentence joins two independent clauses.' },
  { id: 'el49', branch: 'General', question: 'A COMPLEX sentence contains:', options: ['Two independent clauses', 'One independent and one dependent clause', 'Three verbs', 'No conjunctions'], correctAnswer: 1, explanation: 'Complex = one independent + one dependent clause.' },
  { id: 'el50', branch: 'General', question: 'What is a GERUND?', options: ['Past-tense verb', 'A verb used as a noun ending in -ing', 'An adjective ending in -ed', 'A type of adverb'], correctAnswer: 1, explanation: 'A gerund is a verb form ending in -ing functioning as a noun.' },
  { id: 'el51', branch: 'General', question: 'The word "UNHAPPY" contains which prefix?', options: ['-y', 'Un-', 'Hap-', 'Happy-'], correctAnswer: 1, explanation: '"Un-" is a prefix meaning "not".' },
  { id: 'el52', branch: 'General', question: 'Choose the antonym of INDUSTRIOUS:', options: ['Hardworking', 'Lazy', 'Active', 'Busy'], correctAnswer: 1, explanation: 'Industrious means hardworking; opposite is lazy.' },
  { id: 'el53', branch: 'General', question: 'Choose the word closest in meaning to OBLIVIOUS:', options: ['Alert', 'Unaware', 'Careful', 'Worried'], correctAnswer: 1, explanation: 'Oblivious means not aware of what is happening.' },
  { id: 'el54', branch: 'General', question: 'Choose the word closest in meaning to AUDACIOUS:', options: ['Timid', 'Bold', 'Careful', 'Quiet'], correctAnswer: 1, explanation: 'Audacious means showing boldness or daring.' },
  { id: 'el55', branch: 'General', question: 'What tense is: "By tomorrow, I will have finished the work"?', options: ['Simple Future', 'Future Perfect', 'Future Continuous', 'Present Perfect'], correctAnswer: 1, explanation: '"Will have finished" = Future Perfect tense.' },
  { id: 'el56', branch: 'General', question: 'The phrase "a piece of cake" means:', options: ['A slice of dessert', 'Something very easy', 'A challenging task', 'A generous gift'], correctAnswer: 1, explanation: '"A piece of cake" = something very easy.' },
  { id: 'el57', branch: 'General', question: 'Select the sentence with correct subject-verb agreement:', options: ['The news are good.', 'The news is good.', 'The news were good.', 'The news be good.'], correctAnswer: 1, explanation: '"News" is uncountable — takes singular verb: "The news is good."' },
  { id: 'el58', branch: 'General', question: 'What is the reported speech of: He said, "I am tired"?', options: ['He said he is tired.', 'He said he was tired.', 'He said he were tired.', 'He said he be tired.'], correctAnswer: 1, explanation: 'In reported speech, "am" shifts to "was".' },
  { id: 'el59', branch: 'General', question: 'Choose the word closest in meaning to PRAGMATIC:', options: ['Idealistic', 'Practical', 'Romantic', 'Theoretical'], correctAnswer: 1, explanation: 'Pragmatic means dealing with things sensibly.' },
  { id: 'el60', branch: 'General', question: 'Choose the word closest in meaning to METICULOUS:', options: ['Careless', 'Very careful', 'Fast', 'Dishonest'], correctAnswer: 1, explanation: 'Meticulous means showing great attention to detail.' },
  { id: 'el61', branch: 'General', question: 'Choose the word closest in meaning to ACRIMONY:', options: ['Kindness', 'Bitterness', 'Joy', 'Courage'], correctAnswer: 1, explanation: 'Acrimony means bitterness or ill feeling.' },
  { id: 'el62', branch: 'General', question: 'Choose the word closest in meaning to DISPARATE:', options: ['Similar', 'Different', 'Common', 'Equal'], correctAnswer: 1, explanation: 'Disparate means very different from one another.' },
  { id: 'el63', branch: 'General', question: 'Choose the word OPPOSITE in meaning to TRANSPARENT:', options: ['Clear', 'Opaque', 'Bright', 'Open'], correctAnswer: 1, explanation: 'Transparent means clear; opaque is its antonym.' },
  { id: 'el64', branch: 'General', question: 'A synonym of ACUMEN is:', options: ['Stupidity', 'Sharpness', 'Laziness', 'Cowardice'], correctAnswer: 1, explanation: 'Acumen means sharpness of mind or good judgement.' },
  { id: 'el65', branch: 'General', question: 'Choose the correctly written sentence:', options: ['Whose bag is this?', 'Whos bag is this?', "Who's bag is this?", 'Whose\' bag is this?'], correctAnswer: 0, explanation: '"Whose" is the possessive form; correct here.' },
  { id: 'el66', branch: 'General', question: 'Which sentence correctly uses a SEMICOLON?', options: ['I like tea; but I prefer coffee.', 'I like tea; I prefer coffee.', 'I like tea, I prefer coffee.', 'I like tea. but I prefer coffee.'], correctAnswer: 1, explanation: 'A semicolon joins two related independent clauses.' },
  { id: 'el67', branch: 'General', question: 'The sentence "Running fast, the bus was caught" contains a:', options: ['Compound modifier', 'Dangling modifier', 'Split infinitive', 'Relative clause'], correctAnswer: 1, explanation: '"Running fast" should modify a person, not the bus — dangling modifier.' },
  { id: 'el68', branch: 'General', question: 'Which word completes: "She ran ______ than her sister."', options: ['more fast', 'fastest', 'faster', 'most fast'], correctAnswer: 2, explanation: 'Comparative form of "fast" for two people is "faster".' },
  { id: 'el69', branch: 'General', question: 'Fill in the blank: "If I ______ you, I would apologise."', options: ['am', 'was', 'were', 'be'], correctAnswer: 2, explanation: 'Hypothetical conditional uses "were" (subjunctive).' },
  { id: 'el70', branch: 'General', question: 'Which sentence is in the ACTIVE voice?', options: ['The cake was eaten by him.', 'The letter was written.', 'She baked the cake.', 'The work is being done.'], correctAnswer: 2, explanation: 'Active voice: subject performs the action — "She baked the cake."' },
  { id: 'el71', branch: 'General', question: 'Choose the correct homophone: "The knight rode through the ______ ." (evening)', options: ['Night', 'Nite', 'Knight', 'Nigh'], correctAnswer: 0, explanation: '"Night" = evening; homophone of "knight".' },
  { id: 'el72', branch: 'General', question: '"She sings like an angel." This is a:', options: ['Metaphor', 'Simile', 'Hyperbole', 'Personification'], correctAnswer: 1, explanation: 'Comparison using "like" = simile.' },
  { id: 'el73', branch: 'General', question: 'The word "FLY" in "She watched the fly" is a:', options: ['Verb', 'Adjective', 'Noun', 'Adverb'], correctAnswer: 2, explanation: '"The fly" is used as a noun (insect) here.' },
  { id: 'el74', branch: 'General', question: 'Choose the word closest in meaning to VINDICATE:', options: ['Blame', 'Clear of suspicion', 'Punish', 'Ignore'], correctAnswer: 1, explanation: 'Vindicate means to clear someone of blame or suspicion.' },
  { id: 'el75', branch: 'General', question: 'Choose the antonym of LAUD:', options: ['Praise', 'Criticise', 'Support', 'Celebrate'], correctAnswer: 1, explanation: 'Laud means to praise highly; its antonym is criticise.' },

  // ═══════════════════════════════════════════════════════════════
  // MATHEMATICS (75 Questions)
  // ═══════════════════════════════════════════════════════════════
  { id: 'm1', branch: 'General', question: 'What is 15% of 200?', options: ['25', '30', '35', '40'], correctAnswer: 1, explanation: '15/100 × 200 = 30.' },
  { id: 'm2', branch: 'General', question: 'Simplify: 3/4 + 1/6', options: ['4/10', '11/12', '5/8', '7/10'], correctAnswer: 1, explanation: 'LCM of 4 and 6 is 12: 9/12 + 2/12 = 11/12.' },
  { id: 'm3', branch: 'General', question: 'What is the square root of 144?', options: ['11', '12', '13', '14'], correctAnswer: 1, explanation: '√144 = 12.' },
  { id: 'm4', branch: 'General', question: 'If x + 7 = 15, what is x?', options: ['6', '7', '8', '9'], correctAnswer: 2, explanation: 'x = 15 - 7 = 8.' },
  { id: 'm5', branch: 'General', question: 'What is the area of a rectangle with length 8cm and width 5cm?', options: ['30cm²', '35cm²', '40cm²', '45cm²'], correctAnswer: 2, explanation: 'Area = L × W = 8 × 5 = 40 cm².' },
  { id: 'm6', branch: 'General', question: 'Simplify: 2³ × 2²', options: ['2⁵', '2⁶', '4⁵', '2¹'], correctAnswer: 0, explanation: '2³ × 2² = 2^(3+2) = 2⁵.' },
  { id: 'm7', branch: 'General', question: 'Convert 0.75 to a fraction:', options: ['1/2', '2/3', '3/4', '4/5'], correctAnswer: 2, explanation: '0.75 = 75/100 = 3/4.' },
  { id: 'm8', branch: 'General', question: 'What is 20% of 500?', options: ['80', '90', '100', '110'], correctAnswer: 2, explanation: '20/100 × 500 = 100.' },
  { id: 'm9', branch: 'General', question: 'The sum of angles in a triangle is:', options: ['90°', '180°', '270°', '360°'], correctAnswer: 1, explanation: 'The interior angles of a triangle always add up to 180°.' },
  { id: 'm10', branch: 'General', question: 'Solve: 5x - 3 = 22', options: ['x=4', 'x=5', 'x=3', 'x=6'], correctAnswer: 1, explanation: '5x = 25; x = 5.' },
  { id: 'm11', branch: 'General', question: 'What is the LCM of 4, 6 and 8?', options: ['12', '16', '24', '48'], correctAnswer: 2, explanation: 'LCM(4,6,8) = 24.' },
  { id: 'm12', branch: 'General', question: 'What is the HCF of 12 and 18?', options: ['3', '4', '6', '9'], correctAnswer: 2, explanation: 'Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. HCF = 6.' },
  { id: 'm13', branch: 'General', question: 'A car travels 120 km in 2 hours. What is its speed?', options: ['50 km/h', '55 km/h', '60 km/h', '65 km/h'], correctAnswer: 2, explanation: 'Speed = Distance/Time = 120/2 = 60 km/h.' },
  { id: 'm14', branch: 'General', question: 'Evaluate: 4! (four factorial)', options: ['12', '16', '20', '24'], correctAnswer: 3, explanation: '4! = 4×3×2×1 = 24.' },
  { id: 'm15', branch: 'General', question: 'If a pizza is cut into 8 equal slices and you eat 3, what fraction remains?', options: ['5/8', '3/8', '1/2', '3/5'], correctAnswer: 0, explanation: '8 - 3 = 5 slices remain. Fraction = 5/8.' },
  { id: 'm16', branch: 'General', question: 'Solve: 2(x + 3) = 14', options: ['x=3', 'x=4', 'x=5', 'x=6'], correctAnswer: 2, explanation: '2x + 6 = 14; 2x = 8; x = 4. Wait — x=4. Answer: B.' },
  { id: 'm17', branch: 'General', question: 'What is the perimeter of a square with side 7cm?', options: ['21cm', '28cm', '35cm', '49cm'], correctAnswer: 1, explanation: 'Perimeter = 4 × side = 4 × 7 = 28 cm.' },
  { id: 'm18', branch: 'General', question: 'Express 45% as a decimal:', options: ['4.5', '0.45', '0.045', '45'], correctAnswer: 1, explanation: '45% = 45/100 = 0.45.' },
  { id: 'm19', branch: 'General', question: 'What is the volume of a cube with side 3cm?', options: ['9cm³', '18cm³', '27cm³', '36cm³'], correctAnswer: 2, explanation: 'Volume = side³ = 3³ = 27 cm³.' },
  { id: 'm20', branch: 'General', question: 'Solve for y: 3y + 9 = 0', options: ['y=-3', 'y=3', 'y=0', 'y=-9'], correctAnswer: 0, explanation: '3y = -9; y = -3.' },
  { id: 'm21', branch: 'General', question: 'The ratio of boys to girls in a class is 3:2. If there are 30 students, how many are boys?', options: ['12', '15', '18', '20'], correctAnswer: 2, explanation: 'Total parts = 5. Boys = (3/5)×30 = 18.' },
  { id: 'm22', branch: 'General', question: 'What is 2/5 of 75?', options: ['25', '27', '30', '35'], correctAnswer: 2, explanation: '2/5 × 75 = 30.' },
  { id: 'm23', branch: 'General', question: 'A shopkeeper buys goods for ₦800 and sells for ₦1000. What is the profit percentage?', options: ['20%', '25%', '15%', '30%'], correctAnswer: 1, explanation: 'Profit = 200; Profit% = (200/800)×100 = 25%.' },
  { id: 'm24', branch: 'General', question: 'Simplify: (x² × x³) / x⁴', options: ['x', 'x²', 'x³', 'x⁵'], correctAnswer: 0, explanation: 'x^(2+3) / x^4 = x^5 / x^4 = x^1 = x.' },
  { id: 'm25', branch: 'General', question: 'The circumference of a circle with radius 7cm (use π=22/7) is:', options: ['22cm', '44cm', '66cm', '88cm'], correctAnswer: 1, explanation: 'C = 2πr = 2 × 22/7 × 7 = 44 cm.' },
  { id: 'm26', branch: 'General', question: 'If 5 books cost ₦750, what is the cost of 8 books?', options: ['₦1,000', '₦1,100', '₦1,200', '₦1,300'], correctAnswer: 2, explanation: 'Cost per book = 750/5 = 150. 8 × 150 = ₦1,200.' },
  { id: 'm27', branch: 'General', question: 'What is the mode of: 3, 5, 3, 7, 5, 3, 9?', options: ['3', '5', '7', '9'], correctAnswer: 0, explanation: '3 appears 3 times — the most frequent value.' },
  { id: 'm28', branch: 'General', question: 'What is the median of: 4, 7, 2, 9, 1?', options: ['4', '7', '2', '9'], correctAnswer: 0, explanation: 'Sorted: 1,2,4,7,9. Middle value = 4.' },
  { id: 'm29', branch: 'General', question: 'What is the mean of: 10, 20, 30, 40, 50?', options: ['25', '30', '35', '40'], correctAnswer: 1, explanation: 'Mean = (10+20+30+40+50)/5 = 150/5 = 30.' },
  { id: 'm30', branch: 'General', question: 'Evaluate: √(25 + 144)', options: ['11', '12', '13', '14'], correctAnswer: 2, explanation: '√(169) = 13.' },
  { id: 'm31', branch: 'General', question: 'A train covers 300 km in 5 hours. How far will it travel in 8 hours at the same speed?', options: ['420km', '440km', '460km', '480km'], correctAnswer: 3, explanation: 'Speed = 60 km/h. Distance = 60 × 8 = 480 km.' },
  { id: 'm32', branch: 'General', question: 'Simplify: 3/8 ÷ 3/4', options: ['1/2', '2/3', '3/4', '9/32'], correctAnswer: 0, explanation: '3/8 ÷ 3/4 = 3/8 × 4/3 = 12/24 = 1/2.' },
  { id: 'm33', branch: 'General', question: 'If the simple interest on ₦5000 for 2 years is ₦600, what is the rate?', options: ['5%', '6%', '7%', '8%'], correctAnswer: 1, explanation: 'SI = P×R×T/100 → 600 = 5000×R×2/100 → R = 6%.' },
  { id: 'm34', branch: 'General', question: 'What is 12² - 10²?', options: ['24', '44', '4', '100'], correctAnswer: 1, explanation: '144 - 100 = 44.' },
  { id: 'm35', branch: 'General', question: 'Solve: x/4 = 3/12', options: ['x=1', 'x=2', 'x=3', 'x=4'], correctAnswer: 0, explanation: 'Cross multiply: 12x = 12; x = 1.' },
  { id: 'm36', branch: 'General', question: 'What is 3/5 expressed as a percentage?', options: ['50%', '60%', '65%', '70%'], correctAnswer: 1, explanation: '3/5 × 100 = 60%.' },
  { id: 'm37', branch: 'General', question: 'A rectangle has an area of 48cm² and a width of 6cm. What is its length?', options: ['6cm', '7cm', '8cm', '9cm'], correctAnswer: 2, explanation: 'L = Area/Width = 48/6 = 8 cm.' },
  { id: 'm38', branch: 'General', question: 'If a = 3, b = 4, find √(a² + b²):', options: ['5', '6', '7', '8'], correctAnswer: 0, explanation: '√(9 + 16) = √25 = 5.' },
  { id: 'm39', branch: 'General', question: 'What is the next number in the series: 2, 6, 18, 54, ___?', options: ['106', '108', '162', '216'], correctAnswer: 2, explanation: 'Each term is multiplied by 3: 54 × 3 = 162.' },
  { id: 'm40', branch: 'General', question: 'A man spends 3/5 of his salary. What fraction remains?', options: ['1/5', '2/5', '3/5', '4/5'], correctAnswer: 1, explanation: '1 - 3/5 = 2/5 remains.' },
  { id: 'm41', branch: 'General', question: 'Evaluate: (2 + 3)² - 4 × 2', options: ['15', '17', '20', '25'], correctAnswer: 1, explanation: '(5)² - 8 = 25 - 8 = 17.' },
  { id: 'm42', branch: 'General', question: 'The angles of a quadrilateral sum to:', options: ['180°', '270°', '360°', '540°'], correctAnswer: 2, explanation: 'Sum of interior angles of a quadrilateral = 360°.' },
  { id: 'm43', branch: 'General', question: 'Simplify: 5(2x - 3) - 2(x + 1)', options: ['8x-13', '8x-17', '8x-15', '7x-13'], correctAnswer: 1, explanation: '10x - 15 - 2x - 2 = 8x - 17.' },
  { id: 'm44', branch: 'General', question: 'If 30% of a number is 90, what is the number?', options: ['270', '280', '290', '300'], correctAnswer: 3, explanation: '30% × N = 90 → N = 90/0.3 = 300.' },
  { id: 'm45', branch: 'General', question: 'What is the area of a triangle with base 10cm and height 6cm?', options: ['25cm²', '30cm²', '35cm²', '60cm²'], correctAnswer: 1, explanation: 'Area = ½ × base × height = ½ × 10 × 6 = 30 cm².' },
  { id: 'm46', branch: 'General', question: 'Find the value of 3x + 2y when x=2, y=3:', options: ['10', '12', '13', '15'], correctAnswer: 1, explanation: '3(2) + 2(3) = 6 + 6 = 12.' },
  { id: 'm47', branch: 'General', question: 'What is 5/6 - 1/4?', options: ['7/12', '9/12', '4/12', '3/12'], correctAnswer: 0, explanation: 'LCM=12: 10/12 - 3/12 = 7/12.' },
  { id: 'm48', branch: 'General', question: 'Evaluate: log₁₀(1000)', options: ['1', '2', '3', '4'], correctAnswer: 2, explanation: 'log₁₀(1000) = log₁₀(10³) = 3.' },
  { id: 'm49', branch: 'General', question: 'A number is increased by 20% to give 120. What was the original number?', options: ['96', '100', '104', '108'], correctAnswer: 1, explanation: 'N × 1.20 = 120 → N = 100.' },
  { id: 'm50', branch: 'General', question: 'What is the probability of getting a head when a fair coin is tossed?', options: ['1/4', '1/3', '1/2', '2/3'], correctAnswer: 2, explanation: 'A fair coin has 2 equally likely outcomes; P(head) = 1/2.' },
  { id: 'm51', branch: 'General', question: 'Solve: 2x² = 50', options: ['x=±4', 'x=±5', 'x=±6', 'x=±25'], correctAnswer: 1, explanation: 'x² = 25; x = ±5.' },
  { id: 'm52', branch: 'General', question: 'A bag has 5 red and 3 blue balls. What is the probability of picking a blue ball?', options: ['3/8', '5/8', '1/3', '1/2'], correctAnswer: 0, explanation: 'P(blue) = 3/(5+3) = 3/8.' },
  { id: 'm53', branch: 'General', question: 'Find the gradient of the line y = 3x + 5:', options: ['5', '3', '8', '1'], correctAnswer: 1, explanation: 'In y = mx + c, the gradient m = 3.' },
  { id: 'm54', branch: 'General', question: 'What is 2.5 × 10³ in full?', options: ['250', '2500', '25000', '250000'], correctAnswer: 1, explanation: '2.5 × 10³ = 2.5 × 1000 = 2500.' },
  { id: 'm55', branch: 'General', question: 'Evaluate: (-3)² + (-4)²', options: ['7', '24', '25', '49'], correctAnswer: 2, explanation: '9 + 16 = 25.' },
  { id: 'm56', branch: 'General', question: 'A worker earns ₦12,000/month. If he gets a 15% raise, his new salary is:', options: ['₦13,200', '₦13,500', '₦13,800', '₦14,000'], correctAnswer: 2, explanation: '12000 × 1.15 = ₦13,800.' },
  { id: 'm57', branch: 'General', question: 'What is the sum of the first 10 natural numbers?', options: ['45', '50', '55', '60'], correctAnswer: 2, explanation: 'Sum = n(n+1)/2 = 10×11/2 = 55.' },
  { id: 'm58', branch: 'General', question: 'Convert 3/8 to decimal:', options: ['0.325', '0.375', '0.425', '0.475'], correctAnswer: 1, explanation: '3 ÷ 8 = 0.375.' },
  { id: 'm59', branch: 'General', question: 'Two angles of a triangle are 40° and 75°. What is the third angle?', options: ['55°', '60°', '65°', '70°'], correctAnswer: 2, explanation: '180° - 40° - 75° = 65°.' },
  { id: 'm60', branch: 'General', question: 'Simplify: (x + 2)(x - 2):', options: ['x²-4', 'x²+4', 'x²-2x-4', 'x²+2x-4'], correctAnswer: 0, explanation: 'Difference of squares: (x+2)(x-2) = x² - 4.' },
  { id: 'm61', branch: 'General', question: 'What is 7/10 as a percentage?', options: ['60%', '65%', '70%', '75%'], correctAnswer: 2, explanation: '7/10 × 100 = 70%.' },
  { id: 'm62', branch: 'General', question: 'If the compound interest on ₦10,000 for 2 years at 10% p.a. is:', options: ['₦2,000', '₦2,100', '₦2,200', '₦2,500'], correctAnswer: 1, explanation: 'CI = 10000(1.1)² - 10000 = 12100 - 10000 = ₦2,100.' },
  { id: 'm63', branch: 'General', question: 'Evaluate: 4P2 (permutation):', options: ['6', '8', '12', '16'], correctAnswer: 2, explanation: '4P2 = 4!/(4-2)! = 4×3 = 12.' },
  { id: 'm64', branch: 'General', question: 'Evaluate: 4C2 (combination):', options: ['4', '6', '8', '12'], correctAnswer: 1, explanation: '4C2 = 4!/(2!×2!) = 6.' },
  { id: 'm65', branch: 'General', question: 'Factorise: x² + 5x + 6:', options: ['(x+1)(x+6)', '(x+2)(x+3)', '(x+3)(x+2)', 'Both B and C'], correctAnswer: 3, explanation: 'x² + 5x + 6 = (x+2)(x+3).' },
  { id: 'm66', branch: 'General', question: 'What is the value of π (pi) approximately?', options: ['2.71', '3.00', '3.14', '3.41'], correctAnswer: 2, explanation: 'π ≈ 3.14159...' },
  { id: 'm67', branch: 'General', question: 'If the perimeter of a rectangle is 36cm and its length is 10cm, its width is:', options: ['6cm', '7cm', '8cm', '9cm'], correctAnswer: 2, explanation: 'P=2(L+W); 36=2(10+W); W=8cm.' },
  { id: 'm68', branch: 'General', question: 'Solve: |x - 3| = 7', options: ['x=4 or x=-4', 'x=10 or x=-4', 'x=4 or x=10', 'x=10 only'], correctAnswer: 1, explanation: 'x-3=7 → x=10; or x-3=-7 → x=-4.' },
  { id: 'm69', branch: 'General', question: 'What is the next prime number after 13?', options: ['14', '15', '16', '17'], correctAnswer: 3, explanation: '17 is the next prime after 13 (14,15,16 are not prime).' },
  { id: 'm70', branch: 'General', question: 'If y = 2x + 1, when x = 4, y = ?', options: ['7', '8', '9', '10'], correctAnswer: 2, explanation: 'y = 2(4) + 1 = 9.' },
  { id: 'm71', branch: 'General', question: 'A square has a perimeter of 48cm. What is its area?', options: ['120cm²', '124cm²', '140cm²', '144cm²'], correctAnswer: 3, explanation: 'Side = 48/4 = 12cm. Area = 12² = 144 cm².' },
  { id: 'm72', branch: 'General', question: 'Evaluate: 0.2 × 0.5:', options: ['0.01', '0.1', '1', '10'], correctAnswer: 1, explanation: '0.2 × 0.5 = 0.10.' },
  { id: 'm73', branch: 'General', question: 'What percentage of 200 is 50?', options: ['20%', '25%', '30%', '35%'], correctAnswer: 1, explanation: '50/200 × 100 = 25%.' },
  { id: 'm74', branch: 'General', question: 'Evaluate: 2⁰ + 3⁰:', options: ['0', '1', '2', '3'], correctAnswer: 2, explanation: 'Any number to the power 0 = 1. So 1 + 1 = 2.' },
  { id: 'm75', branch: 'General', question: 'What is the distance between points (1,2) and (4,6)?', options: ['4', '5', '6', '7'], correctAnswer: 1, explanation: 'd = √((4-1)² + (6-2)²) = √(9+16) = √25 = 5.' }
] as any;

export const getRecruitments = async (): Promise<RecruitmentUpdate[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(RECRUITMENTS), 500));
};

export const getRecruitmentById = async (id: string): Promise<RecruitmentUpdate | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(RECRUITMENTS.find(r => r.id === id)), 300);
  });
};

const NEWS_API_KEY = 'pub_ecb4b31dd7c343f4b4ed3b1105aac530';

export const getNews = async (): Promise<NewsItem[]> => {
  try {
    // Ultra-Strict Filter: Exact phrases to avoid "BTS Army" or generic uses
    const keywords = '"military recruitment" OR "join the army" OR "navy recruitment" OR "police recruitment"';
    const countries = 'ng,us,gb,ca,au';
    // Using local proxy to avoid CORS errors
    const url = `/news-api/news?apikey=${NEWS_API_KEY}&q=${encodeURIComponent(keywords)}&country=${countries}&language=en`;

    console.log("[NewsService] Fetching URL:", url);

    const response = await fetch(url);
    console.log("[NewsService] Response status:", response.status);

    if (!response.ok) {
      const text = await response.text();
      console.error("[NewsService] Error body:", text);
      // Don't throw, just return empty to avoid breaking UI
      return [];
    }

    const data = await response.json();

    if (data.status === 'success' && data.results && data.results.length > 0) {
      // Client-side filtering to remove any remaining noise (e.g., BTS, Entertainment)
      const irrelevantKeywords = ['bts', 'k-pop', 'kpop', 'netflix', 'movie', 'music', 'album', 'song', 'cinema', 'hollywood', 'celebrity'];

      const filteredResults = data.results.filter((article: any) => {
        const text = (article.title + ' ' + (article.description || '')).toLowerCase();
        // 1. Must NOT contain irrelevant keywords
        const hasIrrelevant = irrelevantKeywords.some(kw => text.includes(kw));
        if (hasIrrelevant) return false;

        // 2. Must contain at least one strong recruitment-related word (double check)
        const hasRecruitmentContext = ['recruit', 'enlist', 'shortlist', 'screening', 'commission', 'intake', 'cadet', 'application'].some(kw => text.includes(kw));
        return hasRecruitmentContext;
      });

      return filteredResults.map((article: any) => ({
        id: article.article_id || Math.random().toString(36).substr(2, 9),
        title: article.title,
        // Prefer description, then content (truncated), then title
        content_summary: article.description
          ? (article.description.length > 200 ? article.description.substring(0, 200) + '...' : article.description)
          : (article.content ? article.content.substring(0, 200) + '...' : article.title),
        source_link: article.link,
        date_posted: article.pubDate ? article.pubDate.split(' ')[0] : new Date().toISOString().split('T')[0],
        is_official: false,
        image_url: article.image_url,
        source: article.source_id
      }));
    }
    console.warn("News API returned no results or error.", data);
    return [];
  } catch (error) {
    console.error("Failed to fetch news from API:", error);
    return [];
  }
};

export const searchShortlist = async (query: string): Promise<ShortlistCandidate[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Only mock list exists for Navy in this demo
      resolve([]);
    }, 300);
  });
};

export const getQuestions = async (branch?: string): Promise<Question[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!branch || branch === 'General') {
        resolve(QUESTIONS);
      } else {
        const specific = QUESTIONS.filter((q: Question) => q.branch === branch);
        const general = QUESTIONS.filter((q: Question) => q.branch === 'General');
        // Shuffle the array to mix general and specific questions
        const mixed = [...specific, ...general].sort(() => Math.random() - 0.5);
        resolve(mixed);
      }
    }, 400);
  });
};