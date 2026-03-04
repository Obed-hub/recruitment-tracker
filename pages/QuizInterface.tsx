import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight, ArrowLeft, CheckCircle, XCircle,
  Clock, RotateCcw, BookOpen, Play, ListChecks
} from 'lucide-react';
import { getQuestions } from '../services/mockFirebase';
import { Question } from '../types';

// ── Question count options ───────────────────────────────────────────────────
const COUNT_OPTIONS = [
  { value: 10, label: '10', desc: '~5 min', color: 'border-green-400 bg-green-50 text-green-700 hover:bg-green-100' },
  { value: 20, label: '20', desc: '~10 min', color: 'border-blue-400 bg-blue-50 text-blue-700 hover:bg-blue-100' },
  { value: 40, label: '40', desc: '~20 min', color: 'border-indigo-400 bg-indigo-50 text-indigo-700 hover:bg-indigo-100' },
  { value: 60, label: '60', desc: '~30 min', color: 'border-purple-400 bg-purple-50 text-purple-700 hover:bg-purple-100' },
  { value: 100, label: '100', desc: '~50 min', color: 'border-orange-400 bg-orange-50 text-orange-700 hover:bg-orange-100' },
];

// ── Setup Screen ─────────────────────────────────────────────────────────────
const SetupScreen: React.FC<{
  branch: string;
  maxQuestions: number;
  onStart: (count: number) => void;
}> = ({ branch, maxQuestions, onStart }) => {
  const [selected, setSelected] = useState(20);

  const available = COUNT_OPTIONS.filter(o => o.value <= maxQuestions);
  // Always show all options but cap if fewer questions exist
  const options = COUNT_OPTIONS.map(o => ({
    ...o,
    actualValue: Math.min(o.value, maxQuestions),
    disabled: maxQuestions < o.value / 2, // hide if we can't fill even half
  })).filter(o => !o.disabled);

  return (
    <div className="max-w-xl mx-auto py-10">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-military-green to-green-700 p-8 text-white text-center">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ListChecks className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-bold">{branch} Practice Test</h2>
          <p className="text-green-100 text-sm mt-1">Configure your session before starting</p>
        </div>

        <div className="p-8">
          {/* Question count picker */}
          <div className="mb-8">
            <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-military-green" />
              How many questions do you want?
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {options.map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setSelected(opt.actualValue)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all font-semibold ${selected === opt.actualValue
                    ? 'border-military-green bg-military-green text-white shadow-md scale-105'
                    : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-military-green hover:bg-green-50'
                    }`}
                >
                  <span className="text-2xl font-extrabold">{opt.actualValue}</span>
                  <span className="text-[10px] font-medium mt-0.5 opacity-80">{opt.desc}</span>
                </button>
              ))}
            </div>
            {maxQuestions < 20 && (
              <p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
                <XCircle className="w-3 h-3" />
                Only {maxQuestions} questions available for {branch}.
              </p>
            )}
          </div>

          {/* Session summary */}
          <div className="bg-gray-50 rounded-xl p-4 mb-6 flex justify-around text-center">
            <div>
              <p className="text-2xl font-extrabold text-gray-900">{selected}</p>
              <p className="text-xs text-gray-400 font-medium">Questions</p>
            </div>
            <div className="w-px bg-gray-200" />
            <div>
              <p className="text-2xl font-extrabold text-gray-900">
                {options.find(o => o.actualValue === selected)?.desc ?? `~${Math.ceil(selected / 2)} min`}
              </p>
              <p className="text-xs text-gray-400 font-medium">Est. Time</p>
            </div>
            <div className="w-px bg-gray-200" />
            <div>
              <p className="text-2xl font-extrabold text-gray-900">4</p>
              <p className="text-xs text-gray-400 font-medium">Options/Q</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Link
              to="/practice"
              className="flex-1 py-3 border border-gray-300 rounded-xl text-gray-600 font-medium text-center hover:bg-gray-50 transition-colors text-sm"
            >
              ← Back
            </Link>
            <button
              onClick={() => onStart(selected)}
              className="flex-1 py-3 bg-military-green text-white rounded-xl font-bold hover:bg-green-700 transition-all hover:scale-105 shadow-md flex items-center justify-center gap-2 text-sm"
            >
              <Play className="w-4 h-4" /> Start Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Main Quiz Interface ───────────────────────────────────────────────────────
const QuizInterface: React.FC = () => {
  const { branch } = useParams<{ branch: string }>();
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setLoading(true);
    getQuestions(branch).then(data => {
      setAllQuestions(data);
      setLoading(false);
      setCurrentQuestion(0);
      setSelectedAnswers({});
      setShowResult(false);
      setStarted(false);
    });
  }, [branch]);

  const handleStart = (count: number) => {
    // Shuffle and slice to the user-chosen count
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled.slice(0, count));
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);
    setStarted(true);
  };

  const handleRetake = () => {
    setStarted(false);
    setQuestions([]);
    setSelectedAnswers({});
    setShowResult(false);
    setCurrentQuestion(0);
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: optionIndex });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) score++;
    });
    return score;
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(prev => prev - 1);
  };

  // ── Loading ──
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-military-green" />
      </div>
    );
  }

  // ── No questions ──
  if (allQuestions.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">No questions available for {branch} yet.</h2>
        <Link to="/practice" className="text-military-blue underline mt-4 inline-block">Back to Practice Centre</Link>
      </div>
    );
  }

  // ── Setup Screen ──
  if (!started) {
    return (
      <SetupScreen
        branch={branch || 'General'}
        maxQuestions={allQuestions.length}
        onStart={handleStart}
      />
    );
  }

  // ── Results Screen ──
  if (showResult) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 50;

    return (
      <div className="max-w-2xl mx-auto py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden text-center">
          <div className={`${passed ? 'bg-green-600' : 'bg-red-600'} p-8 text-white`}>
            <h2 className="text-3xl font-bold mb-2">{passed ? 'Congratulations!' : 'Keep Practicing'}</h2>
            <p className="opacity-90">You completed the {branch} Practice Test</p>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <span className="text-sm text-gray-500 uppercase tracking-wide font-bold">Your Score</span>
              <div className="text-6xl font-extrabold text-gray-900 mt-2">{percentage}%</div>
              <p className="text-gray-500 mt-2">{score} out of {questions.length} questions correct</p>
            </div>

            <div className="flex gap-4 justify-center">
              <Link to="/practice" className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50">
                Back to Hub
              </Link>
              <button
                onClick={handleRetake}
                className="px-6 py-3 bg-military-blue text-white rounded-lg font-medium hover:bg-blue-900 flex items-center"
              >
                <RotateCcw className="w-4 h-4 mr-2" /> Try Again
              </button>
            </div>
          </div>

          {/* Review */}
          <div className="bg-gray-50 p-6 text-left border-t border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">Review Answers</h3>
            <div className="space-y-6">
              {questions.map((q, idx) => {
                const isCorrect = selectedAnswers[idx] === q.correctAnswer;
                return (
                  <div key={q.id} className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-3">
                      {isCorrect
                        ? <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        : <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />}
                      <div>
                        <p className="font-medium text-gray-900">{idx + 1}. {q.question}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Your Answer: <span className={isCorrect ? 'text-green-700 font-medium' : 'text-red-700 font-medium'}>
                            {q.options[selectedAnswers[idx]] || 'Skipped'}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-sm text-green-700 mt-1 font-medium">
                            Correct Answer: {q.options[q.correctAnswer]}
                          </p>
                        )}
                        {q.explanation && (
                          <div className="mt-2 text-xs bg-gray-100 p-2 rounded text-gray-600">
                            <strong>Explanation:</strong> {q.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Active Quiz ──
  const q = questions[currentQuestion];
  const answered = Object.keys(selectedAnswers).length;

  return (
    <div className="max-w-3xl mx-auto py-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-500">{branch} Practice Test</h2>
          <p className="text-xs text-gray-400">Question {currentQuestion + 1} of {questions.length}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
            {answered}/{questions.length} answered
          </span>
          <div className="flex items-center text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200">
            <Clock className="w-4 h-4 mr-1" /> Untimed
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden min-h-[400px] flex flex-col">
        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-2">
          <div
            className="bg-military-green h-2 transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className="p-8 flex-grow">
          <h3 className="text-xl font-medium text-gray-900 leading-relaxed mb-8">
            {q.question}
          </h3>

          <div className="space-y-3">
            {q.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${selectedAnswers[currentQuestion] === idx
                  ? 'border-military-green bg-green-50 text-military-green font-medium shadow-sm'
                  : 'border-gray-100 hover:border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${selectedAnswers[currentQuestion] === idx
                    ? 'border-military-green bg-military-green text-white'
                    : 'border-gray-300'
                    }`}>
                    {selectedAnswers[currentQuestion] === idx && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-between">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${currentQuestion === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-200'
              }`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Previous
          </button>

          <button
            onClick={handleNext}
            className="flex items-center px-8 py-3 bg-military-blue text-white rounded-lg font-medium hover:bg-blue-900 shadow-md transition-all hover:scale-105"
          >
            {currentQuestion === questions.length - 1 ? 'Submit Test' : 'Next Question'}
            {currentQuestion !== questions.length - 1 && <ArrowRight className="w-4 h-4 ml-2" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizInterface;