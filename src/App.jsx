import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ClipboardText,
  FolderSimple,
  Lightbulb,
  Target,
  X,
} from "@phosphor-icons/react";

const LINKS = {
  learningMap: "https://app.notion.com/p/3b9bbadfc58646288fc4c7afb4637be6",
  library: "https://app.notion.com/p/14733976a684491a8f4f66c235399d52",
  dsIntro: "https://app.notion.com/p/47204229bb5c41c5bd1e38d4413da00f",
  computerSystem: "https://app.notion.com/p/56f0634fe42b4ff8aaaa6927df5d805e",
  osIntro: "https://app.notion.com/p/9fecd1b0d47f4fbcb8d62104b2253801",
  networkArchitecture: "https://app.notion.com/p/d038a0834a7a4fbf8b673b2475e598ad",
  calculusLimits: "https://app.notion.com/p/37edba7381d5816b9242f4aeb0dad05f",
  calculusDerivative: "https://app.notion.com/p/37edba7381d581df9ffaedd04b6f9037",
  questionBank: "https://app.notion.com/p/479347002e5a41cca397c43ec3851c96",
};

const routeData = [
  {
    id: "route-408",
    tone: "violet",
    title: "408 专业课线路",
    image: "/assets/route-408.png",
    imageAlt: "408 专业课书籍插画",
    tags: ["数据结构", "计组", "操作系统", "计网"],
    cards: [
      {
        id: "408-current",
        title: "当前学习节点",
        icon: Target,
        action: LINKS.dsIntro,
        items: [
          "当前科目：数据结构",
          "当前页面：数据结构基础｜绪论",
          "前置资料：C/C++ 基础",
          "后续资料：线性表",
        ],
      },
      {
        id: "408-resources",
        title: "资料入口",
        icon: FolderSimple,
        action: LINKS.library,
        items: [
          "408 学习资料总览",
          "数据结构",
          "计算机组成原理",
          "操作系统",
          "计算机网络",
        ],
      },
      {
        id: "408-build",
        title: "资料建设清单",
        icon: ClipboardText,
        items: [
          "计算机组成原理：总线系统（待补全）",
          "操作系统：文件管理（待创建）",
          "计算机网络：应用层综合题（待补全）",
        ],
        panelTitle: "408 资料建设清单",
        panelItems: [
          "补全计算机组成原理的总线系统、I/O 与综合计算题。",
          "创建操作系统文件管理综合题，并与现有章节建立前后关系。",
          "补充网络时延、子网划分、应用层协议综合题。",
          "建立跨科目的 408 高频易错点与关联资料索引。",
        ],
      },
      {
        id: "408-questions",
        title: "题库",
        icon: BookOpen,
        action: LINKS.questionBank,
        items: ["408 专业课题库", "基础概念题", "过程模拟题", "综合题", "错题归类"],
        panelTitle: "408 专业课题库",
        panelItems: [
          "基础概念题：定义、性质、分类和易混点。",
          "过程模拟题：算法、调度、状态转换和协议过程。",
          "计算题：复杂度、CPU 性能、调度和网络时延。",
          "综合题与错题：跨章节组合、错因归类与重做记录。",
        ],
      },
    ],
  },
  {
    id: "route-math",
    tone: "pink",
    title: "数学与编程能力线路",
    image: "/assets/route-math-code.png",
    imageAlt: "数学与编程工具插画",
    tags: ["高数", "线代", "概率论", "C/C++", "Python", "AI/ML/DL"],
    cards: [
      {
        id: "math-current",
        title: "当前学习节点",
        icon: Target,
        action: LINKS.calculusDerivative,
        items: [
          "当前方向：高等数学",
          "当前页面：一元函数微分学",
          "前置资料：函数、极限与连续",
          "后续资料：一元函数积分学",
        ],
      },
      {
        id: "math-resources",
        title: "资料入口",
        icon: FolderSimple,
        action: LINKS.library,
        items: [
          "高等数学",
          "线性代数",
          "概率论与数理统计",
          "C/C++ / Python / Java",
          "Linux / Git / 数据库",
          "AI / ML / DL",
        ],
      },
      {
        id: "math-build",
        title: "资料建设清单",
        icon: ClipboardText,
        items: [
          "高等数学：重积分（待补全）",
          "线性代数：矩阵运算（待创建）",
          "Python：数据结构与算法（待补全）",
          "机器学习：模型评估（待创建）",
        ],
        panelTitle: "数学与编程资料建设清单",
        panelItems: [
          "补全重积分、曲线曲面积分、无穷级数和综合题型。",
          "创建线性代数与概率论的完整章节骨架。",
          "补充 Python 数据结构、算法和代码练习。",
          "建立 AI / ML / DL 的数学前置、模型推导和实验页面。",
        ],
      },
      {
        id: "math-questions",
        title: "题库",
        icon: BookOpen,
        action: LINKS.questionBank,
        items: [
          "数学与编程题库",
          "数学基础题",
          "数学综合题",
          "编程语法题",
          "AI/ML 练习题",
        ],
        panelTitle: "数学与编程能力题库",
        panelItems: [
          "数学基础题与多章节综合题。",
          "C/C++、Python 和 Java 编程语法题。",
          "数据结构实现、算法练习和工程工具任务。",
          "人工智能、机器学习和深度学习推导与实验题。",
        ],
      },
    ],
  },
];

