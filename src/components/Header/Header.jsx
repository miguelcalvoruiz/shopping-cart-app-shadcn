import React from 'react';
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import logo from '../../assets/shopping-cart.svg';
const Header = ({ total }) => {
  return (
    <Card className="border-x-0 border-t-0 border-b-2 rounded-sm shadow-lg w-full mb-4 bg-[var(--header-background)] text-[var(--custom-white)]">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3 justify-between">
          <div className='flex items-center gap-3 text-3xl font-extrabold text-[var(--text-title)]'>
            <img src={logo} alt="Shopping Cart Logo" className="w-10 h-10" />
            <span>Shopping Cart</span>
          </div>
          <div className='flex flex-col gap-2 '>
            <div>Total:</div>
            <div className="font-semibold">{total.toFixed(2)}€</div>
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}

export default Header;
