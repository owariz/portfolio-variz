import { Github, Mail } from 'lucide-react';
import SkillsSection from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function App() {
  return (
    <>
    <div className="container max-w-3xl mx-auto ">
      <div className="px-4 md:px-0 pt-5 md:pt-10">
        {/* Navbar */}
        <div className="bg-white rounded-md shadow-sm py-2 px-4 mb-5">
          <div className="flex flex-row justify-between items-center">
            <h3 className="font-black text-xl text-rose-400">Variz</h3>
            <p className="font-bold text-1xl text-gray-400">Portfolio website</p>
          </div>
        </div>
        {/* End Navbar */}

        {/* Hero Section */}
        <div className="bg-white rounded-md shadow-sm py-6 px-4 mb-5">
          <div className="flex flex-col md:flex-row items-center gap-6">
          <img 
              src="/images/profile.jpg" 
              alt="Profile" 
              className="rounded-full w-36 h-36 object-cover bg-black"
              loading="lazy"
            />
            <div>
              <h1 className="text-3xl font-bold mb-2">พาณิชย์ ทัพวร</h1>
              <p className="text-gray-600 mb-4">Full Stack Developer | UI/UX Enthusiast | FullTech(CTO)</p>
              <div className="flex gap-4">
                <a href="https://github.com/variz-h264/" className="text-gray-600 hover:text-rose-400"><Github /></a>
                <a href="mailto:panitthapwon@gmail.com" className="text-gray-600 hover:text-rose-400"><Mail /></a>
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="bg-white rounded-md shadow-sm py-6 px-4 mb-5">
          <h3 className="font-black text-xl text-rose-400 mb-4">เกี่ยวกับฉัน</h3>
          <p className="text-gray-600 mb-4">
            สวัสดีครับ! ผมเป็นนักพัฒนา Full Stack ที่มีความหลงใหลในการสร้างแอปพลิเคชันที่สวยงามและใช้งานง่าย 
            มีประสบการณ์ในการพัฒนาเว็บไซต์มากกว่า 5 ปี โดยเชี่ยวชาญใน React, Node.js, PHP, Python และ UI/UX Design
            และในปัจจุบันนี้ผมทำงานกับ FullTect เป็นองค์กรที่ตัวผมกับเพื่อนๆได้ร่วมกันก่อตั้ง
          </p>
        </div>

        {/* Skills */}
        <SkillsSection />

        {/* Projects */}
        <Projects />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <div className="text-center py-4 text-gray-500">
          <p>© 2024 variz. All rights reserved.</p>
        </div>
      </div>
    </div>
    </>
  )
}