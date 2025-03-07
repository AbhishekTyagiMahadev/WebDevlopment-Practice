import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s" alt=""/>
            <h2 className='card-title'>{props.title}</h2>
            <p className="card-content">{props.desc}</p>
        </div>
    );
};

export default Card;