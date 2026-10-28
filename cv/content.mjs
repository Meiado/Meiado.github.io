export const contact = {
  name: 'Gabriel Meiado',
  location: 'Presidente Prudente, SP',
  email: 'gabrielmeiado20@gmail.com',
  links: ['github.com/Meiado', 'linkedin.com/in/meiado', 'meiado.github.io'],
}

const education = [
  { title: 'Bacharelado em Sistemas de Informação', place: 'Unoeste', period: '2022 — 2025' },
  { title: 'Arquitetura de Software & Design de Sistemas Modernos', place: 'Udemy', period: 'certificação' },
  { title: 'Introduction to Kubernetes (LFS158)', place: 'Linux Foundation', period: 'certificação' },
  { title: 'ICPC South America/Brazil Finals 2022', place: 'Menção Honrosa', period: '2022' },
]

const ibati = {
  role: 'Full Stack Development Intern',
  company: 'iBati',
  period: 'set 2024 — fev 2025',
  points: [
    'Conduzi minha entrega final: migração de banco que unificou registros de várias tabelas em uma só, reescrevendo as consultas SQL dependentes.',
    'Atualizei o front end para o novo modelo de dados, com novos componentes e renovação visual.',
    'Corrigi bugs e mantive a plataforma estável em produção.',
  ],
  stack: 'TypeScript, SolidJS, PHP, MySQL, SQL, Docker',
}

const generalPt = {
  contact,
  headline: 'Desenvolvedor Full Stack | Java, Spring Boot, TypeScript e Next.js | Soluções com IA',
  summary:
    'Desenvolvedor na Vericode e bacharel em Sistemas de Informação pela Unoeste. Atuo no desenvolvimento e na sustentação de projetos Java e Spring Boot, de APIs e orquestradores a ferramentas internas, e também construo interfaces com Next.js e TypeScript. Trabalho com soluções com IA, como a automação de cenários web com Playwright MCP no Jetdata, plataforma de testes de capacidade e certificação desenvolvida em parceria com a B3. No dia a dia, o ambiente e as alterações nele são aplicados via Kubernetes (kubectl).',
  skills: [
    ['Back end', 'Java, Spring Boot, REST (Swagger), Node.js, Bun, TypeScript'],
    ['Front end', 'React, Next.js, Vue.js, TypeScript'],
    ['Dados', 'PostgreSQL, MongoDB, MySQL'],
    ['Infra e IA', 'Docker, Kubernetes, Google Cloud, Oracle Cloud, GitHub Actions, MCP, Playwright'],
  ],
  experience: [
    {
      role: 'IT Trainee',
      company: 'Vericode',
      period: 'jan 2026 — atual',
      points: [
        'Rotina com Kubernetes: todo o ambiente e suas alterações são aplicados via kubectl.',
        'Jetdata Automation IA (certificação de sistemas de pós-negociação da B3): persistência e orquestração de cenários Playwright, decomposição do monólito de automação em um componente baseado em MCP e interface Builder em Next.js.',
        'Browser Session Host: serviço que controla um Chromium remoto por sessão, com streaming em tempo real por WebSocket, Playwright MCP e acesso protegido por JWT.',
        'Internal SRE Report Builder: ferramenta de ponta a ponta (Next.js e Spring Boot) que gera relatórios operacionais a partir do Grafana, com exportação em PDF.',
      ],
      stack: 'Java, Spring Boot, Next.js, TypeScript, Node.js, Playwright, MCP, Kubernetes',
    },
    {
      role: 'IT Intern',
      company: 'Vericode',
      period: 'fev 2025 — dez 2025',
      points: [
        'Relatório final de execução automatizado do Jetdata 2.0: de 1–3 semanas de trabalho manual para cerca de 1 minuto.',
        'Orquestrador de módulos SINACOR (Java, Spring Boot): fluxos de abertura e fechamento por API, com chamadas síncronas e assíncronas em paralelo.',
        'Plugin de painel para o Grafana (TypeScript, React), publicado como open source.',
      ],
      stack: 'Java, Spring Boot, Apache POI, Grafana, TypeScript, Oracle Cloud',
    },
    ibati,
  ],
  projects: [
    'Custom Grafana Panel Plugin (open source): github.com/vericode-io/vericode-custom-xychart',
    'Projeto ATOP API (faculdade, em equipe): API REST em Spring Boot, MongoDB, Docker e Google Cloud Run.',
  ],
  education,
}

