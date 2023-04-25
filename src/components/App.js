import React from 'react';
import '../index.css';
import Header from './Header.js';
import Main from './Main.js'
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(null);


  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    console.log(card)
    setSelectedCard(card);

  }


  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}

      />
      <Footer />
      <PopupWithForm title="Редактировать профиль" name="profile" isOpen={isEditProfilePopupOpen} onClosePopup={closeAllPopups} buttonText="Сохранить">
        <div>
          <input id="name-input" className="popup__input popup__input_type_name" placeholder="Имя" type="text"
            name="profileName" required minLength="2" maxLength="40" />
          <span className="name-input-error popup__span"></span>
          <input id="input-description" className="popup__input popup__input_type_description" placeholder="О себе"
            type="text" name="profileDescription" required minLength="2" maxLength="200" />
          <span className="input-description-error popup__span"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm title="Новое место" name="card" isOpen={isAddPlacePopupOpen} onClosePopup={closeAllPopups} buttonText="Сохранить">
        <div>
          <input id="card-name-input" className="popup__input popup__input_card_name" placeholder="Название" type="text"
            name="name" required minLength="2" maxLength="30" />
          <span className="card-name-input-error popup__span"></span>
          <input id="card-link-input" className="popup__input popup__input_card_link" placeholder="Ссылка на картинку"
            type="url" name="link" required />
          <span className="card-link-input-error popup__span"></span>
        </div>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClosePopup={closeAllPopups}></ImagePopup>
      <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClosePopup={closeAllPopups} buttonText="Сохранить">
        <div>
          <input id="avatar-input" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку"
            type="url" name="avatar" required minLength="2" maxLength="200" />
          <span className="avatar-input-error popup__span"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" name="confirm" buttonText="Да"/>

    </>
  );
}

export default App;
