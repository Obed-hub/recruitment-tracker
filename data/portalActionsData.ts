export type ActionType = 'confirmation-slip' | 'guarantor-form' | 'portal-login' | 'update-documents';

export interface ActionInfo {
  title: string;
  seoTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  directActionLabel: string;
  officialPortalUrl: string;
  officialDomain: string;
  statusText: string;
  warningNotice: string;
  stepByStep: { step: string; instruction: string; detail?: string }[];
  keyRequirements: string[];
  eligibleGuarantors?: string[];
  ineligibleGuarantors?: string[];
  commonErrors: { error: string; cause: string; solution: string }[];
  faqs: { question: string; answer: string }[];
}

export interface AgencyPortalActionData {
  slug: string;
  agencyName: string;
  shortName: string;
  acronym: string;
  branchBadge: string;
  themeColor: {
    primary: string;
    gradient: string;
    border: string;
    text: string;
    lightBg: string;
  };
  officialPortalUrl: string;
  officialDomain: string;
  actions: Record<ActionType, ActionInfo>;
}

export const PORTAL_ACTIONS_DATA: Record<string, AgencyPortalActionData> = {
  police: {
    slug: 'police',
    agencyName: 'Nigeria Police Force (NPF / PSC)',
    shortName: 'Nigeria Police',
    acronym: 'NPF',
    branchBadge: 'Police / Law Enforcement',
    themeColor: {
      primary: 'bg-blue-900',
      gradient: 'from-blue-900 via-indigo-950 to-slate-900',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      lightBg: 'bg-blue-950/40',
    },
    officialPortalUrl: 'https://policerecruitment.gov.ng',
    officialDomain: 'policerecruitment.gov.ng',
    actions: {
      'confirmation-slip': {
        title: 'Print Nigeria Police Confirmation Slip 2026 (Reprint Guide)',
        seoTitle: 'Print Nigeria Police Confirmation Slip 2026 | NPF Portal Reprint',
        metaDescription: 'Step-by-step guide to reprint your Nigeria Police confirmation slip on policerecruitment.gov.ng. Resolve portal errors, barcode issues & physical screening slip reprint.',
        heroHeadline: 'Reprint Nigeria Police Confirmation Slip (2026)',
        heroSubheadline: 'Official procedure to access your candidate dashboard, reprint the NPF registration slip, and verify your screening barcode.',
        directActionLabel: 'Reprint Police Confirmation Slip',
        officialPortalUrl: 'https://policerecruitment.gov.ng',
        officialDomain: 'policerecruitment.gov.ng',
        statusText: 'Official Slip Reprint Active',
        warningNotice: 'CRITICAL NOTICE: The Nigeria Police Force (NPF) does not charge for reprinting confirmation slips. Beware of cybercafé operators claiming you need to purchase a reprint scratch card.',
        stepByStep: [
          {
            step: 'Step 1: Open Official Police Portal',
            instruction: 'Visit the verified enlistment portal at https://policerecruitment.gov.ng.',
            detail: 'Always check that the address bar shows a secure connection (https) with the .gov.ng extension.'
          },
          {
            step: 'Step 2: Access Candidate Login',
            instruction: 'Click on the "Login / Existing Applicant" or "Print Confirmation Slip" tab.',
            detail: 'You will need your 11-digit National Identification Number (NIN) or registered Application Reference Code.'
          },
          {
            step: 'Step 3: Enter Your Credentials',
            instruction: 'Type your registered NIN/Email and the password created during enlistment.',
            detail: 'If you forgot your password, use the "Forgot Password / Reset with NIN" link.'
          },
          {
            step: 'Step 4: Generate Your Slip Preview',
            instruction: 'Once logged into the candidate dashboard, click "Print Application Confirmation Slip".',
            detail: 'Check that your full name, passport photograph, state of origin, and unique 2D barcode are clearly visible.'
          },
          {
            step: 'Step 5: Print in Clean Color',
            instruction: 'Print at least 2 clear color copies on A4 paper and save a backup PDF to your phone and Google Drive.',
            detail: 'Do not fold the barcode or QR code area when taking it to physical screening centers.'
          }
        ],
        keyRequirements: [
          'National Identification Number (NIN) used during initial registration',
          'Registered email address and phone number for OTP verification',
          'A4 color printout with sharp, unscratched 2D barcode',
          'Two (2) recent passport photographs attached with white background'
        ],
        commonErrors: [
          {
            error: '504 Gateway Time-out / Page Not Loading',
            cause: 'High server traffic from thousands of simultaneous candidates trying to print slips.',
            solution: 'Access the portal between 11:00 PM and 5:30 AM when network congestion drops by over 75%.'
          },
          {
            error: 'Barcode / Passport Photo Appears Blank on Slip',
            cause: 'Slow document rendering engine or interrupted image download during generation.',
            solution: 'Clear browser cache, switch to Google Chrome desktop mode, and hit "Save as PDF" rather than direct print.'
          },
          {
            error: 'Invalid Application Code / User Not Found',
            cause: 'Typographical error in Reference ID or leading spaces copied from WhatsApp/SMS.',
            solution: 'Log in using your raw 11-digit NIN instead of the application code.'
          }
        ],
        faqs: [
          {
            question: 'Can I reprint my Police Confirmation Slip after the portal closes?',
            answer: 'Yes. The Police Service Commission (PSC) and NPF keep the candidate login and slip reprint portal active leading up to and during physical and credential screening exercises.'
          },
          {
            question: 'What do I do if I lost my Police application code?',
            answer: 'You do not need to panic. The portal allows candidate login via your 11-digit NIN and registered phone number. Your application number is displayed right at the top of your dashboard.'
          },
          {
            question: 'How many copies of the confirmation slip should I take to screening?',
            answer: 'You must bring at least three (3) color copies, along with your original credentials and endorsed guarantor forms.'
          }
        ]
      },
      'guarantor-form': {
        title: 'Download Nigeria Police Guarantor Form 2026 (PDF & Stamping Guide)',
        seoTitle: 'Nigeria Police Guarantor Form PDF 2026 | Download & Stamping Guide',
        metaDescription: 'Download official Nigeria Police guarantor form PDF. Learn who is qualified to sign, court stamping requirements & avoid disqualification at screening.',
        heroHeadline: 'Download Nigeria Police Guarantor Form (2026)',
        heroSubheadline: 'Official guidelines on eligible guarantors, legal court stamping, passport attachments, and avoiding disqualification at physical screening.',
        directActionLabel: 'Download Police Guarantor Form',
        officialPortalUrl: 'https://policerecruitment.gov.ng',
        officialDomain: 'policerecruitment.gov.ng',
        statusText: 'Official PDF Template Guide',
        warningNotice: 'DISQUALIFICATION WARNING: Forging guarantor signatures or using unauthorized stamps carries instant disqualification and potential criminal arrest by Police recruitment intelligence officers.',
        stepByStep: [
          {
            step: 'Step 1: Download the Official Form',
            instruction: 'Download the official Police Guarantor Form PDF from your candidate dashboard or official portal.',
            detail: 'Ensure the form has the official Police Service Commission and Nigeria Police Force emblem at the header.'
          },
          {
            step: 'Step 2: Print Two Clean Copies',
            instruction: 'Print two (2) separate copies on standard white A4 paper using high-contrast print settings.',
            detail: 'Both copies must be signed by two separate credible guarantors as stipulated in your instructions.'
          },
          {
            step: 'Step 3: Have Eligible Guarantor Fill Details',
            instruction: 'Ensure the guarantor fills in their full name, official appointment/rank, residential address, and phone number in capital letters.',
            detail: 'The guarantor must affix their official office stamp and signature.'
          },
          {
            step: 'Step 4: Attach Guarantor Passport & ID',
            instruction: 'Affix a recent color passport photograph of the guarantor with a white background.',
            detail: 'Attach a photocopy of the guarantor’s official office ID card or National ID card.'
          },
          {
            step: 'Step 5: High Court / Magistrate Legal Stamping',
            instruction: 'Take the signed guarantor form to an authorized Magistrate Court or High Court registry for official commissioner of oaths endorsement.',
            detail: 'The official red seal or court stamp proves legal validity.'
          }
        ],
        keyRequirements: [
          'Two (2) identical printed copies of the official Police Guarantor Form',
          'Recent passport photographs of both applicant and the guarantor',
          'Photocopy of guarantor’s valid National ID (NIN) or Civil Service ID',
          'Official seal and stamp of a recognized Magistrate or High Court Commissioner of Oaths'
        ],
        eligibleGuarantors: [
          'Traditional Rulers (Obas, Emirs, Obis, Baales, Village Heads)',
          'Civil Servants not below Grade Level 08 (GL 08) in State or Federal Service',
          'Police Officers not below the rank of Assistant Superintendent of Police (ASP)',
          'Military Officers not below the rank of Captain (Army), Lieutenant (Navy), or Flight Lieutenant (Air Force)',
          'Magistrates, High Court Judges, or Legal Practitioners (BAR/NBA certified)',
          'Principals of accredited Government Secondary Schools or University Lecturers'
        ],
        ineligibleGuarantors: [
          'Immediate family members (Parents, Brothers, Sisters, Spouses)',
          'Commercial drivers, transporters, or motor park union members',
          'Junior non-commissioned military/police personnel (Corporal, Constable, Private)',
          'Unemployed individuals or self-declared political youth leaders',
          'Non-Nigerian citizens'
        ],
        commonErrors: [
          {
            error: 'Missing Court Seal or Commissioner of Oaths Stamp',
            cause: 'Applicant submitted the form with only the guarantor’s signature without court endorsement.',
            solution: 'Always take the form to a High Court or Magistrate Court registry before your physical screening date.'
          },
          {
            error: 'Guarantor Below Required Rank / Grade Level',
            cause: 'Using a Grade Level 04 or 06 junior staff as a guarantor.',
            solution: 'Verify your guarantor is at least Grade Level 08 (GL 08) or an ASP/Captain rank.'
          },
          {
            error: 'Forged Signature / Fake Phone Number',
            cause: 'Screening officers place direct phone calls to guarantors from the screening desk to verify endorsement.',
            solution: 'Inform your guarantor in advance that screening officers may call their phone during credential verification.'
          }
        ],
        faqs: [
          {
            question: 'Can my father or mother sign my Police guarantor form?',
            answer: 'No. Immediate biological parents and siblings cannot serve as your guarantor. You need independent community leaders, senior civil servants, senior military/police officers, or legal practitioners.'
          },
          {
            question: 'Does the guarantor have to travel with me to screening?',
            answer: 'No. The guarantor only needs to fill and stamp the form in ink, attach their passport and ID photocopy, and obtain the court seal. They do not travel to the screening venue.'
          },
          {
            question: 'How much is court stamping for the guarantor form?',
            answer: 'Official court stamping at a Magistrate or High Court registry is typically a modest administrative fee (usually ₦500 to ₦1,500 depending on the state). Avoid touts outside the court premises.'
          }
        ]
      },
      'portal-login': {
        title: 'Nigeria Police Recruitment Portal Login 2026 (Dashboard Access)',
        seoTitle: 'Nigeria Police Recruitment Portal Login 2026 | Candidate Dashboard',
        metaDescription: 'Direct login guide for Nigeria Police recruitment portal at policerecruitment.gov.ng. Learn how to log in with NIN, reset forgotten passwords & check status.',
        heroHeadline: 'Nigeria Police Portal Login & Candidate Dashboard',
        heroSubheadline: 'Securely access your NPF enlistment profile, check application status, download screening slips, and resolve login lockouts.',
        directActionLabel: 'Open Official Police Login Portal',
        officialPortalUrl: 'https://policerecruitment.gov.ng',
        officialDomain: 'policerecruitment.gov.ng',
        statusText: 'Official Login Endpoint Active',
        warningNotice: 'SECURITY ALERT: Never enter your NIN, BVN, or password on unofficial third-party websites or Telegram bots claiming to check your Police application status.',
        stepByStep: [
          {
            step: 'Step 1: Open Official Login Page',
            instruction: 'Navigate directly to https://policerecruitment.gov.ng/login or the main homepage.',
            detail: 'Ensure the URL begins with https:// and ends with .gov.ng.'
          },
          {
            step: 'Step 2: Enter National Identity Number (NIN)',
            instruction: 'Input your 11-digit NIN into the primary login field without any dashes or spaces.',
            detail: 'Double check each digit carefully to avoid repeated failed login attempts.'
          },
          {
            step: 'Step 3: Enter Your Secret Password',
            instruction: 'Type your account password created during initial registration.',
            detail: 'Passwords are case-sensitive. Check if your keyboard Caps Lock is turned on.'
          },
          {
            step: 'Step 4: Solve Security Captcha',
            instruction: 'Complete the numeric or image verification challenge if prompted by the portal firewall.',
            detail: 'This protects the server from automated bots and cyber-attacks.'
          },
          {
            step: 'Step 5: View Application Dashboard',
            instruction: 'Once successfully logged in, inspect your recruitment status badge (Submitted, Shortlisted, Screening Scheduled).',
            detail: 'Check for direct links to reprint slips or update documents.'
          }
        ],
        keyRequirements: [
          '11-digit National Identity Number (NIN)',
          'Registered email address and mobile phone number',
          'Valid account password',
          'Stable internet connection (preferably 4G / Wi-Fi)'
        ],
        commonErrors: [
          {
            error: 'Account Locked / Too Many Failed Attempts',
            cause: 'Entering the wrong password more than 3 to 5 times.',
            solution: 'Wait 30 minutes for the security lockout timer to expire, then use the "Forgot Password" link.'
          },
          {
            error: 'NIN Does Not Match Any Profile',
            cause: 'Applicant entered a different NIN than the one used when submitting the form.',
            solution: 'Check your original printout or registration email confirmation to confirm the exact NIN registered.'
          },
          {
            error: 'Blank White Screen After Clicking Submit',
            cause: 'Web browser cookie conflict or aggressive ad-blocker blocking portal session scripts.',
            solution: 'Open an Incognito / Private window in Google Chrome or Mozilla Firefox and try again.'
          }
        ],
        faqs: [
          {
            question: 'What is the official URL for Nigeria Police recruitment portal login?',
            answer: 'The only authentic portal is https://policerecruitment.gov.ng. Any domain ending in .com, .ng, .site, or .org is unofficial.'
          },
          {
            question: 'How do I reset my Police recruitment password if I forgot it?',
            answer: 'Click on "Forgot Password" on the login screen, enter your 11-digit NIN and registered email/phone. You will receive an OTP code to create a new password.'
          },
          {
            question: 'Can I log in using my phone number instead of NIN?',
            answer: 'Depending on the portal version, you can log in using either your 11-digit NIN or registered Application Reference Code along with your password.'
          }
        ]
      },
      'update-documents': {
        title: 'Update Your Documents on Nigeria Police Portal (Correction Guide)',
        seoTitle: 'Update Documents on Nigeria Police Recruitment Portal 2026',
        metaDescription: 'How to update credentials, change WAEC results, correct NIN errors, and re-upload documents on the Nigeria Police recruitment portal.',
        heroHeadline: 'Update Your Documents on Police Portal (2026)',
        heroSubheadline: 'Official guidelines on editing application mistakes, re-uploading blurry certificates, and updating educational qualifications.',
        directActionLabel: 'Access Document Update Portal',
        officialPortalUrl: 'https://policerecruitment.gov.ng',
        officialDomain: 'policerecruitment.gov.ng',
        statusText: 'Document Correction Portal Guide',
        warningNotice: 'POLICY ALERT: Changes to Date of Birth, State of Origin, or Gender are strictly monitored. False information leads to automatic disqualification for falsification of public records.',
        stepByStep: [
          {
            step: 'Step 1: Check If Update Window Is Open',
            instruction: 'Log into your profile at https://policerecruitment.gov.ng to see if the "Edit Profile / Update Documents" button is active.',
            detail: 'The Police Service Commission usually opens a document update window prior to physical screening.'
          },
          {
            step: 'Step 2: Navigate to Document Upload Section',
            instruction: 'Go to the "Documents & Credentials" tab on your dashboard.',
            detail: 'Review which uploaded files are flagged as low resolution, unreadable, or missing.'
          },
          {
            step: 'Step 3: Prepare High-Resolution Scans',
            instruction: 'Scan your original O-Level certificates, LGA origin certificate, and birth certificate in JPEG/PDF under 200KB.',
            detail: 'Do not take blurry camera snapshots of photocopies in low-light rooms.'
          },
          {
            step: 'Step 4: Replace or Add New Credentials',
            instruction: 'Click "Replace File" or "Upload New Document", select your clear file, and hit save.',
            detail: 'If you made an error in your grades (e.g. WAEC/NECO grades), update the dropdown fields.'
          },
          {
            step: 'Step 5: Reprint Updated Confirmation Slip',
            instruction: 'After saving changes, immediately generate and reprint an updated confirmation slip.',
            detail: 'The updated slip will reflect your revised documents and updated timestamp.'
          }
        ],
        keyRequirements: [
          'Clear scanned copies of original certificates (WAEC, NECO, NABTEB, Degree)',
          'Valid Certificate of State of Origin issued by your LGA Chairman',
          'Birth Certificate from National Population Commission (NPC) or valid age declaration',
          'Document file size between 50KB and 200KB in JPG or PDF format'
        ],
        commonErrors: [
          {
            error: 'Document Upload Failed: File Size Exceeds Limit',
            cause: 'Uploading a raw camera image of 2MB to 5MB.',
            solution: 'Use a free online image compressor to reduce the file size below 200KB before uploading.'
          },
          {
            error: 'Profile Is Locked Against Edits',
            cause: 'The application window has temporarily closed and candidate records are being processed.',
            solution: 'Wait for the official PSC announcement opening the supplementary document correction window.'
          },
          {
            error: 'Name on WAEC Does Not Match NIN Slip',
            cause: 'Typo or married name disparity.',
            solution: 'Obtain a sworn legal affidavit of change/correction of name and newspaper publication to present at physical screening.'
          }
        ],
        faqs: [
          {
            question: 'Can I change my state of origin on the Police recruitment portal?',
            answer: 'Changing your state of origin after submission is strictly restricted to prevent quota manipulation. It requires formal administrative review and a verified LGA origin certificate.'
          },
          {
            question: 'Can I combine two O-Level sittings (WAEC + NECO)?',
            answer: 'Yes. You can upload results from WAEC, NECO, or NABTEB in not more than two (2) sittings, provided you have at least 5 credits including English Language and Mathematics.'
          },
          {
            question: 'Will I be disqualified if my uploaded document was blurry?',
            answer: 'If screening officers cannot verify your grades from your printout, you will be directed to produce the original certificate. Updating it online prevents delays.'
          }
        ]
      }
    }
  },

  army: {
    slug: 'army',
    agencyName: 'Nigerian Army (NA)',
    shortName: 'Nigerian Army',
    acronym: 'NA',
    branchBadge: 'Military / Armed Forces',
    themeColor: {
      primary: 'bg-emerald-900',
      gradient: 'from-emerald-950 via-green-900 to-slate-950',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      lightBg: 'bg-emerald-950/40',
    },
    officialPortalUrl: 'https://recruitment.army.mil.ng',
    officialDomain: 'recruitment.army.mil.ng',
    actions: {
      'confirmation-slip': {
        title: 'Print Nigerian Army Screening Slip 2026 (Application Slip Reprint)',
        seoTitle: 'Print Nigerian Army Screening Slip 2026 | 88 RRI & DSSC Reprint',
        metaDescription: 'How to reprint your Nigerian Army screening slip on recruitment.army.mil.ng and tracking.armynotification.com.ng. Download 88 RRI & DSSC slips.',
        heroHeadline: 'Print Nigerian Army Screening Slip (2026)',
        heroSubheadline: 'Official procedure to reprint your 88 RRI or DSSC application summary slip, verify your BVN/NIN status, and print guarantor sheets.',
        directActionLabel: 'Reprint Army Screening Slip',
        officialPortalUrl: 'https://recruitment.army.mil.ng',
        officialDomain: 'recruitment.army.mil.ng',
        statusText: 'Army Screening Slip Portal Active',
        warningNotice: 'ARMY RECRUITING NOTICE: Nigerian Army application and slip reprinting is 100% FREE. Never pay money to anyone on WhatsApp, Facebook, or POS kiosks for military passes.',
        stepByStep: [
          {
            step: 'Step 1: Access the Army Enlistment Portal',
            instruction: 'Visit https://recruitment.army.mil.ng or tracking.armynotification.com.ng.',
            detail: 'Ensure you are on the authentic military domain ending in .mil.ng or .com.ng.'
          },
          {
            step: 'Step 2: Enter Application Reference / Email',
            instruction: 'Click on "Track Application" or "Reprint Screening Slip" and type your registered email address and password.',
            detail: 'You can also search your profile using your 11-digit NIN.'
          },
          {
            step: 'Step 3: Authenticate Credentials',
            instruction: 'Verify your login details and open your completed application summary page.',
            detail: 'Ensure your application status reads "Submitted" or "Shortlisted for Screening".'
          },
          {
            step: 'Step 4: Download PDF Slips',
            instruction: 'Click "Print Screening Slip" and "Print Guarantor Form".',
            detail: 'The slip must show your candidate photograph, chosen trade/corps, and state command screening center.'
          },
          {
            step: 'Step 5: Print Multiple Clean Copies',
            instruction: 'Print at least three (3) copies on clean white A4 paper.',
            detail: 'Place them in a transparent waterproof plastic folder for protection.'
          }
        ],
        keyRequirements: [
          'Registered Application Number or NIN',
          'Active password or access PIN',
          '3 copies of clean A4 color printout',
          'Affixed recent passport photograph with white background'
        ],
        commonErrors: [
          {
            error: 'Slip Download Button Unresponsive',
            cause: 'Browser popup blocker blocking the automatic PDF generation window.',
            solution: 'Allow popups for recruitment.army.mil.ng in your browser settings.'
          },
          {
            error: 'Tracking.armynotification.com.ng Shows Offline',
            cause: 'Server DNS propagation or periodic military maintenance.',
            solution: 'Access the main recruitment.army.mil.ng mirror or check again during off-peak hours.'
          }
        ],
        faqs: [
          {
            question: 'Can I attend Army screening without the printed screening slip?',
            answer: 'No. Military police and recruiting officers at the screening camp gates will strictly turn away any applicant without the official printed slip.'
          },
          {
            question: 'What is the tracking.armynotification.com.ng portal for?',
            answer: 'It is the Nigerian Army designated application tracking portal where candidates can verify if their submission reached the recruiting database.'
          }
        ]
      },
      'guarantor-form': {
        title: 'Download Nigerian Army Guarantor Form 2026 (PDF & Stamping Guide)',
        seoTitle: 'Nigerian Army Guarantor Form PDF 2026 | Download & Endorsement',
        metaDescription: 'Download official Nigerian Army guarantor form PDF for 88 RRI & DSSC. See eligible military, police & civil servant ranks, court seals & requirements.',
        heroHeadline: 'Download Nigerian Army Guarantor Form (2026)',
        heroSubheadline: 'Detailed guide on eligible guarantors for 88 RRI and DSSC, military rank thresholds, high court seals, and zero-rejection rules.',
        directActionLabel: 'Download Army Guarantor Form',
        officialPortalUrl: 'https://recruitment.army.mil.ng',
        officialDomain: 'recruitment.army.mil.ng',
        statusText: 'Official Army Guarantor PDF Guide',
        warningNotice: 'FRAUD WARNING: Guarantors must sign voluntarily in person. Military intelligence teams cross-examine guarantors of shortlisted candidates.',
        stepByStep: [
          {
            step: 'Step 1: Download the Form',
            instruction: 'Download the official Nigerian Army Guarantor Form from the portal summary page.',
            detail: 'The form contains sections for Guarantor 1 and Guarantor 2.'
          },
          {
            step: 'Step 2: Verify Guarantor Qualifications',
            instruction: 'Ensure your guarantors meet the minimum rank (e.g. Captain in Military, CSP in Police, or GL 08 in Civil Service).',
            detail: 'Do not use junior personnel or friends.'
          },
          {
            step: 'Step 3: Complete All Sections in Ink',
            instruction: 'Guarantors must fill their names, residential address, telephone, and official designation by hand.',
            detail: 'Guarantor signatures must be dated and accompanied by their official stamp.'
          },
          {
            step: 'Step 4: Legal Oath Endorsement',
            instruction: 'Take the document to a High Court or Magistrate Court for swearing of affidavit and legal red seal.',
            detail: 'The Commissioner of Oaths must stamp and sign both pages.'
          }
        ],
        keyRequirements: [
          'Two (2) original copies of the completed form',
          'Passports of candidate and both guarantors attached',
          'Official identification photocopy of guarantors',
          'High Court Commissioner of Oaths seal'
        ],
        eligibleGuarantors: [
          'Military Officers of the rank of Captain / Lieutenant Commander / Flight Lieutenant and above',
          'Police Officers not below the rank of CSP / Superintendent of Police',
          'Career Civil Servants not below Grade Level 08 (GL 08)',
          'High Court Judges, Magistrates, or accredited Legal Practitioners',
          'First Class or Second Class Recognized Traditional Rulers',
          'Local Government Council Chairmen'
        ],
        ineligibleGuarantors: [
          'Parents, brothers, sisters, or spouses',
          'Recruits or junior soldiers (Private, Corporal, Sergeant)',
          'Politicians or party ward youth leaders',
          'Commercial business operators without formal institutional credentials'
        ],
        commonErrors: [
          {
            error: 'Using a Soldier (Private/Corporal) as Guarantor',
            cause: 'Recruits think any soldier can sign their form.',
            solution: 'Only commissioned officers (Captain and above) are eligible to endorse Army guarantor sheets.'
          }
        ],
        faqs: [
          {
            question: 'Can one person sign both guarantor sections?',
            answer: 'No. The Nigerian Army mandates two distinct, unrelated guarantors of good standing in society.'
          }
        ]
      },
      'portal-login': {
        title: 'Nigerian Army Recruitment Portal Login 2026 (Application Dashboard)',
        seoTitle: 'Nigerian Army Recruitment Portal Login 2026 | recruitment.army.mil.ng',
        metaDescription: 'Direct login to the Nigerian Army recruitment portal. Step-by-step instructions to check 88 RRI & DSSC status, view screening venue and download slips.',
        heroHeadline: 'Nigerian Army Portal Login & Enlistment Dashboard',
        heroSubheadline: 'Secure access to your Nigerian Army applicant profile, screening venue details, and status updates.',
        directActionLabel: 'Open Army Recruitment Portal',
        officialPortalUrl: 'https://recruitment.army.mil.ng',
        officialDomain: 'recruitment.army.mil.ng',
        statusText: 'Official Army Portal Active',
        warningNotice: 'SECURITY ALERT: Only enter credentials on recruitment.army.mil.ng. Disregard fake phishing portals with extensions like .site, .co, or .blogspot.',
        stepByStep: [
          {
            step: 'Step 1: Open recruitment.army.mil.ng',
            instruction: 'Visit the official Nigerian Army portal homepage.',
            detail: 'Verify the padlock icon in the browser address bar.'
          },
          {
            step: 'Step 2: Click on Login / Candidate Portal',
            instruction: 'Choose your category (Regular Recruit Intake RRI or Direct Short Service DSSC).',
            detail: 'Each intake has its dedicated database branch.'
          },
          {
            step: 'Step 3: Enter Your Registered Email & Password',
            instruction: 'Input your credentials and click "Sign In".',
            detail: 'Make sure there are no trailing whitespace characters.'
          }
        ],
        keyRequirements: [
          'Registered email address',
          'Application password',
          'NIN number'
        ],
        commonErrors: [
          {
            error: 'Server Error 500 / 503',
            cause: 'Server updates or surge in candidate traffic.',
            solution: 'Refresh using Ctrl+F5 or try during early morning hours.'
          }
        ],
        faqs: [
          {
            question: 'What is the official Nigerian Army recruitment website?',
            answer: 'The authentic website is recruitment.army.mil.ng. Status tracking can also be accessed via tracking.armynotification.com.ng.'
          }
        ]
      },
      'update-documents': {
        title: 'Update Your Documents on Nigerian Army Portal (88 RRI & DSSC)',
        seoTitle: 'Update Documents on Nigerian Army Portal 2026 | Edit Application',
        metaDescription: 'How to update your O-Level results, change documents, and correct errors on the Nigerian Army recruitment portal before screening.',
        heroHeadline: 'Update Your Documents on Army Portal (2026)',
        heroSubheadline: 'Guidelines on re-uploading WAEC/NECO credentials, adjusting LGA certificates, and correcting candidate profiles.',
        directActionLabel: 'Update Army Documents',
        officialPortalUrl: 'https://recruitment.army.mil.ng',
        officialDomain: 'recruitment.army.mil.ng',
        statusText: 'Army Document Correction Guide',
        warningNotice: 'IMPORTANT: Submitting altered or forged academic statements will result in immediate disqualification and handover to military police.',
        stepByStep: [
          {
            step: 'Step 1: Check Portal Status',
            instruction: 'Log into recruitment.army.mil.ng and check if the edit profile window is active.',
            detail: 'Edits are allowed while the application registration cycle is open.'
          },
          {
            step: 'Step 2: Upload Clear O-Level Statements',
            instruction: 'Ensure WAEC or NECO results have all 5 subjects visible, including English and Maths.',
            detail: 'Keep file size below 200KB.'
          }
        ],
        keyRequirements: [
          'Clean original scans of certificates',
          'Verified LGA Certificate of Origin',
          'Valid National ID slip (NIN)'
        ],
        commonErrors: [
          {
            error: 'Unable to Save Changes',
            cause: 'Missing a required field or file exceeds maximum upload size.',
            solution: 'Ensure all compulsory fields marked with red asterisks are filled.'
          }
        ],
        faqs: [
          {
            question: 'Can I add a second sitting of WAEC after submission?',
            answer: 'Yes, if the portal edit window is open. You can input two sittings from WAEC, NECO, or NABTEB.'
          }
        ]
      }
    }
  },

  navy: {
    slug: 'navy',
    agencyName: 'Nigerian Navy (NN)',
    shortName: 'Nigerian Navy',
    acronym: 'NN',
    branchBadge: 'Naval / Armed Forces',
    themeColor: {
      primary: 'bg-blue-950',
      gradient: 'from-blue-950 via-slate-900 to-navy-950',
      border: 'border-blue-400/30',
      text: 'text-cyan-400',
      lightBg: 'bg-blue-950/40',
    },
    officialPortalUrl: 'https://www.joinnigeriannavy.gov.ng',
    officialDomain: 'joinnigeriannavy.gov.ng',
    actions: {
      'confirmation-slip': {
        title: 'Print Nigerian Navy Batch 39 Confirmation Slip (Reprint Guide)',
        seoTitle: 'Print Nigerian Navy Confirmation Slip 2026 | Batch 39 Reprint',
        metaDescription: 'How to reprint your Nigerian Navy Batch 39 application confirmation slip on joinnigeriannavy.gov.ng. Download screening slip & guarantor forms.',
        heroHeadline: 'Reprint Nigerian Navy Batch 39 Confirmation Slip',
        heroSubheadline: 'Official steps to access joinnigeriannavy.gov.ng, reprint your Batch 39 confirmation slip, and check your exam center schedule.',
        directActionLabel: 'Reprint Navy Batch 39 Slip',
        officialPortalUrl: 'https://www.joinnigeriannavy.gov.ng',
        officialDomain: 'joinnigeriannavy.gov.ng',
        statusText: 'Batch 39 Slip Reprint Portal Open',
        warningNotice: 'NAVY ANTI-FRAUD ADVISORY: Registration and slip reprinting for Nigerian Navy Batch 39 is 100% free on joinnigeriannavy.gov.ng. Disregard fraudulent cybercafes.',
        stepByStep: [
          {
            step: 'Step 1: Open joinnigeriannavy.gov.ng',
            instruction: 'Visit the authentic Nigerian Navy recruitment portal at https://www.joinnigeriannavy.gov.ng.',
            detail: 'Ensure you are not on fake clone sites.'
          },
          {
            step: 'Step 2: Click on Login / Candidate Portal',
            instruction: 'Enter your 11-digit NIN and application password.',
            detail: 'The portal authenticates your profile against NIMC records.'
          },
          {
            step: 'Step 3: Click "Print Application Summary"',
            instruction: 'Locate the Batch 39 Confirmation Slip generation link on your dashboard.',
            detail: 'The slip must show your applicant registration number and chosen cadre.'
          },
          {
            step: 'Step 4: Print Color Copies',
            instruction: 'Print at least three (3) clear color copies on clean A4 paper.',
            detail: 'Do not crease the barcode or your passport photo.'
          }
        ],
        keyRequirements: [
          '11-digit National Identity Number (NIN)',
          'Registered account password',
          '3 copies of clean A4 color printout'
        ],
        commonErrors: [
          {
            error: 'NIN Authentication Timeout',
            cause: 'High traffic load connecting to national identity database.',
            solution: 'Attempt reprint between 11 PM and 5 AM.'
          }
        ],
        faqs: [
          {
            question: 'When is the deadline to reprint Nigerian Navy Batch 39 slips?',
            answer: 'Slips can be printed throughout the registration period and during the invitation phase prior to nationwide CBT exams.'
          }
        ]
      },
      'guarantor-form': {
        title: 'Download Nigerian Navy Guarantor Form 2026 (Batch 39 PDF)',
        seoTitle: 'Nigerian Navy Guarantor Form PDF 2026 | Batch 39 Download',
        metaDescription: 'Download official Nigerian Navy Batch 39 guarantor form PDF. Learn who qualifies to sign, court seals, and physical screening rules.',
        heroHeadline: 'Download Nigerian Navy Batch 39 Guarantor Form',
        heroSubheadline: 'Official guidelines on eligible naval guarantors, court oaths, passport attachments, and avoiding screening disqualification.',
        directActionLabel: 'Download Navy Guarantor Form',
        officialPortalUrl: 'https://www.joinnigeriannavy.gov.ng',
        officialDomain: 'joinnigeriannavy.gov.ng',
        statusText: 'Official Batch 39 Guarantor PDF Guide',
        warningNotice: 'CRITICAL: Falsified guarantor signatures lead to instant rejection at the gate of NNBTS Onne screening.',
        stepByStep: [
          {
            step: 'Step 1: Download from Dashboard',
            instruction: 'Log into joinnigeriannavy.gov.ng and download the Parent / Guarantor Consent Form.',
            detail: 'It includes the Parent Consent Form for applicants aged 18 to 22.'
          },
          {
            step: 'Step 2: Signatures by Qualified Persons',
            instruction: 'Have a senior civil servant (GL 08+), military officer, or traditional ruler sign the endorsement.',
            detail: 'Guarantors must attach their passport and identification photocopy.'
          },
          {
            step: 'Step 3: Sworn Court Affidavit',
            instruction: 'Get the form stamped at a Magistrate or High Court registry.',
            detail: 'Ensure the court seal is clear and readable.'
          }
        ],
        keyRequirements: [
          'Two copies of completed Navy Guarantor Form',
          'Parent Consent Slip (for candidates under 22)',
          'Valid court commissioner of oaths stamp'
        ],
        eligibleGuarantors: [
          'Commissioned Officers of the Nigerian Armed Forces (Lieutenant/Captain and above)',
          'Police Officers of the rank of CSP and above',
          'Confirmed Civil Servants not below Grade Level 08',
          'Accredited Legal Practitioners and High Court Magistrates',
          'Recognized Traditional Rulers and Village Heads'
        ],
        ineligibleGuarantors: [
          'Parents and immediate biological siblings',
          'Junior naval ratings (Ordinary Seaman, Able Seaman)',
          'Individuals without verifiable government ID'
        ],
        commonErrors: [
          {
            error: 'Missing Parent Consent Form',
            cause: 'Younger applicants (18-20) forgetting the mandatory parent/guardian section.',
            solution: 'Both the guarantor section and parent consent section must be completed.'
          }
        ],
        faqs: [
          {
            question: 'Is the Parent Consent Form different from the Guarantor Form?',
            answer: 'For Nigerian Navy ratings, the parent consent form is often attached to or part of the guarantor package for younger recruits.'
          }
        ]
      },
      'portal-login': {
        title: 'Nigerian Navy Portal Login 2026 (joinnigeriannavy.gov.ng)',
        seoTitle: 'Nigerian Navy Recruitment Portal Login 2026 | joinnigeriannavy.gov.ng',
        metaDescription: 'Direct login to the Nigerian Navy recruitment portal at joinnigeriannavy.gov.ng. Access Batch 39 profile, check CBT exam venue and reprint slips.',
        heroHeadline: 'Nigerian Navy Portal Login & Candidate Dashboard',
        heroSubheadline: 'Secure access to your Batch 39 candidate account, status verification, and screening schedules.',
        directActionLabel: 'Open Navy Login Portal',
        officialPortalUrl: 'https://www.joinnigeriannavy.gov.ng',
        officialDomain: 'joinnigeriannavy.gov.ng',
        statusText: 'Official Navy Portal Active',
        warningNotice: 'ANTI-PHISHING: The authentic domain is joinnigeriannavy.gov.ng (or joinnigeriannavy.com). Do not trust third party blogs.',
        stepByStep: [
          {
            step: 'Step 1: Open joinnigeriannavy.gov.ng',
            instruction: 'Visit the official naval recruitment website.',
            detail: 'Click on "Applicant Login".'
          },
          {
            step: 'Step 2: Enter Email / NIN and Password',
            instruction: 'Type your registered credentials and click sign in.',
            detail: 'Check your caps lock key before typing.'
          }
        ],
        keyRequirements: [
          'National Identity Number (NIN)',
          'Registered email and password'
        ],
        commonErrors: [
          {
            error: 'Invalid Credentials on First Attempt',
            cause: 'Email capitalization issue.',
            solution: 'Type your email in all lowercase letters.'
          }
        ],
        faqs: [
          {
            question: 'What do I do if I cannot log into joinnigeriannavy portal?',
            answer: 'Use the "Forgot Password" link to receive a password reset token via your registered email address.'
          }
        ]
      },
      'update-documents': {
        title: 'Update Your Documents on Nigerian Navy Batch 39 Portal',
        seoTitle: 'Update Documents on Nigerian Navy Portal 2026 | Batch 39',
        metaDescription: 'How to update your O-Level results, re-upload documents, and correct errors on the Nigerian Navy Batch 39 portal.',
        heroHeadline: 'Update Your Documents on Navy Portal (2026)',
        heroSubheadline: 'Official guidelines on correcting credentials, replacing blurry certificates, and updating educational records.',
        directActionLabel: 'Update Navy Documents',
        officialPortalUrl: 'https://www.joinnigeriannavy.gov.ng',
        officialDomain: 'joinnigeriannavy.gov.ng',
        statusText: 'Navy Document Update Guide',
        warningNotice: 'Zero tolerance for forged WAEC or NECO statements. Background verification is performed with examination bodies.',
        stepByStep: [
          {
            step: 'Step 1: Access Candidate Dashboard',
            instruction: 'Log into joinnigeriannavy.gov.ng and locate the "Uploaded Files" section.',
            detail: 'Review all uploaded images for clarity.'
          },
          {
            step: 'Step 2: Re-upload Clear Scans',
            instruction: 'Replace any file that is below readable resolution or exceeds 200KB.',
            detail: 'Save changes and reprint your confirmation slip.'
          }
        ],
        keyRequirements: [
          'Original O-Level statement of result',
          'LGA Certificate of Indigene',
          'Birth certificate or NPC declaration'
        ],
        commonErrors: [
          {
            error: 'File Format Not Supported',
            cause: 'Uploading PNG or DOC files instead of JPG/PDF.',
            solution: 'Convert documents to clean JPG or PDF under 200KB.'
          }
        ],
        faqs: [
          {
            question: 'Can I change my chosen naval trade after submission?',
            answer: 'Only if the portal profile edit window remains open before shortlisting commences.'
          }
        ]
      }
    }
  },

  'civil-defence': {
    slug: 'civil-defence',
    agencyName: 'Nigeria Security and Civil Defence Corps (NSCDC / CDCFIB)',
    shortName: 'Civil Defence (NSCDC)',
    acronym: 'NSCDC',
    branchBadge: 'Paramilitary / CDCFIB',
    themeColor: {
      primary: 'bg-red-950',
      gradient: 'from-red-950 via-slate-900 to-red-900',
      border: 'border-red-500/30',
      text: 'text-red-400',
      lightBg: 'bg-red-950/40',
    },
    officialPortalUrl: 'https://cdcfib.gov.ng',
    officialDomain: 'cdcfib.gov.ng',
    actions: {
      'confirmation-slip': {
        title: 'Print Civil Defence (NSCDC) Confirmation Slip 2026 (CDCFIB Reprint)',
        seoTitle: 'Print NSCDC Confirmation Slip 2026 | CDCFIB Portal Reprint',
        metaDescription: 'Step-by-step guide to reprint your Civil Defence (NSCDC) confirmation slip on cdcfib.gov.ng. CBT exam slip, screening passes & barcode verification.',
        heroHeadline: 'Reprint Civil Defence (NSCDC) Confirmation Slip (2026)',
        heroSubheadline: 'Official procedure to access cdcfib.gov.ng, reprint your NSCDC confirmation slip, and check your CBT screening timetable.',
        directActionLabel: 'Reprint CDCFIB Confirmation Slip',
        officialPortalUrl: 'https://cdcfib.gov.ng',
        officialDomain: 'cdcfib.gov.ng',
        statusText: 'CDCFIB Slip Reprint Active',
        warningNotice: 'CDCFIB WARNING: The Civil Defence, Correctional, Fire and Immigration Services Board does not sell slip reprint PINs or charge application fees.',
        stepByStep: [
          {
            step: 'Step 1: Open CDCFIB Official Portal',
            instruction: 'Visit https://cdcfib.gov.ng or recruitment.cdcfib.gov.ng.',
            detail: 'Check for the official Federal Government of Nigeria seal.'
          },
          {
            step: 'Step 2: Click on "Print Slip / Application Status"',
            instruction: 'Select Civil Defence (NSCDC) from the board services dropdown menu.',
            detail: 'Have your Application Code or National Identity Number (NIN) ready.'
          },
          {
            step: 'Step 3: Enter Your Credentials',
            instruction: 'Input your registered Application ID and Phone Number/Email.',
            detail: 'Click "Fetch Application Record".'
          },
          {
            step: 'Step 4: Download and Print Slip',
            instruction: 'Print at least three (3) copies on clean white A4 paper.',
            detail: 'Verify that your unique candidate QR code and designated CBT center appear clearly.'
          }
        ],
        keyRequirements: [
          'CDCFIB Application Reference Number',
          'Registered 11-digit NIN',
          'Active phone number used during registration',
          '3 copies of clean A4 printout'
        ],
        commonErrors: [
          {
            error: 'Application Code Not Found on CDCFIB Database',
            cause: 'Selecting the wrong agency branch (e.g. Immigration instead of Civil Defence).',
            solution: 'Ensure you selected NSCDC under the agency dropdown menu.'
          }
        ],
        faqs: [
          {
            question: 'What do I do if I forgot my CDCFIB application code?',
            answer: 'Use the "Retrieve Application Code" feature on cdcfib.gov.ng using your 11-digit NIN and registered phone number.'
          }
        ]
      },
      'guarantor-form': {
        title: 'Download Civil Defence (NSCDC) Guarantor Form 2026 (CDCFIB PDF)',
        seoTitle: 'Civil Defence (NSCDC) Guarantor Form PDF 2026 | CDCFIB Guide',
        metaDescription: 'Download official Civil Defence (NSCDC) guarantor form PDF from CDCFIB. Learn eligible guarantors, court oaths & screening submission rules.',
        heroHeadline: 'Download NSCDC Civil Defence Guarantor Form',
        heroSubheadline: 'Comprehensive guide on eligible guarantors for Civil Defence, legal oath stamping, passport requirements, and screening compliance.',
        directActionLabel: 'Download NSCDC Guarantor Form',
        officialPortalUrl: 'https://cdcfib.gov.ng',
        officialDomain: 'cdcfib.gov.ng',
        statusText: 'Official CDCFIB Guarantor Guide',
        warningNotice: 'Disqualification will occur if your guarantor cannot be reached on their listed official phone number during security vetting.',
        stepByStep: [
          {
            step: 'Step 1: Download from CDCFIB Portal',
            instruction: 'Download the referee/guarantor endorsement form from the CDCFIB dashboard.',
            detail: 'Print two clean copies on standard A4 paper.'
          },
          {
            step: 'Step 2: Signatures by Senior Official',
            instruction: 'Have a civil servant (GL 08+), traditional ruler, or legal officer complete their section.',
            detail: 'The guarantor must write their official designation and affix an office stamp.'
          },
          {
            step: 'Step 3: High Court Stamping',
            instruction: 'Endorse the form at any Magistrate or High Court registry.',
            detail: 'Attach guarantor\'s passport photo and ID copy.'
          }
        ],
        keyRequirements: [
          'Two copies of completed NSCDC Guarantor Form',
          'Passports of candidate and guarantor',
          'High Court Commissioner of Oaths seal'
        ],
        eligibleGuarantors: [
          'Civil Servants not below Grade Level 08 in Federal or State Ministries',
          'Paramilitary Officers (NSCDC, NIS, NCS, FFS) not below Superintendent rank',
          'Military Officers of Captain rank and above',
          'Police Officers not below ASP rank',
          'Traditional Rulers and High Court Magistrates'
        ],
        ineligibleGuarantors: [
          'Parents and biological brothers/sisters',
          'Junior corps members (GL 03 - GL 06)',
          'Individuals with criminal records'
        ],
        commonErrors: [
          {
            error: 'Missing Official Office Stamp',
            cause: 'Guarantor signed with pen only without applying their department or court stamp.',
            solution: 'Ensure the official stamp is clearly visible beside the guarantor signature.'
          }
        ],
        faqs: [
          {
            question: 'Can an NSCDC officer sign my Civil Defence guarantor form?',
            answer: 'Yes, provided they are of the rank of Superintendent of Corps or higher.'
          }
        ]
      },
      'portal-login': {
        title: 'Civil Defence (NSCDC) Portal Login 2026 (cdcfib.gov.ng)',
        seoTitle: 'Civil Defence (NSCDC) Portal Login 2026 | cdcfib.gov.ng Dashboard',
        metaDescription: 'Direct login to Civil Defence NSCDC recruitment portal at cdcfib.gov.ng. Check application status, shortlist updates and CBT exam dates.',
        heroHeadline: 'Civil Defence (NSCDC) Portal Login & Dashboard',
        heroSubheadline: 'Secure access to your CDCFIB candidate profile, status notifications, and CBT examination slip generation.',
        directActionLabel: 'Open CDCFIB Login Portal',
        officialPortalUrl: 'https://cdcfib.gov.ng',
        officialDomain: 'cdcfib.gov.ng',
        statusText: 'Official CDCFIB Login Active',
        warningNotice: 'Beware of scam sites pretending to be cdcfib. The board will NEVER contact you from a Gmail or Yahoo email address.',
        stepByStep: [
          {
            step: 'Step 1: Open cdcfib.gov.ng',
            instruction: 'Visit the authentic board portal.',
            detail: 'Click on "Candidate Login".'
          },
          {
            step: 'Step 2: Enter Application Reference and NIN',
            instruction: 'Type your application code and registered phone number.',
            detail: 'Click "Login to Dashboard".'
          }
        ],
        keyRequirements: [
          'Application Reference ID',
          'National Identity Number (NIN)',
          'Registered phone number'
        ],
        commonErrors: [
          {
            error: '504 Gateway Time-out',
            cause: 'Massive nationwide traffic when CBT dates are released.',
            solution: 'Access the portal during off-peak night hours.'
          }
        ],
        faqs: [
          {
            question: 'What is the official Civil Defence recruitment website?',
            answer: 'The authentic website is cdcfib.gov.ng (Civil Defence, Correctional, Fire and Immigration Services Board).'
          }
        ]
      },
      'update-documents': {
        title: 'Update Your Documents on Civil Defence Portal (CDCFIB Correction)',
        seoTitle: 'Update Documents on Civil Defence (NSCDC) Portal 2026 | CDCFIB',
        metaDescription: 'How to update credentials, change WAEC grades, and correct errors on the Civil Defence NSCDC recruitment portal on cdcfib.gov.ng.',
        heroHeadline: 'Update Your Documents on NSCDC Portal (2026)',
        heroSubheadline: 'Official guidelines on editing credentials, updating O-Level results, and resolving document mismatches on cdcfib.gov.ng.',
        directActionLabel: 'Update CDCFIB Documents',
        officialPortalUrl: 'https://cdcfib.gov.ng',
        officialDomain: 'cdcfib.gov.ng',
        statusText: 'CDCFIB Document Correction Guide',
        warningNotice: 'Submitting tampered O-Level certificates or altered NIN data leads to immediate blacklist from all federal civil service recruitments.',
        stepByStep: [
          {
            step: 'Step 1: Check If Profile Edit Is Open',
            instruction: 'Log into cdcfib.gov.ng and verify if the "Edit Profile" link is active.',
            detail: 'The board opens a document verification and correction window prior to CBT scheduling.'
          },
          {
            step: 'Step 2: Upload Clean Documents',
            instruction: 'Replace blurry scans with crisp, high-resolution PDF or JPG files under 200KB.',
            detail: 'Save changes and reprint your confirmation slip.'
          }
        ],
        keyRequirements: [
          'Original academic certificates',
          'LGA Certificate of Origin',
          'NIN slip'
        ],
        commonErrors: [
          {
            error: 'Edit Button Missing on Dashboard',
            cause: 'The correction window is closed or candidate record is frozen for shortlisting.',
            solution: 'Bring original documents directly to the zonal screening center.'
          }
        ],
        faqs: [
          {
            question: 'Can I change my cadre (e.g., Assistant to Inspector)?',
            answer: 'Cadre changes cannot be made once submitted because educational requirements and age limits differ.'
          }
        ]
      }
    }
  },

  immigration: {
    slug: 'immigration',
    agencyName: 'Nigeria Immigration Service (NIS / CDCFIB)',
    shortName: 'Immigration (NIS)',
    acronym: 'NIS',
    branchBadge: 'Paramilitary / CDCFIB',
    themeColor: {
      primary: 'bg-emerald-950',
      gradient: 'from-emerald-950 via-slate-900 to-teal-950',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      lightBg: 'bg-emerald-950/40',
    },
    officialPortalUrl: 'https://cdcfib.gov.ng',
    officialDomain: 'cdcfib.gov.ng',
    actions: {
      'confirmation-slip': {
        title: 'Print Nigeria Immigration Service Confirmation Slip 2026 (CDCFIB Reprint)',
        seoTitle: 'Print NIS Confirmation Slip 2026 | Immigration Portal Reprint',
        metaDescription: 'Step-by-step guide to reprint your Nigeria Immigration Service (NIS) confirmation slip on cdcfib.gov.ng. CBT exam slip, screening passes & verification.',
        heroHeadline: 'Reprint Nigeria Immigration Service Confirmation Slip (2026)',
        heroSubheadline: 'Official procedure to access cdcfib.gov.ng, reprint your NIS application confirmation slip, and check your screening schedule.',
        directActionLabel: 'Reprint NIS Confirmation Slip',
        officialPortalUrl: 'https://cdcfib.gov.ng',
        officialDomain: 'cdcfib.gov.ng',
        statusText: 'Immigration Slip Reprint Active',
        warningNotice: 'NIS ADVISORY: Application and slip reprint is 100% free via CDCFIB. Never pay anyone promising immigration appointment letters.',
        stepByStep: [
          {
            step: 'Step 1: Open cdcfib.gov.ng',
            instruction: 'Visit the verified CDCFIB recruitment portal.',
            detail: 'Select Nigeria Immigration Service (NIS) under services.'
          },
          {
            step: 'Step 2: Enter Application Reference',
            instruction: 'Input your NIS application code and registered phone number/email.',
            detail: 'Click "Generate Slip".'
          },
          {
            step: 'Step 3: Print A4 Color Slip',
            instruction: 'Print at least three (3) copies on clean white paper.',
            detail: 'Ensure the candidate QR code is crisp and scannable.'
          }
        ],
        keyRequirements: [
          'NIS Application Reference Number',
          'Registered 11-digit NIN',
          '3 copies of clean A4 printout'
        ],
        commonErrors: [
          {
            error: 'Barcode Not Showing',
            cause: 'Browser printing before scripts fully render.',
            solution: 'Download as PDF first, then print from Adobe Reader.'
          }
        ],
        faqs: [
          {
            question: 'Can I reprint my NIS slip on the day of screening?',
            answer: 'It is strongly advised to print several copies days in advance because portal traffic spikes on screening mornings.'
          }
        ]
      },
      'guarantor-form': {
        title: 'Download Nigeria Immigration Service Guarantor Form 2026 (PDF)',
        seoTitle: 'Nigeria Immigration Guarantor Form PDF 2026 | CDCFIB Guide',
        metaDescription: 'Download official Nigeria Immigration Service (NIS) guarantor form PDF. Who can sign, court endorsement, and document submission rules.',
        heroHeadline: 'Download Nigeria Immigration (NIS) Guarantor Form',
        heroSubheadline: 'Detailed guide on eligible guarantors for NIS recruitment, court seal requirements, and physical screening rules.',
        directActionLabel: 'Download NIS Guarantor Form',
        officialPortalUrl: 'https://cdcfib.gov.ng',
        officialDomain: 'cdcfib.gov.ng',
        statusText: 'Official NIS Guarantor Guide',
        warningNotice: 'Guarantors must be reputable Nigerian citizens with clean criminal records and verifiable employment.',
        stepByStep: [
          {
            step: 'Step 1: Download Official Template',
            instruction: 'Download the CDCFIB NIS Guarantor Form PDF from your candidate dashboard.',
            detail: 'Print two clean copies on standard A4 paper.'
          },
          {
            step: 'Step 2: Endorsement by Senior Official',
            instruction: 'Have a senior civil servant (GL 08+), military officer, or traditional ruler fill and sign.',
            detail: 'Attach guarantor passport and official ID.'
          },
          {
            step: 'Step 3: High Court Stamping',
            instruction: 'Endorse the form at any Magistrate or High Court registry.',
            detail: 'Ensure the court seal is legible.'
          }
        ],
        keyRequirements: [
          'Two copies of completed NIS Guarantor Form',
          'Passports of candidate and guarantor',
          'High Court seal and commissioner of oaths stamp'
        ],
        eligibleGuarantors: [
          'Civil Servants not below Grade Level 08 in Federal or State Service',
          'Immigration Officers of the rank of Superintendent of Immigration (SI) and above',
          'Military and Police Officers of equivalent senior ranks',
          'Traditional Rulers and Magistrates'
        ],
        ineligibleGuarantors: [
          'Parents and biological siblings',
          'Junior immigration staff (Assistant Inspector and below)',
          'Unemployed individuals'
        ],
        commonErrors: [
          {
            error: 'Missing Court Seal',
            cause: 'Submitting with only guarantor signature without judicial endorsement.',
            solution: 'Get the form stamped at a Magistrate or High Court.'
          }
        ],
        faqs: [
          {
            question: 'Can my uncle sign my NIS guarantor form?',
            answer: 'Yes, provided he meets the required rank or grade level and is not your direct biological parent.'
          }
        ]
      },
      'portal-login': {
        title: 'Nigeria Immigration Service Portal Login 2026 (cdcfib.gov.ng)',
        seoTitle: 'Nigeria Immigration Portal Login 2026 | cdcfib.gov.ng Dashboard',
        metaDescription: 'Direct login to Nigeria Immigration Service (NIS) recruitment portal at cdcfib.gov.ng. Check application status, shortlist updates and CBT exam dates.',
        heroHeadline: 'Nigeria Immigration (NIS) Portal Login & Dashboard',
        heroSubheadline: 'Secure access to your CDCFIB candidate profile, status notifications, and CBT examination slip generation.',
        directActionLabel: 'Open NIS Login Portal',
        officialPortalUrl: 'https://cdcfib.gov.ng',
        officialDomain: 'cdcfib.gov.ng',
        statusText: 'Official NIS Login Active',
        warningNotice: 'Beware of scam sites pretending to be cdcfib. The board will NEVER contact you from a Gmail or Yahoo email address.',
        stepByStep: [
          {
            step: 'Step 1: Open cdcfib.gov.ng',
            instruction: 'Visit the authentic board portal.',
            detail: 'Click on "Candidate Login".'
          },
          {
            step: 'Step 2: Enter Application Reference and NIN',
            instruction: 'Type your application code and registered phone number.',
            detail: 'Click "Login to Dashboard".'
          }
        ],
        keyRequirements: [
          'Application Reference ID',
          'National Identity Number (NIN)',
          'Registered phone number'
        ],
        commonErrors: [
          {
            error: '504 Gateway Time-out',
            cause: 'Massive nationwide traffic when CBT dates are released.',
            solution: 'Access the portal during off-peak night hours.'
          }
        ],
        faqs: [
          {
            question: 'What is the official Immigration recruitment website?',
            answer: 'The authentic website is cdcfib.gov.ng (Civil Defence, Correctional, Fire and Immigration Services Board).'
          }
        ]
      },
      'update-documents': {
        title: 'Update Your Documents on Immigration Portal (NIS Correction Guide)',
        seoTitle: 'Update Documents on Nigeria Immigration (NIS) Portal 2026',
        metaDescription: 'How to update credentials, change WAEC grades, and correct errors on the Nigeria Immigration Service recruitment portal on cdcfib.gov.ng.',
        heroHeadline: 'Update Your Documents on NIS Portal (2026)',
        heroSubheadline: 'Official guidelines on editing credentials, updating O-Level results, and resolving document mismatches on cdcfib.gov.ng.',
        directActionLabel: 'Update NIS Documents',
        officialPortalUrl: 'https://cdcfib.gov.ng',
        officialDomain: 'cdcfib.gov.ng',
        statusText: 'NIS Document Correction Guide',
        warningNotice: 'Submitting tampered O-Level certificates or altered NIN data leads to immediate blacklist from all federal civil service recruitments.',
        stepByStep: [
          {
            step: 'Step 1: Check If Profile Edit Is Open',
            instruction: 'Log into cdcfib.gov.ng and verify if the "Edit Profile" link is active.',
            detail: 'The board opens a document verification and correction window prior to CBT scheduling.'
          },
          {
            step: 'Step 2: Upload Clean Documents',
            instruction: 'Replace blurry scans with crisp, high-resolution PDF or JPG files under 200KB.',
            detail: 'Save changes and reprint your confirmation slip.'
          }
        ],
        keyRequirements: [
          'Original academic certificates',
          'LGA Certificate of Origin',
          'NIN slip'
        ],
        commonErrors: [
          {
            error: 'Edit Button Missing on Dashboard',
            cause: 'The correction window is closed or candidate record is frozen for shortlisting.',
            solution: 'Bring original documents directly to the zonal screening center.'
          }
        ],
        faqs: [
          {
            question: 'Can I change my cadre (e.g., Assistant to Inspector)?',
            answer: 'Cadre changes cannot be made once submitted because educational requirements and age limits differ.'
          }
        ]
      }
    }
  },

  customs: {
    slug: 'customs',
    agencyName: 'Nigeria Customs Service (NCS)',
    shortName: 'Nigeria Customs',
    acronym: 'NCS',
    branchBadge: 'Paramilitary / Border Security',
    themeColor: {
      primary: 'bg-emerald-950',
      gradient: 'from-emerald-950 via-slate-900 to-green-950',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      lightBg: 'bg-emerald-950/40',
    },
    officialPortalUrl: 'https://vacancy.customs.gov.ng',
    officialDomain: 'vacancy.customs.gov.ng',
    actions: {
      'confirmation-slip': {
        title: 'Print Nigeria Customs Service Confirmation Slip 2026 (Reprint Guide)',
        seoTitle: 'Print Nigeria Customs Confirmation Slip 2026 | NCS Portal Reprint',
        metaDescription: 'Step-by-step guide to reprint your Nigeria Customs Service confirmation slip on vacancy.customs.gov.ng. Screening passes & barcode verification.',
        heroHeadline: 'Reprint Nigeria Customs Confirmation Slip (2026)',
        heroSubheadline: 'Official procedure to access vacancy.customs.gov.ng, reprint your NCS confirmation slip, and check your screening venue.',
        directActionLabel: 'Reprint Customs Confirmation Slip',
        officialPortalUrl: 'https://vacancy.customs.gov.ng',
        officialDomain: 'vacancy.customs.gov.ng',
        statusText: 'Customs Slip Reprint Active',
        warningNotice: 'NCS NOTICE: Nigeria Customs does not auction recruitment slots or charge fees for reprinting application slips.',
        stepByStep: [
          {
            step: 'Step 1: Open vacancy.customs.gov.ng',
            instruction: 'Visit the authentic recruitment portal.',
            detail: 'Click on "Applicant Login / Reprint Slip".'
          },
          {
            step: 'Step 2: Enter Application Reference & Password',
            instruction: 'Input your registered credentials and click sign in.',
            detail: 'You will be redirected to your NCS dashboard.'
          },
          {
            step: 'Step 3: Print A4 Color Slip',
            instruction: 'Download and print at least two (2) clear copies.',
            detail: 'Keep one copy safe in your records.'
          }
        ],
        keyRequirements: [
          'NCS Application Reference Number',
          'Registered password and email',
          'Clean A4 color printout'
        ],
        commonErrors: [
          {
            error: 'Session Expired Error',
            cause: 'Prolonged inactivity on the login page.',
            solution: 'Refresh the page and re-enter credentials quickly.'
          }
        ],
        faqs: [
          {
            question: 'What is the official Nigeria Customs recruitment website?',
            answer: 'The authentic website is vacancy.customs.gov.ng (or customs.gov.ng).'
          }
        ]
      },
      'guarantor-form': {
        title: 'Download Nigeria Customs Guarantor Form 2026 (NCS PDF)',
        seoTitle: 'Nigeria Customs Guarantor Form PDF 2026 | Download & Stamping Guide',
        metaDescription: 'Download official Nigeria Customs Service guarantor form PDF. Who is qualified to endorse, high court seals, and physical screening rules.',
        heroHeadline: 'Download Nigeria Customs (NCS) Guarantor Form',
        heroSubheadline: 'Official instructions on eligible guarantors for Customs, court oath seals, passport requirements, and screening compliance.',
        directActionLabel: 'Download Customs Guarantor Form',
        officialPortalUrl: 'https://vacancy.customs.gov.ng',
        officialDomain: 'vacancy.customs.gov.ng',
        statusText: 'Official Customs Guarantor Guide',
        warningNotice: 'Forged signatures on Customs guarantor forms are treated as a felony under federal customs regulations.',
        stepByStep: [
          {
            step: 'Step 1: Download from Portal',
            instruction: 'Download the official Customs Guarantor Form from vacancy.customs.gov.ng.',
            detail: 'Print two clean copies on standard A4 paper.'
          },
          {
            step: 'Step 2: Complete Guarantor Sections',
            instruction: 'Have a senior civil servant (GL 08+), military officer, or traditional ruler complete their section.',
            detail: 'Attach guarantor passport and official ID.'
          },
          {
            step: 'Step 3: High Court Stamping',
            instruction: 'Endorse the form at any Magistrate or High Court registry.',
            detail: 'Ensure the court seal is legible.'
          }
        ],
        keyRequirements: [
          'Two copies of completed NCS Guarantor Form',
          'Passports of candidate and guarantor',
          'High Court seal and commissioner of oaths stamp'
        ],
        eligibleGuarantors: [
          'Civil Servants not below Grade Level 08 in Federal or State Service',
          'Customs Officers of Superintendent rank and above',
          'Military and Police Officers of equivalent senior ranks',
          'Traditional Rulers and Magistrates'
        ],
        ineligibleGuarantors: [
          'Parents and biological siblings',
          'Junior customs officers (Customs Assistant)',
          'Unemployed individuals'
        ],
        commonErrors: [
          {
            error: 'Missing Court Seal',
            cause: 'Submitting with only guarantor signature without judicial endorsement.',
            solution: 'Get the form stamped at a Magistrate or High Court.'
          }
        ],
        faqs: [
          {
            question: 'Can a retired civil servant sign my Customs guarantor form?',
            answer: 'Yes, provided they retired at Grade Level 08 or above and can provide proof of retirement pension or appointment.'
          }
        ]
      },
      'portal-login': {
        title: 'Nigeria Customs Service Portal Login 2026 (vacancy.customs.gov.ng)',
        seoTitle: 'Nigeria Customs Portal Login 2026 | vacancy.customs.gov.ng',
        metaDescription: 'Direct login to the Nigeria Customs recruitment portal at vacancy.customs.gov.ng. Check candidate status, CBT date and screening passes.',
        heroHeadline: 'Nigeria Customs Portal Login & Candidate Dashboard',
        heroSubheadline: 'Secure access to your NCS candidate account, status verification, and screening schedules.',
        directActionLabel: 'Open Customs Login Portal',
        officialPortalUrl: 'https://vacancy.customs.gov.ng',
        officialDomain: 'vacancy.customs.gov.ng',
        statusText: 'Official Customs Portal Active',
        warningNotice: 'Beware of scam sites pretending to be customs. Only access vacancy.customs.gov.ng.',
        stepByStep: [
          {
            step: 'Step 1: Open vacancy.customs.gov.ng',
            instruction: 'Visit the official portal.',
            detail: 'Click on "Applicant Login".'
          },
          {
            step: 'Step 2: Enter Email and Password',
            instruction: 'Type your registered credentials and sign in.',
            detail: 'Access your candidate dashboard.'
          }
        ],
        keyRequirements: [
          'Registered email address',
          'Account password'
        ],
        commonErrors: [
          {
            error: 'Invalid Password',
            cause: 'Caps lock or typo.',
            solution: 'Use password reset feature.'
          }
        ],
        faqs: [
          {
            question: 'How do I check if I was shortlisted for Customs screening?',
            answer: 'Log into your dashboard at vacancy.customs.gov.ng or check the official published PDF shortlist.'
          }
        ]
      },
      'update-documents': {
        title: 'Update Your Documents on Nigeria Customs Portal',
        seoTitle: 'Update Documents on Nigeria Customs Portal 2026 | NCS Correction',
        metaDescription: 'How to update your O-Level results, re-upload documents, and correct errors on the Nigeria Customs Service portal.',
        heroHeadline: 'Update Your Documents on Customs Portal (2026)',
        heroSubheadline: 'Official guidelines on correcting credentials, replacing blurry certificates, and updating educational records.',
        directActionLabel: 'Update Customs Documents',
        officialPortalUrl: 'https://vacancy.customs.gov.ng',
        officialDomain: 'vacancy.customs.gov.ng',
        statusText: 'Customs Document Update Guide',
        warningNotice: 'Zero tolerance for forged WAEC or NECO statements. Background verification is performed with examination bodies.',
        stepByStep: [
          {
            step: 'Step 1: Access Candidate Dashboard',
            instruction: 'Log into vacancy.customs.gov.ng and locate the "Uploaded Files" section.',
            detail: 'Review all uploaded images for clarity.'
          },
          {
            step: 'Step 2: Re-upload Clear Scans',
            instruction: 'Replace any file that is below readable resolution or exceeds 200KB.',
            detail: 'Save changes and reprint your confirmation slip.'
          }
        ],
        keyRequirements: [
          'Original O-Level statement of result',
          'LGA Certificate of Indigene',
          'Birth certificate or NPC declaration'
        ],
        commonErrors: [
          {
            error: 'File Format Not Supported',
            cause: 'Uploading PNG or DOC files instead of JPG/PDF.',
            solution: 'Convert documents to clean JPG or PDF under 200KB.'
          }
        ],
        faqs: [
          {
            question: 'Can I change my cadre after submission?',
            answer: 'Cadre changes cannot be made once submitted because educational requirements differ.'
          }
        ]
      }
    }
  }
};

export const ACTION_SLUGS: Record<ActionType, { name: string; icon: string; description: string }> = {
  'confirmation-slip': {
    name: 'Print Confirmation Slip',
    icon: 'FileText',
    description: 'Reprint your candidate registration slip, screening passes, and barcode sheets.'
  },
  'guarantor-form': {
    name: 'Download Guarantor Form',
    icon: 'ShieldCheck',
    description: 'Download official referee form PDF, eligible ranks, and high court stamping guide.'
  },
  'portal-login': {
    name: 'Portal Login / Dashboard',
    icon: 'LogIn',
    description: 'Official candidate login link, password reset, and status verification.'
  },
  'update-documents': {
    name: 'Update Your Documents',
    icon: 'RefreshCw',
    description: 'How to re-upload clear credentials, change O-Level grades, and correct errors.'
  }
};
