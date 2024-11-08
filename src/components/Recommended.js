
import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"







function Recommended ()
{
  return(
    
    <div className="recommended">
    <h1 className="recommended__title">Recommended </h1>
    <p>Pick the best Fit</p>
    <div className="recommended__container">

    <div className="course-card">
        <img src={c1} alt="img"></img>
        <h3>2024 Python Data Visualisation Masterclass</h3>
         <p>Col Steele</p>
         <p>5.9 ⭐⭐⭐⭐⭐ </p>
         <p>449 <del>1789</del></p>
    </div>

    <div className="course-card">
        <img src={c2} alt="img"></img>
        <h3>Web Development Masterclass-online certification</h3>
         <p>Amjad</p>
         <p>4.9 ⭐⭐⭐⭐</p>
         <p>700 <del>1999</del></p>
    </div>
    
    <div className="course-card">
        <img src={c3} alt="img"></img>
        <h3>Master UI/UX Designing With Figma</h3>
         <p>Micheal</p>
         <p>3.9 ⭐⭐⭐</p>
         <p>800 <del>2600</del></p>
    </div>

    <div className="course-card">
        <img src={c4} alt="img"></img>
        <h3>The Web Developer Bootcamp 2024 </h3>
         <p>Jorden</p>
         <p>4.8 ⭐⭐⭐⭐</p>
         <p>950 <del>2800</del></p>
    </div>



    

    </div>


    </div>
    
  )
}

export default Recommended