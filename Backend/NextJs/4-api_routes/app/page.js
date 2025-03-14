"use client"

export default function Home() {
  const handleClick = async () => {
    let data = {
      name: "Abhishek Tyagi",
      role: "Full Stack Developer",
      company: "Google",
      salary: 100000
    }
    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let res = await a.json()
    console.log(res)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-200 mb-4">Next.js API Routes Demo</h1>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
