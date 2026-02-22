import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle, XCircle, Clock, RotateCcw } from 'lucide-react';
import { getQuestions } from '../services/mockFirebase';
import { Question } from '../types';

const QuizInterface: React.FC = () => {
  const { branch } = useParams<{ branch: string }>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getQuestions(branch).then(data => {
      setQuestions(data);
      setLoading(false);
      // Reset state on new branch load
      setCurrentQuestion(0);
      setSelectedAnswers({});
      setShowResult(false);
    });
  }, [branch]);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex
    });
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        score++;
      }
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
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-military-green"></div></div>;
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">No questions available for {branch} yet.</h2>
        <Link to="/practice" className="text-military-blue underline mt-4 inline-block">Back to Practice Centre</Link>
      </div>
    );
  }

  if (showResult) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 50;

    return (
      <div className="max-w-2xl mx-auto py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden text-center">
          <div className={`${passed ? 'bg-green-600' : 'bg-red-600'} p-8 text-white`}>
            <h2 className="text-3xl font-bold mb-2">{passed ? 'Congratulations!' : 'Keep Practicing'}</h2>
            <p className="opacity-90">You have completed the {branch} Practice Test</p>
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
                onClick={() => {
                  setSelectedAnswers({});
                  setShowResult(false);
                  setCurrentQuestion(0);
                }}
                className="px-6 py-3 bg-military-blue text-white rounded-lg font-medium hover:bg-blue-900 flex items-center"
              >
                <RotateCcw className="w-4 h-4 mr-2" /> Retake Test
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-6 text-left border-t border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">Review Answers</h3>
            <div className="space-y-6">
              {questions.map((q, idx) => {
                const isCorrect = selectedAnswers[idx] === q.correctAnswer;
                return (
                  <div key={q.id} className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start gap-3">
                      {isCorrect ? <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" /> : <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />}
                      <div>
                        <p className="font-medium text-gray-900">{idx + 1}. {q.question}</p>
                        <p className="text-sm text-gray-600 mt-1">Your Answer: <span className={isCorrect ? 'text-green-700 font-medium' : 'text-red-700 font-medium'}>{q.options[selectedAnswers[idx]] || 'Skipped'}</span></p>
                        {!isCorrect && (
                           <p className="text-sm text-green-700 mt-1 font-medium">Correct Answer: {q.options[q.correctAnswer]}</p>
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

  const q = questions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto py-6">
      <div className="mb-6 flex justify-between items-center">
        <div>
           <h2 className="text-lg font-bold text-gray-500">{branch} Practice Test</h2>
           <p className="text-xs text-gray-400">Question {currentQuestion + 1} of {questions.length}</p>
        </div>
        <div className="flex items-center text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-200">
          <Clock className="w-4 h-4 mr-1" /> Untimed
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden min-h-[400px] flex flex-col">
        {/* Progress Bar */}
        <div className="w-full bg-gray-100 h-2">
          <div 
            className="bg-military-green h-2 transition-all duration-300" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
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
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedAnswers[currentQuestion] === idx 
                    ? 'border-military-green bg-green-50 text-military-green font-medium shadow-sm' 
                    : 'border-gray-100 hover:border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3 ${
                    selectedAnswers[currentQuestion] === idx 
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
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
              currentQuestion === 0 
                ? 'text-gray-300 cursor-not-allowed' 
                : 'text-gray-600 hover:bg-gray-200'
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