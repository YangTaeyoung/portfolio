'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { Icon } from '@iconify/react';

// React Icons - Simple Icons (si)
import { 
  SiGo, SiPython, SiSpringboot, SiDjango, SiFastapi,
  SiMongodb, SiPostgresql, SiMysql, SiRedis, SiElasticsearch, SiAmazondynamodb,
  SiDocker, SiKubernetes, SiTerraform, SiGithubactions, SiJenkins,
  SiApachekafka, SiRabbitmq,
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss,
  SiPytorch, SiScikitlearn, SiNumpy, SiPandas,
  SiGit, SiLinux, SiAmazon, SiGooglecloud,
  SiArgo, SiVuedotjs, SiGrafana, SiPrometheus,
  SiHtml5, SiCss3, SiOpenai, SiGraphql, SiNodedotjs,
  SiFlask, SiExpress, SiNestjs, SiGin, SiSwagger,
  SiApache, SiNginx, SiVercel, SiNetlify,
  SiFirebase, SiSupabase, SiAuth0, SiJsonwebtokens,
  SiBootstrap, SiMui, SiChakraui, SiAntdesign,
  SiWebpack, SiVite, SiEsbuild,
  SiJest, SiCypress, SiSelenium,
  SiStorybook, SiFigma, SiSlack, SiJira,
  SiConfluence, SiNotion, SiGitlab, SiBitbucket
} from 'react-icons/si';

// React Icons - Font Awesome (fa)
import { FaRobot } from 'react-icons/fa6';

// React Icons - Devicons (di)
import { DiJava, DiScala, DiRuby, DiPerl, DiClojure, DiHaskell, DiRust } from 'react-icons/di';

// Tabler Icons
import { 
  IconBrandKotlin, IconBrandCpp,
  IconBrandGolang, IconBrandSwift, IconBrandPhp,
  IconApi,
  IconBrandAws, IconBrandAzure,
  IconBroadcast, IconWebhook
} from '@tabler/icons-react';

// Lucide Icons
import { 
  Database, Server, Cloud, Lock,
  GitBranch, Code,
  Globe, HardDrive
} from 'lucide-react';

const categoryColors: { [key: string]: string } = {
  'Backend': 'from-violet-500 to-purple-600',
  'Database': 'from-blue-500 to-cyan-600',
  'DevOps': 'from-emerald-500 to-teal-600',
  'Message Queue': 'from-amber-500 to-orange-600',
  'Frontend': 'from-rose-500 to-pink-600',
  'AI/ML': 'from-yellow-500 to-amber-600'
};

// Iconify 아이콘 커스텀 컴포넌트
const IconifyIcon: React.FC<{ icon: string; size?: number; className?: string }> = ({ icon, size = 14, className }) => (
  <Icon icon={icon} width={size} height={size} className={className} />
);

