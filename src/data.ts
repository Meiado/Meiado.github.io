export const profile = {
  name: 'Gabriel Meiado',
  roles: ['Full Stack Developer', 'Java & Spring Boot', 'Sustentação de sistemas Java', 'Soluções com IA', 'TypeScript & Next.js'],
  tagline:
    'Desenvolvo e sustento sistemas em Java e Spring Boot, construo interfaces com TypeScript e Next.js e crio soluções com IA para automação de testes web, com foco em qualidade e performance.',
  about: [
    'Desenvolvedor na Vericode e bacharel em Sistemas de Informação pela Unoeste. Atuo no desenvolvimento e na sustentação de projetos Java e Spring Boot, de APIs e orquestradores a ferramentas internas, e também construo interfaces com Next.js e TypeScript.',
    'No dia a dia também trabalho com Kubernetes: nosso ambiente e as alterações nele são aplicados via kubectl. Meu trabalho inclui soluções com IA, como a automação de cenários web com Playwright MCP no Jetdata, plataforma de testes de capacidade e certificação desenvolvida em parceria com a B3. Tenho ainda uma base em testes funcionais e não funcionais, que reflete na qualidade e na escalabilidade do que entrego. Fora do código, gosto de games, leitura e streams.',
  ],
  links: {
    github: 'https://github.com/Meiado',
    linkedin: 'https://www.linkedin.com/in/meiado',
    email: 'mailto:gabrielmeiado20@gmail.com',
  },
}

export type Project = {
  title: string
  period: string
  contribution?: string
  description?: string
  points?: string[]
  tags: string[]
  href?: string
}

