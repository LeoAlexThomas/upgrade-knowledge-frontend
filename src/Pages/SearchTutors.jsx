import React, { Fragment } from "react";
import TutorCard from "../Components/TutorCard";
import { myTutors, subjectsList } from "../Utils/common";
import { useSearchTutorFiltersContext } from "../Context/SearchTutorFiltersContext";
import SelectField from "../Components/FormComponents/SelectField";
import { MultiSelect } from "react-multi-select-component";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { isNil } from "lodash";
import { Input, Select } from "@headlessui/react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const SearchTutors = () => {
  const { filters } = useSearchTutorFiltersContext();
  console.log("Filters in SearchTutors page:", filters);
  return (
    <div className="w-full max-w-360 mx-auto px-4 py-2 my-8">
      {/* Implement pagination */}
      <div className="grid grid-cols-15 gap-4">
        <main className="col-span-12">
          <h2 className="font-Title text-2xl font-bold mt-2 mb-8">Tutors</h2>
          <div className="flex flex-wrap gap-4 justify-center ">
            {[...myTutors, ...myTutors, ...myTutors].map((tutor, index) => {
              return (
                <Fragment key={`${tutor._id}-${index}`}>
                  <TutorCard tutor={tutor} />
                </Fragment>
              );
            })}
          </div>
        </main>
        <aside className="col-span-3">
          <TutorFilter />
        </aside>
      </div>
    </div>
  );
};

const TutorFilter = () => {
  const {
    subjects,
    updateSubjects,
    availability,
    updateAvailability,
    ratings,
    updateRatings,
    priceRange,
    updatePriceRange,
  } = useSearchTutorFiltersContext();

  return (
    <div className="flex flex-col gap-3 p-4 w-full mb-4 shadow-2xl rounded-2xl">
      <h3 className="font-Title text-xl font-bold mb-2">Filters</h3>
      <div>
        <h3 className="font-Title text-lg font-medium mb-1">Subjects</h3>
        <MultiSelect
          options={subjectsList.map((sub) => ({ label: sub, value: sub }))}
          value={subjects.map((sub) => ({ label: sub, value: sub }))}
          onChange={(values) => {
            updateSubjects(values.map((sub) => sub.value));
          }}
          labelledBy="Subjects"
          hasSelectAll={false}
          overrideStrings={{
            selectSomeItems: "Select Subjects",
            search: "Search Subjects",
          }}
          className="max-w-56"
        />
      </div>
      <div>
        <h3 className="font-Title text-lg font-medium mb-1">Ratings</h3>
        <div className="relative">
          <Select
            value={ratings ?? 0}
            onChange={(e) => updateRatings(e.target.value)}
            label="Rating"
            placeholder="Select Rating"
            className="w-full max-w-56 border rounded-md border-gray-300 bg-white appearance-none p-2 pr-12 "
          >
            <option value={0}>All Ratings</option>
            <option value={5}>5 Stars</option>
            <option value={4}>4 Stars & above</option>
            <option value={3}>3 Stars & above</option>
            <option value={2}>2 Stars & above</option>
            <option value={1}>1 Star & above</option>
          </Select>
          <i className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div>
        <h3 className="font-Title text-lg font-medium mb-1">Available Date</h3>
        <Input
          type="date"
          className="w-full max-w-56 border rounded-lg p-2"
          value={
            availability?.toISOString().split("T")[0] ??
            `${new Date().toISOString().split("T")[0]}`
          }
          name="availability"
          id="availability"
          onChange={(e) => updateAvailability(e.target.value)}
        />
      </div>
      <div>
        <h3 className="font-Title text-lg font-medium mb-1">Price Range</h3>
        <RangeSlider
          min={100}
          max={10000}
          defaultValue={[0, 10000]}
          value={[priceRange.min, priceRange.max]}
          onInput={(value) => {
            updatePriceRange({ min: value[0], max: value[1] });
          }}
        />
      </div>
    </div>
  );
};

export default SearchTutors;
