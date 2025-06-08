"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Something went wrong');
      }

      toast.success("Message sent!", {
        description: "Thank you for your message. I'll get back to you soon."
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error:', error);
      setFormError(
        error instanceof Error 
          ? error.message 
          : 'Something went wrong. Please try again later.'
      );
      toast.error("Failed to send message", {
        description: error instanceof Error ? error.message : 'Please try again later'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <span className="bg-primary/10 p-2 rounded-full mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 2H2v20h20V2zM7 12h10M7 17h10M7 7h10"/></svg>
        </span>
        Send A Message
      </h3>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium flex items-center">
            <span className="text-primary mr-1.5">*</span> Your Name
          </label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Your Name" 
            className="bg-muted/50 border-muted focus:border-primary focus-visible:ring-primary/20" 
            required 
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium flex items-center">
            <span className="text-primary mr-1.5">*</span> Your Email
          </label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="Your Email" 
            className="bg-muted/50 border-muted focus:border-primary focus-visible:ring-primary/20" 
            required 
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium flex items-center">
          <span className="text-primary mr-1.5">*</span> Subject
        </label>
        <Input 
          id="subject" 
          name="subject" 
          placeholder="How can I help you?" 
          className="bg-muted/50 border-muted focus:border-primary focus-visible:ring-primary/20" 
          required 
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium flex items-center">
          <span className="text-primary mr-1.5">*</span> Your Message
        </label>
        <Textarea 
          id="message" 
          name="message" 
          rows={5} 
          placeholder="Write your message here..." 
          className="bg-muted/50 border-muted focus:border-primary focus-visible:ring-primary/20 resize-none" 
          required 
        />
      </div>
      {formError && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
          {formError}
        </div>
      )}
      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className="px-8 py-2 h-11 rounded-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-shadow"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center">
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="m5 12 14 0"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </span>
        )}
      </Button>
    </form>
  );
}
