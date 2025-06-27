
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Bike {
  id: string;
  title: string;
  price: number;
  type: string;
  size: string;
  year: number;
  condition: string;
  image: string;
  available: boolean;
}

interface BikeCardProps {
  bike: Bike;
}

const BikeCard = ({ bike }: BikeCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative">
          <img
            src={bike.image}
            alt={bike.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-2 right-2">
            <Badge variant={bike.available ? "default" : "secondary"}>
              {bike.available ? "Available" : "Sold"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{bike.title}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-2xl font-bold text-blue-600">${bike.price}</span>
          <Badge variant="outline">{bike.type}</Badge>
        </div>
        <div className="text-sm text-gray-600 mb-4">
          <span>{bike.year}</span> • <span>Size {bike.size}</span> • <span>{bike.condition}</span>
        </div>
        <Link to={`/bikes/${bike.id}`}>
          <Button className="w-full" disabled={!bike.available}>
            {bike.available ? "View Details" : "Sold Out"}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BikeCard;
