import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Briefcase, Award, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Seção Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                Juntos somos mais fortes
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                Nossa cooperativa trabalha para promover o desenvolvimento sustentável e o bem-estar de todos os nossos
                membros e da comunidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Junte-se a Nós
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                >
                  Conheça Nossos Serviços
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Cooperativa em ação"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Cooperativa */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Sobre a Cooperativa</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Fundada em 2010, nossa cooperativa tem como missão promover o desenvolvimento econômico e social de nossos
              membros através da cooperação e da solidariedade. Trabalhamos juntos para criar oportunidades e soluções
              que beneficiem a todos.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center mt-6 text-green-600 dark:text-green-400 hover:underline"
            >
              Saiba mais sobre nós
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Destaques de Serviços */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nossos Serviços</h2>
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
                  Oferecemos consultoria em diversas áreas para ajudar no desenvolvimento e crescimento sustentável do
                  seu empreendimento.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/servicos/consultoria"
                  className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
                  essenciais.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/servicos/educacao"
                  className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
                  Linhas de crédito especiais, financiamentos e assessoria financeira para impulsionar seu crescimento.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/servicos/financeiro"
                  className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            O Que Dizem Nossos Membros
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testemunho 1 */}
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Foto de perfil"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Ana Silva</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Membro desde 2018</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "Graças ao apoio da cooperativa, consegui expandir meu negócio e aumentar minha renda. Os treinamentos
                  e a consultoria foram fundamentais para o meu sucesso."
                </p>
              </CardContent>
            </Card>

            {/* Testemunho 2 */}
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Foto de perfil"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Carlos Oliveira</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Membro desde 2020</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "O financiamento que obtive através da cooperativa me permitiu modernizar meu equipamento e aumentar
                  minha produtividade. O processo foi simples e rápido."
                </p>
              </CardContent>
            </Card>

            {/* Testemunho 3 */}
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Foto de perfil"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Mariana Santos</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Membro desde 2019</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "A rede de contatos que construí através da cooperativa abriu muitas portas para meu negócio. As
                  parcerias formadas foram essenciais para meu crescimento."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Notícias e Atualizações */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Últimas Notícias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Notícia 1 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Imagem da notícia"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">15 de Abril, 2025</div>
                <CardTitle className="text-xl">Nova Parceria Estratégica Anunciada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Nossa cooperativa firmou uma nova parceria estratégica que trará benefícios significativos para todos
                  os membros...
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/noticias/nova-parceria"
                  className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center"
                >
                  Ler mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Notícia 2 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Imagem da notícia"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">10 de Abril, 2025</div>
                <CardTitle className="text-xl">Programa de Capacitação 2025</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Estão abertas as inscrições para o novo programa de capacitação que oferecerá cursos em diversas
                  áreas...
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/noticias/programa-capacitacao"
                  className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center"
                >
                  Ler mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            {/* Notícia 3 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Imagem da notícia"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">5 de Abril, 2025</div>
                <CardTitle className="text-xl">Assembleia Geral Anual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  A Assembleia Geral Anual será realizada no próximo mês. Confira a pauta e como participar...
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/noticias/assembleia-anual"
                  className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center"
                >
                  Ler mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
            >
              <Link href="/noticias">Ver Todas as Notícias</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 dark:bg-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Pronto para se juntar a nós?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Faça parte da nossa comunidade e descubra como podemos crescer juntos através da cooperação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Torne-se um Colaborador
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
