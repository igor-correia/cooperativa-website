import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContatoPage() {
  return (
    <div className="pt-5 pb-16">
      {/* Header da página */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Entre em Contato</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Estamos à disposição para responder suas dúvidas, ouvir sugestões ou ajudar no que for necessário.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Envie uma Mensagem</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Telefone
                </label>
                <Input id="telefone" placeholder="(00) 00000-0000" className="bg-white dark:bg-gray-800" />
              </div>

              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Assunto
                </label>
                <Input id="assunto" placeholder="Assunto da mensagem" className="bg-white dark:bg-gray-800" />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  placeholder="Digite sua mensagem aqui..."
                  className="bg-white dark:bg-gray-800"
                  rows={5}
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Informações de Contato */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Informações de Contato</h2>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 dark:text-green-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Endereço</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      R. Aprígio Veloso, 882
                      <br />
                      Universitário
                      <br />
                      Campina Grande, PB - 58428-830
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start">
                  <Phone className="h-6 w-6 text-green-600 dark:text-green-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Telefones</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Geral: (11) 1234-5678
                      <br />
                      Suporte: (11) 1234-5679
                      <br />
                      Financeiro: (11) 1234-5680
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start">
                  <Mail className="h-6 w-6 text-green-600 dark:text-green-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">E-mails</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Atendimento: contato@cooperativa.com.br
                      <br />
                      Suporte: suporte@cooperativa.com.br
                      <br />
                      Financeiro: financeiro@cooperativa.com.br
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start">
                  <Clock className="h-6 w-6 text-green-600 dark:text-green-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Segunda a Sexta: 8h às 18h
                      <br />
                      Sábado: 9h às 13h
                      <br />
                      Domingo e Feriados: Fechado
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Mapa */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Nossa Localização</h2>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1524095346037!2d-35.91294792414567!3d-7.213634992785036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e5f96d5b7c7%3A0xc1c826d10bc6391f!2sR.%20Apr%C3%ADgio%20Veloso%2C%20882%20-%20Universit%C3%A1rio%2C%20Campina%20Grande%20-%20PB%2C%2058428-830!5e0!3m2!1spt-BR!2sbr!4v1713217066493!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Cooperativa"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Perguntas Frequentes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Como me torno um colaborador?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Para se tornar um colaborador, preencha o formulário de inscrição em nossa página de Colaboradores e
                  aguarde nosso contato para dar continuidade ao processo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Quais são os custos para participar da cooperativa?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Para se tornar colaborador, é necessário adquirir uma cota de participação. Os valores e condições
                  podem variar, entre em contato para mais informações.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Como solicitar um serviço da cooperativa?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Colaboradores podem solicitar serviços através da Área do Colaborador no site ou entrando em contato
                  diretamente conosco por telefone ou e-mail.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Quando ocorrem as assembleias?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  As assembleias ordinárias ocorrem anualmente, geralmente no primeiro trimestre. Assembleias
                  extraordinárias podem ser convocadas conforme necessário.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        <strong>Transporte Público:</strong> Diversas linhas de ônibus passam próximo à nossa sede. A parada mais
        próxima fica a 200 metros, em frente à UFCG.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        <strong>Estacionamento:</strong> Dispomos de estacionamento gratuito para cooperados e visitantes nas
        dependências da cooperativa.
      </p>
      <div className="flex items-center text-gray-600 dark:text-gray-300">
        <MapPin className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
        <span>R. Aprígio Veloso, 882 - Universitário, Campina Grande - PB, 58428-830</span>
      </div>
    </div>
  )
}
