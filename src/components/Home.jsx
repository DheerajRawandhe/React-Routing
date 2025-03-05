import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home - My Website";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full p-4 bg-blue-600 text-white text-center text-xl font-bold"></header>
      <main className="flex flex-col items-center p-8 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1><br />
        <p className="text-gray-600 mb-4">
          This is a simple homepage built with React and Tailwind CSS.
        </p>
        <br />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </main>
      <br />
      <footer className="w-full p-4 mt-6 bg-gray-800 text-white text-center">
        © 2025 My Website. All rights reserved.
      </footer>
    </div>
  );
}
