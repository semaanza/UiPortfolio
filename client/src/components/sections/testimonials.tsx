import { StarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      content: "John's UI engineering skills transformed our application. The interface is now intuitive, responsive, and our users love it. His attention to detail and focus on accessibility made all the difference.",
      author: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      content: "Working with John on our e-commerce redesign was a game-changer. He not only delivered beautiful UI components but also improved our conversion rates by 35%. His expertise in both design and development is rare and valuable.",
      author: "Michael Chen",
      role: "CEO, Fashion Forward",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      content: "John's expertise in creating accessible and performant UIs is exceptional. He revamped our dashboard application, making it not only visually appealing but also significantly faster and more user-friendly.",
      author: "Emily Rodriguez",
      role: "CTO, DataViz Inc.",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  return (
    <section className="py-20 bg-indigo-50 dark:bg-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-animate">
          <h2 className="text-3xl font-bold text-center mb-4 font-poppins text-gray-900 dark:text-white">Client Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
            What clients and colleagues say about working with me
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-gray-900">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="text-primary">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="inline-block h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 italic mb-6 text-center">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-center">
                    <img 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover mr-3" 
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
