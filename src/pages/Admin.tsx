
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Pencil, Trash2, Plus } from "lucide-react";
import { mockBikes, Bike } from "@/data/mockBikes";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const [bikes, setBikes] = useState<Bike[]>(mockBikes);
  const [editingBike, setEditingBike] = useState<Bike | null>(null);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();

  const emptyBike: Bike = {
    id: "",
    title: "",
    price: 0,
    type: "Mountain",
    size: "M",
    year: new Date().getFullYear(),
    condition: "Good",
    brand: "",
    gears: 1,
    description: "",
    image: "",
    images: [],
    available: true,
  };

  const [formData, setFormData] = useState<Bike>(emptyBike);

  const handleEdit = (bike: Bike) => {
    setEditingBike(bike);
    setFormData(bike);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setBikes(bikes.filter(bike => bike.id !== id));
    toast({
      title: "Bike deleted",
      description: "The bike has been removed from the listings.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingBike) {
      setBikes(bikes.map(bike => bike.id === editingBike.id ? formData : bike));
      toast({
        title: "Bike updated",
        description: "The bike listing has been updated successfully.",
      });
    } else {
      const newBike = { ...formData, id: Date.now().toString() };
      setBikes([...bikes, newBike]);
      toast({
        title: "Bike added",
        description: "New bike has been added to the listings.",
      });
    }

    setShowForm(false);
    setEditingBike(null);
    setFormData(emptyBike);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingBike(null);
    setFormData(emptyBike);
  };

  const handleChange = (field: keyof Bike, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600">Manage your bike listings</p>
          </div>
          <Button onClick={() => setShowForm(true)} className="flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add New Bike
          </Button>
        </div>

        {showForm && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingBike ? "Edit Bike" : "Add New Bike"}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Price *</Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleChange("price", Number(e.target.value))}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor="type">Type</Label>
                    <Select value={formData.type} onValueChange={(value) => handleChange("type", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Mountain">Mountain</SelectItem>
                        <SelectItem value="Road">Road</SelectItem>
                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                        <SelectItem value="Electric">Electric</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="size">Size</Label>
                    <Select value={formData.size} onValueChange={(value) => handleChange("size", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="XS">XS</SelectItem>
                        <SelectItem value="S">S</SelectItem>
                        <SelectItem value="M">M</SelectItem>
                        <SelectItem value="L">L</SelectItem>
                        <SelectItem value="XL">XL</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="year">Year</Label>
                    <Input
                      id="year"
                      type="number"
                      value={formData.year}
                      onChange={(e) => handleChange("year", Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gears">Gears</Label>
                    <Input
                      id="gears"
                      type="number"
                      value={formData.gears}
                      onChange={(e) => handleChange("gears", Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="brand">Brand</Label>
                    <Input
                      id="brand"
                      value={formData.brand}
                      onChange={(e) => handleChange("brand", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="condition">Condition</Label>
                    <Select value={formData.condition} onValueChange={(value) => handleChange("condition", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Like New">Like New</SelectItem>
                        <SelectItem value="Excellent">Excellent</SelectItem>
                        <SelectItem value="Very Good">Very Good</SelectItem>
                        <SelectItem value="Good">Good</SelectItem>
                        <SelectItem value="Fair">Fair</SelectItem>
                        <SelectItem value="Restored">Restored</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="image">Main Image URL</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => handleChange("image", e.target.value)}
                    placeholder="https://example.com/bike-image.jpg"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="available"
                    checked={formData.available}
                    onCheckedChange={(checked) => handleChange("available", checked)}
                  />
                  <Label htmlFor="available">Available for sale</Label>
                </div>

                <div className="flex space-x-4">
                  <Button type="submit">
                    {editingBike ? "Update Bike" : "Add Bike"}
                  </Button>
                  <Button type="button" variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Current Listings ({bikes.length})</h2>
          
          {bikes.map((bike) => (
            <Card key={bike.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={bike.image}
                      alt={bike.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{bike.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>${bike.price}</span>
                        <span>•</span>
                        <span>{bike.type}</span>
                        <span>•</span>
                        <span>Size {bike.size}</span>
                        <span>•</span>
                        <Badge variant={bike.available ? "default" : "secondary"}>
                          {bike.available ? "Available" : "Sold"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEdit(bike)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(bike.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
