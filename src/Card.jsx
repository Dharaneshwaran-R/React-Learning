import profile from './assets/profile1.jpg';
function Card(){
    return(
        <div className="card">
            <img className="profileimg" src={profile} alt="Profile"/>
            <h2 className="card-h2">Dharan</h2>
            <p className="para">Work hard and Be Consitent</p>
        </div>
    )
}
export default Card