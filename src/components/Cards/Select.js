import { useEffect, useRef, useState } from "react";
import Option from "./Option";

const options = [
   { text: "Sort results by...", type: "" },
   { text: "First to Last", type: "FIRST-LAST" },
   { text: "Last to First", type: "LAST-FIRST" },
   { text: "A-Z", type: "A-Z" },
   { text: "Z-A", type: "Z-A" },
];

export default function Select({ selected }) {
   const [selectedOption, setSelectedOption] = useState();
   useEffect(() => {
      setSelectedOption(selected);
   }, [selected]);

   const [open, setOpen] = useState(false);
   const toggle = () => setOpen(!open);
   const optionsDiv = useRef(null);
   const handleBlur = (e) => {
      if (e.relatedTarget !== optionsDiv.current) setOpen(false);
   };
   return (
      <div
         tabIndex={0}
         onBlur={handleBlur}
         className="w-full h-10 z-10 relative"
      >
         <div
            className="group h-full rounded-md bg-gray-dark flex justify-between items-center cursor-pointer"
            onClick={toggle}
            tabIndex="0"
         >
            <span className="ml-4">{selectedOption}</span>
            <div className="arrow w-10 h-full rounded-r-md flex justify-center items-center group-hover:bg-black">
               <i
                  className={`fas fa-chevron-down duration-200 text-xl ${
                     open ? "transform rotate-180" : ""
                  }`}
               ></i>
            </div>
         </div>
         {open && (
            <ul
               ref={optionsDiv}
               tabIndex={0}
               className="options-container absolute top-10 w-full rounded-md overflow-hidden bg-gray-light"
            >
               {options.map((option, index) => (
                  <Option
                     key={index}
                     text={option.text}
                     type={option.type}
                     {...{ setSelectedOption, selectedOption, setOpen }}
                  />
               ))}
            </ul>
         )}
      </div>
   );
}
