import '../App.css';

const Header = ({handleClick}) => {
  
  return (
    <div className="header">
      <header className="bg-black">
        <div className="p-5 text-center bg-warning">
        <h1 className="mb-3 fs-1 text-dark display-1">Get Bitcoin Price</h1>
        <h4 className="mb-3 text-white display-3">Simply get it</h4>
        <button type='button' onClick={() => handleClick()} className="btn btn-danger mt-3 ">Click Me</button>
      </div>

      </header>
    </div>
  );
}

export default Header;
