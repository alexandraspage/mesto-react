function Card(props) {

    function handleClick() {
        console.log(props.card)
        props.onCardClick(props.card);
    }

    return (
        <div className="elements__group">
            <img className="elements__image" src={`${props.card.link}`} alt={`${props.card.name}`} onClick={handleClick} />
            <button className="elements__trash-button" type="button"></button>
            <div className="elements__info">
                <h2 className="elements__caption">{props.card.name}</h2>
                <div className="elements__like-container">
                    <button className="elements__like-button" type="button"></button>
                    <p className="elements__like-number">{props.card.likes}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;