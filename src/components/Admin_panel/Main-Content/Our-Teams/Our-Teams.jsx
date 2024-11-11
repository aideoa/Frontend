import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuUploadCloud } from "react-icons/lu";
import Pagination from "../../Pagination/Pagination";
import { MdDelete } from "react-icons/md";
import useOurTeams from "../../../../hooks/useOurTeams";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

const OurTeams = ({ setActiveComponent }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [contactData, setContactData] = useState([
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Olivia Rhye",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "olivia@untitledui.com",
      selfAddress: "candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Phoenix Baker",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "phoenix@untitledui.com",
      selfAddress: "our area have developed...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Lana Steiner",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "lana@untitledui.com",
      selfAddress: "candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Demi Wilkinson",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "demi@untitledui.com",
      selfAddress: "area have developed...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Candice Wu",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "candice@untitledui.com",
      selfAddress: "candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Natali Craig",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "natali@untitledui.com",
      selfAddress: "natali The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Drew Cano",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "drew@untitledui.com",
      selfAddress: "drew candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Kate Morrison",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "kate@untitledui.com",
      selfAddress: "kate candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Olivia Rhye",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "olivia@untitledui.com",
      selfAddress: "candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Phoenix Baker",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "phoenix@untitledui.com",
      selfAddress: "our area have developed...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Lana Steiner",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "lana@untitledui.com",
      selfAddress: "candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Demi Wilkinson",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "demi@untitledui.com",
      selfAddress: "area have developed...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Candice Wu",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "candice@untitledui.com",
      selfAddress: "candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Natali Craig",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "natali@untitledui.com",
      selfAddress: "natali The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Drew Cano",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "drew@untitledui.com",
      selfAddress: "drew candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Kate Morrison",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "kate@untitledui.com",
      selfAddress: "kate candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Olivia Rhye",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "olivia@untitledui.com",
      selfAddress: "candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Phoenix Baker",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "phoenix@untitledui.com",
      selfAddress: "our area have developed...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Lana Steiner",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "lana@untitledui.com",
      selfAddress: "candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Demi Wilkinson",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "demi@untitledui.com",
      selfAddress: "area have developed...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Candice Wu",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "candice@untitledui.com",
      selfAddress: "candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Natali Craig",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "natali@untitledui.com",
      selfAddress: "natali The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Drew Cano",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "drew@untitledui.com",
      selfAddress: "drew candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
    {
      checkbox: <input type="checkbox" className="size-4 bg-col" />,
      name: "Kate Morrison",
      category: "Executive / Founder Member",
      mobile: "9876541230",
      email: "kate@untitledui.com",
      selfAddress: "kate candice The roads in our area...",
      action: <BsThreeDotsVertical />,
      profileImage: "url-to-olivia-image",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(contactData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contactData.slice(indexOfFirstItem, indexOfLastItem);
  const [activeSection, setActiveSection] = useState('');
  const sections= [
    { name: '', count: 302 },
    { name: 'Executive/Founder Member', count: 95 },
    { name: 'Education Cell Member', count: 20 },
    { name: 'IT Cell Member', count: 13 },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(contactData.map((_, index) => index));
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
  const {dataList,fetchData,deleteMember}=useOurTeams()
  const handleSectionClick = (section) => {
 
    setActiveSection(section);
    fetchData(section)
  };
  return (
    <div className="">
      {/* Dashboard Heading */}
      {/* Events Section */}
      <div className="w-full bg-white shadow-md rounded-lg ">
        <div className="w-full flex justify-between items-center  p-6 pb-5">
          {/* Table Title */}
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold">Team</h2>
            
          </div>
          <div className="flex justify-end flex-1  items-center space-x-4 ">
            <div className="relative w-[55%] mx-2">
              <CiSearch className="absolute  top-3 left-3" />
              <input
                type="text"
                className="px-8 py-2 border w-full rounded-full text-sm border-gray-300"
                placeholder="Search"
              />
            </div>
          </div>
          {selectedItems.length >= 2 && <MdDelete size={26} />}
          <div className="flex max-lg:flex-col gap-2">
            <button className="bg-white text-nowrap font-semibold border shadow-md text-black py-2 px-4 rounded-md mr-2">
              Download all
            </button>
            <button onClick={()=>setActiveComponent("Add Teams")} className="bg-[#4B0082]  shadow-md font-semibold flex justify-center items-center gap-1  text-white py-2 px-4 rounded-md">
              <LuUploadCloud size={18} className="" />
              <span>Create</span>
            </button>
          </div>
        </div>
        <div className="flex border-b border-gray-200 mb-4">
        {sections.map((section) => (
          <div
            key={section.name}
            className={`px-5 max-sm:px-2 py-2 max-sm:text-xs rounded-t-lg cursor-pointer ${
              activeSection === section.name
                ? 'text-white bg-purple-900'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => handleSectionClick(section.name)}
          >
            <button>{section.name===''?'All':section.name}</button>
            <sup className={`ml-2 px-2 rounded-full ${
              activeSection === section.name
                ? 'bg-white text-black '
                : 'hidden'
            }`}>
              {dataList.length}
            </sup>
          </div>
        ))}
      </div>
      <div className="overflow-x-scroll rounded-b-2xl">
      <table className="min-w-full bg-white border overflow-x-scroll border-gray-300 ">
            <thead className="border-b bg-gray-200 border-gray-200 h-16  ">
              <tr className="text-left border-b bg-gray-100 border-gray-200 h-16">
                <th className="p-2 px-4 font-medium text-sm text-gray-200">
                  <input
                    type="checkbox"
                    className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Name & photo
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Category
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Mobile Number
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Email address
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Self Address
                </th>
                <th className="py-3 px-4 text-left font-medium text-sm text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {dataList?.map((contact, index) => (
                <tr key={index} className="border-b h-16 hover:bg-gray-50 ">
                  <td className="p-2 px-4 font-medium text-sm text-gray-600">
                    <input
                      type="checkbox"
                      className="checked:bg-purple-500 checked:border-purple-500 size-4 bg-col"
                      checked={selectedItems.includes(index)}
                      onChange={() => handleSelectItem(index)}
                    />
                  </td>
                  <td className="py-3 px-4 font-medium items-center  flex gap-x-2">
                    <img src="/public/user.png" className="w-5 rounded-full" />{" "}
                    {contact.name}
                  </td>
                  <td className="py-3 px-4 text-gray-500 text-sm">
                    {contact.category}
                  </td>
                  <td className="py-3 px-4 text-gray-500 ">{contact.mobileNumber}</td>
                  <td className="py-3 px-4 text-gray-500 ">{contact.email}</td>
                  <td className="py-3 px-4 text-gray-500 text-sm">
                    {contact.selfAddress}
                  </td>
                  <td className="p-2 flex font-medium text-center w-full text-sm justify-around h-16 items-center  text-gray-600 cursor-pointer">
                  <RiDeleteBin6Line  onClick={()=>deleteMember(contact.id)}/>
                  <FiEdit2 onClick={()=>{
                    setActiveComponent("Update Missions")
                   
                  }}/>
                </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
         
        </div>
      </div>
      <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
      {/* Table Section */}
    </div>
  );
};

export default OurTeams;
