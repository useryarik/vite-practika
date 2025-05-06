import './Header.css'

function Header(){
    return(
      <header>
        <div className='logo'>
          <img src="./src/assets/logo.png" alt="" />
          </div>
        <div className='nav'>
          <p>О нас</p>
          <p>Проекты</p>
          <p>Материалы</p>
          <p>Отзывы</p>
          </div>
        <div className='numb'>+7 999 999 99 99</div>
      </header>
        
     
    )
  }

export default Header