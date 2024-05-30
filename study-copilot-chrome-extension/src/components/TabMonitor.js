import React, { useState, useEffect } from 'react';
import { checkTab } from '../../utils/userBehavior';

const TabMonitor = ({ studyTarget, notifyUser }) => {
  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    const handleTabChange = () => {
      chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.url) {
          setCurrentTab(changeInfo.url);
          checkTab(changeInfo.url, studyTarget, notifyUser);
        }
      });
    };

    handleTabChange();

    return () => {
      chrome.tabs.onUpdated.removeListener(handleTabChange);
    };
  }, [studyTarget, notifyUser]);

  return null;
};

export default TabMonitor;