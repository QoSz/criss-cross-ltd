import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  { id: 1, name: 'Olive Oil', category: 'Cooking Oils', price: 9.99, image: 'https://g-bpcqkbqjs0d.vusercontent.net/placeholder.svg?height=200&width=200' },
  { id: 2, name: 'Sunflower Oil', category: 'Cooking Oils', price: 7.99, image: 'https://g-bpcqkbqjs0d.vusercontent.net/placeholder.svg?height=200&width=200' },
  { id: 3, name: 'Coconut Oil', category: 'Cooking Oils', price: 11.99, image: 'https://g-bpcqkbqjs0d.vusercontent.net/placeholder.svg?height=200&width=200' },
  { id: 4, name: 'Basmati Rice', category: 'Rice', price: 14.99, image: 'https://g-bpcqkbqjs0d.vusercontent.net/placeholder.svg?height=200&width=200' },
  { id: 5, name: 'Jasmine Rice', category: 'Rice', price: 13.99, image: 'https://g-bpcqkbqjs0d.vusercontent.net/placeholder.svg?height=200&width=200' },
  { id: 6, name: 'Brown Rice', category: 'Rice', price: 12.99, image: 'https://g-bpcqkbqjs0d.vusercontent.net/placeholder.svg?height=200&width=200' },
  { id: 7, name: 'Green Tea', category: 'Tea', price: 5.99, image: 'https://g-bpcqkbqjs0d.vusercontent.net/placeholder.svg?height=200&width=200' },
  { id: 8, name: 'Black Tea', category: 'Tea', price: 6.99, image: 'https://g-bpcqkbqjs0d.vusercontent.net/placeholder.svg?height=200&width=200' },
  { id: 9, name: 'Chamomile Tea', category: 'Tea', price: 7.99, image: 'https://g-bpcqkbqjs0d.vusercontent.net/placeholder.svg?height=200&width=200' },
  { id: 10, name: 'Earl Grey Tea', category: 'Tea', price: 8.99, image: 'https://g-bpcqkbqjs0d.vusercontent.net/placeholder.svg?height=200&width=200' },
]

export default function Home() {
  const categories = Array.from(new Set(products.map(product => product.category)))

  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Criss Cross</h1>
        <p className="text-xl text-muted-foreground">Your one-stop shop for wholesale household essentials</p>
      </section>

      {categories.map(category => (
        <section key={category} className="space-y-4">
          <h2 className="text-3xl font-semibold">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <Card key={product.id}>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground">{product.category}</p>
                    <p className="font-bold text-lg sm:text-xl">${product.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </section>
      ))}
    </div>
  )
}