// src/data/projectsData.js
import { AppleIcon, UtensilsIcon, TicketIcon } from "lucide-react";

const projectsData = [
  {
    title: "ZEST",
    description: "Sebuah aplikasi web yang dirancang untuk mengelola inventaris stok buah. \
                  Website ini dibuat menggunakan framework Laravel dan template engine Blade dengan database PostgreSQL, \
                  dan dilengkapi dengan otentikasi menggunakan Laravel UI. Website ini juga dilengkapi dengan RESTful API untuk pengelolaan stok buah",
    icon: AppleIcon,
    color: "text-red-500",
    link: "https://github.com/RichardxSW/Zest",
  },
  {
    title: "FLAVORA",
    description: "Sebuah website yang dirancang sebagai katalog resep - resep makanan. \
                  Dibangun menggunakan HTML, CSS, JavaScript untuk Front-End nya, NodeJS dan EsxpressJS untuk Back-End nya dan juga database nya menggunakan MongoDB. \
                  Website ini juga dilengkapi dengan otentikasi menggunakan PassportJS.",
    icon: UtensilsIcon,
    color: "text-yellow-400",
    link: "https://github.com/RichardxSW/Flavora",
  },
  {
    title: "SEABREW",
    description: "Aplikasi mobile yang memungkinkan pengguna untuk membeli tiket untuk menonton show di tempat hiburan aquarium dan membeli minuman kopi SB Coffee. \
                  Dilengkapi dengan bundle dan poin yang bisa ditukarkan dengan merchandise. Dibangun dengan React Native.",
    icon: TicketIcon,
    color: "text-blue-400",
    link: "https://github.com/RichardxSW/SeaBrew",
  },
];

export default projectsData;
