export default function Projects() {
  return (
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
  )
}
