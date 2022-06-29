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
        childDefinition:
          "Metode iterasi titik tetap merupakan metode penyelesaian persamaan non-linier dengan cara menyelesaikan setiap variabel x yang ada dalam suatu persamaan dengan sebagian yang lain",
        href: "/terbuka/fixedpoint",
      },
      {
        childName: "Newton Raphson",
        childDefinition:
          "Metode Newton-Raphson merupakan metode penyelesaian persamaan non-linier dengan menggunakan pendekatan satu titik awal dan mendekatinya dengan memperhatikan slope atau gradien.",
        href: "/terbuka/newtonraphson",
      },
      {
        childName: "Secant",
        childDefinition:
          "Metode Secant merupakan perbaikan dari metode regula-falsi dan Newton Raphson, dimana kemiringan dua titik dinyatakan secara diskrit dengan mengambil bentuk garis lurus yang melalui satu titik.",
        href: "/terbuka/secant",
      },
    ],
  },
];
