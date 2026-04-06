import type { Product } from '../types/product'
import { minWidth } from '../theme/screens'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price)

  return (
    <div className="flex max-w-[300px] flex-col gap-4">
      <div className="relative">
        <div className="max-w-[300px] overflow-hidden rounded-lg">
          <picture className="block h-full w-full">
            <source media={minWidth('lg')} srcSet={product.image.desktop} />
            <source media={minWidth('md')} srcSet={product.image.tablet} />
            <img
              src={product.image.mobile}
              alt={product.name}
              className="block h-full w-full object-cover"
            />
          </picture>
        </div>
        <button
          type="button"
          className="group cursor-pointer flex items-center justify-center gap-x-2 min-w-[200px] border-gray-400 hover:border-accent-red text-accent-red absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-1/2 rounded-full border border-solid bg-white px-4 py-2 text-sm font-semibold transition-colors hover:bg-rose-50"
          aria-label={`Add ${product.name} to cart`}
        >
          <img src="/assets/icons/icon-add-to-cart.svg" alt="" width={20} height={20} />
          <span className="text-sm font-semibold text-black group-hover:text-accent-red">Add to Cart</span>
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <p className="text-sm text-rose-500">{product.category}</p>
        <h2 className="text-product font-bold text-rose-900">{product.name}</h2>
        <p className="text-lg font-semibold text-accent-red">{formattedPrice}</p>
      </div>
    </div>
  )
}
