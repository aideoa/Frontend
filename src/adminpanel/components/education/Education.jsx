import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";



import Files from "./Files";
import Videos from "./Videos";

const Education = ({setActiveComponent,setVideoData,setFileData}) => {
 
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="py-4 bg-white rounded-xl lightdropshadowbox">
    <div className="flex px-4 space-x-4 mb-4 items-center">
    <div className="flex space-x-3 items-center">
          <h2 className="font-bold text-lg">Education</h2>
         
        </div>
        <div className="flex justify-end flex-1 items-center space-x-4">
          
          {selectedItems.length >= 2 && <MdDelete size={26} />}
          <div className="flex max-lg:flex-col gap-2">
            <button onClick={()=>setActiveComponent("Add Education")} className="bg-[#4B0082] text-nowrap font-semibold border shadow-md text-white py-2 px-4 rounded-md mr-2">
              Create
            </button>

          </div>
        </div>
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Course Materials" value="1" />
            <Tab label="Videos" value="2" />
         
          </TabList>
        </Box>
        <TabPanel value="1"><Files setActiveComponent={setActiveComponent} setFileData={setFileData} value={value}/></TabPanel>
        <TabPanel value="2"><Videos setVideoData={setVideoData} setActiveComponent={setActiveComponent} value={value}/></TabPanel>
      </TabContext>

  
    </div>
  );
};

export default Education;
