const partOne = [
  { statement: 'Klimapolitik muss harte Bretter bohren' },
  { statement: 'Sehen Klimaschützer das Glas eher voll als leer' },
  { statement: 'Das heißt aber nicht, dass "Paris" unwichtig wäre' },
  { statement: 'Die eigentliche Arbeit hat jetzt erst begonnen' },
  { statement: 'Muss ein klarer Fahrplant entwickelt werden' },
  { statement: 'Bricht eine Lanze für den Klimaschutz' },
  { statement: 'Ein Signal für den Klimaschutz' },
  { statement: 'Die Zukunft Menschheit steht auf dem Spiel' },
  { statement: 'Die Zeit drängt' },
  { statement: 'Wenn wir jetzt nicht handeln, ist es zu spät' },
  { statement: 'Das Weltklima, das aus den Fugen geraten ist' },
  { statement: 'Die Unwetter sind nur ein Vorgeschmack' },
]

const partTwo = [
  { statement: 'Die schlimmsten Folgen können wir noch verhindern' },
  { statement: 'Unser Klima ist unsere Zukunft' },
  { statement: 'Jetzt muss gehandelt werden' },
  { statement: 'Dass zum Verhandeln das Handeln kommt' },
  { statement: 'Die Konferenz in Bonn soll die Weichen stellen' },
  { statement: 'Dabei steckt der Teufel im Detail' },
  { statement: 'Angekommen in den Mühen der Ebene' },
  { statement: 'Die Lage ist ernst, aber nicht ohne Hoffnung' },
  { statement: 'Dabei steckt der Teufel im Detail' },
  { statement: 'Dabei steckt der Teufel im Detail' },
  { statement: 'Dabei steckt der Teufel im Detail' },
  { statement: 'Dabei steckt der Teufel im Detail' },
]

const bingoStatement = [{ id: '13', statement: 'BINGO' }]
const shuffledOne = partOne.slice().sort((a, b) => 0.5 - Math.random())
const shuffledTwo = partTwo.slice().sort((a, b) => 0.5 - Math.random())

export const shuffledArray = [...shuffledOne, ...bingoStatement, ...shuffledTwo]
