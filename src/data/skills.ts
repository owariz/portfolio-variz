import { Code2, Database, Layout, Terminal } from 'lucide-react';

export const skillCategories = [
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
