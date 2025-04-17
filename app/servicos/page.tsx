import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tractor,
  Leaf,
  TrendingUp,
  Droplet,
  Warehouse,
  Sprout,
} from "lucide-react";

export default function ServicosPage() {
  return (
    <div className="pt-5 pb-16">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Serviços Disponíveis
          </h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conheça todos os serviços que a{" "}
            <span className="text-green-600 dark:text-green-400">
              Aliança Verde
            </span>{" "}
            oferece para apoiar o crescimento e desenvolvimento do agricultor,
            desde a produção até a comercialização.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Tractor className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Assistência Técnica Agrícola</CardTitle>
              <CardDescription>
                Orientação especializada para sua produção
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Nossa equipe de agrônomos e técnicos agrícolas oferece
                orientação técnica em todas as etapas de cultivo, ajudando a
                implementar as melhores práticas para aumentar a produtividade
                de grãos, hortaliças e frutas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Leaf className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Insumos Agrícolas</CardTitle>
              <CardDescription>
                Produtos de qualidade com preços competitivos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Produção e distribuição de sementes selecionadas, fertilizantes
                e defensivos agrícolas de alta qualidade, com condições
                especiais de preço e pagamento para os associados da Aliança
                Verde.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Comercialização da Produção</CardTitle>
              <CardDescription>
                Melhores condições de venda para sua safra
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Estrutura completa para armazenamento, processamento e
                comercialização de sua produção, garantindo maior poder de
                negociação e melhores preços pelos produtos dos nossos
                associados.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Droplet className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Sistemas de Irrigação</CardTitle>
              <CardDescription>
                Tecnologia para otimização de recursos hídricos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Planejamento, implementação e manutenção de sistemas de
                irrigação eficientes, que garantem o uso racional da água e
                aumento da produtividade mesmo em períodos de estiagem.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Warehouse className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Armazenamento de Grãos</CardTitle>
              <CardDescription>
                Estrutura moderna para preservar sua produção
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Silos e armazéns com capacidade para 50.000 toneladas, equipados
                com sistemas de aeração, controle de temperatura e umidade para
                garantir a qualidade dos grãos por mais tempo.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Sprout className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
              <CardTitle>Capacitação Técnica</CardTitle>
              <CardDescription>Treinamentos e dias de campo</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Cursos, workshops e dias de campo para capacitação dos
                produtores em novas tecnologias agrícolas, manejo de pragas,
                técnicas de cultivo e gestão eficiente da propriedade rural.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Como utilizar nossos serviços
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                O acesso aos serviços da Aliança Verde é simples e prático para
                todos os nossos associados. Entre em contato conosco para
                conhecer as condições específicas para cada serviço.
              </p>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    1
                  </span>
                  <span>
                    Associe-se à Aliança Verde se ainda não for membro
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    2
                  </span>
                  <span>
                    Converse com nossa equipe técnica sobre suas necessidades
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    3
                  </span>
                  <span>
                    Receba um plano personalizado para sua propriedade
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                    4
                  </span>
                  <span>
                    Comece a utilizar os serviços e veja sua produção crescer
                  </span>
                </li>
              </ul>
              <Button
                asChild
                className="mt-8 bg-green-600 hover:bg-green-500 text-white hover:scale-105 transition-all active:bg-green-400"
              >
                <Link href="/contato">Falar com um Consultor</Link>
              </Button>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
