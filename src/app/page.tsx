'use client'

import { useState, useEffect } from 'react'
import { Linkedin, Phone, Instagram, Mail } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion } from 'framer-motion'
import skillsData from "./data/skillsData.js"
import projectsData from "./data/projectsData.js"
import certificates from "./data/certificationsData.js"

interface HamburgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  activeSection: string;
}

function HamburgerMenu({ isOpen, toggleMenu, activeSection }: HamburgerMenuProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-50"
    >
      <button
        onClick={toggleMenu}
        className="text-white text-2xl absolute top-3 right-5"
      >
        ✕
      </button>
      <div className="flex flex-col items-center mt-20 space-y-8">
        {["home", "about", "skills", "projects", "certificates", "contact"].map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            className={`text-lg ${
              activeSection === item ? "text-blue-400 font-bold" : ""
            }`}
            onClick={toggleMenu}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default function ProfessionalPortfolio() {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'contact']
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
    <div className="min-h-screen bg-gray-800 text-gray-800">
      <header className="bg-gray-100 bg-opacity-50 shadow-md fixed w-full z-50 top-0">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            Portofolio
          </div>
          
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'skills', 'projects', 'certificates', 'contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item}`} 
                className={`text-lg hover:text-blue-600 transition duration-300 ${activeSection === item ? 'text-blue-600 font-bold' : ''}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            {!isMenuOpen && (
              <button onClick={toggleMenu} className="text-gray-800">
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

      <HamburgerMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        activeSection={activeSection}
      />

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gray-800">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4 text-gray-50">Richard Souwiko</h1>
            <p className="text-2xl mb-8 text-gray-100">Programming Enthusiast</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.canva.com/design/DAGUdx070OM/X1jfpa26vouGWQuGKAXoug/view" className="bg-blue-950 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition duration-300">
                View CV
              </a>
              <a href="https://github.com/RichardxSW" className="bg-gray-950 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition duration-300">
                GitHub Profile
              </a>
            </div>
          </motion.div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gray-600">
          <div className="container mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-center text-gray-100"
            >
              About Me
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-1/3 mb-8 md:mb-0"
              >
                <Image src="/img/Foto_Profil_Blue.png" alt="Profile Picture" width={300} height={300} className="rounded-full mx-auto shadow-lg" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:w-2/3 md:pl-8"
              >
                <p className="text-lg leading-relaxed text-gray-50">
                Saya adalah mahasiswa jurusan Teknik Informatika di Universitas Tarumanegara dengan minat yang sangat besar di bidang pemrograman, 
                khususnya dalam pengembangan backend. Saya adalah orang yang antusias, berorientasi pada detail dan memiliki kemampuan pemecahan masalah yang baik. 
                Saya bisa bekerja sama dengan baik dalam tim, dengan komitmen untuk terus belajar dan beradaptasi dengan lingkungan. 
                Saya selalu berusaha memberikan solusi yang kreatif dan fungsional dalam setiap proyek yang saya kerjakan. 
                Saya juga bisa mengatur waktu dalam bekerja untuk mencapai hasil yang maksimal.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen py-20 bg-gray-750">
          <div className="container mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-center text-gray-100"
            >
              Tech Stacks
            </motion.h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skillsData.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300"
                >
                  <div className="flex flex-col items-center">
                    <skill.icon className={`w-8 h-8 mb-3 ${skill.color}`} />
                    <h3 className={`text-sm font-medium text-gray-800`}>
                      {skill.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen py-20 bg-gray-600">
          <div className="container mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-center text-gray-100"
            >
              My Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-96">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="contain"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <project.icon className={`w-6 h-6 mr-3 ${project.color}`} />
                      <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Link href={project.link} passHref
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View on GitHub
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 text-center text-gray-100"
            >
              Certificates
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((certificate, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-96">
                    <Image 
                      src={certificate.image} 
                      alt={certificate.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{certificate.title}</h3>
                    <p className="text-gray-600">{certificate.organization}</p>
                    <p className="text-gray-500 text-sm mb-4">Issued: {certificate.date}</p>
                    <p className="text-gray-500 text-sm mb-4">Credential ID: {certificate.credential}</p>
                    <Link href={certificate.link} passHref
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View Certificate
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-700">
          <div className="container mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-gray-100"
            >
              Contact Me
            </motion.h2>
            <div className="flex justify-center space-x-6">
              <a href="https://wa.me/6285779635119" className="text-gray-100 hover:text-blue-600 transition duration-300" aria-label="WhatsApp">
                <Phone size={32} />
              </a>
              <a href="https://www.instagram.com/richardxsw/" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-blue-600 transition duration-300" aria-label="Instagram">
                <Instagram size={32} />
              </a>
              <a href="https://linkedin.com/in/richardxsw" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-blue-600 transition duration-300" aria-label="LinkedIn">
                <Linkedin size={32} />
              </a>
              <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=richard.s050804@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-blue-600 transition duration-300" aria-label="Email">
                <Mail size={32} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-950 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Richard Souwiko. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}