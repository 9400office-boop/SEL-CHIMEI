// ─── SEL 五大能力 ────────────────────────────────────────────────────────────
export const abilitiesData = [
  {
    id: 'self-awareness',
    name: '自我覺察',
    englishName: 'Self-Awareness',
    emoji: '🌸',
    color: 'pink',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    tagBg: 'bg-pink-100',
    tagText: 'text-pink-700',
    iconBg: 'bg-pink-100',
    definition:
      '認識自己，包括覺察自己的情緒、目標和價值觀，正確評估自身優缺點，和肯定自己的價值。',
    skills: [
      '辨識與認識情緒',
      '瞭解自我需求、價值觀',
      '認識自己優缺點',
      '確認自己價值',
    ],
    reflections: [
      '我是不是已經快撐不住了？',
      '當緊張升起時，我通常會怎麼反應？',
      '我有沒有提醒自己停下來的方法？',
    ],
  },
  {
    id: 'self-management',
    name: '自我管理',
    englishName: 'Self-Management',
    emoji: '🌿',
    color: 'green',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    tagBg: 'bg-green-100',
    tagText: 'text-green-700',
    iconBg: 'bg-green-100',
    definition:
      '有能力控制情緒，調節壓力和衝動，並能設定目標，擁有堅持不懈的毅力去實現個人目標。',
    skills: [
      '控制衝動',
      '管理壓力',
      '調節情緒',
      '設定目標並朝目標努力',
    ],
    reflections: [
      '我真的很想回嘴時，通常會怎麼做？',
      '有沒有一種方法，可以讓我先穩住自己？',
      '我希望別人怎麼對我說話？',
    ],
  },
  {
    id: 'social-awareness',
    name: '社會覺察',
    englishName: 'Social Awareness',
    emoji: '💙',
    color: 'blue',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    tagBg: 'bg-sky-100',
    tagText: 'text-sky-700',
    iconBg: 'bg-sky-100',
    definition:
      '指有能力理解、同理別人，能夠尊重不同的背景和文化，並知道一般社會規範，認識家庭、學校和社區能提供的資源和支持。',
    skills: [
      '尊重他人',
      '培養同理心',
      '欣賞多樣性',
      '了解他人觀點、看法',
    ],
    reflections: [
      '他為什麼那麼不舒服？',
      '如果我站在他的立場會怎麼想？',
      '有沒有不同方式可以理解他？',
    ],
  },
  {
    id: 'relationship-skills',
    name: '人際技巧',
    englishName: 'Relationship Skills',
    emoji: '🤝',
    color: 'amber',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    tagBg: 'bg-amber-100',
    tagText: 'text-amber-700',
    iconBg: 'bg-amber-100',
    definition:
      '有能力和不同人建立和維持良好關係，包括有效溝通、積極傾聽、合作、解決衝突等，在有需要的時候尋求協助。',
    skills: [
      '培養溝通能力與他人建立關係',
      '協調與合作能力',
      '管理衝突與面對拒絕',
      '尋求協助',
    ],
    reflections: [
      '我要不要再講一次？',
      '什麼樣的說法，比較容易被接受？',
      '我如何在尊重中堅持專業？',
    ],
  },
  {
    id: 'responsible-decision',
    name: '負責任的決策',
    englishName: 'Responsible Decision Making',
    emoji: '⚖️',
    color: 'purple',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    tagBg: 'bg-purple-100',
    tagText: 'text-purple-700',
    iconBg: 'bg-purple-100',
    definition:
      '有能力做出負責任的決定，做決定前優先考慮道德標準、社會規範、一般常規等，並能對各種行為的後果進行評估。',
    skills: [
      '分析情勢',
      '解決問題',
      '反省自我並正確評估',
      '做決定時能妥善考慮倫理道德',
    ],
    reflections: [
      '快一點，還是再確認？',
      '我會優先考量什麼？',
      '如果出現問題，可能的影響是什麼？',
    ],
  },
]

