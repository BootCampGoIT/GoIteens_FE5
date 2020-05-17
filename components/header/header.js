import { createMarkup, createNewsMarkup } from '../pages/page.js';
import { games, programs, news } from '../../data.js';

const header = () => {
    const navigationList = document.querySelector('.navigationList'); //ul
    const userProfile = document.querySelector('.userProfile');//div
    const listItems = document.querySelector('.listItems'); //ul
    const cartForModal = document.querySelector('.cartForModal');

    const userName = document.querySelector('.userName'); //span
    const pageName = document.querySelector('.pageName'); //p

    const currentActiveLink = navigationList.querySelector('.activeNavLink');
    // pageName.textContent = currentActiveLink.dataset.page;
    listItems.innerHTML = createMarkup(games);


    const setActiveLink = (event) => {
        if (event.target.nodeName === "A") {
            const currentActiveLink = navigationList.querySelector('.activeNavLink');
            currentActiveLink && currentActiveLink.classList.remove('activeNavLink');
            event.target.classList.add('activeNavLink');
            // pageName.textContent = event.target.dataset.page;
            listItems.innerHTML = createMarkup(games);
        }

        switch (event.target.dataset.page) {
            case 'games':
                listItems.innerHTML = createMarkup(games);
                break;
            case 'programs':
                listItems.innerHTML = createMarkup(programs);
                break;
            case 'news':
                listItems.innerHTML = createNewsMarkup(news);
                break;

            default:
                break;
        }






    }

    const setActiveUser = () => {
        userProfile.classList.toggle('activeProfile');
        // if (userName.textContent !== 'Andrii') {
        //     userName.textContent = 'Andrii';
        // } else userName.textContent = 'Guest';
        (userName.textContent !== 'Andrii') ? userName.textContent = 'Andrii' : userName.textContent = 'Guest';
    }

    const openOrder = (event) => {
        const instance = basicLightbox.create(`
        <div class="modal">
            
            <div class="cartWindow">
            <p>All products in cart: 2</p>
            <p>Total price: 1200</p>
            
            </div>
            <a>Close</a>
        </div>
    `, {
            onShow: (instance) => {
                instance.element().querySelector('a').onclick = instance.close
            }
        })

        instance.show();
    }

    navigationList.addEventListener('click', setActiveLink); //ul
    userProfile.addEventListener('click', setActiveUser); //div
    cartForModal.addEventListener('click', openOrder);









    // ================ at home ====================
    // userProfile.style.backgroundColor = 'green';
    // userProfile.classList.add('activeProfile');
    // userProfile.classList.remove('activeProfile');
    // userProfile.classList.toggle('activeProfile');
    // userProfile.classList.toggle('activeProfile');
}


export default header;