import type { CartItem } from '../types/product'
import { CartItem as CartItemRow } from './CartItem'

type CartProps = {
  selectedProducts: CartItem[]
  onRemoveFromCart: (productName: string) => void
}

export function Cart({ selectedProducts, onRemoveFromCart }: CartProps) {
  const orderTotal = selectedProducts.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )
  const formattedOrderTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(orderTotal)

  if (selectedProducts.length === 0) {
    return (
        <div className="flex min-w-[var(--cart-min-width)] flex-col gap-4 bg-white rounded-lg p-4">
        <div>
            <h2 className="text-lg text-accent-red font-bold">Your Cart ({selectedProducts.length})</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center max-w-[50%]">
                <img className="mx-auto object-cover w-full h-full" src="/assets/icons/illustration-empty-cart.svg" alt="empty cart" width={20} height={20} />
            </div>
                <p className="text-sm text-rose-500 text-center font-semibold">Your added items will appear here</p>
            
        </div>
    </div>
  )
}

  return (
    <div className="flex min-w-[var(--cart-min-width)] flex-col gap-4 bg-white rounded-lg p-4">
        <div>
            <h2 className="text-lg text-accent-red font-bold">Your Cart ({selectedProducts.length})</h2>
        </div>
        <div>
            <ul className="flex flex-col gap-y-4">
              {selectedProducts.length > 0 && (
                selectedProducts.map((item) => (
                  <CartItemRow
                    key={item.product.name}
                    cartItem={item}
                    onRemoveFromCart={onRemoveFromCart}
                  />
                ))
              )}
            </ul>
        </div>
        <div className="flex items-center justify-between">    
            <p>OrderTotal : </p>
            <span className="text-lg font-bold text-black">{formattedOrderTotal}</span>
        </div>
        <div>
            <p>This is a carbon neutral delivery</p>
        </div>
        <div className="flex items-center justify-center">
            <button className="max-w-[var(--order-btn-width)] w-full bg-accent-red text-white px-4 py-2 rounded-full cursor-pointer">Confirm Order</button>
        </div>
    </div>
  )
}