export const workProjects: Project[] = [
  {
    title: 'Jetdata Automation IA',
    period: 'fev 2026 — atual',
    contribution:
      'Persistência e orquestração de cenários Playwright entre os serviços do Jetdata, decomposição do monólito de automação herdado em um componente baseado em MCP, host de sessões remotas de navegador e a interface Builder.',
    description:
      'Plataforma de automação inteligente de cenários de teste para certificação de sistemas de pós-negociação conectados à B3, focada no SINACOR (web e desktop legado). Combina arquitetura MCP e IA generativa: o usuário descreve o cenário em linguagem natural e a IA interpreta, gera o script e executa de ponta a ponta.',
    points: [
      'Cinco formas de criar cenários, todas alimentando o mesmo fluxo de persistência e execução: importar scripts Playwright, descrever em linguagem natural, importar planilhas, inserir manualmente ou construir de forma guiada por chat com visão ao vivo do navegador.',
      'Reduz o tempo e o conhecimento de programação necessários, para perfis técnicos e não técnicos.',
    ],
    tags: ['Java', 'Spring Boot', 'Next.js', 'TypeScript', 'Playwright', 'MCP', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Jetdata 2.0 — SaaS B3 | CVM 35',
    period: 'abr 2025 — atual',
    contribution: 'Orquestrador de módulos SINACOR e relatório final de execução automatizado.',
    description:
      'Evolução do Jetdata para um SaaS completo que automatiza a certificação de desempenho exigida pela Resolução CVM 35, para instituições conectadas à B3. Elimina o fluxo manual de geração de dados de teste, coleta de métricas, validação de ambiente e produção de relatórios.',
    points: [
      'Relatório final automatizado: antes montado à mão em Word, agora gerado por scripts que descrevem a infraestrutura OCI e renderizam as evidências como imagens, montam gráficos do histórico, capturam a execução no Grafana, preenchem o template e avaliam cada indicador como aprovado ou reprovado.',
      'Resultado: relatório gerado em cerca de 1 minuto, em vez de 1 a 3 semanas de trabalho manual.',
    ],
    tags: ['Java', 'Spring Boot', 'Apache POI', 'JFreeChart', 'Grafana API', 'Prometheus', 'Oracle Cloud'],
  },
  {
    title: 'Browser Session Host',
    period: 'set 2026 — atual',
    description:
      'Serviço de infraestrutura que controla um Chromium remoto por sessão. Começou como uma tentativa de criar uma versão web do Playwright codegen e virou o host de sessões do Jetdata Automation IA, para que o usuário acompanhe a sessão ao vivo e construa cenários com orientação.',
    points: [
      'Cada sessão abre uma página Chromium headless e transmite a tela em tempo real para um canvas, repassando mouse, teclado e scroll por WebSocket.',
      'Expõe o mesmo navegador a clientes externos via Playwright MCP (Streamable HTTP), com um processo MCP por sessão conectado por CDP.',
      'Incorporável por iframe, protegido por tokens JWT de curta duração vinculados a cada sessão.',
      'Encerra sessões de forma explícita, ao fechar a página ou por inatividade sem espectadores.',
      'Fronteira clara: o serviço só hospeda o navegador, e o motor de automação decide quais ações executar e quais cenários persistir.',
    ],
    tags: ['Node.js', 'TypeScript', 'Next.js', 'Chromium (CDP)', 'Playwright MCP', 'WebSocket', 'JWT'],
  },
  {
    title: 'SINACOR Module Orchestrator',
    period: 'jul 2025 — atual',
    description:
      'Serviço que orquestra os módulos do SINACOR necessários aos testes de capacidade do Jetdata 2.0, substituindo o processo manual de abrir e fechar módulos.',
    points: [
      'Fluxos de abertura, reabertura e fechamento escolhidos pelo estado de cada módulo e pela etapa do teste, respeitando a ordem de abertura entre módulos relacionados.',
      'Combina chamadas síncronas com verificações assíncronas paralelas e polling (CompletableFuture).',
      'Arquitetura em camadas (domínio, aplicação, infraestrutura), com mocks por perfil para desenvolvimento local.',
      'Adaptado depois para uma POC de cliente fora do SaaS e migrado para virtual threads do Java 21.',
      'Resultado: não é mais preciso acessar o SINACOR e abrir os módulos um a um, pois os fluxos rodam por chamadas de API.',
    ],
    tags: ['Java 21', 'Spring Boot 3.5', 'REST', 'Oracle JDBC'],
  },
  {
    title: 'Internal SRE Report Builder',
    period: 'fev 2026 — mai 2026',
    contribution: 'Desenvolvi a ferramenta de ponta a ponta e hoje presto suporte a quem a mantém.',
    description:
      'Ferramenta interna que produz os relatórios operacionais de um cliente do mercado de energia, antes montados à mão em PowerPoint.',
    points: [
      'Front-end em Next.js e React que reproduz fielmente o layout original, preenchido automaticamente com dados do Grafana. A única área editável são as observações.',
      'API Spring Boot (Java 21) que consolida métricas de datasources do Grafana (New Relic via NRQL e AWS Athena via SQL) em relatórios intradiários, semanais e mensais, com persistência H2, cache e rate limiting.',
      'Pipelines de CI/CD com GitHub Actions, depois migradas pelo time para o Bitbucket, e exportação do relatório final em PDF.',
      'Resultado: todos os dados do relatório vêm de uma única requisição à API do Grafana, no lugar da coleta manual e da montagem em PowerPoint.',
    ],
    tags: ['Java 21', 'Spring Boot', 'Next.js', 'React', 'TypeScript', 'Recharts', 'Grafana', 'New Relic', 'AWS Athena', 'GitHub Actions'],
  },
  {
    title: 'Custom Grafana Panel Plugin',
    period: 'nov 2025 — dez 2025',
    description:
      'Plugin de painel para o Grafana com gráficos bidimensionais de eixos intercambiáveis, criado para um cliente de observabilidade e SRE que precisava ver várias séries Y contra um único X na vertical, algo que o painel nativo não suporta. Publicado como open source.',
    tags: ['Grafana plugin SDK', 'TypeScript', 'React'],
    href: 'https://github.com/vericode-io/vericode-custom-xychart',
  },
]

export const personalProjects: Project[] = [
  {
    title: 'Projeto ATOP API',
    period: 'faculdade',
    description:
      'API RESTful em Spring Boot desenvolvida em equipe durante a faculdade, com perfis de cidadão e administrador. Containerizada com Docker e publicada no Google Cloud Run.',
    tags: ['Java', 'Spring Boot', 'MongoDB', 'Docker', 'Google Cloud Run'],
    href: 'https://github.com/HumbertoStuani/projetoatop-api',
  },
  {
    title: 'TaskFlow',
    period: 'faculdade',
    description: 'Gerenciador de tarefas full stack com frontend em Vue.js e backend próprio.',
    tags: ['Vue.js', 'TypeScript', 'REST'],
    href: 'https://github.com/Meiado/taskflow',
  },
]

export const experience = [
  {
    role: 'IT Trainee',
    company: 'Vericode',
    period: 'jan 2026 — atual',
    summary:
      'Jetdata, plataforma da Vericode construída com a B3 para automatizar testes de capacidade e a certificação de corretoras. Atuo no desenvolvimento e na sustentação de serviços Java e Spring Boot e em soluções com IA, principalmente a automação de cenários web com Playwright MCP.',
    points: [
      'Rotina com Kubernetes: todo o ambiente e suas alterações são aplicados via kubectl.',
      'Jetdata Automation IA: persistência e orquestração de cenários, componente MCP e interface Builder.',
      'Browser Session Host para visualização ao vivo e construção guiada de cenários.',
      'Internal SRE Report Builder, ferramenta de relatórios de ponta a ponta.',
    ],
    skills: ['Java', 'Spring Boot', 'Next.js', 'TypeScript', 'Playwright', 'MCP', 'Node.js', 'Kubernetes'],
  },
  {
    role: 'IT Intern',
    company: 'Vericode',
    period: 'fev 2025 — dez 2025',
    summary: 'Entrei no projeto Jetdata 2.0 e fui efetivado ao fim do programa de estágio.',
    points: [
      'Relatório final de execução automatizado e orquestrador de módulos SINACOR.',
      'Plugin de painel para o Grafana, publicado como open source.',
      'Trilhas de formação em testes funcionais e não funcionais, Docker e computação em nuvem.',
    ],
    skills: ['Java', 'Spring Boot', 'Apache POI', 'Grafana plugin SDK', 'TypeScript', 'REST', 'OCI'],
  },
  {
    role: 'Full Stack Development Intern',
    company: 'iBati',
    period: 'set 2024 — fev 2025',
    summary:
      'Plataforma de gestão de sinistros que faz a mediação entre reclamantes, empresas e seguradoras. Atuei no full stack, principalmente em manutenção e suporte.',
    points: [
      'Conduzi minha entrega final: migração de banco que unificou registros de várias tabelas em uma só, reescrevendo as consultas SQL dependentes.',
      'Atualizei o front end para o novo modelo de dados, com novos componentes e renovação visual.',
      'Corrigi bugs e mantive a plataforma estável em produção.',
    ],
    skills: ['TypeScript', 'SolidJS', 'PHP', 'MySQL', 'SQL', 'Docker'],
  },
]

export const education = [
  { title: 'Bacharelado em Sistemas de Informação', place: 'Unoeste', period: '2022 — 2025' },
  { title: 'ICPC South America/Brazil Finals 2022', place: 'Menção Honrosa', period: '2022' },
  { title: 'Arquitetura de Software & Design de Sistemas Modernos', place: 'Udemy', period: 'certificação' },
  { title: 'Introduction to Kubernetes (LFS158)', place: 'Linux Foundation', period: 'certificação' },
]

export const roadmap = {
  intro:
    'Estou aprofundando meus estudos em arquitetura de software com Java e Spring, em busca de oportunidades em que decisões de design e qualidade técnica impactem diretamente o produto.',
  items: [
    { title: 'Microsserviços com Java e Spring Boot', note: 'Já aplico no dia a dia, agora estudando de forma estruturada.' },
    { title: 'Design patterns', note: 'Padrões de projeto e quando usá-los.' },
    { title: 'System design', note: 'Boas práticas de desenho de sistemas escaláveis.' },
    { title: 'Arquitetura de Software & Design de Sistemas Modernos', note: 'Certificação concluída na Udemy.' },
  ],
}
