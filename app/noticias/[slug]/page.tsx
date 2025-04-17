"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  CalendarIcon,
  ArrowLeft,
  MessageSquare,
  ThumbsUp,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  User,
} from "lucide-react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"


const noticias = [
  {
    id: 1,
    slug: "nova-parceria-estrategica",
    titulo: "Nova Parceria Estratégica Anunciada",
    resumo:
      "Nossa cooperativa firmou uma nova parceria estratégica que trará benefícios significativos para todos os membros, ampliando oportunidades de negócio e desenvolvimento.",
    conteudo: `
      <p>É com grande satisfação que anunciamos nossa nova parceria estratégica com a Empresa Alpha, líder no setor de tecnologia sustentável. Esta colaboração representa um marco importante para nossa cooperativa e trará benefícios significativos para todos os nossos membros.</p>
      
      <p>A parceria, formalizada na última semana após meses de negociação, tem como objetivo principal unir forças para desenvolver soluções tecnológicas inovadoras voltadas especificamente para o setor cooperativista, com foco em sustentabilidade e eficiência operacional.</p>
      
      <h3>Benefícios para os Membros</h3>
      
      <p>Entre os principais benefícios que esta parceria trará para nossos cooperados, destacam-se:</p>
      
      <ul>
        <li>Acesso a tecnologias de ponta com condições especiais</li>
        <li>Programas de capacitação exclusivos</li>
        <li>Consultoria especializada em implementação tecnológica</li>
        <li>Desenvolvimento de soluções personalizadas para necessidades específicas</li>
      </ul>
      
      <p>"Esta parceria representa um passo importante em nossa estratégia de inovação e modernização. Estamos comprometidos em oferecer aos nossos membros as melhores ferramentas e oportunidades para que possam prosperar em um mercado cada vez mais competitivo e tecnológico", afirmou Junior José, Diretor Presidente da cooperativa.</p>
      
      <h3>Próximos Passos</h3>
      
      <p>Nos próximos meses, realizaremos uma série de workshops e apresentações para detalhar todas as oportunidades que surgirão a partir desta parceria. O calendário completo será divulgado em breve em nosso site e enviado por e-mail a todos os cooperados.</p>
      
      <p>Fique atento às nossas comunicações e não perca a oportunidade de ser um dos primeiros a se beneficiar desta importante iniciativa.</p>
    `,
    imagem: "/placeholder.svg?height=400&width=600",
    categoria: "Parcerias",
    autor: "Equipe de Comunicação",
    data: new Date(2025, 3, 15), 
    destaque: true,
    tags: ["parceria", "tecnologia", "inovação", "desenvolvimento"],
  },
  {
    id: 2,
    slug: "programa-capacitacao-2025",
    titulo: "Programa de Capacitação 2025",
    resumo:
      "Estão abertas as inscrições para o novo programa de capacitação que oferecerá cursos em diversas áreas para desenvolvimento profissional dos cooperados.",
    conteudo: `
      <p>Temos o prazer de anunciar que estão abertas as inscrições para o Programa de Capacitação 2025, uma iniciativa que visa promover o desenvolvimento profissional contínuo de nossos cooperados e colaboradores.</p>
      
      <p>O programa deste ano foi cuidadosamente elaborado para atender às necessidades atuais do mercado e às demandas específicas identificadas em nossa última pesquisa interna de necessidades de treinamento.</p>
      
      <h3>Cursos Disponíveis</h3>
      
      <p>O Programa de Capacitação 2025 oferecerá cursos nas seguintes áreas:</p>
      
      <ul>
        <li><strong>Gestão e Liderança:</strong> Desenvolvimento de habilidades gerenciais e formação de líderes cooperativistas</li>
        <li><strong>Tecnologia e Inovação:</strong> Ferramentas digitais, análise de dados e transformação digital</li>
        <li><strong>Sustentabilidade:</strong> Práticas sustentáveis aplicadas ao negócio e certificações ambientais</li>
        <li><strong>Marketing e Vendas:</strong> Estratégias de marketing digital e técnicas avançadas de vendas</li>
        <li><strong>Finanças e Contabilidade:</strong> Gestão financeira, análise de investimentos e contabilidade para cooperativas</li>
      </ul>
      
      <h3>Metodologia</h3>
      
      <p>Os cursos serão oferecidos em formato híbrido, combinando encontros presenciais e módulos online, permitindo maior flexibilidade e alcance. Todos os participantes terão acesso a uma plataforma exclusiva de aprendizado, com materiais complementares, exercícios práticos e fóruns de discussão.</p>
      
      <h3>Inscrições</h3>
      
      <p>As inscrições podem ser realizadas através da Área do Cooperado em nosso site ou diretamente em nossa sede administrativa. O prazo para inscrições vai até 30 de abril de 2025, com início das atividades previsto para maio.</p>
      
      <p>Cooperados têm prioridade nas vagas e condições especiais de pagamento, incluindo possibilidade de parcelamento e subsídios para determinados cursos.</p>
      
      <p>Não perca esta oportunidade de investir em seu desenvolvimento profissional e fortalecer ainda mais nossa cooperativa através da qualificação contínua.</p>
    `,
    imagem: "/placeholder.svg?height=400&width=600",
    categoria: "Educação",
    autor: "Departamento de Educação Cooperativa",
    data: new Date(2025, 3, 10), // 10 de Abril de 2025
    destaque: false,
    tags: ["capacitação", "educação", "desenvolvimento profissional", "cursos"],
  },
  {
    id: 3,
    slug: "assembleia-geral-anual",
    titulo: "Assembleia Geral Anual",
    resumo:
      "A Assembleia Geral Anual será realizada no próximo mês. Confira a pauta e como participar deste importante momento de decisões coletivas.",
    conteudo: `
      <p>Convocamos todos os cooperados para a Assembleia Geral Anual, que será realizada no dia 20 de maio de 2025, às 14h, em primeira convocação, e às 14h30, em segunda convocação, no Auditório Principal da nossa sede.</p>
      
      <p>A Assembleia Geral é o momento mais importante de exercício da democracia cooperativista, onde cada membro tem voz ativa nas decisões que moldarão o futuro da nossa organização.</p>
      
      <h3>Pauta da Assembleia</h3>
      
      <ol>
        <li>Prestação de contas do exercício 2024, compreendendo:
          <ul>
            <li>Relatório de gestão</li>
            <li>Balanço patrimonial</li>
            <li>Demonstrativo de resultados</li>
            <li>Parecer do Conselho Fiscal</li>
          </ul>
        </li>
        <li>Destinação das sobras ou rateio das perdas</li>
        <li>Eleição e posse dos membros do Conselho Fiscal</li>
        <li>Apresentação e aprovação do Plano de Trabalho para 2025-2026</li>
        <li>Fixação do valor dos honorários da Diretoria e cédulas de presença do Conselho Fiscal</li>
        <li>Assuntos gerais de interesse da cooperativa</li>
      </ol>
      
      <h3>Participação</h3>
      
      <p>Para participar com direito a voto, o cooperado deve estar em dia com suas obrigações junto à cooperativa, conforme previsto em nosso Estatuto Social. A identificação será realizada na entrada do auditório, mediante apresentação de documento oficial com foto.</p>
      
      <p>Para aqueles que não puderem comparecer presencialmente, disponibilizaremos transmissão ao vivo pela internet, com possibilidade de participação remota nas votações através de nossa plataforma digital segura. As instruções de acesso serão enviadas por e-mail aos cooperados cadastrados.</p>
      
      <h3>Documentação</h3>
      
      <p>Todos os documentos que serão apreciados na Assembleia estarão disponíveis para consulta prévia na Área do Cooperado em nosso site a partir do dia 20 de abril de 2025, permitindo que todos possam analisar as informações com antecedência.</p>
      
      <p>Contamos com a participação de todos para este importante momento de decisões coletivas que definirão os rumos da nossa cooperativa para o próximo período.</p>
    `,
    imagem: "/placeholder.svg?height=400&width=600",
    categoria: "Institucional",
    autor: "Conselho Administrativo",
    data: new Date(2025, 3, 5), // 5 de Abril de 2025
    destaque: true,
    tags: ["assembleia", "governança", "participação", "decisões coletivas"],
  },
  {
    id: 4,
    slug: "resultados-financeiros-primeiro-trimestre",
    titulo: "Resultados Financeiros do Primeiro Trimestre",
    resumo:
      "Confira os resultados financeiros do primeiro trimestre de 2025, que demonstram crescimento sustentável e solidez da nossa cooperativa.",
    conteudo: `
      <p>É com satisfação que compartilhamos os resultados financeiros do primeiro trimestre de 2025, que demonstram a continuidade do crescimento sustentável e a solidez da nossa cooperativa, mesmo em um cenário econômico desafiador.</p>
      
      <h3>Destaques do Trimestre</h3>
      
      <p>No período de janeiro a março de 2025, alcançamos os seguintes resultados:</p>
      
      <ul>
        <li>Crescimento de 15% na receita operacional em comparação ao mesmo período do ano anterior</li>
        <li>Aumento de 12% no número de cooperados ativos</li>
        <li>Expansão de 8% na carteira de serviços oferecidos</li>
        <li>Redução de 7% nos custos operacionais devido à implementação de processos mais eficientes</li>
        <li>Investimento de R$ 1,2 milhão em projetos de inovação e sustentabilidade</li>
      </ul>
      
      <h3>Análise Setorial</h3>
      
      <p>Os setores que apresentaram melhor desempenho foram:</p>
      
      <ol>
        <li><strong>Serviços Financeiros:</strong> crescimento de 18% nas operações de crédito para cooperados</li>
        <li><strong>Consultoria Especializada:</strong> aumento de 16% na demanda por serviços de consultoria</li>
        <li><strong>Capacitação e Treinamento:</strong> expansão de 14% no número de participantes em programas educacionais</li>
      </ol>
      
      <h3>Perspectivas</h3>
      
      <p>Para os próximos trimestres, mantemos nossas projeções de crescimento, com foco especial nos seguintes aspectos:</p>
      
      <ul>
        <li>Ampliação da presença digital, com lançamento de novas ferramentas online para cooperados</li>
        <li>Expansão geográfica, com abertura de dois novos pontos de atendimento</li>
        <li>Desenvolvimento de novos produtos e serviços alinhados às necessidades identificadas em pesquisas com cooperados</li>
      </ul>
      
      <p>"Os resultados do primeiro trimestre confirmam a eficácia do nosso planejamento estratégico e o compromisso de toda a equipe com o crescimento sustentável da cooperativa. Seguimos confiantes em nossa capacidade de gerar valor para nossos cooperados e para a comunidade", afirmou Ana Silva, Diretora Financeira.</p>
      
      <p>O relatório financeiro completo está disponível para consulta na Área do Cooperado em nosso site.</p>
    `,
    imagem: "/placeholder.svg?height=400&width=600",
    categoria: "Financeiro",
    autor: "Departamento Financeiro",
    data: new Date(2025, 3, 2), // 2 de Abril de 2025
    destaque: false,
    tags: ["resultados", "financeiro", "crescimento", "transparência"],
  },
  {
    id: 5,
    slug: "projeto-sustentabilidade-reconhecimento",
    titulo: "Projeto de Sustentabilidade Recebe Reconhecimento Nacional",
    resumo:
      "Nosso projeto de implementação de práticas sustentáveis foi reconhecido como um dos mais inovadores do país no setor cooperativista.",
    conteudo: `
      <p>Com grande orgulho, anunciamos que nosso projeto "Cooperativa Sustentável" recebeu reconhecimento nacional ao ser premiado como uma das iniciativas mais inovadoras em sustentabilidade no setor cooperativista brasileiro.</p>
      
      <p>O prêmio foi concedido durante o 15º Fórum Nacional de Cooperativismo Sustentável, realizado na última semana em Brasília, que reuniu representantes de cooperativas de todo o país para discutir e compartilhar práticas de sustentabilidade.</p>
      
      <h3>Sobre o Projeto</h3>
      
      <p>O projeto "Cooperativa Sustentável", iniciado há dois anos, implementou uma série de ações integradas visando reduzir o impacto ambiental das operações da cooperativa e de seus cooperados, além de promover práticas sustentáveis em toda a cadeia produtiva.</p>
      
      <p>Entre as principais iniciativas do projeto, destacam-se:</p>
      
      <ul>
        <li>Implementação de sistema de energia solar em nossa sede e unidades regionais, reduzindo em 70% o consumo de energia da rede convencional</li>
        <li>Programa de gestão de resíduos com logística reversa, que já processou mais de 15 toneladas de materiais recicláveis</li>
        <li>Capacitação de cooperados em práticas sustentáveis, com mais de 500 participantes nos workshops realizados</li>
        <li>Desenvolvimento de linha de crédito especial para financiamento de projetos de sustentabilidade dos cooperados</li>
        <li>Programa de compensação de carbono, com o plantio de mais de 5.000 árvores nativas</li>
      </ul>
      
      <h3>Reconhecimento</h3>
      
      <p>Segundo a comissão julgadora do prêmio, o diferencial do nosso projeto foi a abordagem integrada e o envolvimento direto dos cooperados em todas as etapas, desde o planejamento até a implementação e monitoramento dos resultados.</p>
      
      <p>"Este reconhecimento é um motivo de orgulho para todos nós e confirma que estamos no caminho certo. A sustentabilidade não é apenas uma tendência, mas um compromisso fundamental para garantir o futuro das próximas gerações e a longevidade dos nossos negócios", afirmou Roberto Oliveira, Diretor de Operações e coordenador do projeto.</p>
      
      <h3>Próximos Passos</h3>
      
      <p>Para os próximos anos, o projeto prevê a expansão das iniciativas, com foco especial em:</p>
      
      <ul>
        <li>Implementação de sistema de certificação em sustentabilidade para cooperados</li>
        <li>Desenvolvimento de produtos e serviços com selo verde</li>
        <li>Ampliação do programa de educação ambiental para comunidades onde atuamos</li>
      </ul>
      
      <p>Agradecemos a todos os cooperados e colaboradores que contribuíram para o sucesso deste projeto e reafirmamos nosso compromisso com um modelo de negócio que equilibra resultados econômicos, responsabilidade social e preservação ambiental.</p>
    `,
    imagem: "/placeholder.svg?height=400&width=600",
    categoria: "Sustentabilidade",
    autor: "Comitê de Sustentabilidade",
    data: new Date(2025, 2, 25), // 25 de Março de 2025
    destaque: true,
    tags: ["sustentabilidade", "premiação", "meio ambiente", "inovação"],
  },
  {
    id: 6,
    slug: "nova-unidade-regional",
    titulo: "Inauguração da Nova Unidade Regional",
    resumo:
      "Inauguramos nossa nova unidade regional, ampliando nossa presença e melhorando o atendimento aos cooperados da região sul do estado.",
    conteudo: `
      <p>É com grande satisfação que anunciamos a inauguração da nossa nova unidade regional, localizada na cidade de Ribeirão Verde, que ampliará nossa presença e melhorará significativamente o atendimento aos cooperados da região sul do estado.</p>
      
      <p>A cerimônia de inauguração, realizada na última sexta-feira, contou com a presença de autoridades locais, membros do Conselho Administrativo, cooperados e colaboradores, marcando um momento importante de expansão da nossa cooperativa.</p>
      
      <h3>Estrutura e Serviços</h3>
      
      <p>A nova unidade foi construída seguindo conceitos modernos de arquitetura sustentável e conta com:</p>
      
      <ul>
        <li>Área total de 1.200m² em localização privilegiada no centro comercial da cidade</li>
        <li>Espaço de coworking exclusivo para cooperados</li>
        <li>Salas de reunião equipadas com tecnologia para videoconferências</li>
        <li>Auditório com capacidade para 120 pessoas para eventos e treinamentos</li>
        <li>Centro de atendimento integrado para todos os serviços da cooperativa</li>
        <li>Estacionamento amplo com estações para recarga de veículos elétricos</li>
      </ul>
      
      <p>Todos os serviços oferecidos em nossa sede estarão disponíveis na nova unidade, incluindo consultoria especializada, atendimento financeiro, capacitação e suporte técnico.</p>
      
      <h3>Impacto Regional</h3>
      
      <p>A nova unidade atenderá diretamente mais de 200 cooperados já estabelecidos na região e tem potencial para atrair novos membros, fortalecendo a presença da cooperativa e ampliando seu impacto positivo na economia local.</p>
      
      <p>"Esta inauguração representa um marco importante em nossa estratégia de expansão e descentralização. Queremos estar cada vez mais próximos dos nossos cooperados, entendendo suas necessidades específicas e oferecendo soluções personalizadas", afirmou Junior José, Diretor Presidente, durante a cerimônia de inauguração.</p>
      
      <h3>Horário de Funcionamento</h3>
      
      <p>A nova unidade funcionará de segunda a sexta-feira, das 8h às 18h, com plantão de atendimento aos sábados, das 9h às 13h.</p>
      
      <p>Convidamos todos os cooperados da região a conhecerem as novas instalações e a utilizarem os serviços disponíveis. Para marcar visitas ou obter mais informações, entre em contato pelo telefone (11) 1234-5678 ou pelo e-mail unidade.ribeiraoverde@cooperativa.com.br.</p>
    `,
    imagem: "/placeholder.svg?height=400&width=600",
    categoria: "Institucional",
    autor: "Departamento de Comunicação",
    data: new Date(2025, 2, 20), // 20 de Março de 2025
    destaque: false,
    tags: ["expansão", "atendimento", "infraestrutura", "desenvolvimento regional"],
  },
  {
    id: 7,
    slug: "dicas-gestao-financeira",
    titulo: "5 Dicas de Gestão Financeira para Pequenos Negócios",
    resumo:
      "Confira cinco dicas essenciais de gestão financeira que podem ajudar pequenos negócios a melhorar seus resultados e garantir sustentabilidade.",
    conteudo: `
      <p>Uma gestão financeira eficiente é fundamental para o sucesso e a longevidade de qualquer negócio, especialmente para empreendimentos de pequeno porte. Pensando nisso, preparamos cinco dicas essenciais que podem ajudar nossos cooperados a melhorar seus resultados financeiros e garantir a sustentabilidade de seus negócios.</p>
      
      <h3>1. Separe as Finanças Pessoais das Empresariais</h3>
      
      <p>Um dos erros mais comuns entre pequenos empreendedores é misturar as finanças pessoais com as do negócio. Esta prática dificulta o controle real dos resultados da empresa e pode levar a decisões equivocadas.</p>
      
      <p><strong>Dica prática:</strong> Abra uma conta bancária exclusiva para o negócio e estabeleça um pró-labore fixo para você, tratando-o como uma despesa regular da empresa.</p>
      
      <h3>2. Implemente um Sistema de Controle Financeiro</h3>
      
      <p>Manter registros detalhados de todas as entradas e saídas é essencial para entender o fluxo financeiro do seu negócio e identificar oportunidades de melhoria.</p>
      
      <p><strong>Dica prática:</strong> Utilize ferramentas digitais de gestão financeira, muitas delas disponíveis gratuitamente, para registrar todas as transações. Nossa cooperativa oferece um sistema exclusivo para cooperados com condições especiais.</p>
      
      <h3>3. Monitore e Controle Custos Regularmente</h3>
      
      <p>Conhecer detalhadamente os custos fixos e variáveis do seu negócio permite identificar onde é possível economizar sem comprometer a qualidade dos produtos ou serviços.</p>
      
      <p><strong>Dica prática:</strong> Faça uma revisão mensal de todos os custos e despesas, questionando se cada item é realmente necessário e se há alternativas mais econômicas.</p>
      
      <h3>4. Estabeleça uma Política de Preços Adequada</h3>
      
      <p>Definir preços corretamente é um desafio para muitos empreendedores. Preços muito baixos podem comprometer a rentabilidade, enquanto preços muito altos podem afastar clientes.</p>
      
      <p><strong>Dica prática:</strong> Calcule todos os custos envolvidos na produção ou prestação de serviço, adicione as despesas operacionais proporcionais e a margem de lucro desejada. Compare com o mercado e ajuste conforme necessário, sempre monitorando os resultados.</p>
      
      <h3>5. Planeje-se para Sazonalidades e Imprevistos</h3>
      
      <p>Muitos negócios enfrentam períodos de sazonalidade ou imprevistos que podem afetar significativamente o fluxo de caixa.</p>
      
      <p><strong>Dica prática:</strong> Crie um fundo de reserva equivalente a pelo menos três meses de despesas fixas. Além disso, desenvolva estratégias específicas para períodos de baixa demanda, como promoções especiais ou diversificação de produtos e serviços.</p>
      
      <h3>Apoio da Cooperativa</h3>
      
      <p>Lembramos que nossa cooperativa oferece consultoria financeira especializada para todos os cooperados. Nossos consultores podem ajudar a implementar estas e outras práticas de gestão financeira adaptadas à realidade específica do seu negócio.</p>
      
      <p>Para agendar uma consultoria ou obter mais informações sobre gestão financeira, entre em contato com nosso Departamento de Apoio ao Cooperado.</p>
      
      <p>Investir em uma gestão financeira eficiente não é apenas uma forma de evitar problemas, mas também uma estratégia para identificar oportunidades de crescimento e garantir a sustentabilidade do seu negócio a longo prazo.</p>
    `,
    imagem: "/placeholder.svg?height=400&width=600",
    categoria: "Dicas",
    autor: "Departamento Financeiro",
    data: new Date(2025, 2, 15), // 15 de Março de 2025
    destaque: false,
    tags: ["finanças", "gestão", "pequenos negócios", "dicas práticas"],
  },
  {
    id: 8,
    slug: "cooperativa-digital-transformacao",
    titulo: "Cooperativa Digital: Nossa Jornada de Transformação",
    resumo:
      "Conheça as iniciativas de transformação digital que estamos implementando para melhorar a experiência dos cooperados e aumentar a eficiência operacional.",
    conteudo: `
      <p>O mundo está em constante evolução tecnológica, e as cooperativas precisam acompanhar essas mudanças para continuar relevantes e eficientes. Neste artigo, compartilhamos nossa jornada de transformação digital e as iniciativas que estamos implementando para melhorar a experiência dos cooperados e aumentar nossa eficiência operacional.</p>
      
      <h3>Por que Transformação Digital?</h3>
      
      <p>A transformação digital não é apenas sobre adotar novas tecnologias, mas principalmente sobre repensar processos, cultura organizacional e a forma como nos relacionamos com nossos cooperados. Em um cenário de rápidas mudanças, a digitalização se torna essencial para:</p>
      
      <ul>
        <li>Melhorar a experiência dos cooperados, oferecendo mais conveniência e agilidade</li>
        <li>Aumentar a eficiência operacional, reduzindo custos e tempo em processos internos</li>
        <li>Possibilitar análises de dados mais precisas para tomada de decisões estratégicas</li>
        <li>Criar novos canais de comunicação e relacionamento</li>
        <li>Desenvolver produtos e serviços inovadores alinhados às necessidades atuais</li>
      </ul>
      
      <h3>Nossas Iniciativas</h3>
      
      <p>Nos últimos dois anos, implementamos diversas iniciativas como parte de nossa estratégia de transformação digital:</p>
      
      <h4>1. Nova Plataforma Digital para Cooperados</h4>
      
      <p>Lançamos uma plataforma digital completa que permite aos cooperados acessar todos os serviços da cooperativa de forma remota, incluindo:</p>
      
      <ul>
        <li>Área personalizada com dashboard de indicadores relevantes para cada perfil</li>
        <li>Solicitação e acompanhamento de serviços online</li>
        <li>Acesso a documentos e relatórios</li>
        <li>Participação em assembleias e votações virtuais</li>
        <li>Comunicação direta com equipes de suporte</li>
      </ul>
      
      <h4>2. Automação de Processos Internos</h4>
      
      <p>Implementamos soluções de automação para diversos processos internos, resultando em:</p>
      
      <ul>
        <li>Redução de 40% no tempo de processamento de solicitações</li>
        <li>Diminuição de 60% no uso de papel</li>
        <li>Maior precisão e rastreabilidade das informações</li>
      </ul>
      
      <h4>3. Análise de Dados e Inteligência de Negócio</h4>
      
      <p>Desenvolvemos um sistema de análise de dados que nos permite:</p>
      
      <ul>
        <li>Identificar tendências e oportunidades de mercado</li>
        <li>Personalizar ofertas de serviços conforme o perfil de cada cooperado</li>
        <li>Prever necessidades futuras e antecipar soluções</li>
        <li>Monitorar indicadores de desempenho em tempo real</li>
      </ul>
      
      <h4>4. Capacitação Digital</h4>
      
      <p>Reconhecemos que a transformação digital só é efetiva quando todos estão preparados para utilizá-la. Por isso, implementamos um programa contínuo de capacitação digital que inclui:</p>
      
      <ul>
        <li>Workshops e treinamentos presenciais e online</li>
        <li>Tutoriais e materiais de apoio em diversos formatos</li>
        <li>Suporte técnico dedicado para cooperados com menos familiaridade digital</li>
        <li>Comunidade online para troca de experiências e aprendizado colaborativo</li>
      </ul>
      
      <h3>Resultados Alcançados</h3>
      
      <p>Nossa jornada de transformação digital já apresenta resultados significativos:</p>
      
      <ul>
        <li>Aumento de 65% na satisfação dos cooperados com nossos serviços</li>
        <li>Redução de 30% nos custos operacionais</li>
        <li>Crescimento de 25% na adesão de novos cooperados</li>
        <li>Ampliação do alcance geográfico, com cooperados em regiões antes não atendidas</li>
      </ul>
      
      <h3>Próximos Passos</h3>
      
      <p>Nossa jornada de transformação digital continua, e para os próximos anos planejamos:</p>
      
      <ul>
        <li>Implementação de soluções baseadas em inteligência artificial para personalização de serviços</li>
        <li>Desenvolvimento de um ecossistema digital que integre cooperados, fornecedores e parceiros</li>
        <li>Expansão das possibilidades de participação remota em todas as atividades da cooperativa</li>
        <li>Criação de um hub de inovação para testar e desenvolver novas soluções digitais</li>
      </ul>
      
      <p>Acreditamos que a transformação digital, quando alinhada aos princípios cooperativistas, potencializa nossa capacidade de gerar valor para os cooperados e para a sociedade, mantendo nossa essência colaborativa enquanto nos adaptamos às demandas do mundo contemporâneo.</p>
      
      <p>Convidamos todos os cooperados a participarem ativamente desta jornada, compartilhando suas experiências, sugestões e necessidades para que possamos continuar evoluindo juntos.</p>
    `,
    imagem: "/placeholder.svg?height=400&width=600",
    categoria: "Tecnologia",
    autor: "Comitê de Inovação Digital",
    data: new Date(2025, 2, 10), // 10 de Março de 2025
    destaque: false,
    tags: ["transformação digital", "tecnologia", "inovação", "eficiência"],
  },
]


