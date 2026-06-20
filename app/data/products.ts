import { Product } from "@/app/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Toyota Brake Pads",
    brand: "Bosch",
    category: "Brakes",
    vehicle: "Toyota Corolla",
    image: "/products/brake.jpg",
    price: 3500,
    stock: 12,
    description: "Premium ceramic brake pads."
  },

  {
    id: "2",
    name: "Oil Filter",
    brand: "Toyota Genuine",
    category: "Filters",
    vehicle: "Toyota Prado",
    image: "/products/filter.jpg",
    price: 1200,
    stock: 20,
    description: "Original oil filter."
  },

  {
    id: "3",
    name: "Air Filter",
    brand: "Denso",
    category: "Filters",
    vehicle: "Nissan Xtrail",
    image: "/products/airfilter.jpg",
    price: 1800,
    stock: 15,
    description: "High airflow air filter."
  },

  {
    id: "4",
    name: "Shock Absorber",
    brand: "KYB",
    category: "Suspension",
    vehicle: "Subaru Forester",
    image: "/products/shock.jpg",
    price: 7800,
    stock: 8,
    description: "Gas shock absorber."
  }
];