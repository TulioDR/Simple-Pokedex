import SyncLoader from "react-spinners/SyncLoader";

export default function Loading() {
   return (
      <section className="flex justify-center mt-10 h-14">
         <SyncLoader color={"#313131"} loading={true} size={30} />
      </section>
   );
}
