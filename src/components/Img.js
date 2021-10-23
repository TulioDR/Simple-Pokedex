export default function Type({ data }) {
   return (
      <img
         src={data.sprites.other["official-artwork"].front_default}
         alt={data.name}
         className="bg-gray-300 rounded-md w-full"
      />
   );
}
