import React, { useState } from 'react';
import HomePage from './components/HomePage';
import QuestionForm from './components/QuestionForm';
import ResultsSection from './components/ResultsSection';

const App = () => {
  const [formData, setFormData] = useState({ name: '', category: '', difficulty: '' });
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [error, setError] = useState('');

  const fetchQuestion = async () => {
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=1&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`
      );
      const data = await response.json();
      const question = data.results[0];
      const allAnswers = [...question.incorrect_answers, question.correct_answer];
      const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
      setQuestionData({ ...question, answers: shuffledAnswers });
      setError('');
    } catch (err) {
      setError('Failed to fetch question. Please try again.');
    }
  };

  const handleStart = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.difficulty) {
      setError('All fields are required.');
      return;
    }
    fetchQuestion();
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    if (!selectedAnswer) {
      setError('Please select an answer.');
      return;
    }
    setIsCorrect(selectedAnswer === questionData.correct_answer);
    setShowResults(true);
    setError('');
  };

  const handleRestart = () => {
    setFormData({ name: '', category: '', difficulty: '' });
    setQuestionData(null);
    setSelectedAnswer('');
    setShowResults(false);
    setIsCorrect(null);
    setError('');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      {!questionData ? (
        <HomePage formData={formData} setFormData={setFormData} onSubmit={handleStart} error={error} />
      ) : !showResults ? (
        <QuestionForm
          questionData={questionData}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          onSubmitAnswer={handleSubmitAnswer}
          error={error}
        />
      ) : (
        <ResultsSection
          name={formData.name}
          isCorrect={isCorrect}
          correctAnswer={questionData.correct_answer}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default App;
