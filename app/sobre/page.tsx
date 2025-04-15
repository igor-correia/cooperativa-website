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
            Conheça nossa história, missão, valores e as pessoas que fazem nossa cooperativa acontecer todos os dias.
          </p>
        </div>
      </div>

      {/* Quem Somos */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Quem Somos</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Fundada em 2010, nossa cooperativa nasceu da união de 25 empreendedores que compartilhavam o sonho de
              criar um modelo de negócio baseado na colaboração e no benefício mútuo. Ao longo dos anos, crescemos e nos
              fortalecemos, mantendo sempre nossos princípios cooperativistas.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hoje, contamos com mais de 500 colaboradores em diversos setores, trabalhando juntos para promover o
              desenvolvimento econômico e social de nossa comunidade. Nossa estrutura democrática garante que cada
              membro tenha voz ativa nas decisões que moldam nosso futuro coletivo.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Acreditamos que o modelo cooperativo representa uma alternativa viável e sustentável ao modelo tradicional
              de negócios, colocando as pessoas no centro das decisões e distribuindo os benefícios de forma justa e
              equitativa.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-64 md:h-96 rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Sede da cooperativa"
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
                    Promover o desenvolvimento econômico e social dos nossos colaboradores e da comunidade através da
                    cooperação, oferecendo serviços de qualidade, fomentando a educação cooperativista e incentivando
                    práticas sustentáveis que beneficiem a todos.
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
                    Ser reconhecida como referência nacional em cooperativismo até 2030, expandindo nossa atuação para
                    todas as regiões do país, mantendo a excelência nos serviços prestados e o compromisso com os
                    princípios cooperativistas, contribuindo para uma sociedade mais justa e solidária.
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
                      <span>Responsabilidade social</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <span>Sustentabilidade</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <span>Inovação e melhoria contínua</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                      <span>Democracia e participação</span>
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
                    Fundação da cooperativa por 25 empreendedores locais com o objetivo de fortalecer seus negócios
                    através da cooperação mútua.
                  </p>
                </div>
                <div className="md:pl-12">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Fundação da cooperativa"
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
                  <h4 className="text-lg font-medium mb-3 text-green-600 dark:text-green-400">Expansão Regional</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Abertura da primeira filial em cidade vizinha e ampliação dos serviços oferecidos, atingindo a marca
                    de 100 colaboradores.
                  </p>
                </div>
                <div className="md:order-1 md:pr-12">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Expansão regional"
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
                  <h4 className="text-lg font-medium mb-3 text-green-600 dark:text-green-400">Prêmio de Excelência</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reconhecimento nacional com o Prêmio de Excelência em Cooperativismo, destacando nossas práticas
                    inovadoras e impacto social positivo.
                  </p>
                </div>
                <div className="md:pl-12">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Prêmio de excelência"
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
                  <h4 className="text-lg font-medium mb-3 text-green-600 dark:text-green-400">Transformação Digital</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Implementação de plataforma digital para facilitar o acesso dos colaboradores aos serviços e ampliar
                    o alcance da cooperativa, especialmente durante a pandemia.
                  </p>
                </div>
                <div className="md:order-1 md:pr-12">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Transformação digital"
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
                  <h4 className="text-lg font-medium mb-3 text-green-600 dark:text-green-400">500 Colaboradores</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Alcançamos a marca de 500 colaboradores e inauguramos nossa nova sede sustentável, construída com
                    materiais ecológicos e energia renovável.
                  </p>
                </div>
                <div className="md:pl-12">
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="500 colaboradores"
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

      {/* Nossa Equipe */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nossa Equipe</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Membro 1 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Foto do diretor"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Carlos Mendes</h3>
                <p className="text-green-600 dark:text-green-400 mb-3">Diretor Presidente</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Fundador da cooperativa com mais de 20 anos de experiência em gestão cooperativista.
                </p>
              </CardContent>
            </Card>

            {/* Membro 2 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Foto da diretora"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Ana Silva</h3>
                <p className="text-green-600 dark:text-green-400 mb-3">Diretora Financeira</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Especialista em finanças cooperativas com formação em economia e administração.
                </p>
              </CardContent>
            </Card>

            {/* Membro 3 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Foto do diretor"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Roberto Oliveira</h3>
                <p className="text-green-600 dark:text-green-400 mb-3">Diretor de Operações</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Responsável pela gestão operacional e desenvolvimento de novos serviços.
                </p>
              </CardContent>
            </Card>

            {/* Membro 4 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6 text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Foto da diretora"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Mariana Santos</h3>
                <p className="text-green-600 dark:text-green-400 mb-3">Diretora de Relacionamento</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Especialista em relacionamento com colaboradores e desenvolvimento de parcerias.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="/colaboradores">Conheça Todos os Colaboradores</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Números da Cooperativa */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nossos Números</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Número 1 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-green-600 dark:text-green-400" />
              <h3 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">500+</h3>
              <p className="text-gray-600 dark:text-gray-300">Colaboradores Ativos</p>
            </CardContent>
          </Card>

          {/* Número 2 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-green-600 dark:text-green-400" />
              <h3 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">15+</h3>
              <p className="text-gray-600 dark:text-gray-300">Anos de Experiência</p>
            </CardContent>
          </Card>

          {/* Número 3 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <Target className="h-12 w-12 mx-auto mb-4 text-green-600 dark:text-green-400" />
              <h3 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">20+</h3>
              <p className="text-gray-600 dark:text-gray-300">Projetos Comunitários</p>
            </CardContent>
          </Card>

          {/* Número 4 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <Leaf className="h-12 w-12 mx-auto mb-4 text-green-600 dark:text-green-400" />
              <h3 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">5</h3>
              <p className="text-gray-600 dark:text-gray-300">Unidades Sustentáveis</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Princípios Cooperativistas */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Princípios Cooperativistas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Princípio 1 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Adesão Voluntária e Livre</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                As cooperativas são organizações voluntárias, abertas a todas as pessoas aptas a utilizar os seus
                serviços e assumir as responsabilidades como membros.
              </p>
            </div>

            {/* Princípio 2 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Gestão Democrática</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                As cooperativas são organizações democráticas, controladas pelos seus membros, que participam ativamente
                na formulação das suas políticas e na tomada de decisões.
              </p>
            </div>

            {/* Princípio 3 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Participação Econômica</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Os membros contribuem equitativamente para o capital das suas cooperativas e controlam-no
                democraticamente, destinando os excedentes para o desenvolvimento da cooperativa.
              </p>
            </div>

            {/* Princípio 4 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Autonomia e Independência</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                As cooperativas são organizações autônomas, de ajuda mútua, controladas pelos seus membros, mantendo sua
                independência em relações com outras organizações.
              </p>
            </div>

            {/* Princípio 5 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Educação e Formação</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                As cooperativas promovem a educação e a formação dos seus membros, dos representantes eleitos e dos
                trabalhadores, para que possam contribuir eficazmente para o desenvolvimento da cooperativa.
              </p>
            </div>

            {/* Princípio 6 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">6</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Intercooperação</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                As cooperativas servem de forma mais eficaz aos seus membros e dão mais força ao movimento cooperativo,
                trabalhando em conjunto, através das estruturas locais, regionais, nacionais e internacionais.
              </p>
            </div>

            {/* Princípio 7 */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 dark:text-green-400 font-bold text-xl">7</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Interesse pela Comunidade</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                As cooperativas trabalham para o desenvolvimento sustentável das suas comunidades através de políticas
                aprovadas pelos membros, promovendo o bem-estar social e ambiental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações e Reconhecimentos */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Certificações e Reconhecimentos
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Certificação 1 */}
          <div className="text-center">
            <div className="relative h-24 w-24 mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Certificação ISO"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">ISO 9001</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Gestão de Qualidade</p>
          </div>

          {/* Certificação 2 */}
          <div className="text-center">
            <div className="relative h-24 w-24 mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Certificação Ambiental"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">ISO 14001</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Gestão Ambiental</p>
          </div>

          {/* Prêmio 1 */}
          <div className="text-center">
            <div className="relative h-24 w-24 mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Prêmio Cooperativismo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Prêmio Nacional</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Excelência em Cooperativismo</p>
          </div>

          {/* Prêmio 2 */}
          <div className="text-center">
            <div className="relative h-24 w-24 mx-auto mb-4">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Prêmio Sustentabilidade"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Selo Verde</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Práticas Sustentáveis</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 dark:bg-green-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Faça Parte da Nossa História</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Junte-se a nós e descubra como podemos crescer juntos através da cooperação e do trabalho em equipe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/colaboradores">Torne-se um Colaborador</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
              <Link href="/contato">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
