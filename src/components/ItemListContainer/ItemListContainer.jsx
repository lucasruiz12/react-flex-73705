import './ItemListContainer.css';
import Item from '../Item/Item.jsx'
import getProducts from '../../services/mockService';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader.jsx';
// import Contador from '../Contador/Contador.jsx';

function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        //     .then(response => response.json())
        //     .then(data => console.log(data));

        setLoading(true);
        getProducts()
            .then(result => {
                setProducts(result);
                setLoading(false);
            }).catch((err) => { alert(err) });
        // .finally(() => setLoading(false)); // Se puede hacer un finally si queremos ejecutar algo entre al then o entre al catch indistintamente
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "2rem" }}>
            {
                loading ? <Loader />
                    :
                    products.length > 0 ?
                        products.map(elem =>
                            <Item
                                key={elem.id}
                                {...elem}
                            />)
                        :
                        <p>No se encontraron productos</p>
            }
            {/* <Contador /> */}
        </div>
    );
};


export default ItemListContainer;