// ─── 今日壓力包子卡片 ──────────────────────────────────────────────────────
export const stressLevelData = [
  {
    id: 1,
    score: 1,
    name: '壓力滿載',
    englishName: 'Angry',
    emoji: '😤',
    image: '/bun-1.png',
    bunEmoji: '🍡',
    color: 'red',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    selectedBg: 'bg-red-100',
    tagColor: 'text-red-600',
    description: '我現在的情緒比較滿，可能有煩躁、急迫、委屈或快要爆炸的感覺。',
    result: {
      title: '你現在可能正處於高壓或情緒過載的狀態。',
      content:
        '建議先不要急著逼自己整理好所有事情，先做一件最小的照顧行動，例如：喝水、深呼吸、離開座位一分鐘、閉眼休息 30 秒。\n\n你需要的不是更努力，而是先讓自己穩下來。',
      tip: '先穩住自己',
      tipColor: 'text-red-500',
    },
  },
  {
    id: 2,
    score: 2,
    name: '有點疲憊',
    englishName: 'Sad',
    emoji: '😔',
    image: '/bun-2.png',
    bunEmoji: '🥺',
    color: 'orange',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    selectedBg: 'bg-orange-100',
    tagColor: 'text-orange-600',
    description: '我有點累，也可能有點失落、悶悶的，提不起勁。',
    result: {
      title: '你可能累了很久，只是還沒真正停下來。',
      content:
        '建議今天幫自己安排一個短暫的恢復時段，哪怕只是安靜坐一下、伸展一下、慢慢喝一杯飲品，都會有幫助。\n\n疲憊不是脆弱，而是身體在提醒你該補充能量了。',
      tip: '給自己補充能量',
      tipColor: 'text-orange-500',
    },
  },
  {
    id: 3,
    score: 3,
    name: '滯通卡住',
    englishName: 'Neutral',
    emoji: '😐',
    image: '/bun-3.png',
    bunEmoji: '😶',
    color: 'yellow',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    selectedBg: 'bg-yellow-100',
    tagColor: 'text-yellow-600',
    description: '我沒有特別強烈的情緒，但有一種說不上來的卡住感。',
    result: {
      title: '你現在可能不是情緒爆發，而是有些麻、悶、卡住。',
      content:
        '建議試著問問自己：「我現在最需要的是什麼？」\n\n可能是喘口氣、可能是有人理解、也可能只是暫停一下。\n\n先理解自己，才能慢慢找回流動感。',
      tip: '先問問自己需要什麼',
      tipColor: 'text-yellow-600',
    },
  },
  {
    id: 4,
    score: 4,
    name: '還算穩定',
    englishName: 'Calm',
    emoji: '😊',
    image: '/bun-4.png',
    bunEmoji: '☺️',
    color: 'teal',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    selectedBg: 'bg-teal-100',
    tagColor: 'text-teal-600',
    description: '我目前情緒還算穩定，雖然有壓力，但還可以調整與面對。',
    result: {
      title: '你目前有一定的調節能力，狀態也相對平衡。',
      content:
        '建議持續維持生活節奏，例如固定休息、簡短運動、設定工作界線，這些都能幫助你保持穩定。\n\n照顧自己，不一定要等到很累才開始。',
      tip: '持續維持好狀態',
      tipColor: 'text-teal-600',
    },
  },
  {
    id: 5,
    score: 5,
    name: '有點正能量',
    englishName: 'Happy',
    emoji: '😄',
    image: '/bun-5.png',
    bunEmoji: '🌟',
    color: 'green',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    selectedBg: 'bg-green-100',
    tagColor: 'text-green-600',
    description: '我今天的狀態不錯，心情相對輕鬆，也比較有餘裕。',
    result: {
      title: '你今天有不錯的能量與穩定感，這很珍貴。',
      content:
        '建議把這份好的狀態記錄下來，想想今天有哪些事幫助你維持平衡。\n\n未來在壓力來時，這些都會成為你照顧自己的方法。',
      tip: '記錄今天的平衡方式',
      tipColor: 'text-green-600',
    },
  },
]

