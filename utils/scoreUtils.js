/**
 * 計算單題得分
 * 正向選項每選一個 +1，反向選項若選了 -1
 */
export function calculateQuestionScore(question, selectedOptionIds) {
  let score = 0
  question.options.forEach((opt) => {
    if (selectedOptionIds.includes(opt.id)) {
      score += opt.isReverse ? -1 : 1
    }
  })
  return score
}

/**
 * 計算百分比，最低 0%，最高 100%
 */
export function calculatePercentage(score, maxScore = 3) {
  const pct = (score / maxScore) * 100
  return Math.max(0, Math.min(100, Math.round(pct)))
}

/**
 * 判斷能力狀態
 */
export function getAbilityStatus(percentage) {
  if (percentage >= 80) return { label: '穩定正向', color: 'text-green-600', barColor: 'bg-green-400' }
  if (percentage >= 50) return { label: '持續練習', color: 'text-amber-500', barColor: 'bg-amber-400' }
  return { label: '需要加強', color: 'text-red-500', barColor: 'bg-red-400' }
}

/**
 * 依五項能力分數生成溫暖總結文字
 */
export function generateSummaryText(results) {
  const avg = results.reduce((sum, r) => sum + r.percentage, 0) / results.length
  const lowAbilities = results.filter((r) => r.percentage < 50).map((r) => r.abilityName)
  const highAbilities = results.filter((r) => r.percentage >= 80).map((r) => r.abilityName)

  if (avg >= 80) {
    return '你在這次測驗中展現了非常穩定的 SEL 能力！在高壓的醫療環境中，能夠同時照顧情緒、溝通與決策，是非常珍貴的專業力量。繼續保持，也別忘了偶爾為自己充電。'
  }
  if (avg >= 60) {
    return `整體而言，你已具備不錯的情緒與人際應對基礎。${highAbilities.length > 0 ? `在「${highAbilities.join('、')}」方面表現穩健，` : ''}繼續練習，你的 SEL 能力會更加紮實。記得先照顧好自己，才能長久照顧他人。`
  }
  if (lowAbilities.length > 0) {
    return `這次測驗顯示在「${lowAbilities.join('、')}」方面還有成長空間，這很正常，SEL 是可以練習的！不需要太有壓力，從今天開始，每天多一點點的自我覺察與調節，就是很好的起點。你願意做這份測驗，本身就是照顧自己的行動。`
  }
  return '謝謝你完成這份測驗！每一次面對自己的狀態，都是一次小小的勇敢。透過練習 SEL，你會越來越了解自己，也越來越能在壓力中找到穩定的力量。'
}

/**
 * 取得每項能力的個別建議
 */
export function getAbilitySuggestion(abilityKey, percentage) {
  const suggestions = {
    'self-awareness': {
      low: '建議先練習停下來辨識情緒與身體訊號，問問自己：「我現在感覺怎麼樣？」',
      mid: '你已有初步的覺察能力，試著更頻繁地「暫停一下」觀察自己的狀態。',
      high: '你的自我覺察能力很好！繼續保持這份對自己的敏感與關注。',
    },
    'self-management': {
      low: '建議從呼吸調節與暫停回應開始練習，遇到衝動時先數三秒再回應。',
      mid: '已有一定的情緒管理能力，試著在壓力升高前就提早調節。',
      high: '在壓力下仍能穩住自己，這是非常重要的專業能力，值得肯定！',
    },
    'social-awareness': {
      low: '建議多從對方感受與立場理解情境，問問自己：「他現在可能感受到什麼？」',
      mid: '你具備基本的同理心，試著在溝通時多停留在對方的角度想一想。',
      high: '你能敏銳地感受他人情緒，這份同理力讓你的照護更有溫度。',
    },
    'relationship-skills': {
      low: '建議練習用尊重但清楚的方式表達專業立場，找到「既堅持又不傷關係」的說法。',
      mid: '你有溝通的意願與基礎，試著在說話前多考慮對方接收的感受。',
      high: '你能在複雜的人際中找到平衡，這是很難得的溝通能力。',
    },
    'responsible-decision': {
      low: '建議在壓力情境下，先回到病人安全的優先原則，讓它成為決策的錨點。',
      mid: '你有考量責任的意識，繼續練習在忙碌中也能暫停一下評估風險。',
      high: '你在壓力下仍能做出負責任的決策，這是高品質照護的核心能力！',
    },
  }

  const level = percentage >= 80 ? 'high' : percentage >= 50 ? 'mid' : 'low'
  return suggestions[abilityKey]?.[level] ?? ''
}
