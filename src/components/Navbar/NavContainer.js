export default function NavContainer({ children }) {
   return (
      <nav className="bg-gray-dark sm:fixed sm:h-14 top-0 z-20 w-full">
         <div className="relative sm:flex px-6 py-3 sm:p-0 justify-between items-center mx-auto h-full w-full sm:w-4/5 xl:w-2/3">
            {children}
         </div>
      </nav>
   );
}