function openLink(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function RouteCard({ card, tone, onOpenPanel }) {
  const Icon = card.icon;
  const activate = () => (card.action ? openLink(card.action) : onOpenPanel(card));

  return (
    <button className="info-card" type="button" onClick={activate}>
      <span className={`card-icon ${tone}`}>
        <Icon size={46} weight="duotone" />
      </span>
      <span className="card-copy">
        <span className={`card-title ${tone}`}>{card.title}</span>
        <span className="card-list">
          {card.items.map((item) => (
            <span className="card-list-item" key={item}>
              {item}
            </span>
          ))}
        </span>
      </span>
      <ArrowRight className="card-arrow" size={22} />
    </button>
  );
}

function RoutePanel({ route, onOpenPanel }) {
  return (
    <section className={`route-panel ${route.tone}`} aria-labelledby={route.id}>
      <header className="route-header">
        <img src={route.image} alt={route.imageAlt} />
        <div className="route-heading">
          <h2 id={route.id}>{route.title}</h2>
          <div className="tag-row">
            {route.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </header>
      <div className="card-grid">
        {route.cards.map((card) => (
          <RouteCard
            card={card}
            key={card.id}
            tone={route.tone}
            onOpenPanel={onOpenPanel}
          />
        ))}
      </div>
    </section>
  );
}

function DetailPanel({ active, onClose }) {
  if (!active) return null;

  return (
    <div className="detail-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        aria-labelledby="detail-title"
        aria-modal="true"
        className="detail-panel"
        role="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="detail-close" type="button" onClick={onClose} aria-label="关闭">
          <X size={22} />
        </button>
        <span className="detail-kicker">学习地图</span>
        <h3 id="detail-title">{active.panelTitle}</h3>
        <ul>
          {active.panelItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="detail-actions">
          <button type="button" onClick={() => openLink(LINKS.library)}>
            打开学习资料库
          </button>
          <button className="secondary" type="button" onClick={() => openLink(LINKS.learningMap)}>
            返回 Notion 学习地图
          </button>
        </div>
      </section>
    </div>
  );
}

export function App() {
  const [activePanel, setActivePanel] = useState(null);

  return (
    <>
      <main className="dashboard-shell">
        <div className="hero" aria-label="学习地图封面" />
        <div className="dashboard-content">
          <header className="page-heading">
            <img src="/assets/map-icon.png" alt="" />
            <h1>学习地图</h1>
          </header>
          <div className="intro-strip">两条并行学习线路，知识互相支撑，能力共同成长。</div>
          <div className="routes-grid">
            {routeData.map((route) => (
              <RoutePanel route={route} key={route.id} onOpenPanel={setActivePanel} />
            ))}
          </div>
          <footer className="guide-strip">
            <span className="guide-title">
              <Lightbulb size={30} weight="duotone" />
              <strong>使用说明</strong>
            </span>
            <span>两条线路独立推进，互相支撑</span>
            <span>通过资料库查看详细内容与顺序</span>
            <span>资料建设清单用于维护和完善</span>
            <span>题库帮助巩固知识与提升能力</span>
          </footer>
        </div>
      </main>
      <DetailPanel active={activePanel} onClose={() => setActivePanel(null)} />
    </>
  );
}
