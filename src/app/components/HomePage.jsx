'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Terminal, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const topics = [
  {
    id: 'html',
    title: 'HTML',
    icon: <Code2 className='w-6 h-6 text-orange-500' />
  },
  {
    id: 'css',
    title: 'CSS',
    icon: <Palette className='w-6 h-6 text-blue-500' />
  },
  {
    id: 'javascript',
    title: 'Javascript',
    icon: <Terminal className='w-6 h-6 text-yellow-500' />
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    icon: <Eye className='w-6 h-6 text-green-500' />
  }
]

export default function HomePage ({ onTopicSelect }) {
  return (
    <div className='min-h-screen bg-background text-foreground p-6 flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='max-w-md w-full space-y-8'
      >
        <div className='text-center space-y-2'>
          <motion.h1
            className='text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500'
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            Frontend Quiz
          </motion.h1>
          <p className='text-muted-foreground'>
            Test your knowledge and skills!
          </p>
        </div>

        <div className='space-y-4'>
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant='outline'
                className={cn(
                  'w-full h-auto p-4 justify-start space-x-4',
                  'hover:bg-accent hover:text-accent-foreground',
                  'transition-all duration-200 hover:scale-105',
                  'border border-gray-700 bg-gray-800'
                )}
                onClick={() => onTopicSelect(topic.id)}
              >
                <div className='p-2 bg-gray-900 rounded-lg'>{topic.icon}</div>
                <span className='font-medium'>{topic.title}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
