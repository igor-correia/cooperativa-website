"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { CalendarIcon, MapPin, Clock, Users, Share2, ArrowLeft, CheckCircle } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

// Dados simulados de eventos (mesmo do arquivo page.tsx)
const eventosProximos = [
  {
    id: 1,
    titulo: "Workshop de Cooperativismo",
    data: new Date(2025, 3, 20), // 20 de Abril de 2025
    horario: "09:00 - 17:00",
    local: "Sede da Cooperativa, São Paulo",
    descricao:
      "Workshop intensivo sobre os princípios e práticas do cooperativismo moderno, com foco em estratégias de gestão colaborativa.",
    categoria: "Workshop",
    imagem: "/placeholder.svg?height=300&width=500",
    vagas: 30,
    inscritos: 18,
    detalhes: {
      programacao: [
        { horario: "09:00 - 09:30", atividade: "Recepção e credenciamento" },
        { horario: "09:30 - 10:30", atividade: "Palestra: Princípios do Cooperativismo" },
        { horario: "10:30 - 10:45", atividade: "Coffee break" },
        { horario: "10:45 - 12:00", atividade: "Workshop: Gestão Colaborativa" },
        { horario: "12:00 - 13:30", atividade: "Almoço" },
        { horario: "13:30 - 15:00", atividade: "Painel: Casos de Sucesso" },
        { horario: "15:00 - 15:15", atividade: "Coffee break" },
        { horario: "15:15 - 16:30", atividade: "Atividade prática em grupos" },
        { horario: "16:30 - 17:00", atividade: "Encerramento e networking" },
      ],
      palestrantes: [
        {
          nome: "Dr. Carlos Silva",
          cargo: "Especialista em Cooperativismo",
          bio: "Doutor em Economia Cooperativa com mais de 15 anos de experiência no setor.",
          foto: "/placeholder.svg?height=100&width=100",
        },
        {
          nome: "Profa. Ana Oliveira",
          cargo: "Consultora de Gestão Colaborativa",
          bio: "Professora universitária e consultora com experiência internacional em modelos cooperativos.",
          foto: "/placeholder.svg?height=100&width=100",
        },
        {
          nome: "Roberto Santos",
          cargo: "Presidente da Coop Gamma",
          bio: "Líder de uma das cooperativas mais bem-sucedidas do país, com foco em inovação.",
          foto: "/placeholder.svg?height=100&width=100",
        },
      ],
      materiais:
        "Todos os participantes receberão material didático, certificado de participação e acesso a conteúdo exclusivo online após o evento.",
      publico: "Gestores, líderes, empreendedores e profissionais interessados em modelos cooperativos de negócio.",
      requisitos: "Não há pré-requisitos específicos, mas recomenda-se conhecimento básico sobre gestão de negócios.",
    },
  },
  {
    id: 2,
    titulo: "Seminário de Sustentabilidade",
    data: new Date(2025, 3, 25), // 25 de Abril de 2025
    horario: "14:00 - 18:00",
    local: "Centro de Convenções, São Paulo",
    descricao: "Discussão sobre práticas sustentáveis e como implementá-las em cooperativas e empresas parceiras.",
    categoria: "Seminário",
    imagem: "/placeholder.svg?height=300&width=500",
    vagas: 100,
    inscritos: 65,
    detalhes: {
      programacao: [
        { horario: "14:00 - 14:30", atividade: "Abertura e boas-vindas" },
        { horario: "14:30 - 15:30", atividade: "Palestra: Sustentabilidade em Cooperativas" },
        { horario: "15:30 - 15:45", atividade: "Coffee break" },
        { horario: "15:45 - 16:45", atividade: "Painel: Casos de Sucesso" },
        { horario: "16:45 - 17:45", atividade: "Mesa redonda: Desafios e Oportunidades" },
        { horario: "17:45 - 18:00", atividade: "Encerramento" },
      ],
      palestrantes: [
        {
          nome: "Dra. Mariana Costa",
          cargo: "Especialista em Sustentabilidade",
          bio: "Doutora em Gestão Ambiental com foco em práticas sustentáveis para negócios.",
          foto: "/placeholder.svg?height=100&width=100",
        },
        {
          nome: "Paulo Mendes",
          cargo: "Consultor Ambiental",
          bio: "Consultor com mais de 20 anos de experiência em implementação de práticas sustentáveis.",
          foto: "/placeholder.svg?height=100&width=100",
        },
      ],
      materiais: "Os participantes receberão certificado digital e acesso a apresentações e materiais complementares.",
      publico:
        "Gestores, coordenadores ambientais, líderes de cooperativas e empresas interessadas em sustentabilidade.",
      requisitos: "Não há pré-requisitos específicos.",
    },
  },
  {
    id: 6,
    titulo: "Feira de Produtos --Cooperativos",
    data: new Date(2025, 4, 25), 
    horario: "10:00 - 20:00",
    local: "Parque de Exposições, São Paulo",
    descricao: "Exposição e venda de produtos desenvolvidos por cooperativas de todo o país, com programação cultural.",
    categoria: "Feira",
    imagem: "/images/feira.webp?height=300&width=500",
    vagas: 500,
    inscritos: 320,
    detalhes: {
      programacao: [
        { horario: "10:00", atividade: "Abertura dos estandes" },
        { horario: "11:00", atividade: "Cerimônia de abertura oficial" },
        { horario: "12:00 - 14:00", atividade: "Apresentações culturais" },
        { horario: "14:30 - 16:00", atividade: "Palestras sobre economia solidária" },
        { horario: "16:30 - 18:00", atividade: "Oficinas práticas" },
        { horario: "18:30 - 19:30", atividade: "Show musical" },
        { horario: "20:00", atividade: "Encerramento" },
      ],
      palestrantes: [
        {
          nome: "Diversos expositores",
          cargo: "Representantes de cooperativas",
          bio: "Mais de 50 cooperativas de todo o país estarão presentes com seus produtos e serviços.",
          foto: "/placeholder.svg?height=100&width=100",
        },
      ],
      materiais: "Entrada gratuita para visitantes. Expositores devem fazer inscrição prévia.",
      publico: "Aberto ao público em geral, consumidores conscientes, cooperados e interessados em economia solidária.",
      requisitos: "Não há requisitos para visitantes. Expositores devem ser cooperativas registradas.",
    },
  },
]

