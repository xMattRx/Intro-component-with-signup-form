import './App.scss';
import error from './assets/icon-error.svg';

function App() {
  
  function validationEmpty(...elements){

    for (let i = 0; i < elements.length; i++) {
        if(elements[i].value === ''){
        elements[i].style.borderColor = 'hsl(0, 100%, 74%)'
        elements[i].style.borderWidth = '3px';
        elements[i].nextElementSibling.style.display = 'block'
        elements[i].nextElementSibling.nextElementSibling.style.display = 'block'
    }else{
        elements[i].style.borderColor = 'rgba(206, 206, 206, 0.671)'
        elements[i].nextElementSibling.style.display = 'none'
        elements[i].nextElementSibling.nextElementSibling.style.display = 'none'
      }
    }


}
  function validationEmail(){
    var email = document.getElementById('email');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
      email.style.borderColor = 'rgba(206, 206, 206, 0.671)'
      email.nextElementSibling.style.display = 'none'
      email.nextElementSibling.nextElementSibling.style.display = 'none'
    }else{
      email.style.borderColor = 'hsl(0, 100%, 74%)'
      email.style.borderWidth = '3px';
      email.nextElementSibling.style.display = 'block'
      email.nextElementSibling.nextElementSibling.style.display = 'block'
    }
  }
 

  function validations(event){
    event.preventDefault()
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var password = document.getElementById('password');
    validationEmpty(firstName, lastName, password)
    validationEmail()

  }  

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
          <form onSubmit={validations} className="containerForm">
            <div className="containerInput">
              <input id="firstName" type="text" placeholder='First Name' />
              <img src={error} alt="" />
              <p>First Name cannot be empty</p>
            </div>
            <div className="containerInput">
              <input id="lastName" type="text" placeholder='Last Name' />
              <img src={error} alt="" />
              <p>Last Name cannot be empty</p>
            </div>
            <div className="containerInput">
              <input id="email" type="email" placeholder='Email Address' />
              <img src={error} alt="" />
              <p>Looks like this is not an email</p>
            </div>
            <div className="containerInput">
              <input id="password" type="password" placeholder='Password' />
              <img src={error} alt="" />
              <p>Password cannot be empty</p>
            </div>
            <button>CLAIM YOUR FREE TRIAL</button>
            <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
