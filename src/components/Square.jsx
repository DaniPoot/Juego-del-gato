// eslint-disable-next-line react/prop-types
export const Square = ({ children, isSelected, updateBoard, index }) => {
  const isSelectedClass = isSelected ? 'square square__selected' : 'square'

  const handleClick = () => {
    if (isSelected) return
    updateBoard(index)
  }

  return (
    <button className={isSelectedClass} onClick={handleClick}>
      { children }
    </button>
  )
}