// ─── 情境應用職類卡片 ──────────────────────────────────────────────────────
export const scenarioCategories = [
  {
    id: 'pharmacist',
    name: '藥師情境測驗',
    englishName: 'Pharmacist Scenario',
    emoji: '💊',
    bgColor: 'bg-soft-blue',
    accentColor: 'bg-sky-500',
    borderColor: 'border-sky-200',
    description:
      '在用藥安全、病人溝通與臨床壓力中，練習情緒調節與專業判斷。',
    status: 'open',
    buttonLabel: '開始測驗',
    targetPage: 'pharmacist-quiz',
  },
  {
    id: 'nursing',
    name: '護理師情境測驗',
    englishName: 'Nursing Scenario',
    emoji: '🏥',
    bgColor: 'bg-pink-50',
    accentColor: 'bg-pink-400',
    borderColor: 'border-pink-200',
    description:
      '面對病人需求、家屬情緒與臨床壓力，學習在高強度環境中保持穩定。',
    status: 'coming-soon',
    buttonLabel: '敬請期待',
    targetPage: null,
  },
  {
    id: 'medical-tech',
    name: '醫檢師情境測驗',
    englishName: 'Medical Technologist Scenario',
    emoji: '🔬',
    bgColor: 'bg-purple-50',
    accentColor: 'bg-purple-400',
    borderColor: 'border-purple-200',
    description:
      '在精準檢驗與時間壓力中，練習專注、判斷與自我調節。',
    status: 'coming-soon',
    buttonLabel: '敬請期待',
    targetPage: null,
  },
]

// ─── 藥師情境測驗題目 ──────────────────────────────────────────────────────
export const pharmacistQuizData = [
  {
    id: 1,
    abilityKey: 'self-awareness',
    abilityName: '自我覺察',
    abilityEnglish: 'Self-Awareness',
    abilityEmoji: '🌸',
    scenario:
      '門診尖峰時段，你已經連續調劑兩個小時。突然被學姊點名：「剛剛一張處方拿錯藥了，要更換。」此時，你心裡緊張起來，開始自責，心想：「我怎麼會這樣，如果病人因為我而吃錯藥，該怎麼辦？」\n\n同時你也感覺到：手在發抖、心跳變快、注意力開始下降，但我的檯面上還有很多處方在等。',
    question: '在這個情境中，你會怎麼做？',
    options: [
      { id: 'a', text: '我能察覺自己已接近壓力極限', isReverse: false },
      { id: 'b', text: '我能辨識緊張與自責的情緒', isReverse: false },
      { id: 'c', text: '我忽略身體警訊持續工作', isReverse: true },
      { id: 'd', text: '我能提醒自己仍具專業價值', isReverse: false },
    ],
    maxScore: 3,
    feedback: {
      pass: '穩住了！你能覺察情緒與狀態，這就是專業的起點！',
      fail: '先別硬撐～停一下看看自己，覺察到就是進步的第一步！',
    },
  },
  {
    id: 2,
    abilityKey: 'self-management',
    abilityName: '自我管理',
    abilityEnglish: 'Self-Management',
    abilityEmoji: '🌿',
    scenario:
      '病人因為等太久，開始不耐煩，語氣變重，甚至大聲抱怨：「你們到底有沒有在處理，為什麼這麼慢？到底要我等多久！」\n\n你其實已經很累，內心瞬間冒出不爽與委屈，但現場還有其他病人在看。',
    question: '面對病人的情緒爆發，你會如何應對？',
    options: [
      { id: 'a', text: '我能控制情緒不直接回應病人', isReverse: false },
      { id: 'b', text: '我能在壓力下穩住自己的節奏', isReverse: false },
      { id: 'c', text: '我會直接表現出不耐情緒', isReverse: true },
      { id: 'd', text: '我能以專業為目標持續應對', isReverse: false },
    ],
    maxScore: 3,
    feedback: {
      pass: '很穩！再累也能收住情緒，你已在做高品質照護！',
      fail: '先 Hold 住情緒～慢一點沒關係，穩比快更重要喔！',
    },
  },
  {
    id: 3,
    abilityKey: 'social-awareness',
    abilityName: '社會覺察',
    abilityEnglish: 'Social Awareness',
    abilityEmoji: '💙',
    scenario:
      '你向病人解釋藥物重要性，但對方一直說：「我吃這個很不舒服！我想停藥！我不想吃了！」甚至表現出抗拒與不信任你。\n\n原本你覺得「已經講很多次，這個藥很重要，不能停藥」，但你仔細觀察發現：病人其實有點焦慮，是否曾經有不好的用藥經驗。',
    question: '面對病人的抗拒，你會怎麼理解？',
    options: [
      { id: 'a', text: '我能理解病人不安與抗拒情緒', isReverse: false },
      { id: 'b', text: '我能試著從病人角度看問題', isReverse: false },
      { id: 'c', text: '我只堅持用藥衛教不理會感受', isReverse: true },
      { id: 'd', text: '我能尊重不同想法並調整說法', isReverse: false },
    ],
    maxScore: 3,
    feedback: {
      pass: '很暖！你能看見病人背後的感受，這就是同理力！',
      fail: '再多看、多觀察一點～理解對方後，溝通會更順更有效喔！',
    },
  },
  {
    id: 4,
    abilityKey: 'relationship-skills',
    abilityName: '人際技巧',
    abilityEnglish: 'Relationship Skills',
    abilityEmoji: '🤝',
    scenario:
      '你發現某張處方可能不適當，打電話與醫師溝通，但醫師語氣很急，甚至有點不耐煩回你：「這個藥我一直都是這樣開，沒有問題！」\n\n你當下卡住，不知道要不要再堅持下去。',
    question: '面對醫師的不耐回應，你會怎麼處理？',
    options: [
      { id: 'a', text: '我能在醫師不耐時冷靜表達處方疑慮', isReverse: false },
      { id: 'b', text: '我能以尊重語氣溝通，避免對立', isReverse: false },
      { id: 'c', text: '醫師不耐時，我選擇不再溝通', isReverse: true },
      { id: 'd', text: '溝通受阻時，我會調整或尋求協助', isReverse: false },
    ],
    maxScore: 3,
    feedback: {
      pass: '做得不錯！在壓力下還能好好溝通，既有立場又不傷關係！',
      fail: '有點可惜～遇到卡關時先別退，試著再多說一點點、換個方式再溝通看看！',
    },
  },
  {
    id: 5,
    abilityKey: 'responsible-decision',
    abilityName: '負責任的決策',
    abilityEnglish: 'Responsible Decision Making',
    abilityEmoji: '⚖️',
    scenario:
      '前台發藥現場很忙，後面排滿病人等待領藥。你發現一張處方有疑慮，但如果確認會拖慢整體流程。\n\n此時，你心裡出現拉扯：「要不要先發藥之後再說～」「應該不會有問題吧～」',
    question: '面對流程與安全的拉扯，你會怎麼決定？',
    options: [
      { id: 'a', text: '我能辨識處方疑慮的病安風險', isReverse: false },
      { id: 'b', text: '我能在壓力下採取行動確認處方', isReverse: false },
      { id: 'c', text: '忙碌時，我會先發藥再說', isReverse: true },
      { id: 'd', text: '我決策時優先考量病人安全', isReverse: false },
    ],
    maxScore: 3,
    feedback: {
      pass: '很可以！再忙也守住病人安全，這就是專業的關鍵！',
      fail: '先別急著衝流程～多停一下想想風險，安全永遠比速度重要喔！',
    },
  },
]

