import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Input } from "@/components/ui/input";

const ProductList = ({ products, removeProduct, updateQuantity }) => {
    const [filter, setFilter] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            {products.length > 0 && (
                <>
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
                </>
            )}
            <div>
                {filteredProducts.map((product, index) => (
                    <ProductCard key={index} product={product} removeProduct={removeProduct} updateQuantity={updateQuantity} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
