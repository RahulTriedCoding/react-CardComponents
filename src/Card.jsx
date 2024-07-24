import profilePic from './assets/MeTransparent.png'

function Card(){
  return(
    <div className="card">
      <img className='card-img' src={profilePic} alt="profile picture" />
      <h2 className='card-title'>Rahul Chandan</h2>
      <p className='card-text'>I build SaaS Applications</p>
      
    </div>
  );
}

export default Card