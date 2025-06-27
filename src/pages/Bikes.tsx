
import { useState } from "react";
import BikeCard from "@/components/BikeCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { mockBikes } from "@/data/mockBikes";

const Bikes = () => {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("all");

  const filteredBikes = mockBikes.filter((bike) => {
    const typeMatch = typeFilter === "all" || bike.type.toLowerCase() === typeFilter.toLowerCase();
    
    let priceMatch = true;
    if (priceFilter === "under-500") priceMatch = bike.price < 500;
    else if (priceFilter === "500-1000") priceMatch = bike.price >= 500 && bike.price <= 1000;
    else if (priceFilter === "over-1000") priceMatch = bike.price > 1000;
    
    const availabilityMatch = availabilityFilter === "all" || 
      (availabilityFilter === "available" && bike.available) ||
      (availabilityFilter === "sold" && !bike.available);

    return typeMatch && priceMatch && availabilityMatch;
  });

  const clearFilters = () => {
    setTypeFilter("all");
    setPriceFilter("all");
    setAvailabilityFilter("all");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Available Bikes
          </h1>
          <p className="text-xl text-gray-600">
            Find your perfect ride from our collection of quality pre-owned bikes
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-lg font-semibold mb-4">Filter Bikes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="mountain">Mountain</SelectItem>
                  <SelectItem value="road">Road</SelectItem>
                  <SelectItem value="hybrid">Hybrid</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-500">Under $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="over-1000">Over $1,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
              <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="sold">Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button variant="outline" onClick={clearFilters} className="w-full">
                Clear Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredBikes.length} of {mockBikes.length} bikes
          </p>
        </div>

        {/* Bikes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBikes.map((bike) => (
            <BikeCard key={bike.id} bike={bike} />
          ))}
        </div>

        {filteredBikes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No bikes match your current filters</p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bikes;