// 기술 스택 아이콘 매핑
type IconComponent = React.ComponentType<{ size?: number; className?: string }> | string;
const techIcons: { [key: string]: IconComponent } = {
  // Backend Languages & Frameworks
  'Go': SiGo,
  'Java': DiJava || 'simple-icons:openjdk',
  'Python': SiPython,
  'C++': IconBrandCpp,
  'C': IconBrandCpp,
  'Kotlin': IconBrandKotlin,
  'Scala': DiScala,
  'Ruby': DiRuby,
  'Rust': DiRust,
  'PHP': IconBrandPhp,
  'Swift': IconBrandSwift,
  'Perl': DiPerl,
  'Clojure': DiClojure,
  'Haskell': DiHaskell,
  
  // Backend Frameworks
  'Spring Boot': SiSpringboot,
  'Django': SiDjango,
  'FastAPI': SiFastapi,
  'Flask': SiFlask,
  'Express': SiExpress,
  'NestJS': SiNestjs,
  'Gin': SiGin,
  'Fiber': 'simple-icons:fiber',
  'Echo': 'simple-icons:echo',
  'Chi': Code,
  'Gorilla/mux': IconBrandGolang,
  'gRPC': 'simple-icons:grpc',
  'GraphQL': SiGraphql,
  'REST API': IconApi,
  'WebSocket': IconWebhook,
  
  // Database
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'Redis': SiRedis,
  'ElasticSearch': SiElasticsearch,
  'DynamoDB': SiAmazondynamodb,
  'ScyllaDB': 'simple-icons:scylladb',
  'Cassandra': 'simple-icons:apachecassandra',
  'CouchDB': 'simple-icons:apachecouchdb',
  'MariaDB': 'simple-icons:mariadb',
  'Oracle': 'simple-icons:oracle',
  'SQLite': 'simple-icons:sqlite',
  'InfluxDB': 'simple-icons:influxdb',
  'TimescaleDB': Database,
  'Neo4j': 'simple-icons:neo4j',
  'ArangoDB': 'simple-icons:arangodb',
  'RocksDB': HardDrive,
  
  // DevOps & Cloud
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Terraform': SiTerraform,
  'GitHub Actions': SiGithubactions,
  'Jenkins': SiJenkins,
  'CircleCI': 'simple-icons:circleci',
  'Travis CI': 'simple-icons:travisci',
  'GitLab CI': SiGitlab,
  'ArgoCD': SiArgo,
  'Helm': 'simple-icons:helm',
  'Ansible': 'simple-icons:ansible',
  'Vagrant': 'simple-icons:vagrant',
  'AWS': SiAmazon,
  'GCP': SiGooglecloud,
  'Azure': IconBrandAzure,
  'Vercel': SiVercel,
  'Netlify': SiNetlify,
  'Heroku': 'simple-icons:heroku',
  'DigitalOcean': 'simple-icons:digitalocean',
  'Cloudflare': 'simple-icons:cloudflare',
  
  // Monitoring & Logging
  'Prometheus': SiPrometheus,
  'Grafana': SiGrafana,
  'ELK Stack': SiElasticsearch,
  'Datadog': 'simple-icons:datadog',
  'New Relic': 'simple-icons:newrelic',
  'Sentry': 'simple-icons:sentry',
  'Splunk': 'simple-icons:splunk',
  'Jaeger': 'simple-icons:jaeger',
  
  // Message Queue & Event Streaming
  'Kafka': SiApachekafka,
  'RabbitMQ': SiRabbitmq,
  'Pulsar': 'simple-icons:apachepulsar',
  'Redis PubSub': SiRedis,
  'NATS': 'simple-icons:nats',
  'ActiveMQ': 'simple-icons:apacheactivemq',
  'SQS': IconBrandAws,
  'EventBridge': IconBroadcast,
  'Kinesis': 'simple-icons:amazonkinesis',
  
  // Frontend Frameworks & Libraries
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Vue.js': SiVuedotjs,
  'Angular': 'simple-icons:angular',
  'Svelte': 'simple-icons:svelte',
  'SvelteKit': 'simple-icons:svelte',
  'Nuxt.js': 'simple-icons:nuxtdotjs',
  'Gatsby': 'simple-icons:gatsby',
  'Remix': 'simple-icons:remix',
  'Astro': 'simple-icons:astro',
  'Solid.js': 'simple-icons:solid',
  'Qwik': 'simple-icons:qwik',
  
  // Frontend Languages & Tools
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'HTML/CSS': SiHtml5,
  'Sass': 'simple-icons:sass',
  'Less': 'simple-icons:less',
  'PostCSS': 'simple-icons:postcss',
  
  // CSS Frameworks & UI Libraries
  'Tailwind CSS': SiTailwindcss,
  'Bootstrap': SiBootstrap,
  'Material UI': SiMui,
  'Chakra UI': SiChakraui,
  'Ant Design': SiAntdesign,
  'Styled Components': 'simple-icons:styledcomponents',
  'Emotion': 'simple-icons:emotion',
  'CSS Modules': SiCss3,
  
  // Build Tools & Bundlers
  'Webpack': SiWebpack,
  'Vite': SiVite,
  'Rollup': 'simple-icons:rollupdotjs',
  'esbuild': SiEsbuild,
  'Parcel': 'simple-icons:parcel',
  'Turbopack': 'simple-icons:turbo',
  'Babel': 'simple-icons:babel',
  'SWC': 'simple-icons:swc',
  
  // Testing
  'Jest': SiJest,
  'Cypress': SiCypress,
  'Playwright': 'simple-icons:playwright',
  'Selenium': SiSelenium,
  'Mocha': 'simple-icons:mocha',
  'Vitest': 'simple-icons:vitest',
  'Testing Library': 'simple-icons:testinglibrary',
  'Puppeteer': 'simple-icons:puppeteer',
  
  // AI/ML
  'PyTorch': SiPytorch,
  'TensorFlow': 'simple-icons:tensorflow',
  'Scikit-learn': SiScikitlearn,
  'NumPy': SiNumpy,
  'Pandas': SiPandas,
  'Jupyter': 'simple-icons:jupyter',
  'Keras': 'simple-icons:keras',
  'OpenCV': 'simple-icons:opencv',
  'Hugging Face': 'simple-icons:huggingface',
  'LangChain': 'simple-icons:langchain',
  'OpenAI API': SiOpenai,
  'Anthropic': FaRobot,
  'Gemini': 'simple-icons:google',
  
  // Version Control & Collaboration
  'Git': SiGit,
  'GitHub': SiGithubactions,
  'GitLab': SiGitlab,
  'Bitbucket': SiBitbucket,
  'SVN': GitBranch,
  
  // Operating Systems & Servers
  'Linux': SiLinux,
  'Ubuntu': 'simple-icons:ubuntu',
  'CentOS': 'simple-icons:centos',
  'Debian': 'simple-icons:debian',
  'Alpine': 'simple-icons:alpinelinux',
  'Windows Server': 'simple-icons:windows',
  'macOS': 'simple-icons:apple',
  'Apache': SiApache,
  'Nginx': SiNginx,
  
  // Security & Auth
  'OAuth': SiAuth0,
  'JWT': SiJsonwebtokens,
  'Auth0': SiAuth0,
  'Firebase Auth': SiFirebase,
  'Supabase': SiSupabase,
  'Keycloak': Lock,
  'Okta': 'simple-icons:okta',
  
  // APIs & Documentation
  'OpenAPI': SiSwagger,
  'Swagger': SiSwagger,
  'Postman': 'simple-icons:postman',
  'Insomnia': 'simple-icons:insomnia',
  
  // Collaboration & Project Management
  'Jira': SiJira,
  'Confluence': SiConfluence,
  'Notion': SiNotion,
  'Slack': SiSlack,
  'Microsoft Teams': 'simple-icons:microsoftteams',
  'Figma': SiFigma,
  'Storybook': SiStorybook,
  
  // Others
  'Node.js': SiNodedotjs,
  'Deno': 'simple-icons:deno',
  'Bun': 'simple-icons:bun',
  'Socket.io': 'simple-icons:socketdotio',
  'WebRTC': Globe,
  'PWA': 'simple-icons:pwa',
  'Electron': 'simple-icons:electron',
  'Tauri': 'simple-icons:tauri',
  'Flutter': 'simple-icons:flutter',
  'React Native': SiReact,
  'Ionic': 'simple-icons:ionic',
  'Capacitor': 'simple-icons:capacitor',
  
  // Default fallbacks
  'Default': Code,
  'Database Default': Database,
  'Server Default': Server,
  'Cloud Default': Cloud
};

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(120,119,198,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,119,198,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16">
            <span className="relative inline-block">
              <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-violet-600/30 to-cyan-600/30" />
              <span className="relative bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative overflow-hidden rounded-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glass card background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl" />
                <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[skillCategory.category]} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10 p-6">
                  <motion.div 
                    className={`inline-block px-4 py-2 rounded-xl bg-gradient-to-r ${categoryColors[skillCategory.category] || 'from-gray-500 to-gray-600'} text-white font-semibold mb-5 shadow-xl`}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [-1, 1, -1],
                      transition: { duration: 0.3 }
                    }}
                  >
                    {skillCategory.category}
                  </motion.div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, i) => {
                      const Icon = techIcons[skill] || techIcons['Default'];
                      return (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.1 + i * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.05,
                            y: -2,
                            transition: { duration: 0.2 }
                          }}
                          className="group/skill relative inline-flex items-center gap-1.5 px-3 py-1.5 overflow-hidden rounded-lg cursor-default"
                        >
                          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg" />
                          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-cyan-500/0 group-hover/skill:from-violet-500/10 group-hover/skill:via-purple-500/10 group-hover/skill:to-cyan-500/10 transition-all duration-300 rounded-lg" />
                          
                          <div className="relative flex items-center gap-1.5">
                            {Icon && (
                              typeof Icon === 'string' ? (
                                <IconifyIcon icon={Icon} className="text-violet-400 group-hover/skill:text-violet-300 transition-colors" />
                              ) : (
                                <Icon className="text-violet-400 group-hover/skill:text-violet-300 transition-colors" size={14} />
                              )
                            )}
                            <span className="text-sm text-gray-200 group-hover/skill:text-gray-100 font-medium">
                              {skill}
                            </span>
                          </div>
                        </motion.span>
                      );
                    })}
                  </div>
                </div>
                
                {/* Corner decoration */}
                <motion.div
                  className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}