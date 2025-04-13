import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <main className="flex flex-col items-center justify-center w-full max-w-md gap-6 text-center">
        <h1 className="text-4xl font-bold">Acerca de</h1>
        <p className="text-xl text-gray-600">
          Esta es una página de ejemplo para mostrar la navegación básica en Next.js
        </p>
        <Link href="/">
          <Button>Volver al inicio</Button>
        </Link>
      </main>
    </div>
  )
}
