
export interface Bike {
  id: string;
  title: string;
  price: number;
  type: string;
  size: string;
  year: number;
  condition: string;
  brand: string;
  gears: number;
  description: string;
  image: string;
  images: string[];
  available: boolean;
}

export const mockBikes: Bike[] = [
  {
    id: "1",
    title: "Trek Mountain Bike - Excellent Condition",
    price: 850,
    type: "Mountain",
    size: "M",
    year: 2021,
    condition: "Excellent",
    brand: "Trek",
    gears: 21,
    description: "This Trek mountain bike is in excellent condition with minimal wear. Perfect for trail riding and urban commuting. Recently serviced with new brake pads and chain.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    available: true,
  },
  {
    id: "2",
    title: "Specialized Road Bike - Carbon Frame",
    price: 1200,
    type: "Road",
    size: "L",
    year: 2020,
    condition: "Very Good",
    brand: "Specialized",
    gears: 16,
    description: "Lightweight carbon frame road bike perfect for long distance rides. Shimano components throughout. Minor scuffs but mechanically perfect.",
    image: "https://images.unsplash.com/photo-1544191696-15693072b2ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1544191696-15693072b2ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1558618047-1c6c23d8b6c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    available: true,
  },
  {
    id: "3",
    title: "Giant Hybrid Commuter Bike",
    price: 450,
    type: "Hybrid",
    size: "S",
    year: 2019,
    condition: "Good",
    brand: "Giant",
    gears: 18,
    description: "Perfect commuter bike with comfortable upright riding position. Includes rear rack and fenders. Great for city riding and light trails.",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    available: true,
  },
  {
    id: "4",
    title: "Electric City Bike - Low Miles",
    price: 1800,
    type: "Electric",
    size: "M",
    year: 2022,
    condition: "Like New",
    brand: "Rad Power",
    gears: 8,
    description: "Nearly new electric bike with only 200 miles. 50-mile range on a single charge. Perfect for commuting without breaking a sweat.",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    available: false,
  },
  {
    id: "5",
    title: "Vintage Steel Road Bike",
    price: 325,
    type: "Road",
    size: "M",
    year: 1985,
    condition: "Restored",
    brand: "Peugeot",
    gears: 10,
    description: "Beautifully restored vintage steel road bike. Original lugged frame with modern components. A real head-turner with smooth ride quality.",
    image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    available: true,
  },
  {
    id: "6",
    title: "Cannondale Mountain Bike",
    price: 650,
    type: "Mountain",
    size: "L",
    year: 2018,
    condition: "Good",
    brand: "Cannondale",
    gears: 24,
    description: "Solid mountain bike with front suspension. Great for weekend trail adventures. Has some wear but mechanically sound.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    available: true,
  }
];
