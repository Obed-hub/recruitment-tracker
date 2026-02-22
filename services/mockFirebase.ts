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
  }
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