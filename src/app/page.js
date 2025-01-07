"use client";

import { useState } from "react";
import HomePage from './components/HomePage'
import QuizQuestion from './components/QuizQuestionProps '
import Results from './components/ResultsProps'
import { quizTopics } from '../app/data/quiz-data'

export default function Home() {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleTopicSelect = (topicId) => {
    setCurrentTopic(topicId);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  const handleAnswerSubmit = (answer) => {
    const topic = quizTopics.find(t => t.id === currentTopic);
    if (!topic) return;

    if (answer === topic.questions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion < topic.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentTopic(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="dark">
      {!currentTopic ? (
        <HomePage onTopicSelect={handleTopicSelect} />
      ) : showResults ? (
        <Results
          score={score}
          totalQuestions={quizTopics.find(t => t.id === currentTopic)?.questions.length || 0}
          onRestart={handleRestart}
        />
      ) : (
        <QuizQuestion
          questionNumber={currentQuestion + 1}
          totalQuestions={quizTopics.find(t => t.id === currentTopic)?.questions.length || 0}
          question={quizTopics.find(t => t.id === currentTopic)?.questions[currentQuestion].question || ""}
          options={quizTopics.find(t => t.id === currentTopic)?.questions[currentQuestion].options || []}
          onSubmit={handleAnswerSubmit}
        />
      )}
    </div>
  );
}

