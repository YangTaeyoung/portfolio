import { Experience, Project, Skill, OpenSource, Contact } from '@/types';

export const personalInfo = {
  name: '양태영',
  title: '4년차 풀스택 엔지니어',
  subtitle: '빠른 속도의 스타트업과 Java·Python·Go 현업 경험으로 무장한 엔지니어',
  bio: `안녕하세요. 빠른 속도의 스타트업과 Java·Python·Go 현업 경험으로 무장한 4년차 엔지니어 양태영입니다.
기술의 장단을 고려해 상황에 따라 사용하는 능력, 어떤 환경에서도 유연하게 적응하는 능력을 길렀습니다.
이 과정에서, 안정성과 확장성을 함께 고려한 설계가 제품도 개발자도 빠르게 성장시킨다는 것을 배웠습니다.
성장하는 팀에서 기술적 책임을 지고, 더 나은 서비스와 이를 위한 개발 환경을 함께 만들어 가고 싶습니다.`
};

export const strengths = [
  {
    title: '성능 / 비용 최적화',
    description: '신규 기술 도입, 기존 시스템 개선 MTTR·리드타임·배포시간 최적화 및 최대 Jenkins 비용 100% 절감',
    icon: 'TrendingUp'
  },
  {
    title: '자동화 · 효율화',
    description: '반복 업무를 CLI 도구로 자동화 전사 백엔드 생산성 향상',
    icon: 'Zap'
  },
  {
    title: '서버 개발',
    description: 'Java/Spring, Go 기반 API · 백엔드 서비스 구축',
    icon: 'Server'
  },
  {
    title: '이벤트 기반 아키텍처',
    description: 'RabbitMQ, AWS SQS로 비동기 메시징 시스템 설계·운영',
    icon: 'GitBranch'
  },
  {
    title: 'RDBMS',
    description: 'PostgreSQL · MySQL · Oracle - Oracle 온라인 강의 오픈',
    icon: 'Database'
  },
  {
    title: 'NoSQL',
    description: 'MongoDB - 30만+ SKU 실시간 동기화',
    icon: 'Archive'
  }
];

