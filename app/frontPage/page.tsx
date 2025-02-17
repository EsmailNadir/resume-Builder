import Link from "next/link";
export default function HomePage() {
    return (
      <main className="flex items-center justify-center h-screen">
        <Link href="/">
        <button  className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
          Create your Resume!
        </button>
        </Link>
        
      </main>
    );
  }
  