const partOne = [{ statement: 'Delta' }, { statement: 'Omicron BA.1' }, { statement: 'Gamma' }, { statement: 'Epsilon' }]

const partTwo = [{ statement: 'Alpha' }, { statement: 'Omicron BA.2' }, { statement: 'Eta' }, { statement: 'Beta' }]

const bingoStatement = [{ statement: 'BINGO' }]
const shuffledOne = partOne.slice().sort((a, b) => 0.5 - Math.random())
const shuffledTwo = partTwo.slice().sort((a, b) => 0.5 - Math.random())

export const shuffledArray = [...shuffledOne, ...bingoStatement, ...shuffledTwo]
