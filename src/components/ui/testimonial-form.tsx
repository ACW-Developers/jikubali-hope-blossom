import * as React from "react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Share2, Send } from "lucide-react";

interface TestimonialFormData {
  name: string;
  age: string;
  title: string;
  story: string;
}

interface TestimonialFormProps {
  children?: React.ReactNode;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

export const TestimonialForm: React.FC<TestimonialFormProps> = ({ 
  children, 
  buttonText = "Share Your Story",
  buttonVariant = "default"
}) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: "",
    age: "",
    title: "",
    story: ""
  });
  
  const { toast } = useToast();

  const handleInputChange = (field: keyof TestimonialFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      age: "",
      title: "",
      story: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.age.trim() || !formData.title.trim() || !formData.story.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to share your story.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:8000/api/testimonials/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          age: parseInt(formData.age, 10),
          title: formData.title,
          story: formData.story
        })
      });

      if (response.ok) {
        toast({
          title: "Thank you for sharing!",
          description: "Your story has been submitted and will be reviewed soon.",
        });
        resetForm();
        setOpen(false);
      } else {
        const data = await response.json();
        const errorMessage = data?.detail || "Failed to submit testimonial";
        throw new Error(errorMessage);
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant={buttonVariant} className="gap-2">
            <Share2 className="w-4 h-4" />
            {buttonText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading">Share Your Story</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter your full name"
              required
              className="text-black"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">Age *</Label>
            <Input
              id="age"
              type="number"
              min="1"
              max="120"
              value={formData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              placeholder="Enter your age"
              required
              className="text-black"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title/Role *</Label>
            <Input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              placeholder="e.g., Student, Parent, Professional"
              required
              className="text-black"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="story">Your Story *</Label>
            <Textarea
              id="story"
              value={formData.story}
              onChange={(e) => handleInputChange("story", e.target.value)}
              placeholder="Share your experience..."
              rows={6}
              required
              className="resize-none text-black"
            />
            <div className="text-xs text-muted-foreground">
              {formData.story.length}/500 characters
            </div>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Privacy Notice:</strong> Your story will be reviewed before publication. 
              We may edit for length and clarity while preserving your message. 
              Personal details will be kept confidential unless you explicitly consent otherwise.
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="flex-1 bg-black text-white hover:bg-gray-900"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Story
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
