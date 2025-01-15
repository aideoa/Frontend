import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { LuUploadCloud } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import useCommonLinks from "../../../hooks/useCommonLinks";
const CommonLinks = ({ setActiveComponent }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const data = [
    {
      title: "YouTube",
      last_update: "12 Nov 2025",
      time: "5:30 am - 6:30 pm",
      url: "https://www.figma.com/design/6VftZ3BIN3c3oymnf2etto",
    },
    {
      title: "Instagram",
      last_update: "12 Nov 2025",
      time: "5:30 am - 6:30 pm",
      url: "https://www.figma.com/design/6VftZ3BIN3c3oymnf2etto",
    },
    {
      title: "Facebook",
      last_update: "12 Nov 2025",
      time: "5:30 am - 6:30 pm",
      url: "https://www.figma.com/design/6VftZ3BIN3c3oymnf2etto",
    },
    {
      title: "LinkedIn",
      last_update: "12 Nov 2025",
      time: "5:30 am - 6:30 pm",
      url: "https://www.figma.com/design/6VftZ3BIN3c3oymnf2etto",
    },
    {
      title: "Twitter",
      last_update: "12 Nov 2025",
      time: "5:30 am - 6:30 pm",
      url: "https://www.figma.com/design/6VftZ3BIN3c3oymnf2etto",
    },
  ];
 
  const totalPages = 3;
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(data.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };
  const {dataList,deleteLinks}=useCommonLinks()
  console.log(dataList)
  return (
    <div className="py-4 bg-white rounded-xl lightdropshadowbox">
      <div className="flex px-4 space-x-4 mb-4 items-center">
        <div className="flex space-x-3 items-center ">
          <h2 className="font-bold text-lg">Common Links</h2>
        </div>
        <div className="flex justify-end flex-1  items-center space-x-4 ">
          <div className="relative w-[55%]">
            <CiSearch className="absolute  top-3 left-3" />
            <input
              type="text"
              className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
              placeholder="Search"
            />
          </div>
          {selectedItems.length >= 2 && <MdDelete size={26} />}
          <div className="flex max-lg:flex-col gap-2">
            <button
              onClick={() => setActiveComponent("Add Common Links")}
              className="bg-[#4B0082]  shadow-md font-semibold flex justify-center items-center gap-1  text-white py-2 px-4 rounded-md"
            >
              <LuUploadCloud size={18} className="" />
              <span>Add new</span>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-scroll rounded-b-2xl">
        <table className="min-w-full bg-white border border-gray-300 ">
          <thead>
            <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
              <th className="p-2 px-4 font-medium text-sm text-gray-200">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className=" checked:bg-purple-500 checked:border-purple-500 size-4  bg-col"
                />
              </th>
           <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                Title
              </th>
           <th className="py-3 px-4 text-left text-nowrap font-medium text-sm text-gray-500">
                Added at
              </th>
           
           <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
             Url
              </th>
              <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
             Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {dataList?.slice(0, 7).map((item, index) => (
              <tr key={index} className="border-b border-gray-200 h-16 ">
                <td className="p-2 px-4 font-medium text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelectItem(index)}
                  />
                </td>
                <td className="p-2 font-medium text-sm text-gray-600   whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </td>
                <td className="p-2 font-medium text-sm text-gray-400 ">
                {item?.createdAt.slice(0,10)}
                </td>

                <td className="p-2 font-medium text-sm text-gray-400 w-full">
                  <td className="text-blue-500   whitespace-nowrap overflow-hidden text-ellipsis">
                    <Link to={item.url}>{item.url}</Link>
                  </td>
                </td>
                <td className="p-2  font-medium flex w-full text-sm justify-center h-16 items-center  text-gray-600 cursor-pointer">
                  <RiDeleteBin6Line  onClick={()=>deleteLinks(item?.id)}/>
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommonLinks;
