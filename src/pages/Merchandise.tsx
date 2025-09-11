import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Phone, Heart, Star, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Footer from "@/components/sections/Footer";

// Import merchandise images
import tshirtImage from "@/assets/merchandise/j.jpg";
import hoodieImage from "@/assets/merchandise/j1.jpg";
import mugImage from "@/assets/merchandise/j2.jpg";
import toteImage from "@/assets/merchandise/j3.jpg";
import braceletImage from "@/assets/merchandise/j4.jpg";
import journalImage from "@/assets/merchandise/j5.jpg";
import capImage from "@/assets/merchandise/j6.jpg";
import wallArtImage from "@/assets/merchandise/j7.jpg";
import j8 from "@/assets/merchandise/j8.jpg";
import j9 from "@/assets/merchandise/j9.jpg";
import j10 from "@/assets/merchandise/j10.jpg";
import j11 from "@/assets/merchandise/j11.jpg";
import j12 from "@/assets/merchandise/j12.jpg";
import backgroundImg from "@/assets/merchandise/bg.jpg";

const BACKGROUND_IMAGE = backgroundImg;

// Mock merchandise data - replace with actual data source
const merchandiseItems = [
  {
    id: 1,
    name: "Black Hoodies with Jikubali Africa Logo",
    price: "KSh 1,500",
    image: tshirtImage,
    description: "Classic black hoodie featuring the Jikubali Africa logo — stylish, warm, and perfect for any occasion.",
    category: "Hoodie",
    featured: true
  },
  {
    id: 2,
    name: "Black Jikubali Stamped Hoodie",
    price: "KSh 2,800",
    image: hoodieImage,
    description: "A bold black hoodie stamped with the Jikubali identity — wear your pride in comfort and confidence.",
    category: "Hoodie",
    featured: false
  },
  {
    id: 3,
    name: "White Africa Stamped Sweatshirt",
    price: "KSh 800",
    image: mugImage,
    description: "Cozy white sweatshirt with an Africa-stamped design, combining simplicity with cultural pride.",
    category: "Sweatshirt",
    featured: true
  },
  {
    id: 4,
    name: "Black Jikubali Hoodie",
    price: "KSh 1,200",
    image: toteImage,
    description: "Timeless black hoodie designed with the Jikubali spirit — versatile, comfy, and durable.",
    category: "Hoodie",
    featured: false
  },
  {
    id: 5,
    name: "Black Africa Stamped Tshirt",
    price: "KSh 600",
    image: braceletImage,
    description: "Lightweight cotton t-shirt with an Africa-stamped design — casual wear with a bold statement.",
    category: "Tshirt",
    featured: true
  },
  {
    id: 6,
    name: "Navy blue Hoodie",
    price: "KSh 1,800",
    image: journalImage,
    description: "Soft navy-blue hoodie that blends comfort with sleek style, perfect for everyday wear.",
    category: "Hoodie",
    featured: false
  },
  {
    id: 7,
    name: "Black Africa Stamped Sweatshirt",
    price: "KSh 1,000",
    image: capImage,
    description: "Stylish black sweatshirt stamped with Africa — a warm layer with cultural expression.",
    category: "Sweatshirt",
    featured: false
  },
  {
    id: 8,
    name: "White Jikubali Carrying bag",
    price: "KSh 2,200",
    image: wallArtImage,
    description: "Durable white carrying bag branded with Jikubali — practical for everyday use with a sleek design.",
    category: "Carrying Bag",
    featured: true
  },
  {
    id: 9,
    name: "White Afrifest Tshirt",
    price: "KSh 1,100",
    image: j8,
    description: "Fresh white Afrifest t-shirt designed for comfort and style — celebrate culture with every wear.",
    category: "Tshirt",
    featured: false
  },
  {
    id: 10,
    name: "White Afrifest Carrying bag",
    price: "KSh 1,400",
    image: j9,
    description: "Eco-friendly Afrifest carrying bag in white — lightweight, sturdy, and versatile for daily errands.",
    category: "Carrying Bag",
    featured: false
  },
  {
    id: 11,
    name: "White Afrifest Hoodie",
    price: "KSh 900",
    image: j10,
    description: "White Afrifest hoodie crafted for comfort — a cozy addition to your casual wardrobe.",
    category: "Hoodie",
    featured: false
  },
  {
    id: 12,
    name: "Navyblue Afrifest Hoodie",
    price: "KSh 2,500",
    image: j11,
    description: "Premium navy-blue Afrifest hoodie that combines warmth with a bold cultural statement.",
    category: "Hoodie",
    featured: false
  },
  {
    id: 13,
    name: "White Afrifest Tshirt",
    price: "KSh 1,700",
    image: j12,
    description: "Versatile white Afrifest t-shirt — breathable, stylish, and perfect for everyday wear.",
    category: "Tshirt",
    featured: false
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
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section 
        className="section-spacing pt-32 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url(${BACKGROUND_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/20 via-brand-pink/20 to-sunshine-yellow/20 z-0"></div>
        <div className="container mx-auto container-padding text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm font-semibold bg-white/80 backdrop-blur-sm">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Support Our Mission
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              Jikubali Africa
              <span className="block text-brand-pink">Merchandise Store</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed bg-white/70 p-4 rounded-lg">
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
      <section className="section-spacing bg-gradient-to-br from-sky-blue-light/20 via-background to-brand-pink-light/20">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our most popular items that make the biggest impact
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 mb-12">
            {featuredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden h-60">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3 bg-white/90 text-foreground backdrop-blur-sm">
                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <Badge variant="outline" className="mb-3 text-xs bg-muted/50">
                    {item.category}
                  </Badge>
                  <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2 h-14">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 h-10">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="default" 
                          className="w-full"
                          onClick={() => setSelectedItem(item)}
                        >
                          Order Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px] rounded-lg">
                        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
                          <DialogTitle className="text-xl font-heading">
                            Order: {selectedItem?.name}
                          </DialogTitle>
                          <X className="w-5 h-5 cursor-pointer" />
                        </DialogHeader>
                        <form onSubmit={handleOrderSubmit} className="space-y-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                required
                                value={orderForm.name}
                                onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                                className="rounded-md"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                required
                                value={orderForm.phone}
                                onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                                className="rounded-md"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={orderForm.email}
                              onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                              className="rounded-md"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">Delivery Address *</Label>
                            <Textarea
                              id="address"
                              required
                              value={orderForm.address}
                              onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                              className="rounded-md min-h-20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                              id="quantity"
                              type="number"
                              min="1"
                              value={orderForm.quantity}
                              onChange={(e) => setOrderForm({...orderForm, quantity: parseInt(e.target.value)})}
                              className="rounded-md"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="notes">Special Instructions</Label>
                            <Textarea
                              id="notes"
                              value={orderForm.notes}
                              onChange={(e) => setOrderForm({...orderForm, notes: e.target.value})}
                              className="rounded-md min-h-20"
                            />
                          </div>
                          <Button type="submit" className="w-full rounded-md py-3 text-base">
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
      <section className="section-spacing bg-muted/20">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Complete Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our full range of products supporting mental health awareness
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            {merchandiseItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden h-60">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.featured && (
                    <Badge variant="secondary" className="absolute top-3 left-3 bg-white/90 text-foreground backdrop-blur-sm">
                      <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                      Featured
                    </Badge>
                  )}
                </div>
                <CardContent className="p-5">
                  <Badge variant="outline" className="mb-3 text-xs bg-muted/50">
                    {item.category}
                  </Badge>
                  <h3 className="font-heading font-semibold text-lg mb-2 line-clamp-2 h-14">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 h-10">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="default" 
                          className="w-full"
                          onClick={() => setSelectedItem(item)}
                        >
                          Order Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px] rounded-lg">
                        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
                          <DialogTitle className="text-xl font-heading">
                            Order: {selectedItem?.name}
                          </DialogTitle>
                          <X className="w-5 h-5 cursor-pointer" />
                        </DialogHeader>
                        <form onSubmit={handleOrderSubmit} className="space-y-4 py-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                required
                                value={orderForm.name}
                                onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                                className="rounded-md"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                required
                                value={orderForm.phone}
                                onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                                className="rounded-md"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={orderForm.email}
                              onChange={(e) => setOrderForm({...orderForm, email: e.target.value})}
                              className="rounded-md"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="address">Delivery Address *</Label>
                            <Textarea
                              id="address"
                              required
                              value={orderForm.address}
                              onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                              className="rounded-md min-h-20"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input
                              id="quantity"
                              type="number"
                              min="1"
                              value={orderForm.quantity}
                              onChange={(e) => setOrderForm({...orderForm, quantity: parseInt(e.target.value)})}
                              className="rounded-md"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="notes">Special Instructions</Label>
                            <Textarea
                              id="notes"
                              value={orderForm.notes}
                              onChange={(e) => setOrderForm({...orderForm, notes: e.target.value})}
                              className="rounded-md min-h-20"
                            />
                          </div>
                          <Button type="submit" className="w-full rounded-md py-3 text-base">
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
      <section className="section-spacing bg-gradient-to-r from-sky-blue to-brand-pink relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto container-padding text-center relative z-10">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Support Our Mission Through Shopping
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Every purchase directly funds our mental health programs, training, and community outreach initiatives across Kenya.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="border-white bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact for Bulk Orders
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] rounded-lg">
                <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
                  <DialogTitle className="text-xl font-heading">
                    Bulk Order Inquiry
                  </DialogTitle>
                  <X className="w-5 h-5 cursor-pointer" />
                </DialogHeader>
                <form onSubmit={handleOrderSubmit} className="space-y-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bulk-name">Full Name *</Label>
                      <Input
                        id="bulk-name"
                        required
                        className="rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bulk-phone">Phone Number *</Label>
                      <Input
                        id="bulk-phone"
                        required
                        className="rounded-md"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bulk-email">Email *</Label>
                    <Input
                      id="bulk-email"
                      type="email"
                      required
                      className="rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bulk-organization">Organization</Label>
                    <Input
                      id="bulk-organization"
                      className="rounded-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bulk-items">Items of Interest</Label>
                    <Textarea
                      id="bulk-items"
                      className="rounded-md min-h-20"
                      placeholder="Please specify which products you're interested in and approximate quantities"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bulk-message">Additional Message</Label>
                    <Textarea
                      id="bulk-message"
                      className="rounded-md min-h-20"
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-md py-3 text-base">
                    <Phone className="w-4 h-4 mr-2" />
                    Submit Inquiry
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Merchandise;