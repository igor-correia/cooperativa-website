import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Handshake, Building2, GraduationCap, ShoppingBag, Leaf, Globe, ArrowRight } from "lucide-react"

export default function ParceriasPage() {
  return (
    <div className="pt-5 pb-16">
      {/* Header da página */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Parcerias</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conheça nossos parceiros estratégicos e descubra como uma parceria com nossa cooperativa pode impulsionar
            seu negócio.
          </p>
        </div>
      </div>

      {/* Benefícios de Parcerias */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Como Uma Parceria Pode Ajudar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefício 1 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Handshake className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>Acesso a Novos Mercados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Através de nossas parcerias, você terá acesso a uma rede ampla de contatos e oportunidades em diferentes
                mercados, expandindo seu alcance e potencial de crescimento.
              </p>
            </CardContent>
          </Card>

          {/* Benefício 2 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>Compartilhamento de Recursos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Otimize seus recursos através do compartilhamento de infraestrutura, tecnologia e conhecimento,
                reduzindo custos e aumentando a eficiência operacional.
              </p>
            </CardContent>
          </Card>

          {/* Benefício 3 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>Transferência de Conhecimento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Beneficie-se da troca de experiências e conhecimentos especializados, promovendo a inovação e o
                desenvolvimento de novas soluções para desafios comuns.
              </p>
            </CardContent>
          </Card>

          {/* Benefício 4 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <ShoppingBag className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>Condições Comerciais Especiais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Parceiros têm acesso a condições comerciais diferenciadas, incluindo descontos em produtos e serviços,
                facilitando o crescimento mútuo e sustentável.
              </p>
            </CardContent>
          </Card>

          {/* Benefício 5 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>Projetos de Sustentabilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Participe de iniciativas conjuntas voltadas para a sustentabilidade e responsabilidade social,
                fortalecendo a imagem de sua empresa e contribuindo para um futuro melhor.
              </p>
            </CardContent>
          </Card>

          {/* Benefício 6 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <CardTitle>Expansão Internacional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Nossa rede de parceiros internacionais pode facilitar sua entrada em mercados globais, oferecendo
                suporte e conhecimento local para uma expansão bem-sucedida.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Parceiros Atuais */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nossos Parceiros</h2>

          <Tabs defaultValue="todos" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="empresas">Empresas</TabsTrigger>
              <TabsTrigger value="instituicoes">Instituições</TabsTrigger>
              <TabsTrigger value="cooperativas">Cooperativas</TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Parceiro 1 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Empresa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Empresa Alpha</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tecnologia</p>
                </div>

                {/* Parceiro 2 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Empresa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Instituto Beta</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Educação</p>
                </div>

                {/* Parceiro 3 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Empresa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Coop Gamma</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Agronegócio</p>
                </div>

                {/* Parceiro 4 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Empresa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Grupo Delta</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Finanças</p>
                </div>

                {/* Parceiro 5 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Empresa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Fundação Epsilon</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Pesquisa</p>
                </div>

                {/* Parceiro 6 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Empresa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Zeta Indústrias</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Manufatura</p>
                </div>

                {/* Parceiro 7 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Empresa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Eta Cooperativa</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Serviços</p>
                </div>

                {/* Parceiro 8 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Empresa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Theta Tech</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Inovação</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="empresas" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Empresa 1 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Empresa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Empresa Alpha</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tecnologia</p>
                </div>

                {/* Empresa 2 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Empresa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Grupo Delta</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Finanças</p>
                </div>

                {/* Empresa 3 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Empresa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Zeta Indústrias</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Manufatura</p>
                </div>

                {/* Empresa 4 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Empresa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Theta Tech</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Inovação</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="instituicoes" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Instituição 1 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Instituição Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Instituto Beta</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Educação</p>
                </div>

                {/* Instituição 2 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Instituição Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Fundação Epsilon</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Pesquisa</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cooperativas" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* Cooperativa 1 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Cooperativa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Coop Gamma</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Agronegócio</p>
                </div>

                {/* Cooperativa 2 */}
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm text-center">
                  <div className="relative h-20 w-full mb-4">
                    <Image
                      src="/placeholder.svg?height=100&width=200"
                      alt="Logo Cooperativa Parceira"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">Eta Cooperativa</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Serviços</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Casos de Sucesso */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Casos de Sucesso</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Caso 1 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="relative h-full w-full min-h-[150px]">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Logo Parceiro"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Empresa Alpha + Cooperativa
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A parceria entre a Empresa Alpha e nossa cooperativa resultou no desenvolvimento de uma plataforma
                  tecnológica que aumentou a eficiência operacional em 40% e reduziu custos em 25%.
                </p>
                <Link href="#" className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>

          {/* Caso 2 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="relative h-full w-full min-h-[150px]">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Logo Parceiro"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Instituto Beta + Cooperativa
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A parceria com o Instituto Beta permitiu a capacitação de mais de 500 colaboradores em novas
                  tecnologias, resultando em um aumento de 30% na produtividade.
                </p>
                <Link href="#" className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>

          {/* Caso 3 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="relative h-full w-full min-h-[150px]">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Logo Parceiro"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Coop Gamma + Cooperativa</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A parceria entre cooperativas criou uma cadeia de suprimentos integrada que expandiu o mercado de
                  ambas as organizações em 35%, alcançando novas regiões.
                </p>
                <Link href="#" className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>

          {/* Caso 4 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <div className="relative h-full w-full min-h-[150px]">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Logo Parceiro"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div className="md:col-span-2 p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Fundação Epsilon + Cooperativa
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  O projeto de pesquisa conjunto com a Fundação Epsilon resultou em práticas sustentáveis que reduziram
                  o impacto ambiental em 50% e geraram economia de recursos.
                </p>
                <Link href="#" className="text-green-600 dark:text-green-400 hover:underline inline-flex items-center">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            O Que Nossos Parceiros Dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Depoimento 1 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Foto do parceiro"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Ricardo Martins</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Diretor, Empresa Alpha</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "Nossa parceria com a cooperativa tem sido fundamental para o crescimento da Empresa Alpha. O
                  compartilhamento de conhecimentos e recursos nos permitiu inovar e expandir para novos mercados de
                  forma sustentável."
                </p>
              </CardContent>
            </Card>

            {/* Depoimento 2 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Foto do parceiro"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Carla Sousa</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Diretora, Instituto Beta</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "A parceria com a cooperativa nos permitiu ampliar o alcance de nossos programas educacionais,
                  beneficiando comunidades que antes não tínhamos acesso. É uma relação de ganho mútuo que valoriza o
                  conhecimento."
                </p>
              </CardContent>
            </Card>

            {/* Depoimento 3 */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Foto do parceiro"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Paulo Mendes</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Presidente, Coop Gamma</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "A intercooperação tem sido a chave do nosso sucesso conjunto. Conseguimos otimizar recursos,
                  compartilhar conhecimentos e criar soluções inovadoras que beneficiam todos os nossos membros."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulário de Contato para Parcerias */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Torne-se um Parceiro</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Interessado em estabelecer uma parceria com nossa cooperativa? Preencha o formulário abaixo e nossa
                equipe entrará em contato para discutir as possibilidades de colaboração.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nome
                    </label>
                    <Input id="nome" placeholder="Seu nome completo" className="bg-white dark:bg-gray-800" />
                  </div>
                  <div>
                    <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Cargo
                    </label>
                    <Input id="cargo" placeholder="Seu cargo na empresa" className="bg-white dark:bg-gray-800" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Empresa/Instituição
                    </label>
                    <Input id="empresa" placeholder="Nome da empresa" className="bg-white dark:bg-gray-800" />
                  </div>
                  <div>
                    <label htmlFor="setor" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Setor de Atuação
                    </label>
                    <Input id="setor" placeholder="Ex: Tecnologia, Educação" className="bg-white dark:bg-gray-800" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      E-mail
                    </label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="bg-white dark:bg-gray-800" />
                  </div>
                  <div>
                    <label
                      htmlFor="telefone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Telefone
                    </label>
                    <Input id="telefone" placeholder="(00) 00000-0000" className="bg-white dark:bg-gray-800" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="tipo-parceria"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Tipo de Parceria Desejada
                  </label>
                  <Input
                    id="tipo-parceria"
                    placeholder="Ex: Comercial, Tecnológica, Educacional"
                    className="bg-white dark:bg-gray-800"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Detalhes da Proposta
                  </label>
                  <Textarea
                    id="mensagem"
                    placeholder="Descreva sua proposta de parceria e como podemos colaborar..."
                    className="bg-white dark:bg-gray-800"
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Enviar Proposta
                </Button>
              </form>
            </div>

            <div className="relative h-64 lg:h-auto">
              <Image src="/placeholder.svg?height=600&width=800" alt="Parceria" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Perguntas Frequentes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Pergunta 1 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Quais são os critérios para estabelecer uma parceria?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Buscamos parceiros que compartilhem nossos valores de cooperação, sustentabilidade e responsabilidade
                  social. A parceria deve trazer benefícios mútuos e contribuir para o desenvolvimento da comunidade.
                </p>
              </CardContent>
            </Card>

            {/* Pergunta 2 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Quanto tempo leva para formalizar uma parceria?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  O processo varia conforme a complexidade da parceria, mas geralmente leva de 1 a 3 meses, incluindo as
                  etapas de avaliação, negociação e formalização do acordo.
                </p>
              </CardContent>
            </Card>

            {/* Pergunta 3 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Quais tipos de parcerias a cooperativa estabelece?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Estabelecemos diversos tipos de parcerias, incluindo comerciais, tecnológicas, educacionais, de
                  pesquisa, sociais e ambientais, sempre alinhadas com nossa missão e valores.
                </p>
              </CardContent>
            </Card>

            {/* Pergunta 4 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Existe um investimento mínimo para parcerias?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Não há um valor mínimo estabelecido. O investimento varia conforme o tipo e escopo da parceria,
                  podendo envolver recursos financeiros, tecnológicos, humanos ou compartilhamento de conhecimento.
                </p>
              </CardContent>
            </Card>

            {/* Pergunta 5 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Como é feito o acompanhamento das parcerias?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Realizamos reuniões periódicas de acompanhamento, estabelecemos indicadores de desempenho e elaboramos
                  relatórios regulares para garantir que os objetivos da parceria estejam sendo alcançados.
                </p>
              </CardContent>
            </Card>

            {/* Pergunta 6 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Parcerias internacionais são possíveis?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sim, temos interesse em parcerias internacionais que estejam alinhadas com nossos objetivos e valores.
                  Já mantemos colaborações com organizações de diversos países.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-green-600 dark:bg-green-700 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Vamos Construir Algo Juntos</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Acreditamos no poder da colaboração para criar um futuro melhor. Junte-se a nós e descubra como podemos
            crescer juntos através de parcerias estratégicas.
          </p>
        </div>
      </section>
    </div>
  )
}
