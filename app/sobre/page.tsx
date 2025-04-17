import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Target, Heart, Award, TrendingUp, Leaf, CheckCircle } from "lucide-react"

export default function SobreNosPage() {
  return (
    <div className="pt-5 pb-16">
      {/* Header da página */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Sobre Nós</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conheça nossa história, missão, valores e as pessoas que fazem da <span className="text-green-600 dark:text-green-400">Aliança Verde</span> uma referência no setor agrícola.
          </p>
        </div>
      </div>

      {/* Quem Somos */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Quem Somos</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Fundada em 2010, a <span className="text-green-600 dark:text-green-400">Aliança Verde</span> nasceu da união de 25 agricultores que compartilhavam o sonho de
              criar um modelo de negócio que fortalecesse o pequeno e médio produtor através da cooperação e da comercialização conjunta de produtos agrícolas.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hoje, contamos com mais de 500 associados em diversos segmentos da produção agrícola, incluindo grãos, 
              hortaliças e fruticultura. Nossa estrutura democrática garante que cada associado tenha voz ativa nas decisões 
              que moldam o futuro da Aliança Verde.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Acreditamos que o modelo cooperativo agrícola representa uma alternativa sólida para o crescimento sustentável 
              do campo, fortalecendo os produtores com tecnologia, conhecimento e maior poder de negociação tanto na compra de 
              insumos quanto na venda da produção.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-64 md:h-96 rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Sede da Aliança Verde"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Missão, Visão e Valores
          </h2>

          <Tabs defaultValue="missao" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="missao">Missão</TabsTrigger>
              <TabsTrigger value="visao">Visão</TabsTrigger>
              <TabsTrigger value="valores">Valores</TabsTrigger>
            </TabsList>
            <TabsContent value="missao" className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Target className="h-16 w-16 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Nossa Missão</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Promover o desenvolvimento sustentável da produção agrícola através da união de forças dos agricultores, 
                    oferecendo serviços de qualidade, tecnologia e conhecimento técnico, garantindo melhores condições de produção e 
                    comercialização de grãos, hortaliças e frutas, sempre respeitando o meio ambiente e valorizando as pessoas.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="visao" className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <TrendingUp className="h-16 w-16 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Nossa Visão</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ser reconhecida até 2030 como uma cooperativa referência em qualidade, inovação e sustentabilidade, 
                    expandindo nossa atuação para todas as regiões do país, ampliando nossa capacidade de armazenamento e 
                    beneficiamento de produtos agrícolas, e fortalecendo a marca Aliança Verde no mercado nacional e internacional.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="valores" className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Heart className="h-16 w-16 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Nossos Valores</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <span>Cooperação e solidariedade</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <span>Transparência e honestidade</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <span>Sustentabilidade ambiental</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <span>Compromisso com o agricultor</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <span>Inovação tecnológica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <span>Respeito às pessoas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Nossa História */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nossa História</h2>

        <div className="relative">
          {/* Linha do tempo vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 dark:bg-green-900/30"></div>

          <div className="space-y-12">
            {/* Marco 1 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-green-600 dark:bg-green-500 z-10"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2010</h3>
                  <h4 className="text-lg font-medium mb-3 text-green-600 dark:text-green-400">Fundação</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fundação da Aliança Verde por 25 agricultores locais com o objetivo de aumentar o poder de negociação na compra de insumos e venda da produção agrícola.
                  </p>
                </div>
                <div className="md:pl-12">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Fundação da Aliança Verde"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Marco 2 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-green-600 dark:bg-green-500 z-10"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2 md:text-left md:pl-12">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2013</h3>
                  <h4 className="text-lg font-medium mb-3 text-green-600 dark:text-green-400">Primeiro Armazém</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Inauguração do primeiro armazém de grãos com capacidade para 10.000 toneladas, possibilitando 
                    melhores condições de armazenamento e comercialização para os associados.
                  </p>
                </div>
                <div className="md:order-1 md:pr-12">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Primeiro armazém"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Marco 3 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-green-600 dark:bg-green-500 z-10"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2016</h3>
                  <h4 className="text-lg font-medium mb-3 text-green-600 dark:text-green-400">Loja de Insumos</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Criação da loja de insumos agrícolas, oferecendo sementes, fertilizantes e defensivos com preços 
                    competitivos para os associados.
                  </p>
                </div>
                <div className="md:pl-12">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Loja de insumos"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Marco 4 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-green-600 dark:bg-green-500 z-10"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2 md:text-left md:pl-12">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2020</h3>
                  <h4 className="text-lg font-medium mb-3 text-green-600 dark:text-green-400">Assistência Técnica</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Criação do departamento de assistência técnica com equipe de agrônomos para dar 
                    suporte aos produtores e ajudar a aumentar a produtividade de grãos, hortaliças e frutas.
                  </p>
                </div>
                <div className="md:order-1 md:pr-12">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Assistência técnica"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Marco 5 */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-green-600 dark:bg-green-500 z-10"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right md:pr-12">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2023</h3>
                  <h4 className="text-lg font-medium mb-3 text-green-600 dark:text-green-400">500 Associados</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Alcançamos a marca de 500 associados e inauguramos nossa nova sede da Aliança Verde com centro de distribuição, 
                    ampliando nossa capacidade de armazenamento para 50.000 toneladas de grãos.
                  </p>
                </div>
                <div className="md:pl-12">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Nova sede e 500 associados"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Estrutura */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nossa Estrutura</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-8 pb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                    <Leaf className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Armazéns de Grãos</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Capacidade total de 50.000 toneladas, com estrutura para recebimento, secagem, limpeza e armazenamento 
                    de grãos como soja, milho, trigo e café.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-8 pb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                    <Award className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Lojas Agrícolas</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    3 lojas estrategicamente localizadas que oferecem sementes, fertilizantes, defensivos agrícolas, 
                    ferramentas e equipamentos para o agricultor.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-8 pb-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full mb-4">
                    <Users className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Assistência Técnica</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Equipe com 15 profissionais entre agrônomos e técnicos agrícolas para assistência 
                    direta nas propriedades dos associados, focando na produção de grãos, hortaliças e frutas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nossos Números</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-3">500+</div>
            <div className="text-lg font-medium text-gray-900 dark:text-white">Agricultores Associados</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-3">50.000</div>
            <div className="text-lg font-medium text-gray-900 dark:text-white">Toneladas de Capacidade</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-3">15</div>
            <div className="text-lg font-medium text-gray-900 dark:text-white">Técnicos Especializados</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-3">20</div>
            <div className="text-lg font-medium text-gray-900 dark:text-white">Municípios Atendidos</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 dark:bg-green-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Junte-se à Aliança Verde</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Seja um associado e descubra como podemos ajudar sua produção a crescer com assistência técnica, 
            insumos de qualidade e melhores condições de comercialização.
          </p>
          <div className="flex justify-center">
            <Button 
              asChild
              className="bg-white text-green-600 hover:bg-white hover:scale-105 transition-all active:bg-white"
            >
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
