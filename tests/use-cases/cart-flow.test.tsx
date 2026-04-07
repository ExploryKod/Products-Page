import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Component } from 'react'

import { Cart } from '../../src/components/Cart'
import { ProductCard } from '../../src/components/ProductCard'
import products from '../../src/products.json'
import type { CartItem, Product } from '../../src/types/product'

afterEach(() => {
  cleanup()
})

type UseCaseHarnessState = {
  cartItems: CartItem[]
}

class UseCaseHarness extends Component<Record<string, never>, UseCaseHarnessState> {
  state: UseCaseHarnessState = {
    cartItems: [],
  }

  handleAddToCart = (product: Product) => {
    this.setState((prev) => {
      const existingItem = prev.cartItems.find(
        (item) => item.product.name === product.name,
      )

      if (existingItem) {
        return {
          cartItems: prev.cartItems.map((item) =>
            item.product.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        }
      }

      return {
        cartItems: [...prev.cartItems, { product, quantity: 1 }],
      }
    })
  }

  handleRemoveFromCart = (productName: string) => {
    this.setState((prev) => ({
      cartItems: prev.cartItems.filter((item) => item.product.name !== productName),
    }))
  }

  render() {
    return (
      <div>
        <section>
          {products.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              onAddToCart={this.handleAddToCart}
            />
          ))}
        </section>
        <aside>
          <Cart
            selectedProducts={this.state.cartItems}
            onRemoveFromCart={this.handleRemoveFromCart}
          />
        </aside>
      </div>
    )
  }
}

describe('Use case: product list and cart flow', () => {
  it('displays products from products.json', () => {
    render(<UseCaseHarness />)

    expect(screen.getByText('Waffle with Berries')).toBeTruthy()
    expect(screen.getByText('Vanilla Bean Crème Brûlée')).toBeTruthy()
    expect(screen.getByText('Pistachio Baklava')).toBeTruthy()
  })

  it('adds a product to the cart when Add to Cart is clicked', () => {
    render(<UseCaseHarness />)

    fireEvent.click(screen.getByLabelText(/add waffle with berries to cart/i))

    const cartList = screen.getByRole('list')
    expect(screen.getByText('Your Cart (1)')).toBeTruthy()
    expect(within(cartList).getByText('Waffle with Berries')).toBeTruthy()
    expect(within(cartList).getByText('1x')).toBeTruthy()
  })

  it('increments quantity when adding the same product twice', () => {
    render(<UseCaseHarness />)

    const addWaffleButton = screen.getByLabelText(/add waffle with berries to cart/i)
    fireEvent.click(addWaffleButton)
    fireEvent.click(addWaffleButton)

    const cartList = screen.getByRole('list')
    const orderTotalRow = screen.getByText('OrderTotal :').parentElement

    expect(screen.getByText('Your Cart (2)')).toBeTruthy()
    expect(within(cartList).getByText('2x')).toBeTruthy()
    expect(orderTotalRow).toBeTruthy()
    expect(within(orderTotalRow as HTMLElement).getByText('$13.00')).toBeTruthy()
  })

  it('deletes an item from cart when remove icon is clicked', () => {
    render(<UseCaseHarness />)

    fireEvent.click(screen.getByLabelText(/add waffle with berries to cart/i))
    fireEvent.click(screen.getByLabelText(/remove waffle with berries from cart/i))

    expect(screen.getByText('Your Cart (0)')).toBeTruthy()
    expect(screen.getByText('Your added items will appear here')).toBeTruthy()
  })

  it.todo('shows a resilient fallback when product data is invalid/missing')
})