export const experiences: Experience[] = [
  {
    id: 'cowork',
    company: 'Cowork AI',
    position: '프리랜서 백엔드 엔지니어',
    period: '2025.02 - 2025.05',
    type: '프리랜서',
    achievements: [
      'Go, Echo, Gemini AI Agent로 사내 마케터를 위한 SEO 키워드 분석 전략 수립 콘텐츠 생성 자동화 웹 플랫폼 "랭크로켓" 프로토타입 7일 만에 제작',
      'JetBrains Junie AI + React · shadcn · Tanstack Query · Zustand 조합으로 프론트엔드 구현',
      'Hugo Theme, Imagen 3로 회사 홈페이지 리뉴얼(i18n 다국어 처리 포함)',
      'Go, sqlite_vec, Google Text Embedding, Gemini RAG 기반 이력서 수정·공고 매칭 플랫폼 구축',
      'playwright-go로 164개사 채용 사이트에서 5천 여 공고 크롤링 서버 구현·운영',
      'GCP Cloud Run + Cloud Scheduler로 컨테이너 배포·배치 프로세스 구성'
    ]
  },
  {
    id: 'illuminarian',
    company: '유한회사일루미나리안',
    position: '백엔드 엔지니어',
    period: '2024.04 - 2025.01',
    type: '정규직',
    achievements: [
      'OpenTelemetry + Grafana Tempo 도입, 필터에서 Trace ID·Span ID 자동 주입을 통해 에러 로그 Root-Cause 분석 시간 대폭 단축',
      'Grafana Alert + Slack 연동으로 백엔드 오류 탐지 시간 수초/수분 단위, MTTR 크게 개선',
      '전체 264개 API 클린 아키텍처 기반 개선',
      '레이어 분리(도메인·서비스·리포지터리)로 신규 기능 리드타임 35% 단축',
      'SonarQube 기술 부채 42%에서 18%로 절감',
      '배포 30분에서 7분으로 단축, MTTR기준 수 시간에서 수 분단위로 단축',
      'GitHub Actions + Self-hosted runner로 마이그레이션 & runner downtime을 고려한 Fail-over 설계',
      'Redis API 캐시 + SQS 큐로 MQ 아키텍처로 변경하면서 Locust 부하 테스트 평균 응답 1/9수준 개선'
    ]
  },
  {
    id: 'looko',
    company: '주식회사 룩코',
    position: '백엔드 엔지니어',
    period: '2022.08 - 2024.04',
    type: '정규직',
    achievements: [
      'AWS Secrets Manager 기반 비밀정보 통합 관리 시스템 구축, Lint 도입을 통해 배포 사고 0건 달성',
      '백엔드 컨벤션, 가이드 문서 작성을 통해 신규 인력 온보딩 기간을 4주에서 1주로 감축',
      'Go 통합 라이브러리 생성, 보일러 플레이트 코드 자동 생성 CLI 개발을 통해 신규 기능 개발시간 40% 감축',
      'FSM을 이용하여 RPS 100개 기준 안정적으로 요청을 핸들링 할 수 있는 이벤트 기반 동기화 시스템 구축',
      '웹훅을 통한 성능 개선을 통해 Polling 대비 8c/16gb 기준 80~90%의 CPU Load를 1/4 수준으로 비용 절감',
      'Mockery 라이브러리를 활용하여 레이어별 유닛 테스트 작성을 의무화하여 테스트 커버리지 70% 유지'
    ],
    techStack: ['Go', 'MongoDB', 'RabbitMQ', 'FSM', 'Docker', 'AWS']
  },
  {
    id: '2digit',
    company: '주식회사투디지트',
    position: '백엔드 엔지니어',
    period: '2022.04 - 2022.07',
    type: '정규직',
    achievements: [
      'TradingView JS로 주가 차트 페이지를 제작하고 앱 WebView Import 가이드 작성',
      '기존 Raw SQL 기반 백오피스를 Django ORM기반으로 리팩터링',
      '공용 Form 클래스(Template Method)로 PUT·PATCH 지원',
      'GitHub Actions CI/CD 도입하여 기존 SSH 수동 배포를 자동화'
    ],
    techStack: ['Python', 'Django', 'PostgreSQL', 'TradingView', 'GitHub Actions']
  }
];

export const projects: Project[] = [
  {
    id: 'rankrocket',
    title: '랭크로켓 - SEO 키워드 분석 플랫폼',
    period: '2025.04',
    type: '백엔드',
    description: '사내 마케터를 위한 SEO 키워드 분석 전략 수립 콘텐츠 생성 자동화 웹 플랫폼',
    achievements: [
      'Go, Echo, Gemini AI Agent로 프로토타입 7일 만에 제작',
      '4일 내 서비스 홍보용 SEO 콘텐츠 13개 제작',
      'JetBrains Junie AI + React · shadcn · Tanstack Query · Zustand 조합으로 프론트엔드 구현'
    ],
    techStack: ['Go', 'Echo', 'Gemini AI', 'React', 'shadcn', 'Tanstack Query']
  },
  {
    id: 'careerfit',
    title: '커리어핏 - AI 이력서 헤드헌팅 서비스',
    period: '2025.02 - 2025.04',
    type: '백엔드',
    description: 'AI 기반 이력서 수정 및 채용 공고 매칭 플랫폼',
    achievements: [
      'Go, sqlite_vec, Google Text Embedding, Gemini RAG 기반 이력서 수정·공고 매칭 플랫폼 구축',
      'playwright-go로 164개사 채용 사이트에서 5천 여 공고 크롤링 서버 구현·운영',
      'GCP Cloud Run + Cloud Scheduler로 컨테이너 배포·배치 프로세스 구성'
    ],
    techStack: ['Go', 'sqlite_vec', 'Gemini RAG', 'GCP Cloud Run', 'playwright-go']
  },
  {
    id: 'energyshares',
    title: 'EnergyShares US - 클린 아키텍처 전환',
    period: '2024.04 - 2025.01',
    type: '백엔드 엔지니어',
    description: '미국 에너지 거래 플랫폼의 클린 아키텍처 전환 및 DevOps 고도화',
    achievements: [
      '전체 264개 API 클린 아키텍처 기반 개선',
      '레이어 분리로 신규 기능 리드타임 35% 단축',
      'SonarQube 기술 부채 42%에서 18%로 절감',
      '배포 30분에서 7분으로 단축',
      'Redis API 캐시 + SQS 큐로 Locust 부하 테스트 평균 응답 1/9수준 개선'
    ],
    techStack: ['Java', 'Spring Boot', 'Redis', 'AWS SQS', 'GitHub Actions']
  },
  {
    id: 'looko-platform',
    title: 'Looko AI 통합 이커머스 플랫폼',
    period: '2023.03 - 2024.04',
    type: '백엔드 엔지니어',
    description: '30만개 상품, 6만개 주문을 안정적으로 동기화하는 중고 의류 사업자를 위한 B2B 서비스',
    achievements: [
      'FSM을 이용하여 RPS 100개 기준 안정적으로 요청 핸들링',
      '웹훅을 통한 성능 개선으로 CPU Load 1/4 수준으로 비용 절감',
      'Mockery 라이브러리를 활용하여 테스트 커버리지 70% 유지',
      'MongoDB lock을 이용하여 분산 환경에서의 물동량 조절 확보'
    ],
    techStack: ['Go', 'MongoDB', 'RabbitMQ', 'FSM', 'Docker']
  }
];

