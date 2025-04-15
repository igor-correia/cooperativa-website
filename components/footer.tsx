import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Cooperativa</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Trabalhamos juntos para construir um futuro melhor através da cooperação e sustentabilidade.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/colaboradores"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  Colaboradores
                </Link>
              </li>
              <li>
                <Link
                  href="/noticias"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link
                  href="/eventos"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  Eventos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Contato</h3>
            <address className="not-italic">
              <p className="text-gray-600 dark:text-gray-300 mb-2">R. Aprígio Veloso, 882</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">Campina Grande, PB - 58428-830</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <Mail className="h-4 w-4 inline mr-2" />
                contato@cooperativa.com.br
              </p>
              <p className="text-gray-600 dark:text-gray-300">Tel: (11) 1234-5678</p>
            </address>
          </div>

          {/* Coluna 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-600 dark:text-green-400">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Inscreva-se para receber novidades e atualizações.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Seu e-mail" className="bg-white dark:bg-gray-800" />
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Inscrever-se</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Cooperativa. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
