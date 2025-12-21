// 服务数据
export const servicesData = [
  {
    id: 1,
    title: "智能对话系统",
    description: "基于大语言模型打造智能客服、虚拟助手等对话系统，提升用户体验与服务效率",
    icon: "💬",
    features: ["自然语言理解", "多轮对话", "情感分析", "知识库集成"],
    color: "blue",
  },
  {
    id: 2,
    title: "计算机视觉解决方案",
    description: "提供图像识别、物体检测、人脸识别等视觉AI能力，赋能各行业智能化升级",
    icon: "👁️",
    features: ["图像识别", "物体检测", "OCR文字识别", "人脸识别"],
    color: "purple",
  },
  {
    id: 3,
    title: "数据分析与预测",
    description: "运用机器学习算法进行数据挖掘与预测分析，助力企业科学决策",
    icon: "📊",
    features: ["数据挖掘", "预测模型", "异常检测", "智能推荐"],
    color: "green",
  },
  {
    id: 4,
    title: "AI模型定制开发",
    description: "针对企业特定场景，定制开发专属AI模型，提供端到端的技术支持",
    icon: "🤖",
    features: ["需求分析", "模型训练", "部署优化", "持续迭代"],
    color: "yellow",
  },
];

// 案例数据
export const casesData = [
  {
    id: 1,
    title: "智能客服机器人",
    client: "某电商平台",
    industry: "电商零售",
    description: "为电商平台打造24小时在线智能客服系统，自动回答用户咨询，提升客户满意度",
    image: "/images/case1.jpg",
    tags: ["NLP", "对话系统", "知识图谱"],
    results: {
      efficiency: "客服效率提升70%",
      satisfaction: "用户满意度提升40%",
      cost: "人力成本降低60%",
    },
    details: "通过深度学习技术训练专属对话模型，集成商品知识库和订单系统，实现智能问答、订单查询、售后处理等功能。系统支持多轮对话、意图识别和情感分析，能够准确理解用户需求并给出合适回复。",
    tech: ["GPT-4", "BERT", "知识图谱", "情感分析"],
    duration: "3个月",
  },
  {
    id: 2,
    title: "工业质检AI系统",
    client: "某制造企业",
    industry: "制造业",
    description: "基于计算机视觉的自动化质检系统，实时检测产品缺陷，提高质检效率与准确性",
    image: "/images/case2.jpg",
    tags: ["计算机视觉", "缺陷检测", "深度学习"],
    results: {
      accuracy: "检测准确率达99.5%",
      speed: "检测速度提升10倍",
      defect: "缺陷漏检率降低85%",
    },
    details: "采用先进的卷积神经网络架构，训练高精度缺陷检测模型。系统能够实时处理生产线上的产品图像，自动识别划痕、裂纹、色差等多种缺陷类型，并生成详细的质检报告。",
    tech: ["YOLOv8", "ResNet", "边缘计算", "实时处理"],
    duration: "4个月",
  },
  {
    id: 3,
    title: "金融风控预测模型",
    client: "某金融科技公司",
    industry: "金融科技",
    description: "构建智能风险预测模型，实时评估信用风险，提升风控能力",
    image: "/images/case3.jpg",
    tags: ["机器学习", "风险评估", "数据分析"],
    results: {
      precision: "风险识别精准度92%",
      reduction: "坏账率降低45%",
      automation: "审批效率提升80%",
    },
    details: "整合多维度数据源，运用集成学习算法构建风险评估模型。系统可以自动分析用户信用历史、行为特征、交易模式等因素，实时计算风险评分，为信贷决策提供科学依据。",
    tech: ["XGBoost", "LightGBM", "特征工程", "实时计算"],
    duration: "5个月",
  },
  {
    id: 4,
    title: "智能推荐引擎",
    client: "某内容平台",
    industry: "互联网",
    description: "个性化推荐系统，精准匹配用户兴趣，提升内容分发效率和用户粘性",
    image: "/images/case4.jpg",
    tags: ["推荐系统", "协同过滤", "深度学习"],
    results: {
      ctr: "点击率提升55%",
      time: "用户停留时长增加40%",
      retention: "用户留存率提升30%",
    },
    details: "基于用户行为数据和内容特征，构建混合推荐模型。系统综合运用协同过滤、内容推荐和深度学习技术，实现个性化内容分发，持续优化推荐效果。",
    tech: ["Deep Learning", "协同过滤", "Embedding", "A/B Testing"],
    duration: "4个月",
  },
  {
    id: 5,
    title: "医疗影像辅助诊断",
    client: "某医疗机构",
    industry: "医疗健康",
    description: "AI辅助医生进行影像诊断，提高诊断准确率和效率",
    image: "/images/case5.jpg",
    tags: ["医疗AI", "图像分割", "病灶检测"],
    results: {
      accuracy: "诊断准确率95%",
      time: "诊断时间缩短60%",
      support: "辅助诊断覆盖率90%",
    },
    details: "针对CT、MRI等医学影像，开发病灶检测和分割算法。系统能够自动标注可疑区域，计算病灶大小和位置，生成结构化报告，为医生提供诊断参考。",
    tech: ["U-Net", "3D CNN", "图像分割", "迁移学习"],
    duration: "6个月",
  },
  {
    id: 6,
    title: "智能语音助手",
    client: "某智能家居企业",
    industry: "智能硬件",
    description: "多功能语音交互系统，支持语音控制、信息查询、智能家居管理等功能",
    image: "/images/case6.jpg",
    tags: ["语音识别", "语音合成", "NLU"],
    results: {
      recognition: "语音识别准确率96%",
      response: "响应速度<500ms",
      commands: "支持500+控制指令",
    },
    details: "集成语音识别、自然语言理解和语音合成技术，打造流畅的语音交互体验。系统支持方言识别、连续对话、场景联动等高级功能。",
    tech: ["ASR", "TTS", "NLU", "声纹识别"],
    duration: "5个月",
  },
];

