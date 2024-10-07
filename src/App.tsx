import { Github, Mail } from 'lucide-react';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

export default function App() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vue', level: 50 },
        { name: 'Svelte', level: 50 },
        { name: 'Next.js', level: 85 },
        { name: 'Nuxt.js', level: 60 },
        { name: 'SvelteKit', level: 20 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Bootstrap', level: 100 }
      ]
    },
    {
      title: 'Backend',
      icon: Terminal,
      skills: [
        { name: 'C#Dotnet', level: 5 },
        { name: 'Go', level: 10 },
        { name: 'PHP', level: 95 },
        { name: 'Python', level: 50 },
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 80 }
      ]
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MySQL', level: 85 }
      ]
    },
    {
      title: 'อื่นๆ',
      icon: Code2,
      skills: [
        { name: 'Git', level: 60 },
        { name: 'Docker', level: 40 },
        { name: 'Firebase', level: 80 },
        { name: 'Ubuntu', level: 10 }
      ]
    }
  ];

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
              <p className="text-gray-600 mb-4">Full Stack Developer | Software Engineer | FullTech(CTO)</p>
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
            <div className="bg-white rounded-md shadow-md py-6 px-4 mb-5">
          <h3 className="font-black text-xl text-rose-400 mb-4 flex items-center">
            <Code2 className="mr-2" />
            ทักษะและความเชี่ยวชาญ
          </h3>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="bg-gray-50 p-4 rounded-md border border-gray-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-lg mb-4 text-gray-600 flex items-center">
                    <Icon className="mr-2 text-rose-500" />
                    {category.title}
                  </h4>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-600">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-rose-400 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projects */}
        <div className="bg-white rounded-md shadow-sm py-6 px-4 mb-5">
            <h3 className="font-black text-xl text-rose-400 mb-4">ผลงาน</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-md overflow-hidden">
                    <img src="/images/pmtech-report.png" alt="Project 1" className="w-full" />
                    <div className="p-4">
                    <h4 className="font-bold mb-2">Report Platform</h4>
                    <p className="text-gray-600 mb-2">เว็บไซต์สำหรับการบันทึกคะแนนพฤติกรรมนักศึกษา พัฒนาด้วย Next.js และ MongoDB</p>
                    {/* <a href="#" className="text-rose-400 hover:underline">ดูรายละเอียด</a> */}
                    </div>
                </div>
            </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-md shadow-sm py-6 px-4 mb-5">
            <h3 className="font-black text-xl text-rose-400 mb-4">ติดต่อ</h3>
            <p className="text-gray-600 mb-4">สนใจร่วมงานหรือมีข้อสงสัย? ติดต่อผมได้ที่</p>
            <div className="flex flex-col gap-2">
                <a href="mailto:panitthapwon@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-rose-400">
                    <Mail size={20} /> panitthapwon@gmail.com
                </a>
                <a href="https://github.com/variz-h264/" className="flex items-center gap-2 text-gray-600 hover:text-rose-400">
                    <Github size={20} /> github.com/variz-h264
                </a>
            </div>
        </div>

        {/* Footer */}
        <div className="text-center py-4 text-gray-500">
          <p>© 2024 variz. All rights reserved.</p>
        </div>
      </div>
    </div>
    </>
  )
}