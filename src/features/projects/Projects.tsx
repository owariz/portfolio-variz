import Section from "../../components/layout/Section";

export default function Projects() {
  return (
    <Section title="ผลงาน">
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
    </Section>
  )
}
