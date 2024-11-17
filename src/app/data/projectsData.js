// src/data/projectsData.js
import { AppleIcon, UtensilsIcon, TicketIcon, Wallet2Icon, CarIcon } from "lucide-react";

const projectsData = [
  {
    title: "ZEST",
    description: "Sebuah aplikasi web yang dirancang untuk mengelola inventaris stok buah. \
                  Website ini dibuat menggunakan framework Laravel dan template engine Blade dengan database PostgreSQL, \
                  dan dilengkapi dengan otentikasi menggunakan Laravel UI. Website ini juga dilengkapi dengan RESTful API untuk pengelolaan stok buah",
    icon: AppleIcon,
    color: "text-red-500",
    link: "https://github.com/RichardxSW/Zest",
    image: "/img/zest.png",
  },
  {
    title: "MPL-TICKETING",
    description: "Sebuah aplikasi web yang dirancang untuk membeli tiket untuk menonton pertandingan MPL secara online. \
                  Website ini dibuat menggunakan NextJS dan Golang dengan database nya Supabase, \
                  dan dilengkapi dengan payment gateway MidTrans. (On Progress)",
    icon: TicketIcon,
    color: "text-red-600",
    link: "https://github.com/RichardxSW/MPL-Ticketing",
    image: "/img/mpl.png",
  },
  {
    title: "FLAVORA",
    description: "Sebuah website yang dirancang sebagai katalog resep - resep makanan. \
                  Dibangun menggunakan HTML, CSS, JavaScript untuk Front-End nya, NodeJS dan EsxpressJS untuk Back-End nya dan juga database nya menggunakan MongoDB. \
                  Website ini juga dilengkapi dengan otentikasi menggunakan PassportJS dan Google Login.",
    icon: UtensilsIcon,
    color: "text-yellow-400",
    link: "https://github.com/RichardxSW/Flavora",
    image: "/img/flavora.png",
  },
  {
    title: "SEABREW",
    description: "Aplikasi mobile yang memungkinkan pengguna untuk membeli tiket untuk menonton show di tempat hiburan aquarium dan membeli minuman kopi SB Coffee. \
                  Dilengkapi dengan bundle dan poin yang bisa ditukarkan dengan merchandise. Dibangun dengan React Native dan Firebase.",
    icon: TicketIcon,
    color: "text-blue-400",
    link: "https://github.com/RichardxSW/SeaBrew",
    image: "/img/seabrew.png",
  },
  {
    title: "DOOID",
    description: "Aplikasi mobile yang dibuat sebagai simulasi E-Money memungkinkan pengguna untuk melakukan transfer, menabung, bayar lewat qr code, dan ada offers menarik.\
                  Dilengkapi dengan fitur history, dan manage profile. Dibangun dengan Flutter.",
    icon: Wallet2Icon,
    color: "text-red-400",
    link: "https://github.com/RichardxSW/dooid",
    image: "/img/dooid.png",
  },
  {
    title: "SHOWROOM MOBIL",
    description: "Aplikasi mobile yang dirancang sebagai showroom mobil memungkinkan pengguna untuk melihat tipe - tipe mobil beserta harganya .\
                  Dibuat menggunakan HTML, CSS, Javascript dan juga AngularJS.",
    icon: CarIcon,
    color: "text-gray-400",
    link: "https://github.com/RichardxSW/UAS-Front-End",
    image: "/img/uasfe.png",
  },
];

export default projectsData;
