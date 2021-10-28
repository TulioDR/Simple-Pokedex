import { useHistory } from "react-router-dom";

export default function NavBackBtn() {
   const history = useHistory();
   const goBack = () => history.goBack();

   return (
      <div
         onClick={goBack}
         className="text-white absolute right-6 sm:right-0 top-3 h-8 flex items-center cursor-pointer"
      >
         Go Back
      </div>
   );
}
