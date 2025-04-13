import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <main className="flex flex-col items-center justify-center w-full max-w-md gap-6 text-center">
        <h1 className="text-4xl font-bold">Bienvenido a mi sitio (cambio local)</h1>
        <p className="text-xl text-gray-600">Este es un sitio simple creado con Next.js para pruebas</p>
        <Link href="/about">
          <Button>Acerca de</Button>
        </Link>
      </main>
    </div>
  )
}
