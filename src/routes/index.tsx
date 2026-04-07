import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useState } from 'react'

import { ProductCard } from '../components/ProductCard'
import products from '../products.json'
import { Cart } from '../components/Cart'
import type { CartItem, Product } from '../types/product'

export const Route = createFileRoute('/')({
  loader: () => products,
  component: App,
})

function App() {
  const productsList = Route.useLoaderData()
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.product.name === product.name)

      if (existingItem) {
        return prev.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...prev, { product, quantity: 1 }]
    })
  }, [])

  const handleRemoveFromCart = useCallback((productName: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.name !== productName))
  }, [])

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="flex flex-col gap-x-5 gap-y-6 px-6 py-10 sm:px-10 sm:py-14 lg:flex-row">
        <article className="flex-1 min-w-0">
          <h1 className="mt-0 mb-5 text-4xl font-bold text-black">Desserts</h1>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-x-5 gap-y-8">
            {productsList.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </article>
        <div className="w-full lg:max-w-[400px] lg:shrink-0">
            <Cart
              selectedProducts={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
            />
        </div>
      </section>

   

 
    </main>
  )
}
