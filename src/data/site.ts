export type Project = {
  title: string;
  description: string;
  techStack: string[];
  href: string;
};

export const profile = {
  name: "朱铭",
  role: "前端 / 全栈开发求职者",
  intro:
    "我专注于构建清晰、稳定、可维护的 Web 产品，擅长把业务需求拆解成可靠的交互和工程实现，适合个人展示、校招与技术面试场景。",
  summary:
    "希望加入重视工程质量和产品体验的团队，持续打磨前端架构、用户体验与交付效率。"
};

export const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Node.js",
  "REST API",
  "PostgreSQL",
  "Git / GitHub"
];

export const projects: Project[] = [
  {
    title: "智能风控模拟平台",
    description:
      "一个用于展示规则引擎、风险评分与数据看板的产品原型，强调复杂业务流程下的信息可视化与前端工程组织。",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    href: "https://github.com/yourname/anti-fraud-sim"
  },
  {
    title: "面试作品集官网",
    description:
      "用于个人介绍、项目展示和博客沉淀的静态网站，便于部署到 GitHub Pages、Netlify 或 Vercel 静态输出环境。",
    techStack: ["Next.js", "App Router", "Static Export"],
    href: "https://github.com/yourname/portfolio-site"
  },
  {
    title: "知识检索助手",
    description:
      "支持文档解析、内容检索和结果总结的知识型应用，适合作为全栈协作与信息架构能力展示。",
    techStack: ["React", "Node.js", "Vector Search"],
    href: "https://github.com/yourname/knowledge-assistant"
  }
];

export const contacts = [
  { label: "邮箱", value: "yourname@example.com", href: "mailto:yourname@example.com" },
  { label: "GitHub", value: "github.com/yourname", href: "https://github.com/yourname" },
  { label: "LinkedIn", value: "linkedin.com/in/yourname", href: "https://linkedin.com/in/yourname" }
];
