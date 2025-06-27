
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BikeCard from "@/components/BikeCard";
import { mockBikes } from "@/data/mockBikes";

const Index = () => {
  const whyChooseUs = [
    {
      title: "Local Tracy Business",
      description: "Family-owned shop serving the Tracy community with personal attention and care",
    },
    {
      title: "Expert Knowledge",
      description: "Every bike is personally inspected and tested by our experienced team before sale",
    },
    {
      title: "Unbeatable Prices",
      description: "Quality pre-owned bikes at fair prices with honest descriptions",
    },
  ];

  const featuredBikes = mockBikes.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&h=1960')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bay Bike Shop
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Quality Bikes, Honest Prices, Tracy CA
          </p>
          <p className="text-lg mb-8 text-gray-200">
            "Your trusted Bay Area bike specialists since day one"
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bikes">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Browse Our Bikes
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-black">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bay Bike Shop?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              More than just a bike shop - we're your trusted Tracy cycling partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Bikes Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fresh Arrivals
            </h2>
            <p className="text-xl text-gray-600">
              Our latest picks - inspected and ready to ride
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredBikes.map((bike) => (
              <BikeCard key={bike.id} bike={bike} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/bikes">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                View All Available Bikes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
