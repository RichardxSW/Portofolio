"use client";

import { useState, useEffect } from 'react'
import {Linkedin, Phone, Instagram, Mail } from "lucide-react"
import Link from "next/link"
import skillsData from "./data/skillsData.js"
import projectsData from "./data/projectsData.js"
import certificates from "./data/certificationsData.js";

// Tipe props untuk komponen HamburgerMenu
interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  activeSection: string;
}

// HamburgerMenu Component
function HamburgerMenu({ isOpen, toggleMenu, activeSection }:HamburgerMenuProps) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-1/3 bg-black bg-opacity-90 text-white z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={toggleMenu}
        className="text-white text-2xl absolute top-3 right-5"
      >
        ✕
      </button>
      <div className="flex flex-col items-center mt-20 space-y-8">
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            className={`text-lg ${
              activeSection === item ? "text-yellow-300 font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ColorfulPortfolio() {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for hamburger menu


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-500 to-teal-400 text-white">
      <header className="bg-black bg-opacity-50 fixed w-full z-50 top-0">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
              Portofolio
            </div>
            
            {/* Menu Links */}
            <div className="hidden md:flex">
              {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item}`} 
                  className={`text-lg px-4 hover:text-yellow-300 transition duration-300 ${activeSection === item ? 'text-yellow-300 font-bold' : ''}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>

            {/* Hamburger button for mobile */}
          <div className="lg:hidden">
          {!isMenuOpen && (
            <button onClick={toggleMenu} className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}

          </div>
        </nav>
      </header>

      {/* Separate Hamburger Menu for mobile */}
      <HamburgerMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        activeSection={activeSection}
      />

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-gradient-x"></div>
          </div>
          <div className="text-center relative z-10">
            <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">Richard Souwiko</h1>
            <p className="text-3xl mb-8 animate-fade-in-up">Programming Enthusiast</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.canva.com/design/DAGUdx070OM/X1jfpa26vouGWQuGKAXoug/view" className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-700 transition duration-300 transform hover:scale-105">
                Lihat CV
              </a>
              <a href="https://github.com/RichardxSW" className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition duration-300 transform hover:scale-105">
                Lihat Github
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex justify-center items-center py-20 bg-black bg-opacity-50 backdrop-blur-md">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Tentang Saya</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="/img/Foto_Profil.jpeg?height=300&width=300" alt="Pict" className="rounded-full mx-auto border-4 border-yellow-400 shadow-lg transform hover:scale-105 transition duration-300" width={300} height={300} />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg leading-relaxed">
                  Saya adalah mahasiswa jurusan Teknik Informatika di Universitas Tarumanegara dengan minat yang sangat besar di bidang pemrograman,
                  khususnya dalam pengembangan backend.
                  Saya adalah orang yang antusias, berorientasi pada detail dan memiliki kemampuan pemecahan masalah yang baik. 
                  Saya bisa bekerja sama dengan baik dalam tim, dengan komitmen untuk terus belajar dan beradaptasi dengan lingkungan. 
                  Saya selalu berusaha memberikan solusi yang kreatif dan fungsional dalam setiap proyek yang saya kerjakan. 
                  Saya juga bisa mengatur waktu dalam bekerja untuk mencapai hasil yang maksimal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen flex justify-center items-center py-20 bg-gradient-to-r from-purple-800 to-indigo-800">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Keterampilan Saya</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-8 gap-3">
              {skillsData.map((skill) => (
                <div key={skill.name} className="bg-white bg-opacity-10 p-4 rounded-xl shadow-lg text-center hover:shadow-2xl transition duration-300 transform hover:scale-105">
                  <div className="flex flex-col items-center">
                <skill.icon className={`w-8 h-8 mb-3 ${skill.color}`} />
                <h3 className={`text-lg font-medium ${skill.color}`}>
                  {skill.name}
                </h3>
                    {/* <h3 className="text-md font-semibold mt-2">{skill.name}</h3> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex justify-center items-center py-20 bg-gradient-to-r from-blue-800 to-purple-800">
          <section className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Projek Saya
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                {projectsData.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-96">
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                        }}
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex justify-center items-center mb-4">
                        <project.icon className={`w-8 h-8 mr-3 ${project.color}`} />
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                    </div>
                      <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                     <Link href={project.link} passHref
                        className={`inline-flex items-center justify-center group text-yellow-400 hover:text-yellow-300 transition-colors mt-auto`}>
                        Ke Github
                        <div className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* Certifications Section */}
        <section id="certificates" className="min-h-screen flex justify-center items-center py-20 bg-gradient-to-r from-violet-800 to-blue-800">
          <section className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Sertifikat
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificates.map((certificate, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative h-96">
                  <img 
                  src={certificate.image} 
                  alt={certificate.title}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }} 
                  className="object-contain" />
                </div>
                <div className="p-10">
                  <div className="gap-2 mb-4">
                    <div className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-lg font-bold text-white">{certificate.title}</h3>
                  </div>
                  <div className="text-gray-300 space-y-2">
                    <p>{certificate.organization}</p>
                    <p>Diterbitkan: {certificate.date}</p>
                    <p className="text-sm">Credential ID: {certificate.credential}</p>
                    <Link href={certificate.link} passHref
                        className={`inline-flex items-center justify-center group text-yellow-400 hover:text-yellow-300 transition-colors mt-auto`}>
                        Lihat Sertifikat
                        <div className="ml-2 w-4 h-4" />
                      </Link>
                  </div>
                </div>
              </div>
            ))}
              </div>
            </div>
          </section>
        </section>


        <section id="contact" className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-gradient-xy"></div>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">Kontak Saya</h2>

            <div className="flex justify-center space-x-6">
              <a href="https://wa.me/6285779635119" className="hover:text-yellow-400 transition duration-300 transform hover:scale-110" aria-label="Email">
                <Phone size={40} />
              </a>
              <a href="https://www.instagram.com/richardxsw/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300 transform hover:scale-110" aria-label="CV">
                <Instagram size={40} />
              </a>
              <a href="https://linkedin.com/in/richardxsw" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300 transform hover:scale-110" aria-label="LinkedIn">
                <Linkedin size={40} />
              </a>
              <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=richard.s050804@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300 transform hover:scale-110" aria-label="GitHub">
                <Mail size={40} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 backdrop-blur-md text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Richard Souwiko. Semua hak cipta dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}