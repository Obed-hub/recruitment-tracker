import React, { useState } from 'react';
import { BrainCircuit, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const SAMPLE_QUESTIONS: Question[] = [
  {
    question: "Who is the administrative head of the Nigerian Armed Forces after the Commander-in-Chief?",
    options: ["Chief of Army Staff", "Chief of Defence Staff (CDS)", "Minister of Police Affairs", "Inspector General of Police"],
    correct: 1,
    explanation: "The Chief of Defence Staff (CDS) is the professional head of the Armed Forces of Nigeria, coordinating Army, Navy, and Air Force commands under the President."
  },
  {
    question: "What is the primary statutory responsibility of the Nigerian Navy according to the Armed Forces Act?",
    options: ["Highway traffic management", "Maritime defence & protection of oil installations", "Border passport verification", "Internal prison supervision"],
    correct: 1,
    explanation: "The Nigerian Navy is legally tasked with maritime security, combating piracy, crude oil theft, and securing territorial water boundaries."
  },
  {
    question: "Which of the following is mandatory for all graduate applicants to DSSC officer cadres in Nigeria?",
    options: ["5 years commercial driving experience", "NYSC Discharge Certificate or Exemption Letter", "Private Pilot License", "Foreign dual citizenship"],
    correct: 1,
    explanation: "Under federal public service and military enlistment rules, all degree and HND holders applying for Direct Short Service Commission must provide an authentic NYSC discharge or exemption certificate."
  }
];

interface QuickPracticeWidgetProps {
  branch?: string;
  quizRoute?: string;
}

const QuickPracticeWidget: React.FC<QuickPracticeWidgetProps> = ({ branch = 'Military & Paramilitary', quizRoute = '/past-questions' }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = SAMPLE_QUESTIONS[currentIdx];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === currentQ.correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < SAMPLE_QUESTIONS.length) {
      setCurrentIdx(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="p-5 sm:p-7 bg-white rounded-3xl border border-gray-200/90 shadow-sm my-8">
      <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center shrink-0">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded-md">
              Instant 60-Second Challenge
            </span>
            <h3 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
              Test Your {branch} Screening Readiness
            </h3>
          </div>
        </div>

        <span className="text-xs font-bold text-gray-400">
          {!isCompleted && `Question ${currentIdx + 1} of ${SAMPLE_QUESTIONS.length}`}
        </span>
      </div>

      {!isCompleted ? (
        <div className="space-y-4">
          <p className="font-bold text-gray-800 text-sm sm:text-base leading-snug">
            {currentQ.question}
          </p>

          <div className="grid grid-cols-1 gap-2">
            {currentQ.options.map((option, idx) => {
              let btnStyle = 'bg-gray-50/70 border-gray-200 text-gray-800 hover:bg-gray-100 hover:border-gray-300';
              if (isAnswered) {
                if (idx === currentQ.correct) {
                  btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                } else if (idx === selectedOption) {
                  btnStyle = 'bg-red-50 border-red-300 text-red-800 line-through';
                } else {
                  btnStyle = 'bg-gray-50/40 border-gray-200 text-gray-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <span>{option}</span>
                  {isAnswered && idx === currentQ.correct && (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQ.correct && (
                    <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="p-3.5 bg-blue-50/70 rounded-xl border border-blue-100 text-xs text-blue-900 leading-relaxed">
              <span className="font-bold">Official Explanation:</span> {currentQ.explanation}
            </div>
          )}

          {isAnswered && (
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="px-5 py-2.5 bg-military-blue hover:bg-blue-900 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              >
                {currentIdx + 1 < SAMPLE_QUESTIONS.length ? 'Next Question' : 'View Your Score'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-6 space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-lg font-black text-gray-900">
              Quiz Completed: You Scored {score} / {SAMPLE_QUESTIONS.length}!
            </h4>
            <p className="text-xs text-gray-500 mt-1 max-w-md mx-auto">
              {score === 3
                ? 'Excellent! You have solid foundational knowledge for the Computer-Based Test (CBT).'
                : 'Good practice run! Review official past questions to guarantee high percentiles on screening day.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={handleReset}
              className="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake Mini Quiz
            </button>
            <Link
              to={quizRoute}
              className="px-5 py-2.5 bg-military-green hover:bg-green-800 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
            >
              Take Full 50-Question CBT Practice Exam <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickPracticeWidget;
