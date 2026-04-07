import type { CartItem } from '../types/product'

type CartItemProps = {
    cartItem: CartItem
    onRemoveFromCart: (productName: string) => void
}

export function CartItem({ cartItem, onRemoveFromCart }: CartItemProps) {
    const { product, quantity } = cartItem

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(product.price)

    const formattedTotalPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(product.price * quantity)

    return (
        <li className="border-b border-gray-200 pb-4">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-2">
                    <p className="text-md text-black font-semibold">{product.name}</p>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-accent-red font-semibold">{quantity}x</span>
                        <span className="text-sm text-gray-500">{formattedPrice}</span>
                        <span className="text-sm text-gray-500 font-semibold">{formattedTotalPrice}</span>
                    </div>
                </div>
                <div className="max-w-[30px]">
                    <div className="flex items-center justify-center max-w-[20px] p-1 border border-[#CAAFA7] rounded-full">
                        <button
                            type="button"
                            className="cursor-pointer block w-full h-full"
                            aria-label={`Remove ${product.name} from cart`}
                            onClick={() => onRemoveFromCart(product.name)}
                        >
                            <img className="block w-full h-full object-cover" src="/assets/icons/icon-remove-item.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}