import React from 'react';

const ResultsSection = ({ name, isCorrect, correctAnswer, onRestart }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Results</h2>
      <p className="text-lg">
        {isCorrect
          ? `Great job, ${name}! You answered correctly!`
          : `Sorry, ${name}. That was incorrect.`}
      </p>
      {!isCorrect && (
        <p className="text-md text-gray-700">
          The correct answer was: <span dangerouslySetInnerHTML={{ __html: correctAnswer }} />
        </p>
      )}
      <button onClick={onRestart} className="px-4 py-2 bg-purple-500 text-white rounded">
        Try Another Question
      </button>
    </div>
  );
};

export default ResultsSection;
