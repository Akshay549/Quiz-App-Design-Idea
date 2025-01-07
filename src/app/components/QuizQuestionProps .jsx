"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";


export default function QuizQuestion({
  questionNumber,
  totalQuestions,
  question,
  options,
  onSubmit,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-[#1D2332] p-6">
      <div className="max-w-[1200px] mx-auto h-full">
        {/* Grid container for large screens */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start lg:pt-20">
          {/* Left section - Question */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 lg:mb-0"
          >
            <div className="space-y-6">
              <p className="text-slate-400">
                Question {questionNumber} of {totalQuestions}
              </p>
              <h2 className="text-2xl lg:text-4xl font-bold text-white">
                {question}
              </h2>
              <div className="relative h-2 w-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20" />
                <div 
                  className="absolute h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right section - Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {options.map((option, index) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedAnswer(option.id)}
                className={cn(
                  "w-full text-left p-4 rounded-lg",
                  "bg-[#2B3246] hover:bg-[#353D57]",
                  "transition-all duration-200",
                  "flex items-center gap-4",
                  selectedAnswer === option.id && "ring-2 ring-purple-500"
                )}
              >
                <div className="w-10 h-10 rounded-lg bg-[#1D2332] flex items-center justify-center text-white font-medium">
                  {option.id}
                </div>
                <span className="text-white text-lg">{option.text}</span>
              </motion.button>
            ))}

            <Button
              onClick={() => selectedAnswer && onSubmit(selectedAnswer)}
              disabled={!selectedAnswer}
              className={cn(
                "w-full mt-4 py-6 rounded-lg text-white font-semibold text-lg",
                "bg-purple-600 hover:bg-purple-700",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "transition-all duration-200"
              )}
            >
              Submit answer
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

