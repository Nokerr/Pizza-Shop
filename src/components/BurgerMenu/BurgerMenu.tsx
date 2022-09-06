import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { setisBurgerMenuOpen } from '../../redux/burgerMenu/burgerMenuSlice';
import { selectBurgerMemu } from '../../redux/burgerMenu/selectors';
import './burgerMenu.scss'


const BurgerMenu = () => {

    const { isBurgerMenuOpen } = useAppSelector(selectBurgerMemu)

    const dispatch = useAppDispatch();

    const linksList = [
        { link: '/', name: 'Pizza' },
        { link: '/contacts', name: 'Contacts' },
        { link: '/location', name: 'Location' },
        { link: '/card', name: 'Card' }
    ]

    const [scroll, setScroll] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY < 50);
        });

    }, []);

    const scrollFixClass = scroll ? '' : 'burger-menu__modal-upper ';
    const openModalClass = isBurgerMenuOpen ? '' : 'active'


    return (
        <div className='burger-menu'>
            <div className={'burger-menu__modal ' + scrollFixClass + openModalClass}>
                <div className="link-wrapper">
                    {linksList.map((item, index) => {
                        return <Link
                            className='burger-link'
                            key={index}
                            to={item.link}
                            onClick={() => dispatch(setisBurgerMenuOpen(!isBurgerMenuOpen))}>
                            {item.name}
                        </Link>
                    })}
                </div>
            </div>
        </div>
    );
};
export default BurgerMenu;