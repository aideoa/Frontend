
import TopImageCard from '../Cards/TopImageCard'
import React, { useState } from 'react';
import { Clock, Book, Code, ChevronRight } from 'lucide-react';
import useOnlineTest from '../../hooks/useOnlineTest';

const quizzes = [
  {
    id: 1,
    title: 'Introduction to React',
    description: 'Test your knowledge of React basics',
    duration: 30,
    questions: 20,
    category: 'Programming',
    url: '/quiz/react-intro',
  },
  {
    id: 2,
    title: 'JavaScript Fundamentals',
    description: 'Assess your understanding of core JavaScript concepts',
    duration: 45,
    questions: 30,
    category: 'Programming',
    url: '/quiz/javascript-fundamentals',
  },
  {
    id: 3,
    title: 'Web Design Principles',
    description: 'Evaluate your grasp of essential web design concepts',
    duration: 25,
    questions: 15,
    category: 'Design',
    url: '/quiz/web-design',
  },
  {
    id: 4,
    title: 'Database Management',
    description: 'Test your knowledge of database concepts and SQL',
    duration: 40,
    questions: 25,
    category: 'Database',
    url: '/quiz/database-management',
  },
  {
    id: 5,
    title: 'Network Security Basics',
    description: 'Assess your understanding of network security principles',
    duration: 35,
    questions: 22,
    category: 'Security',
    url: '/quiz/network-security',
  },
];


const Onlinetest = () => {
  const {dataList}=useOnlineTest()
  return (
    <div className='py-14 min-h-screen'>
        <TopImageCard image={'./enhanceimage/Educationcomp.png'} title={"Online Test"}/>

        <div className="max-w-7xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Online Quiz</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {dataList && dataList?.quizzes?.map(quiz => (
          <div key={quiz.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
              <p className="text-gray-600 mb-4">{quiz.description}</p>
             
              <div className="flex items-center justify-between">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                  {quiz.category}
                </span>
                <a
                  href={quiz.quizUrl}
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  Start Quiz
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Onlinetest