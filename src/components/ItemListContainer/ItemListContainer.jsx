import './ItemListContainer.css';
import Item from '../Item/Item.jsx'
import getProducts from '../../services/mockService';
import { useState, useEffect } from 'react';
import Loader from '../Loader/Loader.jsx';
import { useNavigate, useParams } from 'react-router';
import { db } from '../../firebaseConfig.js';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useAppContext } from '../../context/context.jsx';

function ItemListContainer() {

    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categoria } = useParams();

    const productosCollection = collection(db, 'productos');
    const ordenesCollection = collection(db, 'ordenes');

    const { carrito, limpiarCarrito } = useAppContext();

    const navigate = useNavigate();

    const filterProducts = (arrayProducts, category) => {
        if (category) {
            setProducts(arrayProducts.filter(el => el.category === categoria));
        } else {
            setProducts(arrayProducts);
        };
    };

    // const cargarProductoNuevo = () => {

    //     // const nuevaOrden = {
    //     //     nombre: "Lucas",
    //     //     telefono: 4232323,
    //     //     mail: "lucas@aguantegimnasia.com.ar",
    //     //     total: carrito.reduce((acc, value) => acc += (value.cantidad * value.price), 0),
    //     //     productos: carrito,
    //     // }

    //     // addDoc(ordenesCollection, nuevaOrden).then(response => {
    //     //     console.log("Se creó la orden correctamente con el id", response.id);
    //     //     limpiarCarrito();
    //     //     navigate('/');
    //     // })
    //     //     .catch(err => console.error(err));

    //     // const nuevoProducto = {
    //     //     id: "3",
    //     //     title: "Remera Typescript",
    //     //     text: "La mejor remera de Coderhouse que nos permite poder asegurarnos los tipos de datos en JS",
    //     //     price: 25,
    //     //     img: "/assets/remera.png",
    //     //     stock: 15,
    //     //     category: "otros",
    //     // }

    //     // addDoc(productosCollection, nuevoProducto).then(response => {
    //     //     console.log("Se creó el producto con el id", response.id);
    //     // })

    // }

    useEffect(() => {


        console.log(import.meta.env);

        if (allProducts.length === 0) {

            setLoading(true);
            getDocs(productosCollection)
                .then(snapshot => {
                    const arrayDeProductos = snapshot.docs.map(el => el.data());
                    setAllProducts(arrayDeProductos);
                    filterProducts(arrayDeProductos, categoria);
                    setLoading(false);
                })
                .catch(err => console.error(err));

            // getProducts()
            //     .then(result => {
            //         setAllProducts(result);
            //         filterProducts(result, categoria);
            //         setLoading(false);

            //     }).catch((err) => { alert(err) });
        } else {
            filterProducts(allProducts, categoria);
        };
    }, [categoria]);

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
            {/* <button className="btn btn-primary" onClick={cargarProductoNuevo}>Finalizar compra</button> */}
        </div>
    );
};


export default ItemListContainer;