// Função para encontrar um evento pelo ID
const getEventoPorId = (id: string) => {
  const eventoId = Number.parseInt(id)
  return eventosProximos.find((evento) => evento.id === eventoId)
}

// Componente de página de detalhes do evento
export default function EventoDetalhesPage({ params }: { params: { id: string } }) {
  const [inscrito, setInscrito] = useState(false)
  const evento = getEventoPorId(params.id)

  if (!evento) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Evento não encontrado</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          O evento que você está procurando não existe ou foi removido.
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
          <Link href="/eventos">Voltar para Eventos</Link>
        </Button>
      </div>
    )
  }

  const handleInscricao = () => {
    setInscrito(true)
    // Aqui seria implementada a lógica real de inscrição
  }

  return (
    <div className="pt-24 pb-16">
      {/* Header do evento */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-12 mb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" size="sm" className="mr-2">
              <Link href="/eventos">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Eventos
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-green-600 hover:bg-green-700">{evento.categoria}</Badge>
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{evento.titulo}</h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <CalendarIcon className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                  {format(evento.data, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Clock className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                  {evento.horario}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                  {evento.local}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{evento.descricao}</p>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Users className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                  <span>
                    {evento.inscritos}/{evento.vagas} inscritos
                  </span>
                </div>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={handleInscricao}
                  disabled={inscrito}
                >
                  {inscrito ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Inscrito
                    </>
                  ) : (
                    "Inscreva-se"
                  )}
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <Image src={evento.imagem || "/placeholder.svg"} alt={evento.titulo} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Detalhes do evento */}
      <div className="container mx-auto px-4 mb-16">
        <Tabs defaultValue="programacao" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="programacao">Programação</TabsTrigger>
            <TabsTrigger value="palestrantes">Palestrantes</TabsTrigger>
            <TabsTrigger value="informacoes">Informações</TabsTrigger>
            <TabsTrigger value="local">Local</TabsTrigger>
          </TabsList>

          <TabsContent value="programacao" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Programação do Evento</h2>
                <div className="space-y-4">
                  {evento.detalhes.programacao.map((item, index) => (
                    <div
                      key={index}
                      className="flex border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="w-32 flex-shrink-0 font-medium text-green-600 dark:text-green-400">
                        {item.horario}
                      </div>
                      <div className="flex-grow">
                        <p className="text-gray-900 dark:text-white">{item.atividade}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="palestrantes" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Palestrantes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {evento.detalhes.palestrantes.map((palestrante, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                        <Image
                          src={palestrante.foto || "/placeholder.svg"}
                          alt={palestrante.nome}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{palestrante.nome}</h3>
                      <p className="text-green-600 dark:text-green-400 mb-2">{palestrante.cargo}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{palestrante.bio}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="informacoes" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Informações Adicionais</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Materiais e Recursos</h3>
                    <p className="text-gray-600 dark:text-gray-300">{evento.detalhes.materiais}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Público-Alvo</h3>
                    <p className="text-gray-600 dark:text-gray-300">{evento.detalhes.publico}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Pré-Requisitos</h3>
                    <p className="text-gray-600 dark:text-gray-300">{evento.detalhes.requisitos}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Inscrição</h3>
                    <div className="flex flex-col space-y-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        Para participar deste evento, preencha o formulário de inscrição abaixo. As vagas são limitadas
                        e serão preenchidas por ordem de inscrição.
                      </p>

                      {inscrito ? (
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                          <p className="text-green-600 dark:text-green-400">
                            Você está inscrito neste evento! Um e-mail de confirmação foi enviado para seu endereço
                            cadastrado.
                          </p>
                        </div>
                      ) : (
                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto"
                          onClick={handleInscricao}
                        >
                          Inscreva-se Agora
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="local" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Local do Evento</h2>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{evento.local}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Endereço completo com referências e informações de acesso.
                  </p>

                  <div className="flex flex-col space-y-2 mb-6">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                      <span>Rua Exemplo, 123 - Bairro, São Paulo - SP</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                      <span>Abertura das portas: 30 minutos antes do início</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-96 rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Mapa do local do evento"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                      Aqui seria integrado o Google Maps
                      <br />
                      {evento.local}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Como Chegar</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Transporte Público:</strong> Informações sobre linhas de ônibus, metrô ou trem próximos ao
                      local.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <strong>Estacionamento:</strong> Informações sobre estacionamento no local ou nas proximidades.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Formulário de inscrição */}
      {!inscrito && (
        <div className="container mx-auto px-4 mb-16">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Formulário de Inscrição</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nome Completo
                    </label>
                    <Input id="nome" placeholder="Seu nome completo" className="bg-white dark:bg-gray-800" />
                  </div>

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
                    <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Cargo
                    </label>
                    <Input id="cargo" placeholder="Seu cargo" className="bg-white dark:bg-gray-800" />
                  </div>

                  <div>
                    <label
                      htmlFor="como-soube"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Como soube do evento?
                    </label>
                    <select
                      id="como-soube"
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="email">E-mail</option>
                      <option value="redes-sociais">Redes Sociais</option>
                      <option value="site">Site da Cooperativa</option>
                      <option value="indicacao">Indicação</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Concordo em receber comunicações sobre este e outros eventos da cooperativa
                    </span>
                  </label>
                </div>

                <Button type="button" className="bg-green-600 hover:bg-green-700 text-white" onClick={handleInscricao}>
                  Confirmar Inscrição
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Eventos relacionados */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Eventos Relacionados</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eventosProximos
            .filter((e) => e.id !== evento.id && e.categoria === evento.categoria)
            .slice(0, 3)
            .map((eventoRelacionado) => (
              <Card
                key={eventoRelacionado.id}
                className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-40">
                  <Image
                    src={eventoRelacionado.imagem || "/placeholder.svg"}
                    alt={eventoRelacionado.titulo}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-700">
                    {eventoRelacionado.categoria}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                    {eventoRelacionado.titulo}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {format(eventoRelacionado.data, "dd/MM/yyyy")}
                    <Clock className="h-4 w-4 ml-3 mr-1" />
                    {eventoRelacionado.horario}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                    {eventoRelacionado.descricao}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                  >
                    <Link href={`/eventos/${eventoRelacionado.id}`}>Ver Detalhes</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}
