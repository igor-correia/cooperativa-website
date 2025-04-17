"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, UserRound, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Serviços Disponíveis", href: "/servicos" },
  { name: "Colaboradores", href: "/colaboradores" },
  { name: "Parcerias", href: "/parcerias" },
  { name: "Notícias/Blog", href: "/noticias" },
  { name: "Eventos", href: "/eventos" },
  { name: "Contato", href: "/contato" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm" : "bg-white dark:bg-gray-900",
      )}
      style={{ height: "4rem" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-green-600 dark:text-green-400">Aliança Verde</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex space-x-1 lg:space-x-4 mr-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === item.href
                      ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                      : "text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* Botões de login e cadastro */}
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="border-green-600 text-green-600" asChild>
                <Link href="/colaboradores/login">
                  <UserRound className="h-4 w-4 mr-1" />
                  Login
                </Link>
              </Button>
              <Button size="sm" className="bg-green-600 text-white hover:bg-green-500" asChild>
                <Link href="/colaboradores/inscricao">
                  <UserPlus className="h-4 w-4 mr-1" />
                  Cadastro
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Menu de navegação">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                    pathname === item.href
                      ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20"
                      : "text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Botões de login e cadastro (mobile) */}
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 border-green-600 text-green-600" asChild>
                  <Link href="/colaboradores/login" onClick={() => setIsOpen(false)}>
                    <UserRound className="h-4 w-4 mr-1" />
                    Login
                  </Link>
                </Button>
                <Button size="sm" className="flex-1 bg-green-600 text-white hover:bg-green-500" asChild>
                  <Link href="/colaboradores/inscricao" onClick={() => setIsOpen(false)}>
                    <UserPlus className="h-4 w-4 mr-1" />
                    Cadastro
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
