"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Upload, HelpCircle } from "lucide-react"
import { useRef, useState } from "react"

// Componente de cliente para o botão de upload
function FileUploadButton({ inputId }: { inputId: string }) {
  const handleClick = () => {
    const input = document.getElementById(inputId) as HTMLInputElement;
    if (input) {
      input.click();
    }
  };

  return (
    <Button 
      type="button" 
      variant="outline" 
      size="icon" 
      onClick={handleClick}
    >
      <Upload className="h-4 w-4" />
    </Button>
  );
}

export default function InscricaoPage() {
  const [activeTab, setActiveTab] = useState("pessoal");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const goToNextTab = () => {
    if (activeTab === "pessoal") setActiveTab("propriedade");
    else if (activeTab === "propriedade") setActiveTab("producao");
    else if (activeTab === "producao") setActiveTab("documentos");
  };

  const goToPreviousTab = () => {
    if (activeTab === "documentos") setActiveTab("producao");
    else if (activeTab === "producao") setActiveTab("propriedade");
    else if (activeTab === "propriedade") setActiveTab("pessoal");
  };

  return (
    <div className="pt-5 pb-16">
      {/* Header da página */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-12 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Torne-se um Colaborador</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Preencha o formulário abaixo para se associar à nossa cooperativa e aproveitar todos os benefícios
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Card className="w-full mx-auto max-w-5xl">
          <CardHeader>
            <CardTitle>Formulário de Inscrição</CardTitle>
            <CardDescription>Preencha todos os campos obrigatórios para iniciar seu processo de associação</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="pessoal">Dados Pessoais</TabsTrigger>
                <TabsTrigger value="propriedade">Propriedade</TabsTrigger>
                <TabsTrigger value="producao">Produção</TabsTrigger>
                <TabsTrigger value="documentos">Documentos</TabsTrigger>
              </TabsList>
              
              {/* Dados Pessoais */}
              <TabsContent value="pessoal" className="py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nome" className="text-sm font-medium">Nome Completo*</label>
                    <Input id="nome" placeholder="Digite seu nome completo" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="cpf" className="text-sm font-medium">CPF*</label>
                    <Input id="cpf" placeholder="000.000.000-00" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="rg" className="text-sm font-medium">RG</label>
                    <Input id="rg" placeholder="00.000.000-0" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="nascimento" className="text-sm font-medium">Data de Nascimento*</label>
                    <Input id="nascimento" type="date" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">E-mail*</label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="telefone" className="text-sm font-medium">Telefone*</label>
                    <Input id="telefone" placeholder="(00) 00000-0000" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="endereco" className="text-sm font-medium">Endereço Residencial*</label>
                    <Input id="endereco" placeholder="Rua, número, bairro" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="cidade" className="text-sm font-medium">Cidade/Estado*</label>
                    <Input id="cidade" placeholder="Cidade/UF" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="cep" className="text-sm font-medium">CEP*</label>
                    <Input id="cep" placeholder="00000-000" required />
                  </div>
                </div>
              </TabsContent>
              
              {/* Dados da Propriedade */}
              <TabsContent value="propriedade" className="py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="nome_propriedade" className="text-sm font-medium">Nome da Propriedade*</label>
                    <Input id="nome_propriedade" placeholder="Ex: Sítio São João" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="area" className="text-sm font-medium">Área Total (hectares)*</label>
                    <Input id="area" type="number" placeholder="00" step="0.01" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="endereco_prop" className="text-sm font-medium">Endereço da Propriedade*</label>
                    <Input id="endereco_prop" placeholder="Rua/Estrada, km, referência" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="cidade_prop" className="text-sm font-medium">Cidade/Estado*</label>
                    <Input id="cidade_prop" placeholder="Cidade/UF" required />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="descricao_prop" className="text-sm font-medium">Descrição da Propriedade</label>
                    <Textarea id="descricao_prop" placeholder="Descreva brevemente sua propriedade, infraestrutura e recursos disponíveis" rows={4} />
                  </div>
                </div>
              </TabsContent>
              
              {/* Interesses de Produção */}
              <TabsContent value="producao" className="py-4">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Atividades Atuais</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="agricultura" />
                        <label htmlFor="agricultura" className="text-sm">Agricultura</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pecuaria" />
                        <label htmlFor="pecuaria" className="text-sm">Pecuária</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="avicultura" />
                        <label htmlFor="avicultura" className="text-sm">Avicultura</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="suinocultura" />
                        <label htmlFor="suinocultura" className="text-sm">Suinocultura</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="apicultura" />
                        <label htmlFor="apicultura" className="text-sm">Apicultura</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="hortifruti" />
                        <label htmlFor="hortifruti" className="text-sm">Hortifrutigranjeiros</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Interesses de Desenvolvimento</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="organico" />
                        <label htmlFor="organico" className="text-sm">Produção Orgânica</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="agroecologia" />
                        <label htmlFor="agroecologia" className="text-sm">Agroecologia</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="processados" />
                        <label htmlFor="processados" className="text-sm">Produtos Processados</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="agroturismo" />
                        <label htmlFor="agroturismo" className="text-sm">Agroturismo</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="bioenergia" />
                        <label htmlFor="bioenergia" className="text-sm">Bioenergia</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="outros_interesses" />
                        <label htmlFor="outros_interesses" className="text-sm">Outros</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="detalhes_producao" className="text-sm font-medium">Detalhes Adicionais</label>
                    <Textarea 
                      id="detalhes_producao" 
                      placeholder="Compartilhe mais detalhes sobre sua produção atual e seus interesses futuros" 
                      rows={4} 
                    />
                  </div>
                </div>
              </TabsContent>
              
              {/* Documentos */}
              <TabsContent value="documentos" className="py-4">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <label htmlFor="doc_identidade" className="text-sm font-medium">Documento de Identidade (RG/CNH)*</label>
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Input id="doc_identidade" type="file" className="flex-1" required />
                      <FileUploadButton inputId="doc_identidade" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <label htmlFor="doc_cpf" className="text-sm font-medium">CPF*</label>
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Input id="doc_cpf" type="file" className="flex-1" required />
                      <FileUploadButton inputId="doc_cpf" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <label htmlFor="doc_comprovante" className="text-sm font-medium">Comprovante de Residência*</label>
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Input id="doc_comprovante" type="file" className="flex-1" required />
                      <FileUploadButton inputId="doc_comprovante" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <label htmlFor="doc_propriedade" className="text-sm font-medium">Documentação da Propriedade*</label>
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Input id="doc_propriedade" type="file" className="flex-1" required />
                      <FileUploadButton inputId="doc_propriedade" />
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      Documento que comprove a titularidade ou direito de uso da propriedade (matrícula, contrato de arrendamento, etc.)
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <label htmlFor="doc_producao" className="text-sm font-medium">Documentos de Produção</label>
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Input id="doc_producao" type="file" className="flex-1" />
                      <FileUploadButton inputId="doc_producao" />
                    </div>
                    <p className="text-xs text-gray-500 italic">
                      Notas fiscais, certificados, licenças ou outros documentos relevantes sobre sua produção atual
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox id="termos" className="mt-1" required />
                <div>
                  <label htmlFor="termos" className="text-sm font-medium block">
                    Aceito os Termos e Condições*
                  </label>
                  <p className="text-xs text-gray-500">
                    Ao enviar este formulário, declaro que todas as informações fornecidas são verdadeiras e concordo com o 
                    <Link href="/termos" className="text-green-600 hover:underline ml-1">Estatuto e Regimento Interno da Cooperativa</Link>.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Nota:</strong> Após o envio do formulário, sua solicitação será analisada pela nossa equipe. 
                  O processo de aprovação pode levar até 10 dias úteis. 
                  Entraremos em contato através do e-mail ou telefone informados.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            {activeTab !== "pessoal" && (
              <Button 
                type="button"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto"
                onClick={goToPreviousTab}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Anterior
              </Button>
            )}
            {activeTab !== "pessoal" && activeTab === "documentos" ? (
              <Button 
                type="submit" 
                className="bg-green-600 hover:bg-green-500 hover:scale-105 transition-all active:bg-green-400 text-white w-full sm:w-auto text-lg font-semibold px-8 py-2"
              >
                Enviar Inscrição
              </Button>
            ) : (
              <Button 
                type="button"
                className="bg-green-600 hover:bg-green-500 hover:scale-105 transition-all active:bg-green-400 text-white w-full sm:w-auto"
                onClick={goToNextTab}
              >
                Próximo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
            {activeTab === "pessoal" && (
              <Button
                type="button"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto opacity-0 pointer-events-none"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Anterior
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 