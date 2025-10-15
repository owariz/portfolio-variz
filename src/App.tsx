import { Code2, Database, Layout, Terminal, Github, Mail } from 'lucide-react';

export default function App() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Layout,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Vue', level: 40 },
        { name: 'Svelte', level: 35 },
        { name: 'Next.js', level: 90 },
        { name: 'Nuxt.js', level: 40 },
        { name: 'SvelteKit', level: 10 },
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
        { name: 'Git', level: 50 },
        { name: 'Docker', level: 30 },
        { name: 'Firebase', level: 40 },
        { name: 'Ubuntu', level: 20 },
        { name: 'Cloudflare', level: 25 },
        { name: 'Prisma', level: 65 },
      ]
    }
  ];

  return (
    <>
    <div className="container max-w-3xl mx-auto ">
      <div className="px-4 pt-5 md:px-0 md:pt-10">
        {/* Navbar */}
        <div className="px-4 py-2 mb-5 bg-white rounded-md shadow-sm">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-xl font-black text-rose-400">Variz</h3>
            <p className="font-bold text-gray-400 text-1xl">Portfolio website</p>
          </div>
        </div>
        {/* End Navbar */}

        {/* Hero Section */}
        <div className="px-4 py-6 mb-5 bg-white rounded-md shadow-sm">
          <div className="flex flex-col items-center gap-6 md:flex-row">
          <img 
              src="/images/profile.jpg" 
              alt="Profile" 
              className="object-cover bg-black rounded-full w-36 h-36"
              loading="lazy"
            />
            <div>
              <h1 className="mb-2 text-3xl font-bold">พาณิชย์ ทัพวร</h1>
              <p className="mb-4 text-gray-600">Full Stack Developer | Software Engineer | FullTech(CTO)</p>
              <div className="flex gap-4">
                <a href="https://github.com/owariz/" className="text-gray-600 hover:text-rose-400"><Github /></a>
                <a href="mailto:contact@varizz.site" className="text-gray-600 hover:text-rose-400"><Mail /></a>
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="px-4 py-6 mb-5 bg-white rounded-md shadow-sm">
              <h3 className="mb-4 text-xl font-black text-rose-400">เกี่ยวกับฉัน</h3>
              <p className="mb-4 text-gray-600">
                สวัสดีครับ! ผมเป็นนักพัฒนา Full Stack ที่มีความหลงใหลในการสร้างแอปพลิเคชันที่สวยงามและใช้งานง่าย 
                มีประสบการณ์ในการพัฒนาเว็บไซต์มากกว่า 5 ปี โดยเชี่ยวชาญใน React, Node.js, PHP, Python และ UI/UX Design
                และในปัจจุบันนี้ผมทำงานกับ FullTect เป็นองค์กรที่ตัวผมกับเพื่อนๆได้ร่วมกันก่อตั้ง
              </p>
            </div>

            {/* Skills */}
            <div className="px-4 py-6 mb-5 bg-white rounded-md shadow-md">
          <h3 className="flex items-center mb-4 text-xl font-black text-rose-400">
            <Code2 className="mr-2" />
            ทักษะและความเชี่ยวชาญ
          </h3>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="p-4 transition-shadow border border-gray-100 rounded-md bg-gray-50 hover:shadow-md">
                  <h4 className="flex items-center mb-4 text-lg font-bold text-gray-600">
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
                        <div className="h-2 overflow-hidden bg-gray-200 rounded-full">
                          <div
                            className="h-full transition-all duration-1000 ease-out bg-rose-400"
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
        <div className="px-4 py-6 mb-5 bg-white rounded-md shadow-sm">
            <h3 className="mb-4 text-xl font-black text-rose-400">ผลงาน</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="overflow-hidden border rounded-md">
                    <img src="/images/pmtech-report.png" alt="Project 1" className="w-full" />
                    <div className="p-4">
                    <h4 className="mb-2 font-bold">Report Platform</h4>
                    <p className="mb-2 text-gray-600">เว็บไซต์สำหรับการบันทึกคะแนนพฤติกรรมนักศึกษา พัฒนาด้วย Next.js และ MongoDB</p>
                    {/* <a href="#" className="text-rose-400 hover:underline">ดูรายละเอียด</a> */}
                    </div>
                </div>
            </div>
        </div>

        {/* Contact */}
        <div className="px-4 py-6 mb-5 bg-white rounded-md shadow-sm">
            <h3 className="mb-4 text-xl font-black text-rose-400">ติดต่อ</h3>
            <p className="mb-4 text-gray-600">สนใจร่วมงานหรือมีข้อสงสัย? ติดต่อผมได้ที่</p>
            <div className="flex flex-col gap-2">
                <a href="mailto:contact@varizz.site" className="flex items-center gap-2 text-gray-600 hover:text-rose-400">
                    <Mail size={20} /> contact@varizz.site
                </a>
                <a href="https://github.com/owariz/" className="flex items-center gap-2 text-gray-600 hover:text-rose-400">
                    <Github size={20} /> github.com/owariz
                </a>
            </div>
        </div>

        {/* Footer */}
        <div className="py-4 text-center text-gray-500">
          <p>© 2024 - { new Date().getFullYear() } variz.site All rights reserved.</p>
        </div>
      </div>
    </div>
    </>
  )
}