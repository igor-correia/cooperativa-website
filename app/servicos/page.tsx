import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, BookOpen, Award, Users, BarChart, Globe } from "lucide-react"

export default function ServicosPage() {
  return (
    <div className="pt-5 pb-16">
      {/* Header da página */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Serviços Disponíveis</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conheça todos os serviços que oferecemos para apoiar o crescimento e desenvolvimento dos nossos membros e
            parceiros.
          </p>
        </div>
      </div>

      {/* Catálogo de Serviços */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Serviço 1 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Briefcase className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Consultoria Especializada</CardTitle>
              <CardDescription>Orientação profissional para o crescimento do seu negócio</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Nossa equipe de consultores especializados oferece orientação em diversas áreas, incluindo gestão,
                marketing, finanças e operações, para ajudar no desenvolvimento e crescimento sustentável do seu
                empreendimento.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/servicos/consultoria">Ver Detalhes</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Serviço 2 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Educação e Treinamento</CardTitle>
              <CardDescription>Capacitação contínua para membros e colaboradores</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Programas educacionais e treinamentos específicos para desenvolver habilidades e conhecimentos
                essenciais para o sucesso do seu negócio, incluindo cursos técnicos, workshops e seminários.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/servicos/educacao">Ver Detalhes</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Serviço 3 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Award className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Apoio Financeiro</CardTitle>
              <CardDescription>Soluções financeiras adaptadas às suas necessidades</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Linhas de crédito especiais, financiamentos com taxas diferenciadas e assessoria financeira para
                impulsionar o crescimento do seu negócio e ajudar a superar desafios financeiros.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/servicos/financeiro">Ver Detalhes</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Serviço 4 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Networking e Parcerias</CardTitle>
              <CardDescription>Conexões estratégicas para expandir oportunidades</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Facilitamos conexões entre membros e parceiros externos, criando oportunidades de negócios, colaborações
                e troca de experiências através de eventos, encontros e plataformas digitais.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/servicos/networking">Ver Detalhes</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Serviço 5 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Análise de Mercado</CardTitle>
              <CardDescription>Insights estratégicos para decisões informadas</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Fornecemos análises detalhadas de mercado, tendências do setor e comportamento do consumidor para ajudar
                na tomada de decisões estratégicas e identificação de novas oportunidades.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/servicos/analise-mercado">Ver Detalhes</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Serviço 6 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Internacionalização</CardTitle>
              <CardDescription>Suporte para expansão global</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Apoiamos a expansão internacional do seu negócio com consultoria especializada, conexões com parceiros
                globais, orientação sobre regulamentações e estratégias de entrada em novos mercados.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/servicos/internacionalizacao">Ver Detalhes</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Solicitação de Serviços */}
      <div className="container mx-auto px-4 mt-16">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Como solicitar nossos serviços</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                O processo para solicitar nossos serviços é simples e rápido. Entre em contato conosco para discutir
                suas necessidades e encontraremos a melhor solução para você.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    1
                  </span>
                  <span>Entre em contato através do formulário ou telefone</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    2
                  </span>
                  <span>Agende uma reunião com nossos especialistas</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    3
                  </span>
                  <span>Receba uma proposta personalizada</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    4
                  </span>
                  <span>Inicie o serviço e acompanhe os resultados</span>
                </li>
              </ul>
              <Button asChild className="mt-8 bg-green-600 hover:bg-green-700 text-white">
                <Link href="/contato">Solicitar Serviço</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Solicitação de serviços"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
