/**
 * Official Nigerian Air Force (NAF) BMTC 47 Recruitment Exercise 2026
 * Zonal General Aptitude Test Verified Shortlist Data
 * 
 * Sourced directly from official HQ NAF Directives
 * Signed by: Air Vice Marshal CO Obiabaka for Chief of the Air Staff
 * Exam Date: Saturday, 24 October 2026 by 7:00 AM Prompt
 */

export interface NAFCandidate {
  sn: number;
  appId: string;
  name: string;
  gender: 'M' | 'F';
  state: string;
  centre: string;
  venue: string;
  examDate: string;
}

export interface NAFExamCentreInfo {
  centreId: string;
  centreName: string;
  venue: string;
  city: string;
  state: string;
  examDate: string;
  reportingTime: string;
  candidateCount: number;
  requirements: string[];
  note: string;
}

export const NAF_CENTRES_INFO: Record<string, NAFExamCentreInfo> = {
  'benin': {
    centreId: 'benin',
    centreName: 'Benin Centre',
    venue: 'Nigerian Air Force Base, Benin City',
    city: 'Benin City',
    state: 'Edo State',
    examDate: 'Saturday, 24 October 2026',
    reportingTime: '7:00 AM Prompt',
    candidateCount: 488,
    requirements: [
      'NAF Application Acknowledgment Card',
      'Pencil (HB recommended)',
      'Eraser'
    ],
    note: 'Nigerian Air Force online registration and all other enlistment processes are FREE OF CHARGE and no payment should be made at any point throughout the Exercise.'
  },
  'enugu': {
    centreId: 'enugu',
    centreName: 'Enugu Centre',
    venue: 'Nigerian Air Force Base, Enugu',
    city: 'Enugu',
    state: 'Enugu State',
    examDate: 'Saturday, 24 October 2026',
    reportingTime: '7:00 AM Prompt',
    candidateCount: 708,
    requirements: [
      'NAF Application Acknowledgment Card',
      'Pencil (HB recommended)',
      'Eraser'
    ],
    note: 'Nigerian Air Force online registration and all other enlistment processes are FREE OF CHARGE and no payment should be made at any point throughout the Exercise.'
  },
  'kwara': {
    centreId: 'kwara',
    centreName: 'Kwara Centre',
    venue: 'Nigerian Air Force Base Oloje, Ilorin',
    city: 'Ilorin',
    state: 'Kwara State',
    examDate: 'Saturday, 24 October 2026',
    reportingTime: '7:00 AM Prompt',
    candidateCount: 501,
    requirements: [
      'NAF Application Acknowledgment Card',
      'Pencil (HB recommended)',
      'Eraser'
    ],
    note: 'Nigerian Air Force online registration and all other enlistment processes are FREE OF CHARGE and no payment should be made at any point throughout the Exercise.'
  },
  'ikeja': {
    centreId: 'ikeja',
    centreName: 'Ikeja Centre',
    venue: 'Sam Ethnan Air Force Base, Ikeja',
    city: 'Ikeja',
    state: 'Lagos State',
    examDate: 'Saturday, 24 October 2026',
    reportingTime: '7:00 AM Prompt',
    candidateCount: 1781,
    requirements: [
      'NAF Application Acknowledgment Card',
      'Pencil (HB recommended)',
      'Eraser'
    ],
    note: 'Nigerian Air Force online registration and all other enlistment processes are FREE OF CHARGE and no payment should be made at any point throughout the Exercise.'
  },
  'bauchi': {
    centreId: 'bauchi',
    centreName: 'Bauchi Centre',
    venue: 'Nigerian Air Force Base, Bauchi',
    city: 'Bauchi',
    state: 'Bauchi State',
    examDate: 'Saturday, 24 October 2026',
    reportingTime: '7:00 AM Prompt',
    candidateCount: 3375,
    requirements: [
      'NAF Application Acknowledgment Card',
      'Pencil (HB recommended)',
      'Eraser'
    ],
    note: 'Nigerian Air Force online registration and all other enlistment processes are FREE OF CHARGE and no payment should be made at any point throughout the Exercise.'
  }
};

/**
 * Compact candidate dataset verified from official HQ NAF release
 * Format: [SN, Applicant ID, Full Name, Gender, State, Centre Key]
 */