const vagaPt = {
  contact,
  headline: 'Desenvolvedor Full Stack | Java, Spring Boot, TypeScript e React/Next.js',
  summary:
    'Desenvolvedor Full Stack com atuação em Java e Spring Boot (APIs REST, orquestração de serviços e sustentação em produção) e em interfaces com React/Next.js e TypeScript, em contexto do mercado financeiro (certificação de sistemas conectados à B3). Rotina com Docker e Kubernetes (kubectl), pipelines de CI/CD com GitHub Actions e automação de cenários web com Playwright MCP. Busco evoluir em arquitetura de software, com estudos em microsserviços, design patterns e system design.',
  skills: [
    ['Back end', 'Java, Spring Boot, APIs REST (Swagger/OpenAPI), Node.js, TypeScript, programação assíncrona (CompletableFuture)'],
    ['Front end', 'React, Next.js, Vue.js, TypeScript'],
    ['Dados', 'PostgreSQL, MongoDB, MySQL, H2'],
    ['Infra e DevOps', 'Docker, Kubernetes (kubectl), GitHub Actions (CI/CD), Google Cloud, Oracle Cloud'],
    ['Qualidade', 'Automação de cenários web com Playwright MCP, arquitetura em camadas, mocks por perfil'],
  ],
  experience: [
    {
      role: 'IT Trainee',
      company: 'Vericode',
      period: 'jan 2026 — atual',
      points: [
        'Desenvolvimento e sustentação de serviços Java e Spring Boot em produção no Jetdata, plataforma desenvolvida com a B3.',
        'Operação diária em Kubernetes: todo o ambiente e suas alterações aplicados via kubectl.',
        'Decomposição do monólito de automação herdado em um componente baseado em MCP e orquestração de cenários Playwright entre serviços (persistência e execução).',
        'Serviço que controla um Chromium remoto por sessão, com streaming por WebSocket, acesso por iframe protegido por JWT de curta duração e integração com Playwright MCP.',
        'Interface Builder em Next.js e TypeScript para criação guiada de cenários, com visão ao vivo do navegador.',
        'Ferramenta interna de relatórios (Spring Boot e Next.js): API que consolida métricas do Grafana (New Relic via NRQL e AWS Athena via SQL) com cache e rate limiting, e pipelines de CI/CD com GitHub Actions.',
      ],
      stack: 'Java, Spring Boot, Next.js, React, TypeScript, Node.js, MongoDB, MySQL, Kubernetes, Docker',
    },
    {
      role: 'IT Intern',
      company: 'Vericode',
      period: 'fev 2025 — dez 2025',
      points: [
        'Orquestrador de módulos SINACOR (Java, Spring Boot, REST): fluxos escolhidos pelo estado e pela etapa do teste, chamadas síncronas e assíncronas em paralelo (CompletableFuture) e arquitetura em camadas (domínio, aplicação, infraestrutura).',
        'Automação do relatório final de execução do Jetdata 2.0 (Java, Apache POI, Grafana API, Prometheus, OCI): de 1–3 semanas para cerca de 1 minuto.',
        'Plugin de painel para o Grafana (TypeScript, React) para um cliente de observabilidade e SRE, publicado como open source.',
      ],
      stack: 'Java, Spring Boot, REST, Oracle JDBC, Grafana, TypeScript, Oracle Cloud',
    },
    ibati,
  ],
  projects: [
    'Projeto ATOP API (faculdade, em equipe): API REST em Spring Boot com MongoDB, containerizada com Docker e publicada no Google Cloud Run.',
    'Custom Grafana Panel Plugin (open source): github.com/vericode-io/vericode-custom-xychart',
  ],
  education,
}

