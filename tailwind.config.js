module.exports = {
   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            // Pokemon Types
            normal: "#A8A77A",
            fire: "#EE8130",
            water: "#6390F0",
            electric: "#F7D02C",
            grass: "#7AC74C",
            ice: "#96D9D6",
            fighting: "#C22E28",
            poison: "#A33EA1",
            ground: "#E2BF65",
            flying: "#A98FF3",
            psychic: "#F95587",
            bug: "#A6B91A",
            rock: "#B6A136",
            ghost: "#735797",
            dragon: "#6F35FC",
            dark: "#705746",
            steel: "#B7B7CE",
            fairy: "#D685AD",
            // Buttons
            blue: {
               DEFAULT: "#30a7d7",
               dark: "#1b82b1",
            },
            orange: {
               DEFAULT: "#ee6b2f",
               dark: "#da471b",
            },
            gray: {
               dark: "#313131",
               light: "#616161",
            },
            Baby: "#CFF3DD",
            Legendary: "#159BE4",
            Mythical: "#6F4D78",
            eggGroups: {
               black: {
                  light: "#A9A9A9",
                  dark: "#000000",
               },
               blue: {
                  light: "#D1E4FF",
                  dark: "#3D8BFF",
               },
               brown: {
                  light: "#EEDD82",
                  dark: "#B8860B",
               },
               gray: {
                  light: "#D3D3D3",
                  dark: "#696969",
               },
               green: {
                  light: "#DEFFDE",
                  dark: "#228B22",
               },
               pink: {
                  light: "#FFE4E1",
                  dark: "#DB7093",
               },
               purple: {
                  light: "#C5BADB",
                  dark: "#6A5ACD",
               },
               red: {
                  light: "#FFD1D1",
                  dark: "#FF6347",
               },
               white: {
                  light: "#FFFFFF",
                  dark: "#BCBCBC",
               },
               yellow: {
                  light: "#FFFACD",
                  dark: "#e5bf00",
               },
            },
         },
      },
   },
   variants: {
      extend: {
         pointerEvents: ["first"],
         borderColor: ["first"],
         borderWidth: ["first"],
         borderStyle: ["first"],
         backgroundColor: ["first"],
      },
   },
   plugins: [],
};
