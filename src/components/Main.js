import React from 'react';
import Card from './Card';
import api from '../utils/Api';

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {

        api.getInfo()
            .then((data) => {

                setUserDescription(data.about)
                setUserAvatar(data.avatar);
                setUserName(data.name)

            })
            .catch((err) => { console.log(err) })
    })

    React.useEffect(() => {
        api.getAllCards()
            .then((data) => {
                setCards(data.map(item => ({
                    id: item._id,
                    name: item.name,
                    link: item.link,
                    likes: item.likes.length
                }
                )))

            })
            .catch((err) => { console.log(err) })
    })

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
                        <img className="profile__avatar" src={userAvatar} />
                    </button>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                        <p className="profile__description">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map((item) => {
                    return (
                        <Card key={item.id} card={item} onCardClick={props.onCardClick} />
                    )
                })}
            </section>
        </main>
    )
}

export default Main;