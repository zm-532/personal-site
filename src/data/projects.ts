import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    name: "RAG 智能文档问答系统",
    description:
      "面向企业内部知识库场景构建多源文档问答系统，支持 PDF、DOCX、CSV 等数据接入。亮点在于完成了从文档切分、向量检索到回答生成的完整 RAG Pipeline，并通过 Chunk 策略与提示约束降低模型幻觉、增强答案可追溯性。",
    techStack: ["Python", "LangChain", "Chroma", "RAG", "Streamlit"],
    githubLink: "#"
  },
  {
    name: "基于 LLM Agent 的反诈模拟训练平台",
    description:
      "围绕反诈训练场景设计多轮对话模拟平台，使用 LLM 与工作流控制能力搭建可编排的交互流程。亮点在于将对话控制、角色约束、场景生成和风险评估拆分为独立模块，并通过状态流转提升输出一致性与流程可控性。",
    techStack: ["Python", "LLM Agent", "LangGraph", "Prompt Engineering", "FSM"],
    githubLink: "#"
  },
  {
    name: "园区项目管理系统",
    description:
      "参与园区信息管理系统开发，覆盖信息管理、检索、统计与数据导出等核心功能。亮点在于同时参与后端 API 设计、数据库建模与数据采集清洗，为后续接入 AI 分析模块预留了结构化数据与接口基础。",
    techStack: ["React", "Node.js", "MySQL", "RESTful API", "Python"],
    githubLink: "#"
  },
  {
    name: "加密流量分类与模型优化研究",
    description:
      "围绕深度学习与网络流量分析开展研究，完成加密流量分类方法设计与模型优化实验。亮点在于结合注意力机制、超参数优化与轻量化思路，兼顾分类精度、模型稳定性与资源受限场景下的部署可行性。",
    techStack: ["PyTorch", "Deep Learning", "Transformers", "Network Traffic Analysis"],
    githubLink: "#"
  }
];
