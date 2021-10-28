import { useHistory, useLocation } from "react-router";

export default function Option({
   text,
   type,
   selectedOption,
   setSelectedOption,
   setOpen,
}) {
   const history = useHistory();
   const location = useLocation();

   const change = () => {
      setSelectedOption(text);
      setOpen(false);
      const query = new URLSearchParams(location.search);
      query.set("order", type);
      history.push({ search: query.toString() });
   };
   return (
      <li
         onClick={change}
         className={`h-10 pl-4 flex items-center hover:bg-gray-dark first:pointer-events-none first:border-b-2 first:border-gray-dark ${
            selectedOption === text
               ? "bg-gray-dark pointer-events-none first:bg-transparent"
               : "cursor-pointer"
         }`}
      >
         {text}
      </li>
   );
}
