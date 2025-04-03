import React, { useState, useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { ChevronRight } from 'lucide-react';
import TopImageCard from '../Cards/TopImageCard';
import useOnlineTest from '../../hooks/useOnlineTest';

const Onlinetest = () => {
  const { dataList } = useOnlineTest();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (dataList?.quizzes?.length > 0) {
      setIsLoading(false);
    }
  }, [dataList]);

  return (
    <div className="py-14 min-h-screen">
      <TopImageCard image={'./enhanceimage/Educationcomp.png'} title={"Online Test"} />

      <div className="max-w-7xl mx-auto p-4 font-sans">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Online Quiz</h1>

        {isLoading ? (
          <div className="flex justify-center items-center h-60">
            <ThreeCircles height="50" width="50" color="#6e00fa" />
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dataList?.quizzes?.map(quiz => (
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
        )}
      </div>
    </div>
  );
};

export default Onlinetest;
