import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { ProductCard } from './ProductCard'
import type { Product } from '../types/product'

const product: Product = {
  image: {
    thumbnail: '/assets/images/image-waffle-thumbnail.jpg',
    mobile: '/assets/images/image-waffle-mobile.jpg',
    tablet: '/assets/images/image-waffle-tablet.jpg',
    desktop: '/assets/images/image-waffle-desktop.jpg',
  },
  name: 'Waffle with Berries',
  category: 'Waffle',
  price: 6.5,
}

describe('ProductCard', () => {
  it('calls onAddToCart with product when button is clicked', () => {
    const onAddToCart = vi.fn()

    render(<ProductCard product={product} onAddToCart={onAddToCart} />)

    fireEvent.click(screen.getByRole('button', { name: /add waffle with berries to cart/i }))

    expect(onAddToCart).toHaveBeenCalledTimes(1)
    expect(onAddToCart).toHaveBeenCalledWith(product)
  })
})
