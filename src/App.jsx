import './App.css'
import Header from './components/Header/Header';
import ProductForm from './components/ProductForm/ProductForm';
import ProductList from './components/ProductList/ProductList';
import { useState } from 'react';

/**
 * Con esta función podemos obtener el total del precio de la lista completa de productos.
 * Para ello, introducimos por parámetro la lista de los productos y la función se encarga
 * de sumar todos los precios.
 * @param {Array} products - La lista de productos.
 * @returns {number} total - El total del precio de todos los productos de la lista.
 */
const calculateTotal = (products) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].quantity;
  }
  return total;
};

/**
 * Componente principal de la aplicación.
 * @returns {JSX.Element} - El componente JSX para la aplicación.
 */
const App = () => {
  const [products, setProducts] = useState([]);

  /**
   * Añadir un nuevo producto a la lista de productos.
   * Si el producto ya existe, incrementa su cantidad.
   * @param {Object} newProduct - El nuevo producto a añadir.
   */
  const addProduct = (newProduct) => {
    const existingProduct = products.find(product => product.name === newProduct.name);
    if (existingProduct) {
      setProducts(products.map(product =>
        product.name === newProduct.name ? { ...product, quantity: product.quantity + 1 } : product
      ));
    } else {
      newProduct.quantity = 1;
      setProducts([...products, newProduct]);
    }
  };

  /**
   * Eliminar un producto de la lista de productos.
   * @param {Object} productToRemove - El producto a eliminar.
   */
  const removeProduct = (productToRemove) => {
    setProducts(products.filter(product => product.name !== productToRemove.name));
  };

  /**
   * Actualizar la cantidad de un producto en la lista.
   * @param {Object} productToUpdate - El producto a actualizar.
   * @param {number} amount - La cantidad a incrementar o decrementar.
   */
  const updateQuantity = (productToUpdate, amount) => {
    setProducts(products.map(product =>
      product.name === productToUpdate.name ? { ...product, quantity: product.quantity + amount } : product
    ));
  };

  let total = calculateTotal(products);

  return (
    <div className='bg-[var(--background-general)] min-h-screen'>
      <Header total={total} />
      <div className='container mx-auto p-4 space-y-4'>
        <ProductForm addProduct={addProduct} />
        <ProductList products={products} removeProduct={removeProduct} updateQuantity={updateQuantity} />
      </div>
    </div>
  )
}

export default App;
