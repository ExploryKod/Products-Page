export type ProductImage = {
  thumbnail: string
  mobile: string
  tablet: string
  desktop: string
}

export type Product = {
  image: ProductImage
  name: string
  category: string
  price: number
}

export type CartItem = {
  product: Product
  quantity: number
}
