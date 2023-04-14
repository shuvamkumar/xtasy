import './Card.scss';
import logo from './assets/images/google.png'


function Desktop_3(){
    return(
    <div className='flex-container'>
    <div className='flex1-child1'>
    <Card/>
    </div>
        <div className="flex1-child2">
        <div className="first">
          <div className="firstContent">
            <span>
              <h1>
                REGISTER FOR THE EXCITING <span className="retro">RETRO</span> VERSE
              </h1>
            </span>
            <p>
            Something really awesome is waiting for you register now to get the updates
            </p>
            <div>
             <div className='google-btn'>
             <div className='google-icon-wrapper'>
             <img  className='google-icon' src={logo}   alt="google"  />
             </div>
            <p className='btn-text'> Sign up with google</p>
             </div>
            </div>
            </div>
            </div>
          </div>
          </div>
          
    )
}
export default Desktop_3;
