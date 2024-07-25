import { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProductCard from '../ProductCard/ProductCard';
import { Input } from "@/components/ui/input";
import './../../index.css';

const ProductList = ({ products, removeProduct, updateQuantity }) => {
    const [filter, setFilter] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <TransitionGroup>
                {products.length > 0 && (
                    <CSSTransition key="header" timeout={500} classNames="fade">
                        <div>
                            <div className="flex items-center justify-between mb-3 mt-8">
                                <h3 className="text-2xl font-bold text-[var(--text-title)]">Productos</h3>
                                <Input
                                    type="text"
                                    placeholder="Filtrar productos..."
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value)}
                                    className="w-40 mr-4 p-2 border border-[var(--custom-gray)] rounded-md"
                                />
                            </div>
                            <hr className="mb-4 border-t-2" />
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
            <TransitionGroup>
                {filteredProducts.map((product, index) => (
                    <CSSTransition key={index} timeout={500} classNames="fade">
                        <ProductCard product={product} removeProduct={removeProduct} updateQuantity={updateQuantity} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
}

export default ProductList;
