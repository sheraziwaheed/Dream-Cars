import react from 'react';
import './Description.css';
import{ useParams} from 'react-router-dom';
// import { useNavigate }from 'react-router-dom' ;
import CarData from '../CarData.json';
const Description:React.FC =()=>{
    const {id}= useParams();
    // const navigate= useNavigate();
    const car=CarData.find((c)=> c.id === Number(id));
    if(!car){
        return <div>
            Car not found
        </div>
    }
    return(
        <div className='desc-container'>
        <h2 className="page-heading"> Explore Your Dream Car </h2>
        {/* <button className='back-button'
        onClick={()=> navigate('/Car')}>Back</button> */}
        <h2 className='desc-heading'>Car Description</h2>
        <div className='desc-content'>
        <div className='image-wrapper'>
        <img
        src={car.image}
        alt= {`${car.model} ${car.make}`}
        />
        </div>
        <div className='info-wrapper'>
        <h3>{car.make} {car.model} </h3>
        <p>Variant:{car.variant}</p>
        <p>Color:{car.color}</p>
        <p className='subtitle'>Price:{car.price}</p>
        <p> Description:{car.description}</p>
        <button className='add-to-cart'>Add to Cart</button>
        </div>
        </div>
        </div>
    )
}
export default Description;