export const VERIFIED_CANDIDATES_RAW: [number, string, string, 'M' | 'F', string, string][] = [
  // --- BENIN CENTRE EXAMPLES & FULL STATES REPRESENTATION ---
  [1, 'REC/ABI/1/406280/26/124682', 'GLORIA CHINWE ORIE', 'F', 'Abia', 'benin'],
  [2, 'REC/ADA/2/263082/26/050482', 'ASTACHA ALI', 'M', 'Adamawa', 'benin'],
  [3, 'REC/ADA/2/270098/26/055374', 'BILAL SAIDU', 'M', 'Adamawa', 'benin'],
  [4, 'REC/ADA/2/267409/26/053372', 'DIANA MASI ANTHONY', 'F', 'Adamawa', 'benin'],
  [5, 'REC/ADA/2/375669/26/121707', 'IRMIYA WILLIAM', 'M', 'Adamawa', 'benin'],
  [6, 'REC/ADA/2/272924/26/057159', 'PWASHIKAI AARON', 'M', 'Adamawa', 'benin'],
  [7, 'REC/ADA/2/314926/26/090619', 'SAMUEL GODFREY', 'M', 'Adamawa', 'benin'],
  [8, 'REC/AKW/3/267067/26/053125', 'CONFIDENCE IKPE SANDY', 'F', 'Akwa Ibom', 'benin'],
  [9, 'REC/AKW/3/371629/26/111895', 'FRANCA OLIVER WILLIE', 'M', 'Akwa Ibom', 'benin'],
  [10, 'REC/AKW/3/296853/26/074052', 'ISREAL UNAH PETER', 'M', 'Akwa Ibom', 'benin'],
  [11, 'REC/AKW/3/216544/26/018164', 'JOHN UFOT ENANG', 'M', 'Akwa Ibom', 'benin'],
  [12, 'REC/AKW/3/255487/26/045503', 'MERCY UMOREN CHARLES', 'F', 'Akwa Ibom', 'benin'],
  [13, 'REC/AKW/3/375543/26/114835', 'NSIKAN FRIDAY SAMUEL', 'M', 'Akwa Ibom', 'benin'],
  [14, 'REC/AKW/3/332192/26/097721', 'PATIENCE IBANGA BASSEY', 'F', 'Akwa Ibom', 'benin'],
  [15, 'REC/AKW/3/245046/26/073164', 'SAVIOUR IDIONGO ANIEFON', 'M', 'Akwa Ibom', 'benin'],
  [16, 'REC/ANA/4/227267/26/025749', 'BERNICE DANIEL', 'F', 'Anambra', 'benin'],
  [17, 'REC/ANA/4/378624/26/114185', 'CHUKWUEBUKA JOSHUA CHIKELUE', 'M', 'Anambra', 'benin'],
  [18, 'REC/ANA/4/238399/26/065610', 'ESTHER OGECHI MGBEMENE', 'F', 'Anambra', 'benin'],
  [19, 'REC/ANA/4/240713/26/039769', 'JOHNBOSCO CHIDERA REMIJUS', 'M', 'Anambra', 'benin'],
  [20, 'REC/ANA/4/312878/26/084759', 'KINGSLEY ENEDU', 'M', 'Anambra', 'benin'],
  [21, 'REC/ANA/4/249548/26/055546', 'PRECIOUS CHINEMEREM EKESIOBI', 'F', 'Anambra', 'benin'],
  [22, 'REC/BAU/5/295246/26/072569', 'RABIU ILIYASU', 'M', 'Bauchi', 'benin'],
  [23, 'REC/BAY/6/326279/26/093793', 'ALEX CASHIER', 'M', 'Bayelsa', 'benin'],
  [24, 'REC/BAY/6/278822/26/065722', 'BIPLEWEREBOWEI JOHN', 'M', 'Bayelsa', 'benin'],
  [25, 'REC/BAY/6/333423/26/098470', 'GOVERNOR DEBEKEME', 'M', 'Bayelsa', 'benin'],
  [26, 'REC/BAY/6/317123/26/087660', 'PEACE TAREBI ANYANKPELE', 'F', 'Bayelsa', 'benin'],
  [27, 'REC/BEN/7/254963/26/048291', 'ESTHER JULIUS', 'F', 'Benue', 'benin'],
  [28, 'REC/BEN/7/232835/26/029051', 'FATIMA SANI', 'F', 'Benue', 'benin'],
  [29, 'REC/BEN/7/251612/26/042215', 'FRANK ADOLE ONAH', 'M', 'Benue', 'benin'],
  [30, 'REC/BEN/7/382722/26/115698', 'JOHN SAMUEL ONOGWU', 'M', 'Benue', 'benin'],
  [31, 'REC/BEN/7/334675/26/099272', 'MIRACLE EMMANUEL GABRIEL', 'M', 'Benue', 'benin'],
  [32, 'REC/BEN/7/300744/26/076449', 'MONDAY GODDAY', 'M', 'Benue', 'benin'],
  [33, 'REC/BEN/7/382219/26/115516', 'OCHOFYE DANLADI', 'M', 'Benue', 'benin'],
  [34, 'REC/BEN/7/206996/26/012213', 'ORYIMAN SAVIOUR DZEVER', 'M', 'Benue', 'benin'],
  [35, 'REC/BEN/7/250057/26/066440', 'SAAIOR THEOPHILUS ORYIMAN', 'M', 'Benue', 'benin'],
  [36, 'REC/BEN/7/225171/26/024097', 'SUNDAY OGBADA OCHE', 'M', 'Benue', 'benin'],
  [37, 'REC/BEN/7/300125/26/076020', 'TERDUE VITALIS YISA', 'M', 'Benue', 'benin'],
  [38, 'REC/BEN/7/261691/26/049258', 'TERKIMBIR ASEMA', 'M', 'Benue', 'benin'],
  [39, 'REC/BEN/7/367611/26/110214', 'TERZULUM PATRICK MFAVE', 'M', 'Benue', 'benin'],
  [40, 'REC/BEN/7/221761/26/042483', 'TYOLUMUN FELIX IORLAHA', 'M', 'Benue', 'benin'],
  [41, 'REC/BEN/7/243421/26/060222', 'USHAHEMBA WASE', 'M', 'Benue', 'benin'],
  [42, 'REC/BOR/8/264041/26/051052', 'ABUBAKAR MBA ALHAJI', 'M', 'Borno', 'benin'],
  [43, 'REC/BOR/8/299486/26/077885', 'IBRAHIM ISHAKU', 'M', 'Borno', 'benin'],
  [71, 'REC/DEL/10/379922/26/114784', 'ABEL EMMANUEL', 'M', 'Delta', 'benin'],
  [72, 'REC/DEL/10/252473/26/042858', 'ABRAHAM OGHENEWORO EMIEZANA', 'M', 'Delta', 'benin'],
  [73, 'REC/DEL/10/998893/26/999886', 'ADEGOR OGHENEVWEDE JUDE', 'M', 'Delta', 'benin'],
  [74, 'REC/DEL/10/294933/26/072470', 'AMALUWA DORIS OKOJERE', 'F', 'Delta', 'benin'],
  [75, 'REC/DEL/10/227609/26/030222', 'BENJAMIN OGHENERUONA OBRIKI', 'M', 'Delta', 'benin'],
  [76, 'REC/DEL/10/357492/26/106540', 'CHINONSO STEPHEN OLISEYENUM', 'M', 'Delta', 'benin'],
  [77, 'REC/DEL/10/267851/26/053783', 'CHINOYE IYERE', 'F', 'Delta', 'benin'],
  [78, 'REC/DEL/10/217614/26/035808', 'DANIEL ODIAH', 'M', 'Delta', 'benin'],
  [79, 'REC/DEL/10/316944/26/087528', 'DANIEL EMEKE ONWOCHEI', 'M', 'Delta', 'benin'],
  [80, 'REC/DEL/10/266915/26/052916', 'DANIELLA OGHENEKEVWE OVIE', 'F', 'Delta', 'benin'],
  [81, 'REC/DEL/10/204031/26/010480', 'DEBORAH ONYOH SIMEON', 'F', 'Delta', 'benin'],
  [82, 'REC/DEL/10/191350/26/006963', 'DIVINE ENUABANOSA', 'M', 'Delta', 'benin'],
  [171, 'REC/EDO/12/270051/26/055288', 'ABDULATEEF OCHINIMHE', 'M', 'Edo', 'benin'],
  [172, 'REC/EDO/12/192062/26/007561', 'ABDULAZEEZ JIBRIN', 'M', 'Edo', 'benin'],
  [173, 'REC/EDO/12/218363/26/019549', 'ABDULSALAM ANAS', 'M', 'Edo', 'benin'],
  [174, 'REC/EDO/12/297039/26/073826', 'ABDULWAKEEL AB GARUBA', 'M', 'Edo', 'benin'],
  [175, 'REC/EDO/12/320058/26/089601', 'ABEL ESHOMOLE EZEKIEL', 'M', 'Edo', 'benin'],
  [176, 'REC/EDO/12/227317/26/025813', 'ABRAHAM AUDU', 'M', 'Edo', 'benin'],
  [177, 'REC/EDO/12/343658/26/102361', 'ABRAHAM OMASHIA CHUKWUDI', 'M', 'Edo', 'benin'],
  [178, 'REC/EDO/12/313537/26/085254', 'ADEWALE AKINYEMI', 'M', 'Edo', 'benin'],
  [179, 'REC/EDO/12/239398/26/033701', 'AGBOCHENI ADOYI', 'M', 'Edo', 'benin'],
  [180, 'REC/EDO/12/306652/26/080433', 'AMINA ABUBAKAR', 'F', 'Edo', 'benin'],
  [181, 'REC/EDO/12/339539/26/101112', 'AMINAT SANI ONOJA', 'F', 'Edo', 'benin'],
  [182, 'REC/EDO/12/255229/26/044945', 'AMIR ABDULLAHI', 'M', 'Edo', 'benin'],
  [183, 'REC/EDO/12/323925/26/092222', 'ANITA PATRICK', 'F', 'Edo', 'benin'],
  [184, 'REC/EDO/12/291435/26/070024', 'ASEKHOME OLATUNDE', 'M', 'Edo', 'benin'],
  [185, 'REC/EDO/12/186480/26/002067', 'AYOMIDE IMONITIE OMOLUYI', 'M', 'Edo', 'benin'],
  [186, 'REC/EDO/12/354873/26/105971', 'BLESSING TOLUWA', 'F', 'Edo', 'benin'],
  [187, 'REC/EDO/12/389927/26/118537', 'BRIGHT OHIKHUARE', 'M', 'Edo', 'benin'],
  [188, 'REC/EDO/12/239578/26/033918', 'BRIGHT OBOGBUA AGEYAN', 'M', 'Edo', 'benin'],
  [189, 'REC/EDO/12/246252/26/039621', 'CHIOMA UWAIFO', 'F', 'Edo', 'benin'],
  [190, 'REC/EDO/12/283603/26/064710', 'CHRISTABEL ESHIOSWAMEYAN ALABI', 'F', 'Edo', 'benin'],
  [310, 'REC/EKI/13/314437/26/085765', 'HEZEKIAH ILESANMI OMOLERE', 'M', 'Ekiti', 'benin'],
  [311, 'REC/EKI/13/253759/26/043736', 'ISAIAH SIMILOLUWA BABATUNDE', 'M', 'Ekiti', 'benin'],
  [313, 'REC/ENU/14/294689/26/072395', 'CHIGOZIE RAPHAEL ONYEMAECHI', 'M', 'Enugu', 'benin'],
  [314, 'REC/ENU/14/314031/26/085487', 'CHINAZA JENNIFER NNEDU', 'F', 'Enugu', 'benin'],
  [320, 'REC/FCT/15/221246/26/021579', 'AISHA OTARU SALIHU', 'F', 'FCT', 'benin'],
  [321, 'REC/FCT/15/289645/26/068915', 'ALHAMDU HARUNA', 'M', 'FCT', 'benin'],
  [323, 'REC/GOM/16/304885/26/079342', 'AKANI PRISCILLIA DAVID', 'F', 'Gombe', 'benin'],
  [327, 'REC/IMO/17/227470/26/030002', 'AMARACHI JULIET NWOKE', 'F', 'Imo', 'benin'],
  [328, 'REC/IMO/17/358481/26/107081', 'ANGEL UJUNWA MMADU', 'F', 'Imo', 'benin'],
  [339, 'REC/KAD/19/321658/26/090646', 'ABUBAKAR LUKMAN', 'M', 'Kaduna', 'benin'],
  [346, 'REC/KAN/20/237540/26/032310', 'AHMAD ABDULLAHI MUSA', 'M', 'Kano', 'benin'],
  [351, 'REC/KAT/21/310774/26/083250', 'AHMED MUHAMMED', 'M', 'Katsina', 'benin'],
  [353, 'REC/KEB/22/241299/26/105455', 'MUSAWI MURTALA', 'M', 'Kebbi', 'benin'],
  [355, 'REC/KOG/23/206615/26/013051', 'ABDULRAHMAN SADIQ', 'M', 'Kogi', 'benin'],
  [414, 'REC/LAG/25/376035/26/115267', 'EMMANUEL UTOM MUSA', 'M', 'Lagos', 'benin'],
  [415, 'REC/NAS/26/231873/26/028540', 'ABDULLAHI KASIMU', 'M', 'Nasarawa', 'benin'],
  [418, 'REC/NIG/27/333606/26/098511', 'FADEL SANI', 'M', 'Niger', 'benin'],
  [420, 'REC/OGU/28/246531/26/039266', 'EMMANUEL OLUWAPELUMI OLALEKAN', 'M', 'Ogun', 'benin'],
  [423, 'REC/OND/29/369978/26/111135', 'ABBA MUSA HARUNA', 'M', 'Ondo', 'benin'],
  [469, 'REC/OYO/31/290950/26/069830', 'ANUOLUWAPO ADEOLA MUSTAPHA', 'F', 'Oyo', 'benin'],
  [470, 'REC/PLA/32/250234/26/041241', 'AMIR USMAN SALISU', 'M', 'Plateau', 'benin'],
  [475, 'REC/RIV/33/345766/26/103114', 'ADANNE IGBIKIOYIBO BOBMANUEL', 'F', 'Rivers', 'benin'],
  [479, 'REC/SOK/34/308098/26/081295', 'MUSA SALEH', 'M', 'Sokoto', 'benin'],
  [482, 'REC/TAR/35/274578/26/058393', 'ABDULGANIYU YAHUZA', 'M', 'Taraba', 'benin'],
  [486, 'REC/YOB/36/301054/26/076641', 'YAHAYA MAGAJI MOHAMMED', 'M', 'Yobe', 'benin'],
  [487, 'REC/ZAM/37/324742/26/092750', 'NURA IDRIS', 'M', 'Zamfara', 'benin'],
  [488, 'REC/ZAM/37/264694/26/051402', 'SAMINU TIJJANI', 'M', 'Zamfara', 'benin'],

  // --- ENUGU CENTRE EXAMPLES ---
  [1, 'REC/ABI/1/322622/26/091390', 'ADAORA PRINCESS ADIBE', 'F', 'Abia', 'enugu'],
  [2, 'REC/ABI/1/247803/26/039640', 'AMARACHI FAVOUR IKE', 'F', 'Abia', 'enugu'],
  [3, 'REC/ABI/1/382297/26/120615', 'AMARACHI FAVOUR OTUECHERE', 'F', 'Abia', 'enugu'],
  [4, 'REC/ABI/1/391449/26/119160', 'AMBLESS DELIGHT AKUMA', 'F', 'Abia', 'enugu'],
  [5, 'REC/ABI/1/302067/26/077395', 'BEAUTY IFEOMA NWAFOR', 'F', 'Abia', 'enugu'],
  [6, 'REC/ABI/1/347946/26/103644', 'BLESSING CHINECHEREM ONUORA', 'F', 'Abia', 'enugu'],
  [7, 'REC/ABI/1/295018/26/072474', 'BLESSING ONYINYECHI ONYEKACHI', 'F', 'Abia', 'enugu'],
  [8, 'REC/ABI/1/234527/26/030280', 'CHIBUIHE MIRACLE OKEZIE', 'M', 'Abia', 'enugu'],
  [9, 'REC/ABI/1/356390/26/106262', 'CHIDERAH VICTOR GOODLUCK', 'M', 'Abia', 'enugu'],
  [10, 'REC/ABI/1/248451/26/040065', 'CHIKWADO GIDEON ONYEMAECHI', 'M', 'Abia', 'enugu'],
  [86, 'REC/ANA/4/235324/26/030954', 'ABUCHI ANTHONY AKOSA', 'M', 'Anambra', 'enugu'],
  [87, 'REC/ANA/4/302399/26/078913', 'ALVIN AMARACHUKWU CHIMA', 'M', 'Anambra', 'enugu'],
  [88, 'REC/ANA/4/336333/26/100179', 'BONNY OKECHUKWU ODINAKA', 'M', 'Anambra', 'enugu'],
  [89, 'REC/ANA/4/358815/26/107285', 'BRIGHT EBUBECHUKWU OBIUKWU', 'M', 'Anambra', 'enugu'],
  [131, 'REC/BAU/5/243713/26/061588', 'CALEB SOMMIDAH SHETIMA', 'M', 'Bauchi', 'enugu'],
  [133, 'REC/BAY/6/271699/26/056471', 'AYEBALAYEFA IDERITE FRANCIS', 'M', 'Bayelsa', 'enugu'],
  [136, 'REC/BEN/7/280642/26/062632', 'BLESSING ONYI OCHEKA', 'F', 'Benue', 'enugu'],
  [154, 'REC/BOR/8/321561/26/090583', 'BAKAKA MOHAMMED ABUBAKAR', 'M', 'Borno', 'enugu'],
  [155, 'REC/CRO/9/287097/26/067022', 'ABIGAIL UKUBARE KOGOKO', 'F', 'Cross River', 'enugu'],
  [329, 'REC/EBO/11/398552/26/121784', 'ABRAHAM NKWUDA ACHI', 'M', 'Ebonyi', 'enugu'],
  [330, 'REC/EBO/11/370975/26/122993', 'AMAECHI DAVID CHUKWUEBUKA', 'M', 'Ebonyi', 'enugu'],
  [331, 'REC/EBO/11/380256/26/114953', 'BENARD WISDOM MBAM', 'M', 'Ebonyi', 'enugu'],
  [402, 'REC/ENU/14/312547/26/084475', 'ABEL AMANDIANEZE UCHEONWU', 'M', 'Enugu', 'enugu'],
  [403, 'REC/ENU/14/296116/26/073224', 'AGATHA UKAMAKA AGBOEZE', 'M', 'Enugu', 'enugu'],
  [404, 'REC/ENU/14/373745/26/112643', 'AMARACHI BENEDITA OGBU', 'F', 'Enugu', 'enugu'],
  [405, 'REC/ENU/14/380086/26/114891', 'ANITA CHINECHEREM IKE', 'F', 'Enugu', 'enugu'],
  [529, 'REC/FCT/15/267109/26/053065', 'COMPANION SAMSON', 'F', 'FCT', 'enugu'],
  [537, 'REC/IMO/17/315028/26/086160', 'BLESSING AMARACHI OBASI', 'F', 'Imo', 'enugu'],
  [579, 'REC/KAD/19/326032/26/097172', 'ABRAHAM CHRISTOPHER MARKUS', 'M', 'Kaduna', 'enugu'],
  [586, 'REC/KAN/20/206564/26/015553', 'ABDULRAZAK IBRAHIM', 'M', 'Kano', 'enugu'],
  [592, 'REC/KOG/23/286497/26/066679', 'ABDUL-AZEEZ AYEGBA AUDU', 'M', 'Kogi', 'enugu'],

  // --- KWARA CENTRE (ILORIN) EXAMPLES ---
  [1, 'REC/ABI/1/344806/26/102725', 'DANIEL EMEKA PETER', 'M', 'Abia', 'kwara'],
  [2, 'REC/ABI/1/386133/26/118289', 'SAMUEL PROMISE NNADI', 'M', 'Abia', 'kwara'],
  [3, 'REC/ABI/1/248593/26/040312', 'UCHENNA EMMANUEL OKECHUKWU', 'M', 'Abia', 'kwara'],
  [5, 'REC/ADA/2/252552/26/042816', 'CLEMENT HODA AYUBA', 'M', 'Adamawa', 'kwara'],
  [8, 'REC/AKW/3/317067/26/087604', 'SOLOMON IME SAMPSON', 'M', 'Akwa Ibom', 'kwara'],
  [9, 'REC/ANA/4/237585/26/032591', 'IKENNA AUSTIN OSUOFIA', 'M', 'Anambra', 'kwara'],
  [11, 'REC/BAU/5/201748/26/008475', 'MUHAMMAD HASSAN MUHAMMAD', 'M', 'Bauchi', 'kwara'],
  [12, 'REC/BEN/7/192528/26/002916', 'ABUBAKAR AMINU', 'M', 'Benue', 'kwara'],
  [22, 'REC/DEL/10/340222/26/101389', 'EMMANUEL CHUKWUMA SAINT-EMMANUEL', 'M', 'Delta', 'kwara'],
  [23, 'REC/EDO/12/206868/26/011945', 'BAMEYI AMEDU', 'M', 'Edo', 'kwara'],
  [25, 'REC/EKI/13/218578/26/019708', 'ABIODUN DAVID DADA', 'M', 'Ekiti', 'kwara'],
  [26, 'REC/EKI/13/295790/26/073111', 'ABOSEDE ADEYEMI OGUNDELE', 'F', 'Ekiti', 'kwara'],
  [59, 'REC/ENU/14/219464/26/020433', 'EBUKA PATRICK LIVINUS', 'M', 'Enugu', 'kwara'],
  [61, 'REC/FCT/15/313875/26/085398', 'JOSHUA GANA JAMES', 'M', 'FCT', 'kwara'],
  [64, 'REC/GOM/16/287130/26/067134', 'BULUS DOGO', 'M', 'Gombe', 'kwara'],
  [68, 'REC/IMO/17/351190/26/105411', 'EMMANUEL OPEYEMI DIOKPA', 'M', 'Imo', 'kwara'],
  [69, 'REC/JIG/18/243035/26/036425', 'AHMAD USMAN', 'M', 'Jigawa', 'kwara'],
  [72, 'REC/KAD/19/228646/26/026471', 'ABDULAZIZ IDRIS', 'M', 'Kaduna', 'kwara'],
  [84, 'REC/KAN/20/254091/26/044235', 'IBRAHIM AHMAD UMAR', 'M', 'Kano', 'kwara'],
  [86, 'REC/KAT/21/316653/26/087302', 'ABDULLAHI TANIMU', 'M', 'Katsina', 'kwara'],
  [93, 'REC/KEB/22/304890/26/079283', 'ABDULKARIM SANI', 'M', 'Kebbi', 'kwara'],
  [100, 'REC/KOG/23/250698/26/049204', 'ABDUGAFAR OJOCHOGWU IBRAHIM', 'M', 'Kogi', 'kwara'],
  [144, 'REC/KWA/24/287884/26/067641', 'ABAS ALHASSAN', 'M', 'Kwara', 'kwara'],
  [145, 'REC/KWA/24/292803/26/071044', 'ABDULAFEEZ SANI', 'M', 'Kwara', 'kwara'],
  [146, 'REC/KWA/24/333441/26/099900', 'ABDULAZEEZ ADUAGBA HANAFI', 'M', 'Kwara', 'kwara'],
  [147, 'REC/KWA/24/338638/26/100728', 'ABDULBASIT ABIDEMI ABDULRASAK', 'M', 'Kwara', 'kwara'],
  [148, 'REC/KWA/24/357521/26/106520', 'ABDULBASIT ISIAQ ABDULBAKI', 'M', 'Kwara', 'kwara'],
  [391, 'REC/LAG/25/258603/26/046981', 'ALIMAT MOYOSOREOLUWA OLOTO', 'F', 'Lagos', 'kwara'],
  [396, 'REC/NAS/26/312862/26/084690', 'ABDULLAHI ADAMU', 'M', 'Nasarawa', 'kwara'],
  [403, 'REC/NIG/27/398746/26/121843', 'ALHASSAN USMAN SHEHU', 'M', 'Niger', 'kwara'],
  [410, 'REC/OGU/28/215629/26/026310', 'HABEEB ADEWALE ALLI', 'M', 'Ogun', 'kwara'],
  [416, 'REC/OND/29/305518/26/079652', 'BABAJIDE AHMED AKINNOLA', 'M', 'Ondo', 'kwara'],
  [422, 'REC/OSU/30/269233/26/054602', 'AFEEZ OLAMIDE ABIMBOLA', 'M', 'Osun', 'kwara'],
  [446, 'REC/OYO/31/338813/26/100816', 'ABDULHAMEED BABATUNDE ABDULWASIU', 'M', 'Oyo', 'kwara'],
  [493, 'REC/PLA/32/248004/26/039736', 'LOVETH NIMZING STEPHEN', 'F', 'Plateau', 'kwara'],
  [495, 'REC/RIV/33/343693/26/102371', 'NIMI BOBMANUEL', 'M', 'Rivers', 'kwara'],
  [496, 'REC/SOK/34/209850/26/014045', 'SAMAILA YAKUBU', 'M', 'Sokoto', 'kwara'],
  [497, 'REC/YOB/36/250985/26/041954', 'IBRAHIM ABDULLAHI', 'M', 'Yobe', 'kwara'],
  [498, 'REC/ZAM/37/386354/26/117111', 'ABDULHAMID AHMAD MUSTAPHA', 'M', 'Zamfara', 'kwara'],

  // --- IKEJA CENTRE (LAGOS) EXAMPLES ---
  [1, 'REC/ABI/1/259981/26/048210', 'CHIDERA MIRACLE MOSES', 'F', 'Abia', 'ikeja'],
  [2, 'REC/ABI/1/335173/26/099606', 'CHIJINDU KINGSLEY ENYERIBE', 'M', 'Abia', 'ikeja'],
  [3, 'REC/ABI/1/335866/26/100113', 'CHIKWADO PRINCE LIVINUS', 'M', 'Abia', 'ikeja'],
  [4, 'REC/ABI/1/361020/26/107921', 'CHINWENDU PHILOMANA NZE', 'F', 'Abia', 'ikeja'],
  [5, 'REC/ABI/1/325019/26/093031', 'DAVID CHIUDO OKEUGO', 'M', 'Abia', 'ikeja'],
  [23, 'REC/ADA/2/289102/26/068536', 'ABDUL-MALIK ABUBAKAR', 'M', 'Adamawa', 'ikeja'],
  [74, 'REC/AKW/3/402424/26/123166', 'ABASIAMA GOD\'SLOVE MICHEAL', 'F', 'Akwa Ibom', 'ikeja'],
  [151, 'REC/ANA/4/345934/26/103211', 'CHIDERA PASCHAL OKOYE', 'M', 'Anambra', 'ikeja'],
  [176, 'REC/BAU/5/191786/26/002760', 'ABDULLAHI TANKO IBRAHIM', 'M', 'Bauchi', 'ikeja'],
  [195, 'REC/BAY/6/332321/26/097750', 'BLESSING LOT', 'M', 'Bayelsa', 'ikeja'],
  [207, 'REC/BEN/7/262596/26/049987', 'ABIGAIL JEREMIAH', 'F', 'Benue', 'ikeja'],
  [351, 'REC/BOR/8/360963/26/108621', 'ABENEGO MOSES', 'M', 'Borno', 'ikeja'],
  [401, 'REC/CRO/9/269755/26/055039', 'BENARD ATIM OTOM', 'M', 'Cross River', 'ikeja'],
  [468, 'REC/DEL/10/393021/26/122056', 'ANNA EJIROGHENE ETAPHIRA', 'F', 'Delta', 'ikeja'],
  [511, 'REC/EBO/11/299239/26/079539', 'ANGELA IJEOMA NWOGBO', 'F', 'Ebonyi', 'ikeja'],
  [528, 'REC/EDO/12/288907/26/068652', 'ABOSEDE FELICIA FESTUS', 'F', 'Edo', 'ikeja'],
  [580, 'REC/EKI/13/292823/26/071056', 'ALAYODE ELIJAH OLUWADARE', 'M', 'Ekiti', 'ikeja'],
  [633, 'REC/ENU/14/395921/26/122368', 'BLESSING AKUCHUKWU NWACHUKWU', 'F', 'Enugu', 'ikeja'],
  [654, 'REC/FCT/15/275593/26/059277', 'ADAM IBRAHIM', 'M', 'FCT', 'ikeja'],
  [670, 'REC/GOM/16/199257/26/007387', 'ABDULLAHI HASSAN', 'M', 'Gombe', 'ikeja'],
  [691, 'REC/IMO/17/365424/26/112025', 'BLESSING OGOCHUKWU CHINEDU', 'F', 'Imo', 'ikeja'],
  [738, 'REC/JIG/18/221281/26/021538', 'ABDULLAHI MUHAMMAD', 'M', 'Jigawa', 'ikeja'],
  [756, 'REC/KAD/19/216489/26/018293', 'ABDULLAHI ABUBAKAR MUHAMMAD', 'M', 'Kaduna', 'ikeja'],
  [804, 'REC/KAN/20/304503/26/079066', 'ABDULLAHI FAROUK', 'M', 'Kano', 'ikeja'],
  [821, 'REC/KAT/21/196856/26/005478', 'ABDULWAHAB IBRAHIM', 'M', 'Katsina', 'ikeja'],
  [846, 'REC/KEB/22/288324/26/068010', 'ABBAS H ADAMU', 'M', 'Kebbi', 'ikeja'],
  [862, 'REC/KOG/23/195736/26/004838', 'ABDULAZEEZ HASSAN', 'M', 'Kogi', 'ikeja'],
  [983, 'REC/KWA/24/208287/26/015133', 'ABDULLATEEF ISHOLA SARAFADEEN', 'M', 'Kwara', 'ikeja'],
  [1034, 'REC/LAG/25/210716/26/014306', 'ABBA IBRAHIM', 'M', 'Lagos', 'ikeja'],
  [1035, 'REC/LAG/25/200719/26/007962', 'ABDUL AHMED ALABA', 'M', 'Lagos', 'ikeja'],
  [1036, 'REC/LAG/25/362019/26/108180', 'ABDULBAKI OLAWALE DADA', 'M', 'Lagos', 'ikeja'],
  [1037, 'REC/LAG/25/218431/26/021645', 'ABDULBASIT DAMILOLA OMOTAYO', 'M', 'Lagos', 'ikeja'],
  [1038, 'REC/LAG/25/379008/26/114324', 'ABDULKOYUM OLANREWAJU DAWOOD', 'M', 'Lagos', 'ikeja'],
  [1039, 'REC/LAG/25/282590/26/082571', 'ABDULQUDUS ABIODUN AKALA', 'M', 'Lagos', 'ikeja'],
  [1040, 'REC/LAG/25/217422/26/018925', 'ABDULRAHMAN AKINPELUMI OGUNTOLA', 'M', 'Lagos', 'ikeja'],
  [1160, 'REC/NAS/26/194793/26/078539', 'ABDULRAZAK ARIGYE AMINU', 'M', 'Nasarawa', 'ikeja'],
  [1179, 'REC/NIG/27/194783/26/004422', 'ALICE GANA', 'F', 'Niger', 'ikeja'],
  [1193, 'REC/OGU/28/301033/26/076687', 'ABDULMAJID HASSAN', 'M', 'Ogun', 'ikeja'],
  [1364, 'REC/OND/29/287610/26/067784', 'ABISOLA BLESSING IBRAHIM', 'M', 'Ondo', 'ikeja'],
  [1486, 'REC/OSU/30/194050/26/009549', 'ABDULSAMOD AYINDE BELLO-OYELEKE', 'M', 'Osun', 'ikeja'],
  [1557, 'REC/OYO/31/188616/26/052476', 'ABDULAZEEZ ARISEKOLA OLATUNJI', 'M', 'Oyo', 'ikeja'],
  [1696, 'REC/PLA/32/398534/26/123164', 'CORNELIUS AUGUSTINE', 'M', 'Plateau', 'ikeja'],
  [1723, 'REC/RIV/33/389651/26/118361', 'ANNABEL GEORGE DANIEL', 'F', 'Rivers', 'ikeja'],
  [1729, 'REC/SOK/34/385921/26/116958', 'BASHIRU ABBAS MUSTAPHA', 'M', 'Sokoto', 'ikeja'],
  [1737, 'REC/TAR/35/222790/26/022496', 'ABDUL-QAYYUM JIBRIN', 'M', 'Taraba', 'ikeja'],
  [1757, 'REC/YOB/36/310008/26/082720', 'ABDULLAHI ABUBAKAR', 'M', 'Yobe', 'ikeja'],
  [1770, 'REC/ZAM/37/263954/26/050967', 'ABDULKARIM MOHAMMED', 'M', 'Zamfara', 'ikeja'],

  // --- BAUCHI CENTRE EXAMPLES ---
  [1, 'REC/ADA/2/281187/26/082282', 'ABDULAZIZ MUHAMMED', 'M', 'Adamawa', 'bauchi'],
  [2, 'REC/ADA/2/208137/26/012706', 'ABDULLAHI ISMAIL MUHAMMAD', 'M', 'Adamawa', 'bauchi'],
  [3, 'REC/ADA/2/314535/26/085795', 'AHMED ABDULSALAM', 'M', 'Adamawa', 'bauchi'],
  [4, 'REC/ADA/2/232189/26/028690', 'ALIYU ALIYU BUBA', 'M', 'Adamawa', 'bauchi'],
  [5, 'REC/ADA/2/291740/26/070268', 'AYEMINISHI KENNETH SULE', 'M', 'Adamawa', 'bauchi'],
  [6, 'REC/ADA/2/299662/26/075671', 'DANIEL DIO', 'M', 'Adamawa', 'bauchi'],
  [35, 'REC/AKW/3/215475/26/017478', 'FRANCIS BASSEY EKONG', 'M', 'Akwa Ibom', 'bauchi'],
  [37, 'REC/ANA/4/232807/26/029043', 'IFEANYI OBIORAH', 'M', 'Anambra', 'bauchi'],
  [40, 'REC/BAU/5/252513/26/042764', 'ABBA ABDULLAHI', 'M', 'Bauchi', 'bauchi'],
  [41, 'REC/BAU/5/210713/26/014330', 'ABBA BABAJI', 'M', 'Bauchi', 'bauchi'],
  [42, 'REC/BAU/5/256883/26/045942', 'ABBA DANLADI', 'M', 'Bauchi', 'bauchi'],
  [43, 'REC/BAU/5/190904/26/002444', 'ABBA MUSA', 'M', 'Bauchi', 'bauchi'],
  [44, 'REC/BAU/5/289696/26/068946', 'ABBA NUHU', 'M', 'Bauchi', 'bauchi'],
  [45, 'REC/BAU/5/196825/26/005448', 'ABBA USMAN HASSAN', 'M', 'Bauchi', 'bauchi'],
  [46, 'REC/BAU/5/215552/26/017679', 'ABBAH SAIDU MUHAMMED', 'M', 'Bauchi', 'bauchi'],
  [47, 'REC/BAU/5/232276/26/028771', 'ABBAS HARUNA', 'M', 'Bauchi', 'bauchi'],
  [881, 'REC/BAY/6/232959/26/029151', 'ABRAHAM AGBO PETER', 'M', 'Bayelsa', 'bauchi'],
  [895, 'REC/BEN/7/236897/26/032111', 'BRIDGET AJUMA ALUBO', 'F', 'Benue', 'bauchi'],
  [903, 'REC/BOR/8/325886/26/093510', 'ABBAS SANI SALIHU', 'M', 'Borno', 'bauchi'],
  [982, 'REC/CRO/9/235476/26/031721', 'FAVOUR EDET ETTAH', 'F', 'Cross River', 'bauchi'],
  [985, 'REC/DEL/10/227703/26/025892', 'SAMUEL ONYEKA OKONKWO', 'M', 'Delta', 'bauchi'],
  [986, 'REC/EDO/12/246477/26/038585', 'BARTHOLOMEW SUNDAY', 'M', 'Edo', 'bauchi'],
  [988, 'REC/EKI/13/222065/26/021993', 'AYOMIDE FEMI GEORGE', 'F', 'Ekiti', 'bauchi'],
  [989, 'REC/ENU/14/195032/26/004391', 'CHIMAOBI AMEACHI OKONKWO', 'M', 'Enugu', 'bauchi'],
  [992, 'REC/FCT/15/208798/26/013172', 'ABDULLAHI IBRAHIM', 'M', 'FCT', 'bauchi'],
  [1003, 'REC/GOM/16/319167/26/088921', 'ABBAS ALIYU', 'M', 'Gombe', 'bauchi'],
  [1801, 'REC/IMO/17/244750/26/037769', 'GODSWILL DANIEL', 'M', 'Imo', 'bauchi'],
  [1805, 'REC/JIG/18/228475/26/026289', 'ABBA ADAMU', 'M', 'Jigawa', 'bauchi'],
  [2164, 'REC/KAD/19/238317/26/033081', 'ABBAS ABDULAZIZ', 'M', 'Kaduna', 'bauchi'],
  [2367, 'REC/KAN/20/282121/26/063728', 'ABBA ABUBAKAR NUHU', 'M', 'Kano', 'bauchi'],
  [2644, 'REC/KAT/21/242228/26/035595', 'ABBA ADAMU', 'M', 'Katsina', 'bauchi'],
  [2827, 'REC/KEB/22/240320/26/034434', 'ABUBAKAR SHUAIBU', 'M', 'Kebbi', 'bauchi'],
  [2837, 'REC/KOG/23/214343/26/016727', 'ABDULSALAM ALIH', 'M', 'Kogi', 'bauchi'],
  [2855, 'REC/KWA/24/257149/26/046102', 'AKANBI SHERIFF IMAM', 'M', 'Kwara', 'bauchi'],
  [2862, 'REC/LAG/25/190743/26/002393', 'AKEEM OLUWADAMILARE ABIMBOLA', 'M', 'Lagos', 'bauchi'],
  [2865, 'REC/NAS/26/297394/26/074188', 'ABDULSALAM SULEIMAN AJIMA', 'M', 'Nasarawa', 'bauchi'],
  [2886, 'REC/NIG/27/221980/26/035236', 'ABDULMALIK ABDULLAHI', 'M', 'Niger', 'bauchi'],
  [2890, 'REC/OND/29/292540/26/071033', 'COLLINS AYOMIDE KOLAWOLE', 'M', 'Ondo', 'bauchi'],
  [2894, 'REC/OSU/30/255981/26/046273', 'ABDULAFEEZ AYOFE OWOLABI', 'M', 'Osun', 'bauchi'],
  [2900, 'REC/OYO/31/259364/26/047524', 'ABDULSAMAD ISHAQ', 'M', 'Oyo', 'bauchi'],
  [2903, 'REC/PLA/32/224276/26/023425', 'ABDULLAHI MUHAMMAD', 'M', 'Plateau', 'bauchi'],
  [2973, 'REC/SOK/34/325070/26/092985', 'ABUBAKAR AUWAL', 'M', 'Sokoto', 'bauchi'],
  [2984, 'REC/TAR/35/252791/26/043031', 'ABDULRAZAQ SULEIMAN', 'M', 'Taraba', 'bauchi'],
  [3015, 'REC/YOB/36/252233/26/042533', 'ABBA TUKUR', 'M', 'Yobe', 'bauchi'],
  [3348, 'REC/ZAM/37/219499/26/020194', 'ABDULAZEEZ ABDURAHMAN', 'M', 'Zamfara', 'bauchi']
];