// 团队成员数据
export const teamData = [
  {
    id: 1,
    name: "韩晓伟",
    nameEn: "Alex Han",
    position: "首席技术官 / CTO",
    bio: "12年AI研发经验，曾任某头部互联网公司AI中台负责人，从0到1搭建过日调用量10亿+的智能推荐系统",
    avatar: "/images/team1.jpg",
    expertise: ["深度学习", "大模型架构", "技术战略"],
  },
  {
    id: 2,
    name: "乔元",
    nameEn: "Ryan Qiao",
    position: "算法总监",
    bio: "8年算法研发经验，曾主导某电商平台搜索推荐算法优化，GMV提升23%，多项核心算法专利持有人",
    avatar: "/images/team2.jpg",
    expertise: ["机器学习", "推荐算法", "NLP"],
  },
  {
    id: 3,
    name: "于老师",
    nameEn: "Emma Yu",
    position: "产品总监",
    bio: "10年B端产品经验，曾任某SaaS公司产品VP，主导过金融风控、智能客服等多款营收过亿的AI产品",
    avatar: "/images/team3.jpg",
    expertise: ["产品规划", "用户研究", "商业化"],
  },
  {
    id: 4,
    name: "张铁柱",
    nameEn: "Mike Zhang",
    position: "技术架构师",
    bio: "9年架构设计经验，曾负责某出行平台核心系统架构，支撑日订单量5000万+，精通高并发与分布式系统",
    avatar: "/images/team4.jpg",
    expertise: ["系统架构", "分布式计算", "MLOps"],
  },
  {
    id: 5,
    name: "赵旭",
    nameEn: "Lisa Zhao",
    position: "运营总监",
    bio: "7年互联网运营经验，曾操盘某内容平台从50万DAU增长至800万，擅长用户增长与精细化运营",
    avatar: "/images/team5.jpg",
    expertise: ["用户增长", "内容运营", "品牌营销"],
  },
  {
    id: 6,
    name: "赵振岩",
    nameEn: "Jack Zhao",
    position: "商务总监",
    bio: "11年企业服务销售经验，曾任某云计算公司华北区销售总监，年度业绩连续3年超额完成150%+",
    avatar: "/images/team6.jpg",
    expertise: ["大客户销售", "战略合作", "行业拓展"],
  },
];

