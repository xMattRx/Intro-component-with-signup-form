import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='containerLeft'>
          <h1>Learn to code by watching others</h1>
          <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understading how developers think is invaluable.</p>
        </div>
        <div className='containerRight'>
          <div className="tryfree">
            <p><span>Try it free 7 days</span> then $20/mo. thereatter.</p>
          </div>
          <div className="containerForm">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
            <input type="text" placeholder='Email Address' />
            <input type="text" placeholder='Password' />
            <button>CLAIM YOUR FREE TRIAL</button>
            <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
