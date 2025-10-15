import { Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="px-4 py-6 mb-5 bg-white rounded-md shadow-sm">
        <h3 className="mb-4 text-xl font-black text-rose-400">ติดต่อ</h3>
        <p className="mb-4 text-gray-600">สนใจร่วมงานหรือมีข้อสงสัย? ติดต่อผมได้ที่</p>
        <div className="flex flex-col gap-2">
            <a href="mailto:panitthapwon@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-rose-400">
                <Mail size={20} /> panitthapwon@gmail.com
            </a>
            <a href="https://github.com/owariz/" className="flex items-center gap-2 text-gray-600 hover:text-rose-400">
                <Github size={20} /> github.com/owariz
            </a>
        </div>
    </div>
  )
}