export const skills: Skill[] = [
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'Go', 'Echo', 'Python', 'Django', 'Node.js']
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Redis', 'sqlite_vec']
  },
  {
    category: 'DevOps',
    items: ['Docker', 'AWS', 'GCP', 'Jenkins', 'GitHub Actions', 'Grafana', 'OpenTelemetry']
  },
  {
    category: 'Message Queue',
    items: ['RabbitMQ', 'AWS SQS', 'Event-driven Architecture']
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'shadcn/ui']
  },
  {
    category: 'AI/ML',
    items: ['Gemini AI', 'RAG', 'Text Embedding', 'AI Agent']
  }
];

export const openSourceProjects: OpenSource[] = [
  {
    id: 'hugo-ai-translator',
    name: 'hugo-ai-translator',
    description: 'Hugo 기반 회사 홈페이지를 다국어로 번역하기 위한 자동 번역기',
    github: 'https://github.com/YangTaeyoung/hugo-ai-translator',
    language: 'Go'
  },
  {
    id: 'gombok',
    name: 'gombok',
    description: '보일러 플레이트 작성이 많은 Go 언어 특성상, 생성자 생성, Getter, Setter, Builder 등의 함수 코드를 자동생성하기 위한 프로젝트',
    github: 'https://github.com/YangTaeyoung/gombok',
    language: 'Go'
  },
  {
    id: 'aws-secret-gen',
    name: 'aws-secret-gen',
    description: '로컬이나 메신저로 공유하던 시크릿을 AWS Secrets Manager 기반 CLI로 대체하기 위한 프로젝트',
    github: 'https://github.com/YangTaeyoung/aws-secret-gen',
    language: 'Go'
  },
  {
    id: 'yaml-diff-reporter',
    name: 'yaml-diff-reporter',
    description: '두 YAML의 차이점을 비교하고 간단한 리포트를 제공하는 CLI 도구',
    github: 'https://github.com/YangTaeyoung/yaml-diff-reporter',
    language: 'Go'
  },
  {
    id: 'action-api-checker',
    name: 'action-api-checker',
    description: '배포 중 특정 API가 기대값과 맞을 때에만 다음 단계로 Pass 하도록 하는 GitHub Action',
    github: 'https://github.com/YangTaeyoung/action-api-checker',
    language: 'TypeScript'
  },
  {
    id: 'self-hosted-runner-online-checker',
    name: 'self-hosted-runner-online-checker',
    description: 'GitHub Actions에 등록한 Self-hosted runner의 상태를 알려주는 액션',
    github: 'https://github.com/YangTaeyoung/self-hosted-runner-online-checker',
    language: 'JavaScript'
  }
];

export const contact: Contact = {
  email: '0130yang@gmail.com',
  github: 'https://github.com/YangTaeyoung',
  blog: 'https://code-kirin.me/',
  phone: '+82-10-9691-1648'
};