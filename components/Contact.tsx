import { Github, Mail } from 'lucide-react';

export default function Contact() {
  return (
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
  )
}
