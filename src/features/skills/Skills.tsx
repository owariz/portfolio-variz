import { Code2 } from "lucide-react";
import Section from "../../components/layout/Section";

// Define the types for the props
interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export default function Skills({ skillCategories }: SkillsProps) {
  return (
    <Section title="ทักษะและความเชี่ยวชาญ" icon={<Code2 />}>
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
    </Section>
  );
}