/**
 * Searches candidates by query string across name, Applicant ID, state, and center
 */
export const searchShortlistCandidates = (
  query: string,
  selectedCentre: string = 'all',
  selectedState: string = 'all'
): NAFCandidate[] => {
  const cleanQuery = query.trim().toLowerCase();

  return VERIFIED_CANDIDATES_RAW
    .filter(([sn, appId, name, gender, state, centreKey]) => {
      // Centre filter
      if (selectedCentre !== 'all' && centreKey !== selectedCentre) {
        return false;
      }

      // State filter
      if (selectedState !== 'all' && state.toLowerCase() !== selectedState.toLowerCase()) {
        return false;
      }

      // Query search
      if (!cleanQuery) return true;

      const matchName = name.toLowerCase().includes(cleanQuery);
      const matchId = appId.toLowerCase().includes(cleanQuery);
      const matchState = state.toLowerCase().includes(cleanQuery);

      return matchName || matchId || matchState;
    })
    .map(([sn, appId, name, gender, state, centreKey]) => {
      const centreInfo = NAF_CENTRES_INFO[centreKey] || {
        centreName: centreKey.toUpperCase() + ' CENTRE',
        venue: 'Nigerian Air Force Base',
        examDate: 'Saturday, 24 October 2026'
      };

      return {
        sn,
        appId,
        name,
        gender,
        state,
        centre: centreInfo.centreName,
        venue: centreInfo.venue,
        examDate: centreInfo.examDate
      };
    });
};
