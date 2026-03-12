import React, { useState } from 'react';
import { Ruler, User, BookOpen, Check, XCircle, RefreshCw, ChevronRight, ArrowRight, HeartPulse, Stethoscope, AlertTriangle, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { UserEligibility, Grade } from '../types';
import SEO from '../components/SEO';
import AdUnit from '../components/AdUnit';

interface Result {
  qualified: boolean;
  messages: string[];
  recommended: string[];
}

const EligibilityChecker: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<UserEligibility>({
    age: 20,
    height: 1.70,
    gender: 'Male',
    maritalStatus: 'Single',
    qualification: 'SSCE',
    examGrades: {
      english: 'C6',
      maths: 'C6',
      numberOfCredits: 5
    },
    medical: {
      isPregnant: false,
      hasFlatFoot: false,
      hasTattoos: false,
      hasSurgery: false,
      hasVisualImpairment: false,
      genotype: 'AA',
      hasHernia: false,
      hasAsthma: false,
      hasPastFracture: false,
      hasPhysicalDeformity: false,
      historyOfMentalIllness: false
    },
    hasCriminalRecord: false
  });

  const [result, setResult] = useState<Result | null>(null);

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  // Helper to check if grade is Credit (A1 - C6)
  const isCredit = (grade: Grade) => ['A1', 'B2', 'B3', 'C4', 'C5', 'C6'].includes(grade);

  const checkEligibility = () => {
    const { age, height, gender, maritalStatus, qualification, examGrades, medical, hasCriminalRecord } = formData;
    const messages: string[] = [];
    const recommended: string[] = [];
    let isDisqualified = false;

    // --- 1. GENERAL & LEGAL DISQUALIFICATIONS ---
    if (hasCriminalRecord) {
      messages.push("Candidates with a criminal record are not eligible for military or paramilitary service.");
      isDisqualified = true;
    }

    if (gender === 'Female' && medical.isPregnant) {
      messages.push("Pregnant women are not eligible for recruitment training.");
      isDisqualified = true;
    }

    // --- 2. MEDICAL & PHYSICAL DISQUALIFICATIONS ---
    const medicalChecks = [
      { condition: medical.hasTattoos, msg: "Tattoos or body inscriptions are generally disqualifying." },
      { condition: medical.hasFlatFoot, msg: "Flat foot is a disqualifying physical defect." },
      { condition: medical.hasHernia, msg: "Hernia (umbilical/inguinal) is a disqualifying condition." },
      { condition: medical.hasAsthma, msg: "Asthma history is not compatible with rigorous military training." },
      { condition: medical.hasPhysicalDeformity, msg: "Physical deformities (Knock knees, Bow legs, K-legs) are disqualifying." },
      { condition: medical.historyOfMentalIllness, msg: "History of mental illness is a disqualifying factor." },
      { condition: medical.genotype === 'SS', msg: "Sickle Cell (SS) genotype is medically unfit for service." },
      { condition: medical.hasVisualImpairment, msg: "Severe visual impairment often limits eligible roles." }
    ];

    medicalChecks.forEach(check => {
      if (check.condition) {
        messages.push(check.msg);
        isDisqualified = true;
      }
    });

    if (medical.hasPastFracture) {
      messages.push("Note: Past fractures will be subject to intense X-ray screening. Recent or poorly healed fractures may disqualify.");
      // Not strictly disqualifying immediately in this logic, but warrants a warning or strict check.
      // For this strict checker, let's disqualify if surgery was involved or just warn. 
      // Let's treat it as a warning unless `hasSurgery` is also true.
      if (medical.hasSurgery) {
        messages.push("Orthopedic surgery history is often disqualifying.");
        isDisqualified = true;
      }
    }

    // --- 3. ACADEMIC DISQUALIFICATIONS ---
    if (!isCredit(examGrades.english) || !isCredit(examGrades.maths)) {
      messages.push("A minimum of Credit (C6) in English and Mathematics is required for all branches.");
      isDisqualified = true;
    }

    if (examGrades.numberOfCredits < 3) {
      messages.push("You need at least 5 Credits including English and Maths.");
      isDisqualified = true;
    }

    if (isDisqualified) {
      setResult({
        qualified: false,
        messages: messages,
        recommended: []
      });
      handleNext();
      return;
    }

    // --- 4. SPECIFIC BRANCH LOGIC (If passed general checks) ---

    // ARMY
    // DSSC: Age 20-32/40. Height M 1.68, F 1.65. Degree/HND.
    const isOfficerQual = ['HND', 'Degree', 'Medical Degree', 'PhD'].includes(qualification);
    const armyMinHeight = gender === 'Male' ? 1.68 : 1.65;

    if (height >= armyMinHeight) {
      if (isOfficerQual && age >= 20 && age <= (qualification === 'Medical Degree' ? 40 : 32)) {
        recommended.push("Army DSSC/SSC");
      } else if (!isOfficerQual && age >= 18 && age <= 22 && maritalStatus === 'Single') {
        recommended.push("Army Regular Recruit");
      }
    }

    // NAVY
    // Batch: Age 18-22 (SSCE) / 18-26 (OND/NCE). Height M 1.68, F 1.65.
    const navyMinHeight = gender === 'Male' ? 1.68 : 1.65;
    if (height >= navyMinHeight && !medical.hasVisualImpairment) {
      if (qualification === 'SSCE' && age >= 18 && age <= 22 && maritalStatus === 'Single') {
        recommended.push("Navy Batch (Rating)");
      } else if (['OND', 'NCE'].includes(qualification) && age >= 18 && age <= 26 && maritalStatus === 'Single') {
        recommended.push("Navy Batch (Special Rating)");
      } else if (isOfficerQual && age >= 20 && age <= 30) {
        recommended.push("Navy DSSC");
      }
    }

    // AIR FORCE
    // Height M 1.66 / F 1.63
    const afMinHeight = gender === 'Male' ? 1.66 : 1.63;
    if (height >= afMinHeight) {
      if (age >= 18 && age <= 22 && maritalStatus === 'Single' && !isOfficerQual) {
        recommended.push("Air Force BMTC (Recruit)");
      } else if (isOfficerQual && age >= 20 && age <= 30) {
        recommended.push("Air Force DSSC");
      }
    }

    // POLICE & OTHERS
    if (age >= 18 && age <= 25 && height >= 1.67) {
      recommended.push("Nigeria Police Force");
      recommended.push("Civil Defence (NSCDC)");
      recommended.push("Immigration Service");
    }

    if (recommended.length > 0) {
      setResult({
        qualified: true,
        messages: ["You appear medically and academically fit for the following:"],
        recommended
      });
    } else {
      setResult({
        qualified: false,
        messages: [
          "You meet the medical baselines, but your age, height, or qualification combination does not match current open criteria for the major branches.",
          height < 1.65 ? "Height is below the standard 1.65m minimum for most forces." : "",
          age > 30 ? "Most entry-level recruitment caps at 26-30 years." : ""
        ].filter(Boolean),
        recommended: []
      });
    }
    handleNext();
  };

  const navigateToRecruitments = () => {
    navigate('/recruitments');
  };

  // --- STEPS UI ---

  const Step1Bio = () => (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Step 1: Bio Data</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
          <div className="flex gap-2">
            {['Male', 'Female'].map((g) => (
              <button
                key={g}
                onClick={() => setFormData({ ...formData, gender: g as any })}
                className={`flex-1 py-2 rounded-lg border-2 text-sm font-medium ${formData.gender === g ? 'border-military-green bg-green-50 text-green-800' : 'border-gray-200'
                  }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={formData.maritalStatus}
            onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value as any })}
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Age (Years): {formData.age}</label>
        <input
          type="range" min="16" max="45" value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
          className="w-full accent-military-green"
        />
        <div className="flex justify-between text-xs text-gray-400"><span>16</span><span>45</span></div>
      </div>
    </div>
  );

  const CheckboxField = ({ label, desc, checked, onChange, color = 'accent-military-green' }: any) => (
    <label className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={`w-5 h-5 ${color}`}
      />
      <div>
        <span className="font-semibold text-gray-800 block">{label}</span>
        {desc && <span className="text-xs text-gray-500">{desc}</span>}
      </div>
    </label>
  );

  const Step2Physical = () => (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Step 2: Physical Assessment</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Height (Meters)</label>
        <div className="flex items-center gap-2">
          <Ruler className="text-gray-400" />
          <input
            type="number" step="0.01" value={formData.height}
            onChange={(e) => setFormData({ ...formData, height: parseFloat(e.target.value) })}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <p className="text-xs text-gray-500">Avg req: Army (1.68m), Police (1.67m)</p>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-bold text-gray-900">Physical Conditions (Check if applicable):</p>

        <CheckboxField
          label="Flat Foot"
          desc="Entire sole of foot touches floor when standing"
          checked={formData.medical.hasFlatFoot}
          onChange={(val: boolean) => setFormData({ ...formData, medical: { ...formData.medical, hasFlatFoot: val } })}
          color="accent-red-600"
        />

        <CheckboxField
          label="Physical Deformities"
          desc="Knock-Knees, Bow-Legs, K-Legs, or other skeletal defects"
          checked={formData.medical.hasPhysicalDeformity}
          onChange={(val: boolean) => setFormData({ ...formData, medical: { ...formData.medical, hasPhysicalDeformity: val } })}
          color="accent-red-600"
        />

        <CheckboxField
          label="Tattoos / Inscriptions"
          desc="Any permanent mark or drawing on the skin"
          checked={formData.medical.hasTattoos}
          onChange={(val: boolean) => setFormData({ ...formData, medical: { ...formData.medical, hasTattoos: val } })}
          color="accent-red-600"
        />

        {formData.gender === 'Female' && (
          <CheckboxField
            label="Currently Pregnant"
            checked={formData.medical.isPregnant}
            onChange={(val: boolean) => setFormData({ ...formData, medical: { ...formData.medical, isPregnant: val } })}
            color="accent-pink-600"
          />
        )}
      </div>
    </div>
  );

  const Step3Medical = () => (
    <div className="space-y-6 animate-fadeIn">
      <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Step 3: Medical History</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Genotype</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={formData.medical.genotype}
            onChange={(e) => setFormData({ ...formData, medical: { ...formData.medical, genotype: e.target.value as any } })}
          >
            <option value="AA">AA</option>
            <option value="AS">AS (Carrier)</option>
            <option value="SS">SS (Sickle Cell)</option>
            <option value="AC">AC</option>
          </select>
        </div>

        <div className="flex flex-col justify-end">
          <label className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="checkbox"
              checked={formData.medical.hasVisualImpairment}
              onChange={(e) => setFormData({ ...formData, medical: { ...formData.medical, hasVisualImpairment: e.target.checked } })}
              className="w-4 h-4 accent-military-blue"
            />
            <span className="text-sm font-medium">Visual Impairment / Glasses</span>
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-bold text-gray-900">Check if you have a history of:</p>

        <CheckboxField
          label="Asthma"
          checked={formData.medical.hasAsthma}
          onChange={(val: boolean) => setFormData({ ...formData, medical: { ...formData.medical, hasAsthma: val } })}
          color="accent-red-500"
        />

        <CheckboxField
          label="Hernia"
          desc="Umbilical or Inguinal Hernia"
          checked={formData.medical.hasHernia}
          onChange={(val: boolean) => setFormData({ ...formData, medical: { ...formData.medical, hasHernia: val } })}
          color="accent-red-500"
        />

        <CheckboxField
          label="Mental Illness / Disorders"
          desc="Personal or immediate family history"
          checked={formData.medical.historyOfMentalIllness}
          onChange={(val: boolean) => setFormData({ ...formData, medical: { ...formData.medical, historyOfMentalIllness: val } })}
          color="accent-red-500"
        />

        <CheckboxField
          label="Major Surgery / Pins"
          desc="Any major operation with visible scars or metal implants"
          checked={formData.medical.hasSurgery}
          onChange={(val: boolean) => setFormData({ ...formData, medical: { ...formData.medical, hasSurgery: val } })}
          color="accent-military-blue"
        />

        <CheckboxField
          label="Past Fractures"
          desc="History of bone fractures"
          checked={formData.medical.hasPastFracture}
          onChange={(val: boolean) => setFormData({ ...formData, medical: { ...formData.medical, hasPastFracture: val } })}
          color="accent-military-blue"
        />

        <label className="flex items-center gap-3 p-3 border border-red-200 bg-red-50 rounded-lg hover:bg-red-100 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.hasCriminalRecord}
            onChange={(e) => setFormData({ ...formData, hasCriminalRecord: e.target.checked })}
            className="w-5 h-5 accent-red-600"
          />
          <div>
            <span className="font-semibold text-red-900 block">Criminal Record</span>
            <span className="text-xs text-red-700">Have you ever been convicted by a court of law?</span>
          </div>
        </label>
      </div>
    </div>
  );

  const Step4Academic = () => {
    const grades: Grade[] = ['A1', 'B2', 'B3', 'C4', 'C5', 'C6', 'D7', 'E8', 'F9'];
    return (
      <div className="space-y-6 animate-fadeIn">
        <h3 className="text-lg font-bold text-gray-800 border-b pb-2">Step 4: Academic Results</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification</label>
          <div className="relative">
            <BookOpen className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <select
              value={formData.qualification}
              onChange={(e) => setFormData({ ...formData, qualification: e.target.value as any })}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white"
            >
              <option value="SSCE">SSCE / WAEC / NECO</option>
              <option value="OND">OND / National Diploma</option>
              <option value="NCE">NCE</option>
              <option value="HND">HND</option>
              <option value="Degree">Bachelor's Degree</option>
              <option value="Medical Degree">Medical Degree (MBBS)</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h4 className="text-sm font-bold text-blue-900 mb-3">O'Level Result (WAEC/NECO) Details</h4>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">English Language</label>
              <select
                className="w-full p-2 text-sm border rounded"
                value={formData.examGrades.english}
                onChange={(e) => setFormData({ ...formData, examGrades: { ...formData.examGrades, english: e.target.value as Grade } })}
              >
                {grades.map(g => <option key={`eng-${g}`} value={g}>{g}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Mathematics</label>
              <select
                className="w-full p-2 text-sm border rounded"
                value={formData.examGrades.maths}
                onChange={(e) => setFormData({ ...formData, examGrades: { ...formData.examGrades, maths: e.target.value as Grade } })}
              >
                {grades.map(g => <option key={`math-${g}`} value={g}>{g}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1">Total Number of Credits (A1 - C6)</label>
            <input
              type="number" max="9" min="0"
              value={formData.examGrades.numberOfCredits}
              onChange={(e) => setFormData({ ...formData, examGrades: { ...formData.examGrades, numberOfCredits: parseInt(e.target.value) } })}
              className="w-full p-2 border rounded text-sm"
              placeholder="e.g. 5"
            />
            <p className="text-[10px] text-gray-500 mt-1">Include English & Maths in this count.</p>
          </div>
        </div>
      </div>
    );
  };

  const ResultStep = () => (
    <div className="text-center animate-fadeIn py-4">
      <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-md ${result?.qualified ? 'bg-green-100' : 'bg-red-100'}`}>
        {result?.qualified ? (
          <Check className="w-12 h-12 text-green-600" />
        ) : (
          <XCircle className="w-12 h-12 text-red-600" />
        )}
      </div>

      <h3 className={`text-3xl font-extrabold mb-4 ${result?.qualified ? 'text-green-800' : 'text-red-800'}`}>
        {result?.qualified ? 'Eligibility Confirmed' : 'Not Eligible'}
      </h3>

      {/* Analysis Report */}
      <div className={`p-5 rounded-xl text-left mb-8 border ${result?.qualified ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
        <h4 className="font-bold mb-2 flex items-center gap-2">
          {result?.qualified ? <Stethoscope className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
          Analysis Report:
        </h4>
        <ul className="space-y-2">
          {result?.messages.map((msg, i) => (
            <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
              {msg}
            </li>
          ))}
        </ul>
      </div>

      <AdUnit slot="ELIGIBILITY_RESULT_AD" />

      {result?.qualified && (
        <div className="mb-8">
          <p className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">Recommended Paths</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {result.recommended.map(rec => (
              <span key={rec} className="px-4 py-2 bg-military-blue text-white text-sm font-semibold rounded-full shadow-sm">
                {rec}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {result?.qualified && (
          <button
            onClick={navigateToRecruitments}
            className="flex items-center justify-center w-full py-4 bg-military-green text-white rounded-xl hover:bg-green-800 font-bold shadow-lg transition-transform transform hover:-translate-y-1"
          >
            Apply Now <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        )}

        <button
          onClick={() => { setStep(1); setResult(null); }}
          className="flex items-center justify-center w-full py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 font-medium"
        >
          <RefreshCw className="w-4 h-4 mr-2" /> Check Another Profile
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <SEO
        title="Eligibility Checker - Check Your Recruitment Qualification"
        description="Check if you are eligible for Nigerian Army, Navy, Police, and Paramilitary recruitment. Automated physical, medical, and academic screening tool."
        canonical="/eligibility"
        keywords={['eligibility checker', 'recruitment qualification', 'military requirements', 'Nigeria job eligibility', 'height requirement']}
      />
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Progress Bar Header */}
        <div className="bg-military-green p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <HeartPulse className="w-6 h-6" /> Military Eligibility
            </h1>
            <span className="text-xs font-mono bg-white/20 px-2 py-1 rounded">v2.1</span>
          </div>

          <div className="bg-white/10 rounded-xl p-4 mb-4 text-xs leading-relaxed border border-white/20">
            <p className="mb-2"><strong>Quick Guide:</strong> This automated tool uses official recruitment criteria from the Nigerian Armed Forces and Paramilitary agencies to pre-screen your profile.</p>
            <p><strong>Instructions:</strong> Answer all questions accurately. Discrepancies in your physical or medical data during the actual screening can lead to permanent disqualification.</p>
          </div>

          {step < 5 && (
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className={`h-2 flex-1 rounded-full transition-all duration-500 ${s <= step ? 'bg-yellow-400' : 'bg-green-800'}`}></div>
              ))}
            </div>
          )}
          <p className="text-xs mt-2 text-green-100 opacity-80 text-right">Step {step} of 4</p>
        </div>

        <div className="p-6 md:p-8">
          {step === 1 && <Step1Bio />}
          {step === 2 && <Step2Physical />}
          {step === 3 && <Step3Medical />}
          {step === 4 && <Step4Academic />}
          {step === 5 && <ResultStep />}

          {step < 5 && (
            <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-xl text-gray-700 font-bold hover:bg-gray-50"
                >
                  Back
                </button>
              )}
              <button
                onClick={step === 4 ? checkEligibility : handleNext}
                className="flex-1 py-3 px-4 bg-military-blue text-white rounded-xl font-bold hover:bg-blue-900 shadow-md flex items-center justify-center transition-all"
              >
                {step === 4 ? 'Calculate Eligibility' : 'Continue'}
                {step !== 4 && <ChevronRight className="w-4 h-4 ml-1" />}
              </button>
            </div>
          )}
        </div>
      </div>

      <AdUnit slot="ELIGIBILITY_FOOTER_AD" />

      <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-military-green" />
          Standard Recruitment Requirements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wider">Physical Standards</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-military-green rounded-full mt-1.5 shrink-0" />
                <span><strong>Height:</strong> Minimum of 1.68m for males and 1.65m for females in the Army and Navy.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-military-green rounded-full mt-1.5 shrink-0" />
                <span><strong>Chest:</strong> Fully expanded chest measurement of not less than 0.87m (for males).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-military-green rounded-full mt-1.5 shrink-0" />
                <span><strong>Fitness:</strong> Must be physically and medically fit according to agency standards.</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wider">Academic Baselines</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-military-blue rounded-full mt-1.5 shrink-0" />
                <span><strong>O'Level:</strong> Minimum of 5 credits including English and Maths in not more than 2 sittings.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-military-blue rounded-full mt-1.5 shrink-0" />
                <span><strong>Age Limit:</strong> Generally 18-22 for non-tradesmen and up to 26-30 for tradesmen/officers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-military-blue rounded-full mt-1.5 shrink-0" />
                <span><strong>Nationality:</strong> Only Nigerian citizens by birth are eligible for enlistment.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-yellow-200 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0" />
          <p className="text-xs text-yellow-800">
            <strong>Disclaimer:</strong> This tool provides a preliminary assessment based on standard criteria. The final decision on eligibility rests solely with the recruiting agency's screening board.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EligibilityChecker;