import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Tractor, Leaf, TrendingUp, BarChart } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Seção Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cultivando o futuro juntos
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                Nossa cooperativa trabalha para fortalecer produtores rurais através da união de forças, tecnologia e conhecimento compartilhado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-500 text-white hover:scale-105 transition-all active:bg-green-400"
                  asChild
                >
                  <Link href="/colaboradores/inscricao">Junte-se a nós</Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-500 text-white hover:scale-105 transition-all active:bg-green-400"
                  asChild
                >
                  <a href="#nossos-servicos">Conheça Nossos Serviços</a>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/rural.jpg?height=600&width=800"
                alt="Produtores rurais em campo"
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Sobre a Aliança Verde</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Fundada em 2010, a <span className="text-green-600 dark:text-green-400">Aliança Verde</span> tem como missão fortalecer o agricultor através do cooperativismo e da união de esforços. Trabalhamos para oferecer soluções que aumentem a produtividade, reduzam custos e ampliem a competitividade dos nossos associados no mercado agrícola.
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
      <section id="nossos-servicos" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Serviço 1 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Tractor className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
                <CardTitle>Assistência Técnica Agrícola</CardTitle>
                <CardDescription>Orientação especializada para sua produção</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Equipe de agrônomos e técnicos agrícolas qualificados para auxiliar no manejo da sua propriedade, aumentando a produtividade de grãos, hortaliças e frutas.
                </p>
              </CardContent>
            </Card>

            {/* Serviço 2 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Leaf className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
                <CardTitle>Insumos Agrícolas</CardTitle>
                <CardDescription>Produtos de qualidade com preços competitivos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Produção e distribuição de sementes, fertilizantes, defensivos e outros insumos necessários para o cultivo, com condições especiais para associados.
                </p>
              </CardContent>
            </Card>

            {/* Serviço 3 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
                <CardTitle>Comercialização da Produção</CardTitle>
                <CardDescription>Melhores condições de venda para sua safra</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Estrutura de armazenamento, logística e comercialização que garante maior poder de negociação e melhores preços para grãos, hortaliças e frutas.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-green-600 hover:bg-green-500 text-white hover:scale-105 transition-all active:bg-green-400">
              <Link href="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Testemunhos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testemunho 1 */}
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-green-600 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">J</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">João Silva</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Produtor de soja - Associado desde 2018</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "Graças à assistência técnica da Aliança Verde, consegui aumentar minha produtividade em 30% na última safra. Os insumos de qualidade e o suporte constante fizeram toda a diferença."
                </p>
              </CardContent>
            </Card>

            {/* Testemunho 2 */}
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-green-600 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">M</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Maria Oliveira</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Produtora de hortaliças - Associada desde 2020</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "As condições especiais para aquisição de fertilizantes e o apoio técnico foram fundamentais para melhorar a qualidade da minha produção de hortaliças e ampliar meus canais de venda."
                </p>
              </CardContent>
            </Card>

            {/* Testemunho 3 */}
            <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-green-600 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">P</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Pedro Santos</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Produtor de frutas - Associado desde 2019</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "A comercialização através da Aliança Verde me garantiu preços melhores e estabilidade nas vendas. Não preciso mais me preocupar com intermediários e consigo planejar melhor minha produção."
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
                <CardTitle className="text-xl">Nova Linha de Crédito Rural Disponível</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  A Aliança Verde firmou parceria com bancos para oferecer condições especiais de financiamento para máquinas agrícolas e infraestrutura de irrigação...
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/noticias/nova-linha-credito"
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
                <CardTitle className="text-xl">Dia de Campo sobre Manejo Integrado de Pragas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Estão abertas as inscrições para o Dia de Campo que apresentará as mais recentes técnicas de manejo integrado de pragas para culturas diversas...
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/noticias/dia-campo-mip"
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
                <CardTitle className="text-xl">Assembleia Geral Ordinária</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  A Assembleia Geral Ordinária será realizada no próximo mês para prestação de contas, planejamento da próxima safra e eleição dos novos membros do conselho...
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
          <h2 className="text-3xl font-bold mb-6 text-white">Pronto para fazer parte da Aliança Verde?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Junte-se a centenas de agricultores que já descobriram os benefícios de trabalhar em cooperação para fortalecer a produção agrícola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 hover:scale-105 transition-all active:bg-gray-200" 
              asChild
            >
              <Link href="/colaboradores/inscricao">Torne-se um Associado</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 hover:scale-105 transition-all active:bg-gray-200" 
              asChild
            >
              <Link href="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
