export interface CalculationMethod {
  name: string;
  definition: string;
  href: string;
  child: Array<MethodChild>;
}

export interface MethodChild {
  childName: string;
  childDefinition: string;
  href: string;
}

export const routeTable: Array<CalculationMethod> = [
  {
    name: "Metode Tertutup",
    definition:
      "Metode tertutup disebut juga metode bracketing. Disebut sebagai metode tertutup karena dalam pencarian akar-akar persamaan non-linier dilakukan dalam suatu selang.",
    href: "/tertutup",
    child: [
      {
        childName: "Metode Bagi Dua",
        childDefinition:
          "Metode biseksi merupakan salah satu metode tertutup untuk mentukan solusi akar dari persamaan non linear.",
        href: "/tertutup/bisection",
      },
      {
        childName: "Metode Regula Falsi",
        childDefinition:
          "Metode regula falsi adalah metode pencarian akar persamaan dengan memanfaatkan kemiringan dan selisih tinggi dari 2 (dua) titik batas range.",
        href: "/tertutup/regulafalsi",
      },
    ],
  },
  {
    name: "Metode Terbuka",
    definition:
      "Metode terbuka merupakan metode yang menggunakan satu atau dua tebakan awal yang tidak memerlukan rentang sejumlah nilai.",
    href: "/terbuka",
    child: [
      {
        childName: "Fixed Point",
        childDefinition: "",
        href: "/tertutup/fixedpoint",
      },
      {
        childName: "Newthon Raphson",
        childDefinition: "",
        href: "/tertutup/newtonraphson",
      },
      {
        childName: "Secant",
        childDefinition: "",
        href: "/tertutup/secant",
      },
    ],
  },
];
