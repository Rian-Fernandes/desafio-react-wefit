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
  //  const [cart, setCart] = useState<Product[]>([]);

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
    // setCart((prevCart) => [...prevCart, product]); // Adiciona o produto ao carrinho
    onAddToCart(); // Atualiza a quantidade no cabeçalho
  };

  return (
    <Container>
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          onAddToCart={() => handleAddToCart(product)} // Passa a função handleAddToCart corretamente
          cartQuantity={cart.filter((item) => item.id === product.id).length}
        />
      ))}
    </Container>
  );
};

export default Home;
