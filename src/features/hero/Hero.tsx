import { Github, Mail } from 'lucide-react';

export default function Hero() {
  return (
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
  );
}
