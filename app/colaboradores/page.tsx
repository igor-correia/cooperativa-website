import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function ColaboradoresPage() {
  return (
    <div className="pt-5 pb-16">
      {/* Header da página */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Colaboradores
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Descubra os benefícios de se tornar um colaborador da nossa
            cooperativa e como podemos crescer juntos.
          </p>
        </div>
      </div>

      {/* Benefícios de Ser Colaborador */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Benefícios de Ser Colaborador
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefício 1 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Participação nos Lucros</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Como colaborador, você tem direito a participar dos resultados
                financeiros da cooperativa, recebendo sua parte proporcional dos
                lucros anuais.
              </p>
            </CardContent>
          </Card>

          {/* Benefício 2 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Acesso a Serviços Exclusivos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Nossos colaboradores têm acesso prioritário e condições
                especiais em todos os serviços oferecidos pela cooperativa,
                incluindo linhas de crédito e consultoria.
              </p>
            </CardContent>
          </Card>

          {/* Benefício 3 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Poder de Decisão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Cada colaborador tem direito a voto nas assembleias,
                participando ativamente das decisões que definem o futuro da
                cooperativa.
              </p>
            </CardContent>
          </Card>

          {/* Benefício 4 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Rede de Contatos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Faça parte de uma comunidade de profissionais e empreendedores,
                ampliando sua rede de contatos e criando oportunidades de
                negócios e parcerias.
              </p>
            </CardContent>
          </Card>

          {/* Benefício 5 */}
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Desenvolvimento Profissional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Acesso a programas de capacitação, treinamentos e eventos
                exclusivos para aprimorar suas habilidades e conhecimentos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle>Suporte Contínuo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Conte com o apoio da cooperativa em todas as etapas do seu
                negócio, desde o planejamento até a expansão, com orientação
                especializada.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Como Se Tornar Colaborador
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 rounded-full p-3 mr-4">
                    <span className="text-green-600 dark:text-green-400 font-bold">
                      1
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Preencha o Formulário de Inscrição
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      O primeiro passo é preencher nosso formulário de inscrição
                      com seus dados pessoais e informações sobre seu negócio ou
                      atividade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 rounded-full p-3 mr-4">
                    <span className="text-green-600 dark:text-green-400 font-bold">
                      2
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Entrevista e Avaliação
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Após a inscrição, agendaremos uma entrevista para conhecer
                      melhor suas expectativas e avaliar como a cooperativa pode
                      atender suas necessidades.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 rounded-full p-3 mr-4">
                    <span className="text-green-600 dark:text-green-400 font-bold">
                      3
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Aprovação e Integração
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Após a aprovação, você realizará o pagamento da cota de
                      participação e passará por um processo de integração para
                      conhecer todos os benefícios e serviços.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-green-100 dark:bg-green-900/30 rounded-full p-3 mr-4">
                    <span className="text-green-600 dark:text-green-400 font-bold">
                      4
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      Participação Ativa
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Como colaborador, você poderá participar das assembleias,
                      utilizar os serviços da cooperativa e contribuir para o
                      crescimento coletivo.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="mt-8 bg-green-600 hover:bg-green-500 text-white hover:scale-105 transition-all active:bg-green-400"
              >
                <Link href="/colaboradores/inscricao">Inscreva-se Agora</Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2 relative h-64 md:h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/colaborador.webp?height=600&width=800"
                alt="Processo de inscrição"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Área do Colaborador
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Acesse nossa plataforma exclusiva para colaboradores e aproveite
                todos os recursos disponíveis:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Documentos e relatórios
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Extrato de participação nos lucros
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Solicitação de serviços
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Calendário de eventos
                  </span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Fórum de discussão
                  </span>
                </li>
              </ul>

              <Button
                asChild
                className="bg-green-600 hover:bg-green-500 text-white hover:scale-105 transition-all active:bg-green-400"
              >
                <Link href="/colaboradores/login">
                  Acessar Área do Colaborador
                </Link>
              </Button>
            </div>

            <div className="relative h-64 lg:h-auto"></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            O Que Dizem Nossos Colaboradores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-green-600 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">R</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Roberto Almeida</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Colaborador há 5 anos</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "Desde que me tornei colaborador, meu negócio cresceu mais de
                  40%. O apoio da cooperativa foi fundamental para superar
                  desafios e encontrar novas oportunidades."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-green-600 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">F</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Fernanda Costa</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Colaboradora há 3 anos</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "A rede de contatos que construí através da cooperativa abriu
                  portas que eu jamais imaginaria. Hoje tenho parceiros em todo
                  o país e meu negócio não para de crescer."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-green-600 flex items-center justify-center">
                    <span className="text-white text-xl font-semibold">P</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Paulo Mendes</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Colaborador há 7 anos</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "O que mais valorizo na cooperativa é o sentimento de
                  pertencimento. Não estamos sozinhos nos desafios, temos uma
                  comunidade inteira nos apoiando e crescendo juntos."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Nossa Equipe
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://avatars.githubusercontent.com/u/69211250?s=400&u=9385b1fc92aec16f45d1bb755bc628535508288f&v=4"
                  alt="Foto do diretor"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                Junior José
              </h3>
              <p className="text-green-600 dark:text-green-400 mb-3">
                Diretor Presidente
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Fundador da cooperativa com mais de 20 anos de experiência em
                gestão cooperativista.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://avatars.githubusercontent.com/u/64588244?v=4"
                  alt="Foto do diretor"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                Igor Correia
              </h3>
              <p className="text-green-600 dark:text-green-400 mb-3">
                Gerente Financeiro
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Responsável pela gestão financeira da cooperativa, garantindo a
                saúde econômica e o crescimento sustentável.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://avatars.githubusercontent.com/u/110859172?v=4"
                  alt="Foto do diretor"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                Rayane Bezerra
              </h3>
              <p className="text-green-600 dark:text-green-400 mb-3">
                Coordenadora de Projetos
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Lidera a equipe de projetos, buscando soluções inovadoras e
                oportunidades de desenvolvimento para os colaboradores.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-green-600 dark:bg-green-700 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Pronto para se juntar a nós?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Faça parte da nossa comunidade de colaboradores e descubra como
            podemos crescer juntos através da cooperação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-white hover:text-green-600 hover:scale-105 transition-all active:bg-white"
              asChild
            >
              <Link href="/colaboradores/inscricao">
                Torne-se um Colaborador
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-green-600 hover:bg-gray-100 hover:scale-105 transition-all active:bg-gray-200"
              asChild
            >
              <Link href="/contato">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
