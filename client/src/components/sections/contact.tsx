import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, Mail, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [formSuccess, setFormSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      form.reset();
      setFormSuccess(true);
      setTimeout(() => setFormSuccess(false), 5000);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    contactMutation.mutate(data);
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-animate">
          <h2 className="text-3xl font-bold text-center mb-4 font-poppins text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-indigo-50 dark:bg-indigo-950 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Let's connect</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I'm currently available for freelance work and open to discussing full-time opportunities. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-full mr-4 shadow">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Email</h4>
                      <a href="mailto:semaanza@gmail.com" className="text-primary hover:text-indigo-700 transition-colors">
                        semaanza@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-full mr-4 shadow">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">Davisburg, MI 48350</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded-full mr-4 shadow">
                      <Globe className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Social</h4>
                      <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                          <FaGithub className="text-xl" />
                        </a>
                        <a href="https://linkedin.com/in/semaanza" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                          <FaLinkedin className="text-xl" />
                        </a>
                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                          <FaTwitter className="text-xl" />
                        </a>
                        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                          <FaDribbble className="text-xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your@email.com" 
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What's this about?" 
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                            rows={5}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-indigo-600 text-white"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
              
              {formSuccess && (
                <Alert className="mt-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                  <CheckCircle2 className="h-4 w-4 text-green-500 dark:text-green-300" />
                  <AlertDescription>
                    Message sent successfully! I'll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
