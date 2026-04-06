import type { Product } from '../types/product'

type CartProps = {
  product: Product
  selectedProducts: Product[]
}

export function Cart({ selectedProducts }: CartProps) {

  return (
    <div className="flex min-w-[300px] flex-col gap-4 bg-white rounded-lg p-4">
        <div>
            <h2>Your Cart (0)</h2>
        </div>
        <div>
            <ul className="flex flex-col gap-4">
                <li>
                    <div className="flex items-center justify-between">
                        <div>
                            <p>Product Name</p>
                            <div className="flex items-center gap-2">
                                <span>1x</span>
                                <span>$10.00</span>
                                <span>$10.00</span>
                            </div>
                        </div>
                        <div className="max-w-[20px]">
                            <img className="cursor-pointer block w-full h-full object-cover" src="/assets/icons/icon-remove-item.svg" alt="Delete" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="flex items-center justify-between">    
            <p>OrderTotal : </p>
            <span>$10.00</span>
        </div>
        <div>
            <p>This is a carbon neutral delivery</p>
        </div>
        <div className="flex items-center justify-center">
            <button className="max-w-[300px] w-full bg-accent-red text-white px-4 py-2 rounded-full cursor-pointer">Confirm Order</button>
        </div>
    </div>
  )
}
