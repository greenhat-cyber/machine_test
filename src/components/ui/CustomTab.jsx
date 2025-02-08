import { useState } from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";

const CustomTab = ({ tabs, isLoading, isData}) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="flex border-b border-gray-300 overflow-x-auto scrollbar-custom pb-[1px]">
        {tabs?.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 cursor-pointer font-bold whitespace-nowrap transition-colors ease-in-out duration-300 ${activeTab === index ? "border-b-2 border-red-500 text-red-500" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {isLoading ? <Loader/> : isData === 0 ? <p>No Data</p> : tabs[activeTab]?.content}
      </div>
    </>
  );
};
CustomTab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isData: PropTypes.number.isRequired,
};

export default CustomTab;
