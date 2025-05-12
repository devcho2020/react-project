export const weightedRandomPick = (chanceMap) => {
  const entries = Object.entries(chanceMap);
  const total = entries.reduce((sum, [, chance]) => sum + chance, 0);
  const rand = Math.random() * total;

  let cumulative = 0;
  for (const [value, chance] of entries) {
    cumulative += chance;
    if (rand < cumulative) {
      return Number(value);
    }
  }
}