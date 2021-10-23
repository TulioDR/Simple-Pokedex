export default function Body({ children }) {
   return (
      <div
         className="sm:pt-14"
         style={{
            background: `url("/images/body_bg.png")`,
         }}
      >
         {children}
      </div>
   );
}
