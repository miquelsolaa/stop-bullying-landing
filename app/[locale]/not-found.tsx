import Link from 'next/link'
import { ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <div className="container max-w-md text-center space-y-6">
          <div className="space-y-2">
            <div className="flex justify-center">
              <Search className="h-16 w-16 text-gray-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Pàgina no trobada
            </h1>
            <p className="text-gray-600">
              La pàgina que busques no existeix o ha estat moguda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tornar a l'inici
            </Link>
            
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Veure el blog
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 