// 新闻动态数据
export const newsData = [
  {
    id: 1,
    title: "公司成功完成A轮融资，加速AI技术研发",
    date: "2024-01-15",
    category: "公司动态",
    summary: "我们很高兴地宣布，公司已成功完成数千万元A轮融资，本轮融资将主要用于核心技术研发、团队建设和市场拓展。",
    image: "/images/news1.jpg",
    content: "详细内容...",
  },
  {
    id: 2,
    title: "与某知名企业达成战略合作，共建AI创新实验室",
    date: "2024-02-20",
    category: "合作伙伴",
    summary: "公司与行业领军企业签署战略合作协议，共同建立AI创新实验室，探索AI技术在行业的深度应用。",
    image: "/images/news2.jpg",
    content: "详细内容...",
  },
  {
    id: 3,
    title: "智能客服解决方案荣获行业创新大奖",
    date: "2024-03-10",
    category: "荣誉奖项",
    summary: "公司自主研发的智能客服系统在全国AI应用创新大赛中脱颖而出，荣获一等奖。",
    image: "/images/news3.jpg",
    content: "详细内容...",
  },
  {
    id: 4,
    title: "技术团队在国际顶级会议发表论文",
    date: "2024-04-05",
    category: "技术成果",
    summary: "公司研究团队的论文被NeurIPS 2024接收，展示了在多模态学习领域的最新研究成果。",
    image: "/images/news4.jpg",
    content: "详细内容...",
  },
  {
    id: 5,
    title: "开设AI技术培训课程，助力人才培养",
    date: "2024-05-12",
    category: "社会责任",
    summary: "公司启动AI人才培养计划，面向高校学生和行业从业者开放技术培训课程。",
    image: "/images/news5.jpg",
    content: "详细内容...",
  },
  {
    id: 6,
    title: "新版AI平台正式上线，功能全面升级",
    date: "2024-06-18",
    category: "产品发布",
    summary: "公司新一代AI开发平台正式上线，提供更强大的模型训练、部署和管理能力。",
    image: "/images/news6.jpg",
    content: "详细内容...",
  },
];

// 关于我们数据
export const aboutData = {
  company: {
    name: "智创AI科技",
    founded: "2020",
    location: "北京·中关村",
    employees: "50+",
    clients: "100+",
  },
  mission: "让AI技术普惠每一个企业，用智能驱动业务增长",
  vision: "成为全球领先的AI解决方案提供商",
  values: [
    {
      title: "技术领先",
      description: "始终追求技术创新，保持行业领先地位",
      icon: "🚀",
    },
    {
      title: "客户至上",
      description: "以客户需求为中心，提供优质服务",
      icon: "❤️",
    },
    {
      title: "开放合作",
      description: "构建开放生态，与合作伙伴共赢",
      icon: "🤝",
    },
    {
      title: "持续创新",
      description: "不断探索前沿技术，推动产业发展",
      icon: "💡",
    },
  ],
  advantages: [
    {
      title: "强大的技术团队",
      description: "核心成员来自清华、北大等顶尖高校，具备丰富的AI研发经验",
      stat: "博士占比30%",
    },
    {
      title: "丰富的项目经验",
      description: "服务过金融、医疗、制造、零售等多个行业的百家企业",
      stat: "100+成功案例",
    },
    {
      title: "领先的技术实力",
      description: "掌握深度学习、NLP、计算机视觉等核心AI技术",
      stat: "20+专利技术",
    },
    {
      title: "完善的服务体系",
      description: "提供从咨询、开发到部署的全流程服务",
      stat: "7x24小时支持",
    },
  ],
  milestones: [
    { year: "2020", event: "公司成立，获得天使轮投资" },
    { year: "2021", event: "推出首款智能对话产品" },
    { year: "2022", event: "客户数突破50家，完成Pre-A轮融资" },
    { year: "2023", event: "团队规模扩大至50人，技术专利达10项" },
    { year: "2024", event: "完成A轮融资，服务客户超100家" },
  ],
};

// 联系方式数据
export const contactData = {
  phone: "15834544303",
  email: "workbzw@gmail.com",
  address: "北京市海淀区中关村大街1号",
  wechat: "ztz_work",
  workTime: "工作日 9:00-18:00",
  socialMedia: {
    weibo: "https://weibo.com/ai-company",
    linkedin: "https://linkedin.com/company/ai-company",
    github: "https://github.com/ai-company",
  },
};

// 技术栈数据
export const techStackData = [
  {
    category: "深度学习框架",
    items: ["PyTorch", "TensorFlow", "JAX", "PaddlePaddle"],
  },
  {
    category: "大语言模型",
    items: ["GPT-4", "Claude", "LLaMA", "ChatGLM"],
  },
  {
    category: "计算机视觉",
    items: ["OpenCV", "YOLO", "ResNet", "Vision Transformer"],
  },
  {
    category: "自然语言处理",
    items: ["BERT", "Transformer", "Word2Vec", "SpaCy"],
  },
  {
    category: "机器学习",
    items: ["Scikit-learn", "XGBoost", "LightGBM", "CatBoost"],
  },
  {
    category: "部署与运维",
    items: ["Docker", "Kubernetes", "TensorRT", "ONNX"],
  },
];

