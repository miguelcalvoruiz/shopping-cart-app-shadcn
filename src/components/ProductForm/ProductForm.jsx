import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import defaultImage from '../../assets/default-product.png';

/**
 * Componente de formulario para añadir productos.
 * @param {Function} addProduct - Función para añadir un nuevo producto.
 * @returns {JSX.Element} - El componente JSX para el formulario de productos.
 */
const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  /**
   * Manejar el envío del formulario.
   * Verifica que el nombre y el precio estén presentes.
   * @param {Event} e - El evento de envío del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      setError('El nombre y el precio son obligatorios.');
      return;
    }
    const productImage = image || defaultImage;
    addProduct({ name, price: parseFloat(price), image: productImage, description });
    setName('');
    setPrice('');
    setImage('');
    setDescription('');
    setError('');
  };

  return (
    <Card className="shadow-lg mb-4 bg-[var(--card-background)] rounded-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-[var(--text-title)]">Añadir Producto</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex space-x-4" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4 w-1/2">
            <Input
              className="p-2 border border-[var(--custom-gray)] rounded-md"
              type="text"
              placeholder="Nombre..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              className="p-2 border border-[var(--custom-gray)] rounded-md"
              type="number"
              placeholder="Precio..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              className="p-2 border border-[var(--custom-gray)] rounded-md"
              type="text"
              placeholder="Imagen... (Link)"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="flex flex-col space-y-4 w-1/2">
            <Textarea
              className="resize-none h-24 p-2 border border-[var(--custom-gray)] rounded-md"
              maxlength="200"
              placeholder="Descripción..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="flex justify-end">
              <Button className="w-1/2 p-2 bg-[var(--highlight-green)] text-[var(--custom-gray)] rounded-md hover:bg-green-600" type="submit">
                Añadir
              </Button>
            </div>
          </div>
        </form>
        {error && <div className="text-red-500 mt-2">{error}</div>}
      </CardContent>
    </Card>
  );
}

export default ProductForm;
