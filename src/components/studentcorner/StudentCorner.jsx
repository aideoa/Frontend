import { useState, useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import TopImageCard from '../Cards/TopImageCard';
import useStudentNews from '../../hooks/useStudentNews';

const StudentCorner = () => {
  const { allNews } = useStudentNews();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (allNews?.length > 0) {
      setIsLoading(false);
    }
  }, [allNews]); 

  return (
    <div className='pt-14 min-h-screen'>
    <TopImageCard image={'/enhanceimage/Student.png'} title={"Student Corner"}/>

    <div className="max-w-7xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Student News</h1>

      {/* <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div> */}

      {isLoading ? (
          <div className="flex justify-center items-center h-60">
            <ThreeCircles height="50" width="50" color="#6e00fa" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allNews?.map(article => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{article.date}</span>
                    <span className="bg-gray-200 px-2 py-1 rounded">{article.category}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCorner;