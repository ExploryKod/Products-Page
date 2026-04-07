import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Cart } from './Cart'
import type { CartItem } from '../types/product'

describe('Cart', () => {
  it('shows empty state when there are no selected products', () => {
    render(<Cart selectedProducts={[]} onRemoveFromCart={() => {}} />)

    expect(screen.getByText('Your Cart (0)')).toBeTruthy()
    expect(screen.getByText('Your added items will appear here')).toBeTruthy()
    expect(screen.getByText('$0.00')).toBeTruthy()
  })

  it('renders selected items and computes order total', () => {
    const selectedProducts: CartItem[] = [
      {
        product: {
          image: {
            thumbnail: '/assets/images/image-waffle-thumbnail.jpg',
            mobile: '/assets/images/image-waffle-mobile.jpg',
            tablet: '/assets/images/image-waffle-tablet.jpg',
            desktop: '/assets/images/image-waffle-desktop.jpg',
          },
          name: 'Waffle with Berries',
          category: 'Waffle',
          price: 6.5,
        },
        quantity: 2,
      },
      {
        product: {
          image: {
            thumbnail: '/assets/images/image-baklava-thumbnail.jpg',
            mobile: '/assets/images/image-baklava-mobile.jpg',
            tablet: '/assets/images/image-baklava-tablet.jpg',
            desktop: '/assets/images/image-baklava-desktop.jpg',
          },
          name: 'Pistachio Baklava',
          category: 'Baklava',
          price: 4,
        },
        quantity: 1,
      },
    ]

    render(<Cart selectedProducts={selectedProducts} onRemoveFromCart={() => {}} />)

    expect(screen.getByText('Your Cart (2)')).toBeTruthy()
    expect(screen.getByText('Waffle with Berries')).toBeTruthy()
    expect(screen.getByText('Pistachio Baklava')).toBeTruthy()
    expect(screen.getByText('$17.00')).toBeTruthy()
  })
})
