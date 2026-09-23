import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../types/types";
export default function useProducts() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('https://fakestoreapi.com/products');
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    return { products, loading };
}