const educationEn = [
  { title: "Bachelor's degree in Information Systems", place: 'Unoeste', period: '2022 — 2025' },
  { title: 'Software Architecture & Modern Systems Design', place: 'Udemy', period: 'certification' },
  { title: 'Introduction to Kubernetes (LFS158)', place: 'Linux Foundation', period: 'certification' },
  { title: 'ICPC South America/Brazil Finals 2022', place: 'Honorable Mention', period: '2022' },
]

const ibatiEn = {
  role: 'Full Stack Development Intern',
  company: 'iBati',
  period: 'Sep 2024 — Feb 2025',
  points: [
    'Led my final delivery: a database migration that consolidated records from several tables into a single one, rewriting the dependent SQL queries.',
    'Updated the front end to the new data model, with new components and a visual refresh.',
    'Fixed bugs and kept the platform stable in production.',
  ],
  stack: 'TypeScript, SolidJS, PHP, MySQL, SQL, Docker',
}

const generalEn = {
  contact,
  headline: 'Full Stack Developer | Java, Spring Boot, TypeScript and Next.js | AI Solutions',
  summary:
    "Developer at Vericode with a Bachelor's degree in Information Systems from Unoeste. I develop and maintain Java and Spring Boot projects, from APIs and orchestrators to internal tools, and I also build interfaces with Next.js and TypeScript. I work on AI solutions, such as web scenario automation with Playwright MCP at Jetdata, a capacity testing and certification platform built in partnership with B3. Day to day, our environment and every change to it are applied through Kubernetes (kubectl).",
  skills: [
    ['Back end', 'Java, Spring Boot, REST (Swagger), Node.js, Bun, TypeScript'],
    ['Front end', 'React, Next.js, Vue.js, TypeScript'],
    ['Data', 'PostgreSQL, MongoDB, MySQL'],
    ['Infra and AI', 'Docker, Kubernetes, Google Cloud, Oracle Cloud, GitHub Actions, MCP, Playwright'],
  ],
  experience: [
    {
      role: 'IT Trainee',
      company: 'Vericode',
      period: 'Jan 2026 — present',
      points: [
        'Daily work with Kubernetes: the whole environment and its changes are applied through kubectl.',
        'Jetdata Automation IA (certification of post-trade systems connected to B3): persistence and orchestration of Playwright scenarios, decomposition of the automation monolith into an MCP-based component, and a Next.js Builder interface.',
        'Browser Session Host: a service that controls a remote Chromium per session, with real-time WebSocket streaming, Playwright MCP, and JWT-protected access.',
        'Internal SRE Report Builder: an end-to-end tool (Next.js and Spring Boot) that produces operational reports from Grafana, with PDF export.',
      ],
      stack: 'Java, Spring Boot, Next.js, TypeScript, Node.js, Playwright, MCP, Kubernetes',
    },
    {
      role: 'IT Intern',
      company: 'Vericode',
      period: 'Feb 2025 — Dec 2025',
      points: [
        'Automated final execution report for Jetdata 2.0: from 1–3 weeks of manual work to about 1 minute.',
        'SINACOR module orchestrator (Java, Spring Boot): opening and closing flows through an API, with synchronous calls and parallel asynchronous calls.',
        'Grafana panel plugin (TypeScript, React), published as open source.',
      ],
      stack: 'Java, Spring Boot, Apache POI, Grafana, TypeScript, Oracle Cloud',
    },
    ibatiEn,
  ],
  projects: [
    'Custom Grafana Panel Plugin (open source): github.com/vericode-io/vericode-custom-xychart',
    'ATOP API Project (university, team project): REST API in Spring Boot, MongoDB, Docker and Google Cloud Run.',
  ],
  education: educationEn,
}