const getNoticiasRelacionadas = (noticia) => {
  return noticias
    .filter(
      (n) =>
        n.id !== noticia.id && (n.categoria === noticia.categoria || n.tags.some((tag) => noticia.tags.includes(tag))),
    )
    .slice(0, 3)
}


const getNoticiaPorSlug = (slug) => {
  return noticias.find((noticia) => noticia.slug === slug)
}

export default function NoticiaDetalhePage({ params }: { params: { slug: string } }) {
  const [comentario, setComentario] = useState("")
  const [comentarios, setComentarios] = useState([
    {
      id: 1,
      autor: "Maria Silva",
      texto: "Excelente notícia! Essa parceria trará muitos benefícios para todos os cooperados.",
      data: new Date(2025, 3, 16),
      likes: 5,
    },
    {
      id: 2,
      autor: "João Oliveira",
      texto: "Estou ansioso para participar dos workshops e conhecer mais sobre as oportunidades que surgirão.",
      data: new Date(2025, 3, 16),
      likes: 3,
    },
  ])

  const noticia = getNoticiaPorSlug(params.slug)
  const noticiasRelacionadas = noticia ? getNoticiasRelacionadas(noticia) : []

  if (!noticia) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Notícia não encontrada</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          A notícia que você está procurando não existe ou foi removida.
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
          <Link href="/noticias">Voltar para Notícias</Link>
        </Button>
      </div>
    )
  }

  const handleSubmitComentario = (e) => {
    e.preventDefault()
    if (comentario.trim()) {
      const novoComentario = {
        id: comentarios.length + 1,
        autor: "Você",
        texto: comentario,
        data: new Date(),
        likes: 0,
      }
      setComentarios([novoComentario, ...comentarios])
      setComentario("")
    }
  }

  const handleLike = (id) => {
    setComentarios(comentarios.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c)))
  }

  return (
    <div className="pt-24   => (c.id === id ? { ...c, likes: c.likes + 1 } : c)),
    )
  }

  return (
    <div className="pt-24 pb-16">
      {/* Header da página */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 py-12 mb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Button asChild variant="ghost" size="sm" className="mr-2">
              <Link href="/noticias">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Notícias
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-green-600 hover:bg-green-700">{noticia.categoria}</Badge>\
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{noticia.titulo}</h1>
            <diviv className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
              <CalendarIcon className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
              {format(noticia.data, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
              <span className="mx-2">•</span>
              <span>{noticia.autor}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo da Notícia */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm mb-8">
              <div className="relative h-80 w-full">
                <Image src={noticia.imagem || "/placeholder.svg"} alt={noticia.titulo} fill className="object-cover" />
              </div>
              <div className="p-8">
                <div
                  className="prose prose-green max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
                />

                <div className="flex flex-wrap gap-2 mt-8">
                  {noticia.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt={noticia.autor} />
                      <AvatarFallback>{noticia.autor.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{noticia.autor}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Publicado em {format(noticia.data, "dd/MM/yyyy")}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Curtir</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Share2 className="h-4 w-4" />
                      <span>Compartilhar</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Compartilhar */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Compartilhar</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="h-5 w-5 text-blue-600" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5 text-blue-400" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5 text-blue-700" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Mail className="h-5 w-5 text-gray-600" />
                </Button>
              </div>
            </div>

            {/* Comentários */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Comentários ({comentarios.length})
              </h3>

              <form onSubmit={handleSubmitComentario} className="mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>
                      <User className="h-6 w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <Textarea
                    placeholder="Deixe seu comentário..."
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    className="flex-1 bg-white dark:bg-gray-800"
                    rows={3}
                  />
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                    Comentar
                  </Button>
                </div>
              </form>

              <div className="space-y-6">
                {comentarios.map((comentario) => (
                  <div key={comentario.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{comentario.autor.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">{comentario.autor}</h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {format(comentario.data, "dd/MM/yyyy")}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{comentario.texto}</p>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-1"
                            onClick={() => handleLike(comentario.id)}
                          >
                            <ThumbsUp className="h-4 w-4" />
                            <span>{comentario.likes}</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-1"
                          >
                            <MessageSquare className="h-4 w-4" />
                            <span>Responder</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Lateral */}
          <div className="lg:col-span-1">
            {/* Notícias Relacionadas */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Notícias Relacionadas</h3>
              <div className="space-y-4">
                {noticiasRelacionadas.map((noticia) => (
                  <Card key={noticia.id} className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                          <Image src={noticia.imagem || "/placeholder.svg"} alt={noticia.titulo} fill className="object-cover" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white line-clamp-2 mb-1">
                            {noticia.titulo}
                          </h4>
                          <Link
                            href={`/noticias/${noticia.slug}`}
                            className="text-green-600 dark:text-green-400 text-sm hover:underline"
                          >
                            Ler mais
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Categorias */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm mb-8">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Categorias</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-sm">
                  <Link href="/noticias?categoria=institucional">Institucional</Link>
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Link href="/noticias?categoria=parcerias">Parcerias</Link>
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Link href="/noticias?categoria=educacao">Educação</Link>
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Link href="/noticias?categoria=financeiro">Financeiro</Link>
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Link href="/noticias?categoria=sustentabilidade">Sustentabilidade</Link>
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Link href="/noticias?categoria=tecnologia">Tecnologia</Link>
                </Badge>
                <Badge variant="outline" className="text-sm">
                  <Link href="/noticias?categoria=dicas">Dicas</Link>
                </Badge>
              </div>
            </div>

            {/* Tags Populares */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Tags Populares</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-sm">
                  #cooperativismo
                </Badge>
                <Badge variant="outline" className="text-sm">
                  #sustentabilidade
                </Badge>
                <Badge variant="outline" className="text-sm">
                  #inovação
                </Badge>
                <Badge variant="outline" className="text-sm">
                  #tecnologia
                </Badge>
                <Badge variant="outline" className="text-sm">
                  #educação
                </Badge>
                <Badge variant="outline" className="text-sm">
                  #finanças
                </Badge>
                <Badge variant="outline" className="text-sm">
                  #desenvolvimento
                </Badge>
                <Badge variant="outline" className="text-sm">
                  #parceria
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Fique por dentro de todas as novidades</h2>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Inscreva-se em nossa newsletter e receba as últimas notícias e atualizações diretamente em seu e-mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/noticias#newsletter">Inscrever-se na Newsletter</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20">
                <Link href="/noticias">Ver Mais Notícias</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
