import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail, Phone, Facebook, Instagram } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="flex flex-col items-center">
              <MapPin className="h-4 w-4" />
              <CardTitle className="text-center">Address</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                Criss Cross Ltd, Mombasa Road, Nairobi, Kenya
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col items-center">
              <Mail className="h-4 w-4" />
              <CardTitle className="text-center">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              info@crisscross.co.ke
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col items-center">
              <Phone className="h-4 w-4" />
              <CardTitle className="text-center">Call Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                +254 7888 71946
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-col items-center">
              <CardTitle className="text-center">Connect With Us</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center gap-4">
              <a href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-blue-600" /> {/* Facebook logo color */}
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-pink-600" /> {/* Instagram logo color */}
              </a>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Our Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.1833705626075!2d36.89358549778277!3d-1.33614433391752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13df6febb2d7%3A0x23d6ba31663476fa!2sCriss%20Cross%20Ltd.!5e0!3m2!1sen!2ske!4v1727947407926!5m2!1sen!2ske" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>About Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Criss Cross is a leading wholesale company specializing in household essentials. 
              Founded in 2024, we've been committed to providing high-quality products at competitive prices. 
              Our extensive range includes cooking oils, rice, tea, soaps, and more, catering to both individual 
              consumers and businesses. At Criss Cross, we believe in building lasting relationships with our 
              customers through excellent service and reliable products.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Fill out the form below to contact us</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="name" type="text" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" placeholder="Your message here..." />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}