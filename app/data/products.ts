import { Product } from "@/app/types/product";

export const products: Product[] = Array.from({ length: 50 }, (_, i) => {
  const id = (i + 1).toString();

  const sampleNames = [
    "Brake Pads",
    "Oil Filter",
    "Air Filter",
    "Shock Absorber",
    "Spark Plug",
    "Clutch Kit",
    "Timing Belt",
    "Alternator",
    "Radiator",
    "Fuel Pump",
  ];

  const brands = ["Bosch", "Denso", "KYB", "Toyota Genuine", "NGK"];

  const categories = [
    "Brakes",
    "Filters",
    "Engine",
    "Suspension",
    "Electrical",
  ];

  const vehicles = [
    "Toyota Corolla",
    "Toyota Prado",
    "Nissan Xtrail",
    "Subaru Forester",
    "Mazda CX-5",
  ];

  const name = sampleNames[i % sampleNames.length];

  return {
    id,
    name: `${name} ${i + 1}`,
    brand: brands[i % brands.length],
    category: categories[i % categories.length],
    vehicle: vehicles[i % vehicles.length],
    image: "/products/default.jpg",
    price: 0, // ✅ as requested
    stock: Math.floor(Math.random() * 20) + 1,
    description: `High quality ${name.toLowerCase()} for reliable performance.`,
  };
});