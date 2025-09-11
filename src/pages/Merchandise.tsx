import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Phone, Heart, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Mock merchandise data - replace with actual data source
const merchandiseItems = [
  {
    id: 1,
    name: "Jikubali Mental Health Awareness T-Shirt",
    price: "KSh 1,500",
    image: "/api/placeholder/300/300",
    description: "Premium cotton t-shirt spreading mental health awareness with our inspiring design.",
    category: "Apparel",
    featured: true
  },
  {
    id: 2,
    name: "Empowerment Hoodie",
    price: "KSh 2,800",
    image: "/api/placeholder/300/300",
    description: "Cozy hoodie with empowering messages to remind you of your strength every day.",
    category: "Apparel",
    featured: false
  },
  {
    id: 3,
    name: "Hope & Healing Coffee Mug",
    price: "KSh 800",
    image: "/api/placeholder/300/300",
    description: "Start your morning with positivity. Ceramic mug with inspirational quotes.",
    category: "Home",
    featured: true
  },
  {
    id: 4,
    name: "Jikubali Africa Tote Bag",
    price: "KSh 1,200",
    image: "/api/placeholder/300/300",
    description: "Eco-friendly canvas tote bag perfect for spreading awareness wherever you go.",
    category: "Accessories",
    featured: false
  },
  {
    id: 5,
    name: "Mental Health Awareness Bracelet",
    price: "KSh 600",
    image: "/api/placeholder/300/300",
    description: "Handcrafted bracelet as a daily reminder of self-care and mental wellness.",
    category: "Accessories",
    featured: true
  },
  {
    id: 6,
    name: "Mindfulness Journal",
    price: "KSh 1,800",
    image: "/api/placeholder/300/300",
    description: "Beautiful journal with guided prompts for daily reflection and mental wellness.",
    category: "Stationery",
    featured: false
  },
  {
    id: 7,
    name: "Healing Together Cap",
    price: "KSh 1,000",
    image: "/api/placeholder/300/300",
    description: "Comfortable cap with embroidered logo representing community and healing.",
    category: "Apparel",
    featured: false
  },
  {
    id: 8,
    name: "Inspiration Wall Art Print",
    price: "KSh 2,200",
    image: "/api/placeholder/300/300",
    description: "High-quality print featuring uplifting quotes and beautiful artwork for your space.",
    category: "Home",
    featured: true
  }
];

const Merchandise = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [orderForm, setOrderForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    quantity: 1,
    notes: ""
  });

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    toast.success("Order submitted successfully! We'll contact you within 24 hours.");
    setOrderForm({
      name: "",
      phone: "",
      email: "",
      address: "",
      quantity: 1,
      notes: ""
    });
  };

  const featuredItems = merchandiseItems.filter(item => item.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-blue-light/20 via-background to-brand-pink-light/20">
      {/* Hero Section */}
      <section className="section-spacing pt-32 bg-gradient-to-r from-sky-blue/10 via-brand-pink/10 to-sunshine-yellow/10">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Support Our Mission
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Jikubali Africa
              <span className="block text-brand-pink">Merchandise Store</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Every purchase supports our mental health programs and helps us reach more communities across Kenya. 
              Shop with purpose and wear your support for mental wellness with pride.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="default" size="lg" className="shadow-warm">
                <Heart className="w-5 h-5 mr-2" />
                Shop with Purpose
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Custom Orders
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-spacing">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most popular items that make the biggest impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredItems.map((item) => (
              <Card key={item.id} className="group hover-lift overflow-hidden border-0 shadow-soft hover:shadow-warm">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-brand-pink">
                      {item.price}
                    </span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="default" 
                          size="sm"
                          onClick={() => setSelectedItem(item)}
                        >
                          Order Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-heading">
                            Order: {selectedItem?.name}
                          </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleOrderSubmit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                required
                                value={orderForm.name}
                                onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                required
                                value={orderForm.phone}
                                onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={orderForm.email}
                              onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="address">Delivery Address *</Label>
                            <Textarea
                              id="address"
                              required
                              value={orderForm.address}
                              onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                              id="quantity"
                              type="number"
                              min="1"
                              value={orderForm.quantity}
                              onChange={(e) => setOrderForm({...orderForm, quantity: parseInt(e.target.value)})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="notes">Special Instructions</Label>
                            <Textarea
                              id="notes"
                              value={orderForm.notes}
                              onChange={(e) => setOrderForm({...orderForm, notes: e.target.value})}
                            />
                          </div>
                          <Button type="submit" className="w-full">
                            <Phone className="w-4 h-4 mr-2" />
                            Submit Order
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="section-spacing bg-muted/30">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Complete Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our full range of products supporting mental health awareness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {merchandiseItems.map((item) => (
              <Card key={item.id} className="group hover-lift overflow-hidden border-0 shadow-soft hover:shadow-warm">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {item.featured && (
                    <Badge variant="secondary" className="absolute top-3 left-3">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <Badge variant="outline" className="mb-3 text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-brand-pink">
                      {item.price}
                    </span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="default" 
                          size="sm"
                          onClick={() => setSelectedItem(item)}
                        >
                          Order Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-heading">
                            Order: {selectedItem?.name}
                          </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleOrderSubmit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                required
                                value={orderForm.name}
                                onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                required
                                value={orderForm.phone}
                                onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={orderForm.email}
                              onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="address">Delivery Address *</Label>
                            <Textarea
                              id="address"
                              required
                              value={orderForm.address}
                              onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                              id="quantity"
                              type="number"
                              min="1"
                              value={orderForm.quantity}
                              onChange={(e) => setOrderForm({...orderForm, quantity: parseInt(e.target.value)})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="notes">Special Instructions</Label>
                            <Textarea
                              id="notes"
                              value={orderForm.notes}
                              onChange={(e) => setOrderForm({...orderForm, notes: e.target.value})}
                            />
                          </div>
                          <Button type="submit" className="w-full">
                            <Phone className="w-4 h-4 mr-2" />
                            Submit Order
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-spacing bg-gradient-to-r from-sky-blue via-brand-pink to-sunshine-yellow">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Support Mental Health Through Shopping
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Every purchase directly funds our mental health programs, training, and community outreach initiatives across Kenya.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" className="bg-white text-brand-pink hover:bg-white/90">
                <Heart className="w-5 h-5 mr-2" />
                Learn About Our Impact
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Phone className="w-5 h-5 mr-2" />
                Contact for Bulk Orders
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Merchandise;