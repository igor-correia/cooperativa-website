"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon, MapPin, Clock, Users, Search, Filter } from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

// Dados simulados de eventos
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
  },
  {
    id: 3,
    titulo: "Encontro de Cooperativas Regionais",
    data: new Date(2025, 4, 5), // 5 de Maio de 2025
    horario: "10:00 - 16:00",
    local: "Hotel Central, Campinas",
    descricao: "Encontro para networking e troca de experiências entre cooperativas da região sudeste.",
    categoria: "Networking",
    imagem: "/placeholder.svg?height=300&width=500",
    vagas: 50,
    inscritos: 42,
  },
  {
    id: 4,
    titulo: "Curso de Gestão Financeira para Cooperativas",
    data: new Date(2025, 4, 12), // 12 de Maio de 2025
    horario: "09:00 - 18:00",
    local: "Sede da Cooperativa, São Paulo",
    descricao:
      "Curso prático sobre gestão financeira específica para o modelo cooperativista, com foco em sustentabilidade econômica.",
    categoria: "Curso",
    imagem: "/placeholder.svg?height=300&width=500",
    vagas: 25,
    inscritos: 15,
  },
  {
    id: 5,
    titulo: "Palestra: Inovação em Cooperativas",
    data: new Date(2025, 4, 18), // 18 de Maio de 2025
    horario: "19:00 - 21:00",
    local: "Auditório Central, São Paulo",
    descricao: "Palestra com especialistas sobre como implementar inovação em modelos de negócio cooperativistas.",
    categoria: "Palestra",
    imagem: "/placeholder.svg?height=300&width=500",
    vagas: 150,
    inscritos: 98,
  },
  {
    id: 6,
    titulo: "Feira de Produtos Cooperativos",
    data: new Date(2025, 4, 25), // 25 de Maio de 2025
    horario: "10:00 - 20:00",
    local: "Parque de Exposições, São Paulo",
    descricao: "Exposição e venda de produtos desenvolvidos por cooperativas de todo o país, com programação cultural.",
    categoria: "Feira",
    imagem: "/placeholder.svg?height=300&width=500",
    vagas: 500,
    inscritos: 320,
  },
]

const eventosPastEvents = [
  {
    id: 101,
    titulo: "Assembleia Geral Anual",
    data: new Date(2025, 2, 15), // 15 de Março de 2025
    local: "Sede da Cooperativa, São Paulo",
    descricao: "Assembleia para apresentação de resultados e planejamento estratégico para o próximo ano.",
    categoria: "Assembleia",
    imagem: "/placeholder.svg?height=300&width=500",
    participantes: 120,
  },
  {
    id: 102,
    titulo: "Workshop de Liderança Colaborativa",
    data: new Date(2025, 2, 5), // 5 de Março de 2025
    local: "Centro de Treinamento, São Paulo",
    descricao: "Workshop focado no desenvolvimento de habilidades de liderança no contexto cooperativista.",
    categoria: "Workshop",
    imagem: "/placeholder.svg?height=300&width=500",
    participantes: 35,
  },
  {
    id: 103,
    titulo: "Seminário de Tecnologias para Cooperativas",
    data: new Date(2025, 1, 20), // 20 de Fevereiro de 2025
    local: "Centro de Convenções, São Paulo",
    descricao: "Apresentação de soluções tecnológicas específicas para o setor cooperativista.",
    categoria: "Seminário",
    imagem: "/placeholder.svg?height=300&width=500",
    participantes: 85,
  },
]

// Função para obter eventos de um determinado dia
const getEventosNoDia = (data: Date) => {
  return eventosProximos.filter(
    (evento) =>
      evento.data.getDate() === data.getDate() &&
      evento.data.getMonth() === data.getMonth() &&
      evento.data.getFullYear() === data.getFullYear(),
  )
}

// Função para verificar se um dia tem eventos
const temEventoNoDia = (data: Date) => {
  return eventosProximos.some(
    (evento) =>
      evento.data.getDate() === data.getDate() &&
      evento.data.getMonth() === data.getMonth() &&
      evento.data.getFullYear() === data.getFullYear(),
  )
}

