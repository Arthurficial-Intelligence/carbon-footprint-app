// components/context/SurveyContext.js or components/SurveyContext.js
import React, { createContext, useState, useContext } from 'react';

const SurveyContext = createContext();

export function useSurvey() {
  return useContext(SurveyContext);
}

export const SurveyProvider = ({ children }) => {
  const [surveyData, setSurveyData] = useState({
    name: '',
    transportation: {},
    energy: {},
    food: {},
    habits: {},
  });

  const updateSurveyData = (category, data) => {
    setSurveyData(prevData => ({
      ...prevData,
      [category]: { ...prevData[category], ...data }
    }));
  };

  return (
    <SurveyContext.Provider value={{ surveyData, updateSurveyData }}>
      {children}
    </SurveyContext.Provider>
  );
};
