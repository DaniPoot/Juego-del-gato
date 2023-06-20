import TURNS from '../const/turns'

export const Footer = ({ reset, letterBoard }) => {

  return (
    <footer className="footer">
      <h2 className="footer__text">Rondas ganadas</h2>
      <div className="turn turn__purple">
        <p className="turn-label"> X (Tu)</p>
        <p>{ letterBoard[TURNS.X] }</p>
      </div>
      <div className="turn turn__yellow">
        <p className="turn-label"> 0 (CPU)</p>
        <p>{ letterBoard[TURNS.O] }</p>
      </div>
      <div className='reset-box'>
        <button className="reset-button" onClick={reset}>
          <img src="./icons/reset.svg" alt="reset-icon" />
        </button>
      </div>
    </footer>
  )
}
