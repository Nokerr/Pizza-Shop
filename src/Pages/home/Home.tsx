import { useEffect } from 'react';
import SimpleSlider from "../../components/Slider/SimpleSlider";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import PizzaListItem from '../../components/PizzaListItem/PizzaListItem';
import './home.scss'
import Spinner from '../../components/Spinner/Spinner';
import Search from '../../components/Search/Search';
import { fetchItems } from '../../redux/pizza/pizzaSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import MobCartCounter from '../../components/MobCartCounter/MobCartCounter';
import { selectCategoryId, selectPizza, selectSearchValue, selectSort } from '../../redux/filters/selectors';


const Home = () => {

    const dispatch = useAppDispatch();

    const activeCategory = useAppSelector(selectCategoryId)
    const sortCategory = useAppSelector(selectSort)
    const searchValue = useAppSelector(selectSearchValue)
    const { items, status } = useAppSelector(selectPizza)


    const fetchPizzas = async () => {

        const setCategory = activeCategory > 0 ? 'category=' + activeCategory + '&' : '';
        const sortBy = 'sortBy=' + sortCategory.sortSelector;
        const searchPizza = searchValue ? '&name=' + searchValue : '';

        dispatch(fetchItems({ setCategory, sortBy, searchPizza }))
    }


    useEffect(() => {

        fetchPizzas();

    }, [activeCategory, sortCategory, searchValue]);


    return (
        <>
            <div className="cart-conter-wrapper">
                <MobCartCounter />
            </div>
            <SimpleSlider />
            <div className="container">
                <div className="category__bar">
                    <Categories />
                    <Search />
                    <Sort />
                </div>
            </div>
            <div className="container">
                {
                    status === 'loading' ? <Spinner /> :
                        <div className="pizza__list">
                            {
                                items.length > 0 ?
                                    items.map(pizza => {
                                        return <PizzaListItem key={pizza.id} {...pizza} />
                                    }) : null
                            }
                        </div>
                }
            </div>
        </>
    );
};

export default Home;