const vagaEn = {
  contact,
  headline: 'Full Stack Developer | Java, Spring Boot, TypeScript and React/Next.js',
  summary:
    'Full Stack Developer working with Java and Spring Boot (REST APIs, service orchestration and production support) and with React/Next.js and TypeScript interfaces, in the financial market context (certification of systems connected to B3). Daily work with Docker and Kubernetes (kubectl), CI/CD pipelines with GitHub Actions, and web scenario automation with Playwright MCP. I am growing toward software architecture, studying microservices, design patterns and system design.',
  skills: [
    ['Back end', 'Java, Spring Boot, REST APIs (Swagger/OpenAPI), Node.js, TypeScript, asynchronous programming (CompletableFuture)'],
    ['Front end', 'React, Next.js, Vue.js, TypeScript'],
    ['Data', 'PostgreSQL, MongoDB, MySQL, H2'],
    ['Infra and DevOps', 'Docker, Kubernetes (kubectl), GitHub Actions (CI/CD), Google Cloud, Oracle Cloud'],
    ['Quality', 'Web scenario automation with Playwright MCP, layered architecture, profile-based mocks'],
  ],
  experience: [
    {
      role: 'IT Trainee',
      company: 'Vericode',
      period: 'Jan 2026 — present',
      points: [
        'Development and production support of Java and Spring Boot services at Jetdata, a platform built with B3.',
        'Daily Kubernetes operations: the whole environment and its changes applied through kubectl.',
        'Decomposition of the inherited automation monolith into an MCP-based component and orchestration of Playwright scenarios across services (persistence and execution).',
        'Service that controls a remote Chromium per session, with WebSocket streaming, iframe embedding protected by short-lived JWT, and Playwright MCP integration.',
        'Builder interface in Next.js and TypeScript for guided scenario creation, with a live browser view.',
        'Internal reporting tool (Spring Boot and Next.js): an API that consolidates Grafana metrics (New Relic via NRQL and AWS Athena via SQL) with caching and rate limiting, plus CI/CD pipelines with GitHub Actions.',
      ],
      stack: 'Java, Spring Boot, Next.js, React, TypeScript, Node.js, MongoDB, MySQL, Kubernetes, Docker',
    },
    {
      role: 'IT Intern',
      company: 'Vericode',
      period: 'Feb 2025 — Dec 2025',
      points: [
        'SINACOR module orchestrator (Java, Spring Boot, REST): flows chosen by module state and test stage, synchronous and parallel asynchronous calls (CompletableFuture), and layered architecture (domain, application, infrastructure).',
        'Automation of the Jetdata 2.0 final execution report (Java, Apache POI, Grafana API, Prometheus, OCI): from 1–3 weeks to about 1 minute.',
        'Grafana panel plugin (TypeScript, React) for an observability and SRE client, published as open source.',
      ],
      stack: 'Java, Spring Boot, REST, Oracle JDBC, Grafana, TypeScript, Oracle Cloud',
    },
    ibatiEn,
  ],
  projects: [
    'ATOP API Project (university, team project): REST API in Spring Boot with MongoDB, containerized with Docker and deployed to Google Cloud Run.',
    'Custom Grafana Panel Plugin (open source): github.com/vericode-io/vericode-custom-xychart',
  ],
  education: educationEn,
}

export const cvs = [
  { file: 'cv-gabriel-meiado-pt.pdf', lang: 'pt', site: true, data: generalPt },
  { file: 'cv-gabriel-meiado-en.pdf', lang: 'en', site: true, data: generalEn },
  { file: 'cv-gabriel-meiado-fullstack-pleno-pt.pdf', lang: 'pt', site: false, data: vagaPt },
  { file: 'cv-gabriel-meiado-fullstack-pleno-en.pdf', lang: 'en', site: false, data: vagaEn },
]
