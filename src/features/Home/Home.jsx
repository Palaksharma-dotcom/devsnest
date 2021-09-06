import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync, selectProductsData } from './homeSlice';
import { useEffect } from 'react';
import ItemCard from '../Item/ItemCard';

const Home = () => {
    const dispatch = useDispatch();
    const productsData = useSelector(selectProductsData)
    useEffect(() => {
        dispatch(fetchProductsAsync())
    }, []);

    return (
        <div className="container">
            <div className="row p-2" >
                {productsData ? (
                    productsData.map(product => <ItemCard
                        title={product.title}
                        imgSrc={product.image}
                        description={product.description}
                        price={product.price}
                        key={product.id}
                        id={product.id} />
                    )
                ) : (<div className="col-12">LOADING....</div>)}
            </div>
        </div>
    )
}

export default Home;