export default function EventosPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [eventosSelecionados, setEventosSelecionados] = useState<typeof eventosProximos>([])
  const [categoriaFiltro, setCategoriaFiltro] = useState<string>("todos")
  const [termoBusca, setTermoBusca] = useState<string>("")

  // Atualiza os eventos selecionados quando a data muda
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    if (selectedDate) {
      const eventos = getEventosNoDia(selectedDate)
      setEventosSelecionados(eventos)
    } else {
      setEventosSelecionados([])
    }
  }

  // Filtra eventos por categoria
  const filtrarEventosPorCategoria = (eventos: typeof eventosProximos) => {
    if (categoriaFiltro === "todos") return eventos
    return eventos.filter((evento) => evento.categoria.toLowerCase() === categoriaFiltro.toLowerCase())
  }

  // Filtra eventos por termo de busca
  const filtrarEventosPorBusca = (eventos: typeof eventosProximos) => {
    if (!termoBusca.trim()) return eventos
    const termo = termoBusca.toLowerCase()
    return eventos.filter(
      (evento) =>
        evento.titulo.toLowerCase().includes(termo) ||
        evento.descricao.toLowerCase().includes(termo) ||
        evento.local.toLowerCase().includes(termo),
    )
  }

  // Aplica todos os filtros
  const eventosProximosFiltrados = filtrarEventosPorBusca(filtrarEventosPorCategoria(eventosProximos))

  return (
    <div className="pt-5 pb-16">
      {/* Header da página */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Eventos</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Confira nossa agenda de eventos, workshops, cursos e encontros. Participe e amplie sua rede de contatos e
            conhecimentos.
          </p>
        </div>
      </div>

      {/* Evento em Destaque */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Evento em Destaque</h2>

        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Evento em destaque"
                fill
                className="object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700">Destaque</Badge>
            </div>
            <div className="p-8">
              <CardTitle className="text-2xl mb-2">Feira de Produtos Cooperativos</CardTitle>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="flex items-center gap-1">
                  <CalendarIcon className="h-3 w-3" />
                  {format(new Date(2025, 4, 25), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  10:00 - 20:00
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  Parque de Exposições, São Paulo
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Exposição e venda de produtos desenvolvidos por cooperativas de todo o país, com programação cultural,
                palestras, oficinas e atividades para toda a família. Uma oportunidade única para conhecer o trabalho de
                diversas cooperativas e fortalecer a economia solidária.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-600 dark:text-gray-300">320/500 inscritos</span>
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Inscreva-se</Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Calendário e Eventos do Dia */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Calendário de Eventos</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendário */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                className="mx-auto"
                locale={ptBR}
                modifiers={{
                  hasEvent: (date) => temEventoNoDia(date),
                }}
                modifiersClassNames={{
                  hasEvent: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-bold",
                }}
              />
              <div className="mt-4 text-center text-gray-600 dark:text-gray-300 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30"></div>
                  <span>Dias com eventos programados</span>
                </div>
              </div>
            </div>

            {/* Eventos do dia selecionado */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {date ? `Eventos em ${format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}` : "Selecione uma data"}
              </h3>

              {eventosSelecionados.length > 0 ? (
                <div className="space-y-4">
                  {eventosSelecionados.map((evento) => (
                    <Card key={evento.id} className="border-gray-200 dark:border-gray-700">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                            <Image
                              src={evento.imagem || "/placeholder.svg"}
                              alt={evento.titulo}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{evento.titulo}</h4>
                            <div className="flex flex-wrap gap-2 mt-1 mb-2">
                              <Badge variant="outline" className="text-xs flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {evento.horario}
                              </Badge>
                              <Badge variant="outline" className="text-xs flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {evento.local.split(",")[0]}
                              </Badge>
                            </div>
                            <Link
                              href={`/eventos/${evento.id}`}
                              className="text-green-600 dark:text-green-400 text-sm hover:underline"
                            >
                              Ver detalhes
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  {date
                    ? "Não há eventos programados para esta data."
                    : "Selecione uma data no calendário para ver os eventos."}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Próximos Eventos */}
      <section className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">Próximos Eventos</h2>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Busca */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar eventos..."
                className="pl-10 bg-white dark:bg-gray-800 w-full sm:w-64"
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
              />
            </div>

            {/* Filtro por categoria */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3 py-2 text-sm"
                value={categoriaFiltro}
                onChange={(e) => setCategoriaFiltro(e.target.value)}
              >
                <option value="todos">Todas as categorias</option>
                <option value="workshop">Workshop</option>
                <option value="seminário">Seminário</option>
                <option value="curso">Curso</option>
                <option value="palestra">Palestra</option>
                <option value="feira">Feira</option>
                <option value="networking">Networking</option>
              </select>
            </div>
          </div>
        </div>

        {eventosProximosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventosProximosFiltrados.map((evento) => (
              <Card
                key={evento.id}
                className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={evento.imagem || "/placeholder.svg"} alt={evento.titulo} fill className="object-cover" />
                  <Badge className="absolute top-3 right-3 bg-green-600 hover:bg-green-700">{evento.categoria}</Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{evento.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3" />
                      {format(evento.data, "dd/MM/yyyy")}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {evento.horario}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">{evento.descricao}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <MapPin className="h-4 w-4" />
                    <span>{evento.local}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {evento.inscritos}/{evento.vagas} inscritos
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20"
                  >
                    <Link href={`/eventos/${evento.id}`}>Ver detalhes</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">Nenhum evento encontrado com os filtros selecionados.</p>
            <Button
              variant="link"
              className="text-green-600 dark:text-green-400 mt-2"
              onClick={() => {
                setTermoBusca("")
                setCategoriaFiltro("todos")
              }}
            >
              Limpar filtros
            </Button>
          </div>
        )}
      </section>

      {/* Eventos Passados */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Eventos Realizados</h2>

          <Tabs defaultValue="galeria" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="galeria">Galeria</TabsTrigger>
              <TabsTrigger value="lista">Lista</TabsTrigger>
            </TabsList>

            <TabsContent value="galeria" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {eventosPastEvents.map((evento) => (
                  <div key={evento.id} className="relative group overflow-hidden rounded-lg">
                    <div className="relative h-64 w-full">
                      <Image
                        src={evento.imagem || "/placeholder.svg"}
                        alt={evento.titulo}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                      <h3 className="font-semibold text-lg">{evento.titulo}</h3>
                      <p className="text-sm text-white/80">
                        {format(evento.data, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="lista" className="mt-8">
              <div className="space-y-4">
                {eventosPastEvents.map((evento) => (
                  <Card key={evento.id} className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                          <Image
                            src={evento.imagem || "/placeholder.svg"}
                            alt={evento.titulo}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{evento.titulo}</h4>
                          <div className="flex flex-wrap gap-2 mt-1 mb-2">
                            <Badge variant="outline" className="text-xs flex items-center gap-1">
                              <CalendarIcon className="h-3 w-3" />
                              {format(evento.data, "dd/MM/yyyy")}
                            </Badge>
                            <Badge variant="outline" className="text-xs flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {evento.local.split(",")[0]}
                            </Badge>
                            <Badge variant="outline" className="text-xs flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {evento.participantes} participantes
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">{evento.descricao}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Inscrição em Eventos */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Receba Atualizações de Eventos</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Inscreva-se para receber notificações sobre novos eventos, workshops e oportunidades de networking da
                nossa cooperativa.
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nome
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
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Interesses</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">Workshops</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">Seminários</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">Cursos</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-gray-600 dark:text-gray-300">Networking</span>
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Inscrever-se
                </Button>
              </form>
            </div>

            <div className="relative h-64 lg:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Eventos da cooperativa"
                fill
                className="object-cover"
              />
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
                  Como faço para me inscrever em um evento?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Para se inscrever em um evento, basta acessar a página do evento específico e clicar no botão
                  "Inscreva-se". Você será direcionado para um formulário de inscrição que deve ser preenchido com seus
                  dados.
                </p>
              </CardContent>
            </Card>

            {/* Pergunta 2 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Os eventos são exclusivos para colaboradores?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Não, a maioria dos eventos é aberta ao público, embora alguns sejam exclusivos para colaboradores. As
                  informações sobre o público-alvo estão sempre disponíveis na descrição de cada evento.
                </p>
              </CardContent>
            </Card>

            {/* Pergunta 3 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Posso cancelar minha inscrição em um evento?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sim, você pode cancelar sua inscrição até 48 horas antes do início do evento. Para isso, acesse a área
                  do participante com seu e-mail e senha, e selecione a opção de cancelamento.
                </p>
              </CardContent>
            </Card>

            {/* Pergunta 4 */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Os eventos são gratuitos?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Alguns eventos são gratuitos, enquanto outros podem ter taxas de inscrição. Colaboradores geralmente
                  têm descontos ou gratuidade em eventos pagos. As informações sobre valores estão disponíveis na página
                  de cada evento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 mb-16">
        <div className="bg-green-600 dark:bg-green-700 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Organize Seu Próprio Evento</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Tem uma ideia para um evento, workshop ou treinamento? Colaboradores podem propor e organizar eventos com o
            apoio da nossa cooperativa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Propor um Evento
            </Button>
            <Button
              asChild
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              <Link href="/contato">Saiba Mais</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