// ─── 學習補給：紓壓小幫手 ────────────────────────────────────────────────
export const learningSupportData = [
  {
    id: 'breathing',
    title: '1分鐘呼吸調節站',
    emoji: '🫁',
    bgColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    accentColor: 'text-sky-600',
    btnColor: 'bg-sky-500 hover:bg-sky-600',
    description:
      '當腦袋很滿、心跳很快、情緒快要衝上來時，先回到呼吸。跟著節奏慢慢吸氣、停留、吐氣，幫助自己從忙亂中慢慢穩下來。',
    buttonLabel: '開始呼吸練習',
    action: 'breathing',
  },
  {
    id: 'emotion',
    title: '今天的情緒戳戳樂',
    emoji: '💬',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    accentColor: 'text-pink-600',
    btnColor: 'bg-pink-400 hover:bg-pink-500',
    description:
      '透過可愛互動方式，點選今天最接近你的心情。每一種情緒都會有一句溫柔提醒，讓你知道：原來現在的我，不需要假裝沒事。',
    buttonLabel: '來戳一下情緒',
    action: 'emotion',
  },
  {
    id: 'buncard',
    title: '包子舒壓翻翻卡',
    emoji: '🥟',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    accentColor: 'text-amber-600',
    btnColor: 'bg-amber-400 hover:bg-amber-500',
    description:
      '用輕鬆小遊戲的方式，翻出今天屬於你的療癒包子卡。每一張卡片都附上一句 SEL 小提醒或暖心話。',
    buttonLabel: '翻出今日包子卡',
    action: 'buncard',
  },
  {
    id: 'throwstress',
    title: '把壓力丟出去',
    emoji: '🗑️',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    accentColor: 'text-green-600',
    btnColor: 'bg-green-500 hover:bg-green-600',
    description:
      '把今天讓你煩躁、疲累、委屈或卡住的事情，用互動方式寫下來、拖曳丟掉它。幫自己透過小小儀式放下一點重量。',
    buttonLabel: '開始丟掉壓力',
    action: 'throwstress',
  },
]

