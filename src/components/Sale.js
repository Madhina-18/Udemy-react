

import saleimage from "../assets/images/sale-image.jpg"

function Sale()
{
  return(
    <div className="sale-image">
    <img src={saleimage} alt="Sale"></img>

    <div className="sale-image__offer">
     <h2>Udemy Flash Sale! 24 hours to save.</h2>
     <p>Get the top courses for just 499. Just one day to sale but a 
        life time to learn
    </p>
    </div>


 </div>
  )
}
 export default Sale