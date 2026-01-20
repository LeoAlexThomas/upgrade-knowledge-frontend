import { filter } from "lodash";
import React, { createContext, useContext, useState } from "react";

const TutorFilterContext = createContext();

export const SearchTutorFiltersProvider = ({ children }) => {
  const [subjects, setSubjects] = useState([]);
  const [ratings, setRatings] = useState(null);
  const [availability, setAvailability] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: null, max: null });

  const updateSubjects = (newSubjects) => {
    setSubjects(newSubjects);
  };
  const updateRatings = (ratings) => {
    setRatings(ratings);
  };
  const updateAvailability = (availability) => {
    console.log(availability);
    setAvailability(new Date(availability));
  };
  const updatePriceRange = (range) => {
    setPriceRange(range);
  };

  const clearFilters = () => {
    setSubjects([]);
    setRatings(null);
    setAvailability(null);
    setPriceRange({ min: null, max: null });
  };

  return (
    <TutorFilterContext.Provider
      value={{
        subjects,
        updateSubjects,
        ratings,
        updateRatings,
        availability,
        updateAvailability,
        priceRange,
        updatePriceRange,
        clearFilters,
      }}
    >
      {children}
    </TutorFilterContext.Provider>
  );
};

export const useSearchTutorFiltersContext = () => {
  return useContext(TutorFilterContext);
};
