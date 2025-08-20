import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center  text-black p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">404 | Page Not Found</h1>
      <p className="mb-6 text-xl text-gray-600">Sorry, the page you are looking for doesn’t exist.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-start-button hover:scale-105 text-black font-bold rounded-lg shadow-lg transition"
      >
        Return Home
      </Link>
    </div>
  )
}