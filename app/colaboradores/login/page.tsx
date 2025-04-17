"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UserRound, Lock, Info, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="pt-5 pb-16">
      {/* Header da página */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Área do Colaborador</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Acesse nossa plataforma exclusiva e gerencie seus serviços, documentos e participações.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Login */}
          <div>
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Acesse sua conta de colaborador</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      E-mail
                    </label>
                    <div className="relative">
                      <UserRound className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="email" 
                        placeholder="seu@email.com" 
                        type="email" 
                        className="pl-10 bg-white dark:bg-gray-800" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Senha
                      </label>
                      <Link 
                        href="/colaboradores/recuperar-senha" 
                        className="text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
                      >
                        Esqueceu a senha?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••" 
                        className="pl-10 bg-white dark:bg-gray-800" 
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-500 hover:scale-105 transition-all active:bg-green-400 text-white"
                  >
                    Entrar
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Link href="/colaboradores/inscricao" className="text-sm text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">
                  Ainda não é colaborador? Junte-se a nós!
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Informações adicionais */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vantagens da Área do Colaborador</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Gestão Centralizada</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Acesse documentos, relatórios, extratos de participação nos lucros e histórico de transações em um só lugar.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Solicitação de Serviços</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Solicite serviços e assistência técnica diretamente pela plataforma, com acompanhamento em tempo real.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Calendário de Eventos</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fique por dentro de todos os eventos, treinamentos, dias de campo e assembleias da cooperativa.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Comunidade</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Participe do fórum de discussão e troque experiências com outros produtores e técnicos da cooperativa.
                  </p>
                </div>
              </li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800 mt-6">
              <div className="flex">
                <Info className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Suporte Técnico</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Em caso de dificuldades para acessar sua conta, entre em contato com nosso suporte técnico pelo telefone 
                    (11) 1234-5679 ou pelo e-mail suporte@cooperativa.com.br
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 