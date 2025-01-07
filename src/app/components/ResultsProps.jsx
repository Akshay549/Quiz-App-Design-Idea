import { motion } from 'framer-motion'
import { Trophy, Star, Medal, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import confetti from 'canvas-confetti'

export default function Results ({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100)

  const getResultDetails = percentage => {
    if (percentage >= 90) {
      return {
        message: 'Excellent!',
        description: "Outstanding performance! You're a true expert!",
        icon: <Trophy className='w-12 h-12 text-white' />,
        gradient: 'from-yellow-400 to-yellow-600'
      }
    } else if (percentage >= 70) {
      return {
        message: 'Very Good!',
        description: 'Great job! You have a solid understanding!',
        icon: <Star className='w-12 h-12 text-white' />,
        gradient: 'from-blue-400 to-blue-600'
      }
    } else if (percentage >= 50) {
      return {
        message: 'Good Effort!',
        description: "You're on the right track, keep learning!",
        icon: <Medal className='w-12 h-12 text-white' />,
        gradient: 'from-green-400 to-green-600'
      }
    } else {
      return {
        message: 'Keep Practicing!',
        description: "Don't give up! Practice makes perfect!",
        icon: <BookOpen className='w-12 h-12 text-white' />,
        gradient: 'from-purple-400 to-purple-600'
      }
    }
  }

  const result = getResultDetails(percentage)

  const fireConfetti = () => {
    // Colors for confetti
    const colors = [
      '#FF0000',
      '#00FF00',
      '#0000FF',
      '#FFFF00',
      '#FF00FF',
      '#00FFFF'
    ]

    // Initial big burst
    confetti({
      particleCount: 200,
      spread: 180,
      origin: { y: 0.5, x: 0.5 },
      colors: colors,
      startVelocity: 45,
      gravity: 1
    })

    // Continuous bursts
    const duration = 3000
    const end = Date.now() + duration

    const randomInRange = (min, max) => Math.random() * (max - min) + min

    // Multiple bursts sequence
    const interval = setInterval(() => {
      const timeLeft = end - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50
      confetti({
        particleCount,
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: {
          x: randomInRange(0.1, 0.9),
          y: Math.random() - 0.2
        },
        colors: colors,
        shapes: ['circle', 'square'],
        gravity: randomInRange(0.4, 0.6),
        scalar: randomInRange(0.8, 1.2),
        drift: randomInRange(-0.4, 0.4)
      })
    }, 250)

    // Final corner bursts
    setTimeout(() => {
      // Left corner
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 1 },
        colors: colors
      })

      // Right corner
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 1 },
        colors: colors
      })
    }, duration / 2)
  }

  return (
    <div className='min-h-screen bg-background text-foreground p-6 flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className='w-full max-w-md'
        onAnimationComplete={fireConfetti}
      >
        <Card className='border-none bg-gray-800'>
          <CardContent className='p-8 text-center space-y-6'>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.2, stiffness: 100 }}
            >
              <div
                className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${result.gradient} flex items-center justify-center`}
              >
                {result.icon}
              </div>
            </motion.div>

            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'>
                {result.message}
              </h2>
              <p className='text-5xl font-bold text-green-500'>
                {percentage}% Score
              </p>
              <p className='text-xl font-medium text-primary mb-2'>
                {result.description}
              </p>
              <p className='text-muted-foreground'>
                Quiz completed successfully.
                <br />
                You attempted {totalQuestions} questions and
                <br />
                got {score} answers correct.
              </p>
            </div>

            <div className='flex justify-center gap-4'>
              <Button
                variant='outline'
                size='lg'
                onClick={onRestart}
                className='border-gray-700 hover:bg-gray-700'
              >
                Try Again
              </Button>
              <Button
                size='lg'
                onClick={onRestart}
                className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
              >
                New Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