// ─── 好站連結 ──────────────────────────────────────────────────────────────
export const resourceLinksData = [
  {
    id: 'mhw',
    title: '衛生福利部心理健康司',
    emoji: '🏛️',
    description:
      '提供心理健康促進、自我照顧、壓力調適與心理支持等相關資源。',
    url: 'https://dep.mohw.gov.tw/domhaoh/mp-107.html',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    accentColor: 'text-blue-700',
    btnColor: 'border-blue-400 text-blue-600 hover:bg-blue-50',
  },
  {
    id: 'john-tung',
    title: '董氏基金會心理衛生中心',
    emoji: '🤲',
    description:
      '提供情緒教育、壓力調適、憂鬱防治與心理健康推廣內容。',
    url: 'https://www.jtf.org.tw/psyche/index.asp',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    accentColor: 'text-teal-700',
    btnColor: 'border-teal-400 text-teal-600 hover:bg-teal-50',
  },
  {
    id: 'life-edu',
    title: '教育部生命教育全球資訊網',
    emoji: '📚',
    description:
      '可延伸閱讀情緒教育、自我探索、人際關係與生命教育內容。',
    url: 'https://life.edu.tw/',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    accentColor: 'text-purple-700',
    btnColor: 'border-purple-400 text-purple-600 hover:bg-purple-50',
  },
  {
    id: 'mindfulness',
    title: '正念練習資源',
    emoji: '🧘',
    description:
      '提供短時間的呼吸、靜心與正念練習，適合忙碌工作中快速安定自己。',
    url: 'https://www.mindful.org/',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    accentColor: 'text-green-700',
    btnColor: 'border-green-400 text-green-600 hover:bg-green-50',
  },
]

// ─── 翻翻卡：暖心包子卡片集 ──────────────────────────────────────────────
export const bunCards = [
  { emoji: '🌸', message: '今天辛苦了，你已經做得很好了。' },
  { emoji: '🌿', message: '先深呼吸，每一次吐氣都是放鬆的開始。' },
  { emoji: '☀️', message: '壓力是提醒你在乎的訊號，不是弱點。' },
  { emoji: '🍵', message: '給自己泡杯茶的時間，這也是專業能力。' },
  { emoji: '🌈', message: '覺察到情緒，已是自我照顧的第一步。' },
  { emoji: '💙', message: '你的善良和付出，都有它的價值。' },
  { emoji: '🍀', message: '今天可以做的事，已足夠。明天繼續就好。' },
  { emoji: '🌙', message: '讓自己休息，不是放棄，是為了繼續前行。' },
]

// ─── 情緒戳戳樂 ──────────────────────────────────────────────────────────
export const emotionPunchData = [
  { id: 1, emoji: '😤', name: '煩躁', message: '煩躁代表你在乎，先讓自己喘一口氣吧。' },
  { id: 2, emoji: '😔', name: '失落', message: '失落的時候，溫柔對待自己比任何事都重要。' },
  { id: 3, emoji: '😰', name: '焦慮', message: '焦慮是心在提醒你，不妨先停下來深呼吸。' },
  { id: 4, emoji: '😪', name: '疲憊', message: '疲憊是真實的，你值得好好休息。' },
  { id: 5, emoji: '😊', name: '平靜', message: '這份平靜是你努力來的，好好珍惜。' },
  { id: 6, emoji: '😄', name: '開心', message: '今天的好心情，值得記錄下來！' },
  { id: 7, emoji: '😢', name: '委屈', message: '委屈也是一種真實感受，你不需要假裝沒事。' },
  { id: 8, emoji: '😌', name: '放鬆', message: '能放鬆是一種能力，享受這一刻。' },
]
