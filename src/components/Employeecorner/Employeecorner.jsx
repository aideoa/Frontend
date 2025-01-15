import React from 'react'
import TopImageCard from '../Cards/TopImageCard'
import useEmployeeNews from '../../hooks/useEmployeeNews';
const newsArticles = [
  {
    id: 1,
    title: 'New Computer Science Course Announced',
    excerpt: 'The university is launching a new course on Artificial Intelligence and Machine Learning next semester.',
    date: '2023-05-15',
    category: 'Academics',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 2,
    title: 'Student Union Elections Next Week',
    excerpt: 'Don\'t forget to cast your vote for the upcoming student union elections. Polling stations will be open across campus.',
    date: '2023-05-18',
    category: 'Campus Life',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 3,
    title: 'Summer Internship Fair',
    excerpt: 'Over 50 companies will be present at the annual Summer Internship Fair. Bring your resumes!',
    date: '2023-05-20',
    category: 'Career',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 4,
    title: 'Library Hours Extended During Finals Week',
    excerpt: 'The main library will be open 24/7 during finals week to accommodate late-night study sessions.',
    date: '2023-05-22',
    category: 'Facilities',
    image: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 5,
    title: 'New Fitness Classes Added to Gym Schedule',
    excerpt: 'Check out the new yoga and HIIT classes added to the campus gym schedule starting next month.',
    date: '2023-05-25',
    category: 'Health & Wellness',
    image: '/placeholder.svg?height=200&width=300',
  },
];

const Employeecorner = () => {
  const {dataList}=useEmployeeNews()
  return (
    <div className='pt-14 min-h-screen'>
    <TopImageCard image={'./enhanceimage/Employee.png'} title={"Employee Corner"}/>
    <div className="max-w-7xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Employee Corner</h1>

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataList && dataList?.newsList?.map(article => (
          <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
           
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{article.createdAt.slice(0,10)}</span>
                <span className="bg-gray-200 px-2 py-1 rounded">{article.category}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
</div>
  )
}

export default Employeecorner