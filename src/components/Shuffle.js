export default function Shuffle({ randomize, setSelectedOption }) {
   const dispatch = () => {
      randomize();
      setSelectedOption("Sort results by...");
   };
   return (
      <div
         className="w-full h-10 rounded-md cursor-pointer flex justify-center items-center bg-blue hover:bg-blue-dark"
         onClick={dispatch}
      >
         <i className="fas fa-random mr-2 text-lg"></i>
         <span>Surprise Me!</span>
      </div>
   );
}
