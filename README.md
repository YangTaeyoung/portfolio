# 🚀 Yang Taeyoung Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11.0-FF0080?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

<br />

<div align="center">
  <h3>✨ 4년차 풀스택 엔지니어의 인터랙티브 포트폴리오 ✨</h3>
  <p>현대적인 웹 기술과 세련된 디자인으로 구현한 프로페셔널 포트폴리오</p>
</div>

<br />

<div align="center">
  <a href="https://portfolio.code-kirin.me" target="_blank">
    <img src="https://img.shields.io/badge/🔗_Live_Demo-000000?style=for-the-badge" alt="Portfolio" />
  </a>
  <a href="https://github.com/YangTaeyoung" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://code-kirin.me" target="_blank">
    <img src="https://img.shields.io/badge/Blog-FF5722?style=for-the-badge&logo=blogger&logoColor=white" alt="Blog" />
  </a>
</div>

---

## 📌 Overview

클라우드 기반 대용량 서비스 개발 경험과 다양한 기술 스택을 보유한 풀스택 엔지니어 양태영의 포트폴리오입니다. 
사용자 경험을 최우선으로 생각하며, 견고하고 확장 가능한 시스템 설계를 추구합니다.

### 🎯 Key Features

- **🌌 Space Theme Design** - 우주를 테마로 한 독특하고 몰입감 있는 비주얼
- **🎨 Glass Morphism UI** - 현대적인 글래스 모피즘 디자인 시스템
- **✨ Interactive Animations** - Framer Motion 기반 부드러운 인터랙션
- **🎭 Dynamic Cursor Effects** - 마우스 커서를 따라다니는 스텔라 이펙트
- **📱 Fully Responsive** - 모든 디바이스에서 완벽한 레이아웃
- **⚡ Optimized Performance** - Next.js Turbopack으로 초고속 로딩

---

## 🛠️ Tech Stack

### Frontend
```typescript
const techStack = {
  framework: ['Next.js 15.4.6', 'React 19.1.0'],
  language: ['TypeScript 5.0'],
  styling: ['Tailwind CSS 3.4.0', 'CSS Modules'],
  animation: ['Framer Motion 11.0'],
  optimization: ['Turbopack', 'Dynamic Imports', 'Code Splitting']
}
```

### Design System
- **Colors**: Violet → Purple → Cyan 그래디언트 팔레트
- **Typography**: Inter + Space Grotesk 폰트 조합
- **Effects**: Glass Morphism, Blur, Gradient Overlays
- **Animations**: Spring Physics, Smooth Transitions

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 이상
- Yarn 패키지 매니저

### Installation

```bash
# 저장소 클론
git clone https://github.com/YangTaeyoung/portfolio.git
cd portfolio

# 의존성 설치
yarn install

# 개발 서버 실행 (Turbopack)
yarn dev

# 프로덕션 빌드
yarn build

# 프로덕션 서버 실행
yarn start
```

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── app/                # Next.js 앱 라우터
│   │   ├── layout.tsx      # 루트 레이아웃
│   │   ├── page.tsx        # 메인 페이지
│   │   └── globals.css     # 글로벌 스타일
│   ├── components/         # React 컴포넌트
│   │   ├── Hero.tsx        # 히어로 섹션
│   │   ├── About.tsx       # 소개 섹션
│   │   ├── Experience.tsx  # 경력 섹션
│   │   ├── Skills.tsx      # 기술 스택
│   │   ├── Projects.tsx    # 프로젝트
│   │   ├── Contact.tsx     # 연락처
│   │   ├── StarryBackground.tsx  # 우주 배경
│   │   └── LensEffect.tsx  # 커서 이펙트
│   ├── data/
│   │   └── portfolio.ts    # 포트폴리오 데이터
│   └── types/
│       └── index.ts        # TypeScript 타입 정의
├── public/                 # 정적 파일
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

---

## 🎨 Design Highlights

### 🌟 Interactive Elements

#### Starry Background
- Canvas API로 구현한 반짝이는 별 애니메이션
- 동적 네뷸라 그래디언트 효과
- 유성 애니메이션

#### Stellar Cursor
- 마우스 위치 추적 스프링 애니메이션
- 8포인트 트레일 이펙트
- 회전하는 파티클 효과

#### Glass Cards
- 백드롭 블러와 보더 효과
- 호버시 그래디언트 변화
- 3D 트랜스폼 애니메이션
---

## 🏆 Key Achievements

- **🔥 대용량 트래픽 처리**: 동시접속 10만+ 게임 서버 운영
- **📈 성능 최적화**: API 응답시간 70% 개선
- **🛠️ 기술 리더십**: 신규 프로젝트 아키텍처 설계 주도
- **🌍 오픈소스 기여**: Gin, Fiber 등 주요 프로젝트 컨트리뷰터

---

## 📫 Contact

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="mailto:tyzz2366@gmail.com">
          <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/YangTaeyoung">
          <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
        </a>
      </td>
      <td align="center">
        <a href="https://code-kirin.me">
          <img src="https://img.shields.io/badge/Tech_Blog-FF5722?style=for-the-badge&logo=blogger&logoColor=white" alt="Blog" />
        </a>
      </td>
    </tr>
  </table>
</div>

---

## 📄 License

Copyright © 2024 Yang Taeyoung. All rights reserved.

이 포트폴리오는 개인 프로젝트이며, 소스 코드는 학습 목적으로 참고하실 수 있습니다.

---

<div align="center">
  <p>
    <strong>Built with 💜 by Yang Taeyoung</strong>
  </p>
  <p>
    <sub>Modern Web Technologies × Professional Design × Exceptional UX</sub>
  </p>
</div>