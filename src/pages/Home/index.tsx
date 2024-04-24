import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import api from "../../services/api";
import { Container } from "./styles";
import { useAppContext } from "../../AppContext";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home: React.FC<{ onAddToCart: () => void }> = ({ onAddToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const { cart, addItemToCart } = useAppContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get<{ products: Product[] }>("/movies");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    addItemToCart(product);

    onAddToCart();
  };

  return (
    <Container>
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          onAddToCart={() => handleAddToCart(product)}
          cartQuantity={cart.filter((item) => item.id === product.id).length}
        />
      ))}
    </Container>
  );
};

export default Home;
