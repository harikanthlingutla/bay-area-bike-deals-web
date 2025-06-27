
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import { mockBikes } from "@/data/mockBikes";

const BikeDetails = () => {
  const { id } = useParams();
  const bike = mockBikes.find((b) => b.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Bike not found</h2>
          <Link to="/bikes">
            <Button>Back to Bikes</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleContactClick = () => {
    const message = `Hi! I'm interested in the ${bike.title} listed for $${bike.price}. Is it still available?`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/bikes" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Bikes
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="mb-4">
              <img
                src={bike.images[selectedImage] || bike.image}
                alt={bike.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            {bike.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {bike.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                      selectedImage === index ? "border-blue-600" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${bike.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Bike Details */}
          <div>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <Badge variant={bike.available ? "default" : "secondary"} className="text-sm">
                  {bike.available ? "Available" : "Sold"}
                </Badge>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{bike.title}</h1>
              <div className="text-4xl font-bold text-blue-600 mb-6">${bike.price}</div>
            </div>

            {/* Quick Specs */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Quick Specs</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-600">Brand</span>
                  <p className="font-semibold">{bike.brand}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Year</span>
                  <p className="font-semibold">{bike.year}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Type</span>
                  <p className="font-semibold">{bike.type}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Size</span>
                  <p className="font-semibold">{bike.size}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Condition</span>
                  <p className="font-semibold">{bike.condition}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Gears</span>
                  <p className="font-semibold">{bike.gears}-speed</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Buttons */}
            <div className="space-y-3 mb-6">
              <Button 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700"
                onClick={handleContactClick}
                disabled={!bike.available}
              >
                Contact via WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full"
                disabled={!bike.available}
              >
                Call: (555) 123-4567
              </Button>
            </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{bike.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
