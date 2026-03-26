export const profile = {
  name: "天下无敌",
  role: "AI 应用开发 / RAG 系统 / LLM Agent 方向",
  intro:
    "硕士在读，聚焦大模型应用开发与智能系统落地，具备从知识库检索增强、Agent 工作流设计到后端接口实现的完整实践经验。",
  summary:
    "我擅长把 LLM、RAG 与工程化能力结合，构建可用、可扩展、可维护的智能应用，关注回答质量、流程可控性与真实业务场景中的交付效率。"
};

export const skills = [
  "Python",
  "LangChain",
  "LlamaIndex",
  "LangGraph",
  "RAG",
  "Prompt Engineering",
  "Tool Calling",
  "FastAPI",
  "Flask",
  "RESTful API",
  "MySQL",
  "Docker",
  "Linux",
  "PyTorch",
  "TensorFlow",
  "Chroma",
  "Transformers",
  "LoRA / PEFT / SFT"
];

export const skillGroups = [
  {
    title: "LLM Application",
    description: "面向知识型和流程型场景构建 AI 应用，从提示词设计到工作流编排都有实际项目经验。",
    items: ["RAG", "Prompt Engineering", "Tool Calling", "LangChain", "LlamaIndex", "LangGraph"]
  },
  {
    title: "Backend & Infra",
    description: "能够承担服务接口、数据流转与部署链路设计，保证智能应用具备稳定的工程落地能力。",
    items: ["FastAPI", "Flask", "RESTful API", "MySQL", "Docker", "Linux"]
  },
  {
    title: "ML & Data",
    description: "熟悉模型训练与实验流程，能够理解从特征、检索到生成的整个智能系统链路。",
    items: ["PyTorch", "TensorFlow", "Transformers", "Chroma", "Pandas", "NumPy"]
  }
];

export const aboutHighlights = [
  "关注 AI 应用如何从 Demo 走向稳定、可解释、可维护的产品形态。",
  "习惯把复杂流程拆解成清晰的模块边界、数据结构和交互路径。",
  "希望加入重视工程质量、设计表达和长期迭代能力的团队。"
];

export const personalStats = [
  { label: "Current Focus", value: "RAG / Agent Systems" },
  { label: "Base", value: "Shanghai" },
  { label: "Graduation", value: "2026.06" }
];

export const experiences = [
  {
    type: "Experience",
    title: "AI 实习生",
    organization: "中国经济信息社",
    period: "2025 - 至今",
    summary: "围绕企业知识库问答、Agent 场景和信息系统升级方向参与智能应用设计与实现。",
    bullets: [
      "参与基于 LangChain 的 RAG 问答系统设计，完成文档接入、检索链路和回答约束策略实现。",
      "支持 AI 场景与现有业务系统衔接，关注结构化数据、接口能力和后续功能扩展。",
      "在项目中持续优化内容组织、检索质量和输出可控性。"
    ]
  },
  {
    type: "Research",
    title: "加密流量分类与模型优化研究",
    organization: "上海工程技术大学",
    period: "2023 - 2026",
    summary: "硕士阶段围绕深度学习、模型优化和网络流量分析开展研究。",
    bullets: [
      "关注模型精度、稳定性和资源受限场景下的部署可行性。",
      "完成注意力机制、超参数优化与轻量化方向的实验与方法验证。",
      "将研究思维延展到 AI 应用工程，强化系统设计与问题拆解能力。"
    ]
  }
];

export const education = [
  {
    degree: "电子信息 硕士",
    school: "上海工程技术大学",
    period: "2023.09 - 2026.06",
    detail: "研究方向为深度学习与大模型应用，关注 AI 系统设计与智能应用落地。"
  },
  {
    degree: "网络工程 本科",
    school: "大连科技学院",
    period: "2019.09 - 2023.06",
    detail: "打下编程、网络、操作系统与后端基础，形成完整的工程认知。"
  }
];

export const contacts = [
  { label: "邮箱", value: "zmxhhm532@gmail.com", href: "mailto:zmxhhm532@gmail.com" },
  { label: "电话", value: "18547886093", href: "tel:18547886093" },
  { label: "方向", value: "AI 应用开发 / RAG / LLM Agent", href: "#" }
];

export const footerLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];
