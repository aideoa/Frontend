import React, { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import TopImageCard from "../Cards/TopImageCard";
import useEducation from "../../hooks/useEducation";
import ReactPlayer from "react-player";

function EducationPage() {
  const [files, setFiles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchData } = useEducation();

  const fetchAllData = async () => {
    setIsLoading(true);
    const fileData = await fetchData("1");
    setFiles(fileData);
    const videosData = await fetchData("2");
    setVideos(videosData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div className="py-14 min-h-screen">
      <TopImageCard image={"./enhanceimage/Educationcomp.png"} title={"Education"} />
      <div className="max-w-7xl mx-auto p-4 font-sans">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Education Resources
        </h1>

        {isLoading ? (
          <div className="flex justify-center items-center h-60">
            <ThreeCircles height="50" width="50" color="#6e00fa" />
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Course Materials Section */}
            <section className="lg:w-1/2 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Course Materials
              </h2>
              <div className="h-[400px] customScrollbar overflow-y-auto pr-2">
                <ul className="space-y-2">
                  {files?.map((file) => (
                    <li
                      key={file.id}
                      className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                    >
                      <a
                        href={file?.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {file?.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Online Classes Section */}
            <section className="lg:w-1/2 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Online Classes
              </h2>
              <div className="h-[400px] customScrollbar overflow-y-auto pr-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {videos?.map((video) => (
                    <div key={video.id} className="bg-gray-100 rounded-lg overflow-hidden">
                      <h3 className="p-2 bg-gray-200 text-gray-800 font-medium text-sm">
                        {video.title}
                      </h3>
                      <div className="aspect-w-16 aspect-h-9">
                        <ReactPlayer url={video?.link} width="100%" height="100%" controls />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default EducationPage;
