import React, { useState } from "react";

export default function Tabs(props) {
  const [activeTab, setActiveTab] = useState(props.defaultTab || 0);

  function handleTabClick(tabIndex) {
    setActiveTab(tabIndex);
  }

  return (
    <div>
      <div className="bg-gray-50 px-6">
        {props.tabs.map((tab, index) => (
          <button
            className={
              index === activeTab
                ? "-mb-px border-b border-current p-4 text-cyan-500"
                : "-mb-px border-b border-transparent p-4 hover:text-cyan-500"
            }
            key={index}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="px-6 pt-4">{props.tabs[activeTab].content}</div>
    </div>
  );
}
