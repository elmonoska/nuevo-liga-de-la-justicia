const mission1 = [];
const mission2 = [];
const superHeroTales = [];
const ultraWords = [];
for (let i = 1; i <= 75; i++) {
  mission1.push({value: `${i} Pista ${i}`, text: `Pista ${i}`})
  mission2.push({value: `${i} Pista ${i}`, text: `Pista ${i}`})
  if (i <= 4) {
    superHeroTales.push({value: `${i} Pista ${i}`, text: `Pista ${i}`})
  }
  if (i <= 12) {
    ultraWords.push({value: `${i} Pista ${i}`, text: `Pista ${i}`})
  }
}
export const TRACKS_COLLECTION = {
  mission_1: mission1,
  mission_2: mission2,
  super_hero_tales: superHeroTales,
  ultra_words: ultraWords,
}
