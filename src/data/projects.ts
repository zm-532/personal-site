import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "RAG 智能文档问答系统",
    description:
      "面向企业内部知识库场景构建多源文档问答系统，支持 PDF、DOCX、CSV 等数据接入。重点在于把文档切分、向量检索、回答生成和引用返回组织成稳定可复用的完整链路。",
    techStack: ["Python", "LangChain", "Chroma", "RAG", "Streamlit"],
    highlights: ["多源文档接入", "完整 RAG Pipeline", "降低幻觉并增强可追溯性"],
    githubLink: "#"
  },
  {
    name: "基于 LLM Agent 的反诈模拟训练平台",
    description:
      "围绕反诈训练场景设计多轮对话模拟平台，使用 LLM 与工作流控制能力搭建可编排的交互流程，兼顾角色一致性、状态流转和评估反馈。",
    techStack: ["Python", "LLM Agent", "LangGraph", "Prompt Engineering", "FSM"],
    highlights: ["多轮对话流程控制", "角色约束与场景生成", "风险评估与训练复盘"],
    githubLink: "#"
  },
  {
    name: "园区项目管理系统",
    description:
      "参与园区信息管理系统开发，覆盖信息管理、检索、统计与数据导出等核心功能，同时承担后端接口设计、数据库建模和数据采集处理。",
    techStack: ["React", "Node.js", "MySQL", "RESTful API", "Python"],
    highlights: ["后端 API 设计", "数据库建模", "为 AI 分析预留数据基础"],
    githubLink: "#"
  },
  {
    name: "加密流量分类与模型优化研究",
    description:
      "围绕深度学习与网络流量分析开展研究，完成加密流量分类方法设计与模型优化实验，在分类精度、稳定性和资源受限场景的部署可行性之间寻找平衡。",
    techStack: ["PyTorch", "Deep Learning", "Transformers", "Network Traffic Analysis"],
    highlights: ["注意力机制优化", "超参数搜索", "轻量化部署思路"],
    githubLink: "#"
  }
];
