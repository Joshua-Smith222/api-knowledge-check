import React from 'react';

const QuestionForm = ({ questionData, selectedAnswer, setSelectedAnswer, onSubmitAnswer, error }) => {
  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  return (
    <form onSubmit={onSubmitAnswer} className="space-y-4">
      <h2 className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: questionData.question }} />

      <div className="space-y-2">
        {questionData.answers.map((answer, index) => (
          <label key={index} className="block">
            <input
              type="radio"
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={handleChange}
              className="mr-2"
            />
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </label>
        ))}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        Submit Answer
      </button>
    </form>
  );
};

export default QuestionForm;
