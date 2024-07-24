import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import './../../index.css';

const ProductCard = ({ product, removeProduct, updateQuantity }) => {

    /**
     * Manejar la reducción de la cantidad del producto.
     * Si la cantidad es 1, elimina el producto.
     */
    const handleDecrement = () => {
        if (product.quantity === 1) {
            removeProduct(product);
        } else {
            updateQuantity(product, -1);
        }
    };

    /**
     * Manejar el incremento de la cantidad del producto.
     */
    const handleIncrement = () => {
        updateQuantity(product, 1);
    };

    return (
        <Card className="shadow-lg flex items-center p-4 mb-4 rounded-lg bg-[var(--card-background)]">
            <img className="w-24 h-24 object-cover rounded-lg mr-4" src={product.image} alt={product.name} />
            <CardContent className="flex-1">
                <CardHeader className="p-3">
                    <CardTitle className="text-4xl font-bold text-[var(--highlight-green)]">{product.name}</CardTitle>
                </CardHeader>
                <CardDescription className="text-[var(--text-body)] mb-4 max-w-sm">{product.description || <span>&nbsp;</span>}</CardDescription>
            </CardContent>
            <div className="flex flex-col items-center">
                <span className="text-4xl font-bold text-[var(--text-price)] mb-4">{product.price}€</span>
                <div className="flex items-center mb-4">
                    <Button onClick={handleDecrement} className="text-base border border-solid border-[var(--text-button)] h-6 px-2 py-1 bg-[var(--button-decrement)] text-[var(--text-button)] rounded-md hover:bg-[var(--button-decrement-hover)]">-</Button>
                    <span className="mx-2 text-lg font-semibold text-[var(--text-body)]">{product.quantity}</span>
                    <Button onClick={handleIncrement} className="text-base border border-solid border-[var(--text-button)] h-6 px-2 py-1 bg-[var(--button-increment)] text-[var(--text-button)] rounded-md hover:bg-[var(--button-increment-hover)]">+</Button>
                </div>
                <button
                    onClick={() => removeProduct(product)}
                    className="bin-button flex flex-col items-center justify-center w-8 h-8 rounded-full bg-[var(--button-delete)] text-[var(--text-button)] cursor-pointer border-2 border-[var(--button-delete-border)] transition duration-300 hover:bg-[var(--button-delete-hover)] active:scale-90">
                    <svg className="bin-top w-3 origin-right transition duration-300" viewBox="0 0 39 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="5" x2="39" y2="5" stroke="white" strokeWidth="4"></line>
                        <line x1="12" y1="1.5" x2="26.0357" y2="1.5" stroke="white" strokeWidth="3"></line>
                    </svg>
                    <svg className="bin-bottom w-3 mt-0.5" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_8_19" fill="white">
                            <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                        </mask>
                        <path d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z" fill="white" mask="url(#path-1-inside-1_8_19)"></path>
                        <path d="M12 6L12 29" stroke="white" strokeWidth="4"></path>
                        <path d="M21 6V29" stroke="white" strokeWidth="4"></path>
                    </svg>
                </button>
            </div>
        </Card>
    );
}

export default ProductCard;
