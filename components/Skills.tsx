// import { useState, useEffect } from 'react';
import { Code2, Database, Layout, Terminal } from 'lucide-react';

export default function SkillsSection() {
//   const [githubStats, setGithubStats] = useState({
//     languages: [],
//     loading: true,
//     error: null
//   });

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

  // Color mapping for languages
//   const languageColors = {
//     JavaScript: '#f1e05a',
//     TypeScript: '#2b7489',
//     PHP: '#4F5D95',
//     Python: '#3572A5',
//     HTML: '#e34c26',
//     CSS: '#563d7c',
//     Java: '#b07219'
//   };

//   useEffect(() => {
//     async function fetchGitHubStats() {
//       try {
//         setGithubStats(prev => ({ ...prev, loading: true }));
//         const response = await fetch('https://api.github.com/users/[username]/repos');
//         if (!response.ok) {
//           throw new Error('Failed to fetch GitHub data');
//         }
//         const repos = await response.json();
        
//         // Fetch languages for each repo
//         const languagePromises = repos.map(repo => 
//           fetch(repo.languages_url).then(res => res.json())
//         );
//         const languagesData = await Promise.all(languagePromises);
        
//         // Combine and calculate percentages
//         const languageTotals = languagesData.reduce((acc, languages) => {
//           Object.entries(languages).forEach(([lang, bytes]) => {
//             acc[lang] = (acc[lang] || 0) + bytes;
//           });
//           return acc;
//         }, {});
        
//         const totalBytes = Object.values(languageTotals).reduce((a, b) => a + b, 0);
        
//         const languagePercentages = Object.entries(languageTotals)
//           .map(([name, bytes]) => ({
//             name,
//             percentage: Math.round((bytes / totalBytes) * 100),
//             color: languageColors[name] || '#ccc',
//             level: bytes > totalBytes / 3 ? 'Advanced' : 
//                    bytes > totalBytes / 6 ? 'Intermediate' : 'Beginner'
//           }))
//           .sort((a, b) => b.percentage - a.percentage)
//           .slice(0, 5);  // Top 5 languages

//         setGithubStats({
//           languages: languagePercentages,
//           loading: false,
//           error: null
//         });
//       } catch (error) {
//         setGithubStats({
//           languages: [],
//           loading: false,
//           error: 'Failed to load GitHub stats'
//         });
//       }
//     }

//     fetchGitHubStats();
//   }, []);

//   if (githubStats.loading) {
//     return (
//       <div className="bg-white rounded-md shadow-md py-6 px-4 mb-5">
//         <h3 className="font-black text-2xl text-rose-500 mb-6 flex items-center">
//           <Code2 className="mr-2" />
//           กำลังโหลดข้อมูล...
//         </h3>
//       </div>
//     );
//   }

//   if (githubStats.error) {
//     return (
//       <div className="bg-white rounded-md shadow-md py-6 px-4 mb-5">
//         <h3 className="font-black text-2xl text-rose-500 mb-6 flex items-center">
//           <Code2 className="mr-2" />
//           ไม่สามารถโหลดข้อมูลได้
//         </h3>
//       </div>
//     );
//   }

  return (
    <div className="bg-white rounded-md shadow-md py-6 px-4 mb-5">
      <h3 className="font-black text-xl text-rose-400 mb-4 flex items-center">
        <Code2 className="mr-2" />
        ทักษะและความเชี่ยวชาญ
      </h3>
      
      {/* GitHub Language Stats */}
      {/* <div className="mb-8">
        <h4 className="font-bold text-lg mb-4 text-gray-700">สถิติภาษาโปรแกรมมิ่งจาก GitHub</h4>
        <div className="space-y-4">
          {githubStats.languages.map((lang) => (
            <div key={lang.name}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700 font-medium">{lang.name}</span>
                <span className="text-gray-500">{lang.level} ({lang.percentage}%)</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}

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
  );
}