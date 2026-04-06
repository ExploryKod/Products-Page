import { createFileRoute } from '@tanstack/react-router'

import { ProductCard } from '../components/ProductCard'
import products from '../products.json'
import { Cart } from '../components/Cart'

export const Route = createFileRoute('/')({
  loader: () => products,
  component: App,
})

function App() {
  const productsList = Route.useLoaderData()

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="flex flex-col sm:flex-row gap-x-5 gap-y-3 px-6 py-10 sm:px-10 sm:py-14">
        <article>
          <h1>Desserts</h1>
          <div className="flex flex-col sm:flex-row flex-wrap gap-x-5 gap-y-8">
            {productsList.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </article>
        <aside>
            <Cart />
        </aside>
      </section>

   

 
    </main>
  )
}
