export default function Option({
   text,
   type,
   dispatch,
   ordered,
   selectedOption,
   setSelectedOption,
   setOpen,
}) {
   const change = () => {
      dispatch({ type: type, data: ordered });
      setSelectedOption(text);
      setOpen(false);
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
