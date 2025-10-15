import { Github, Mail } from "lucide-react";
import Section from "../../components/layout/Section";

export default function Contact() {
  return (
    <Section title="ติดต่อ">
      <p className="mb-4 text-gray-600">สนใจร่วมงานหรือมีข้อสงสัย? ติดต่อผมได้ที่</p>
      <div className="flex flex-col gap-2">
          <a href="mailto:panitthapwon@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-rose-400">
              <Mail size={20} /> panitthapwon@gmail.com
          </a>
          <a href="https://github.com/owariz/" className="flex items-center gap-2 text-gray-600 hover:text-rose-400">
              <Github size={20} /> github.com/owariz
          </a>
      </div>
    </Section>
  )
}
