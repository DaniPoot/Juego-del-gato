import { patherns } from '../const/win-patherns';

export function verifyWinner (turn, board) {
  const boardValues = board.filter(value => value !== null)

  const turnPatherns = board.map((value, index) => {
    if (turn === value) return index;
  }).filter(value => value !== undefined)
  
  const completePathern = patherns.some(pathern => {
    const completePathern = pathern.filter(value => !turnPatherns.includes(value))
    return completePathern.length === 0
  })

  if (!completePathern && (boardValues.length === 9)) return 'draw'

  if (completePathern) return turn
  
  return
}