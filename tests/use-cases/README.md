# Use-case tests

These tests are integration-style "living docs" for user flows.

## Covered now

- Display products from `src/products.json`
- Add a product to cart
- Increase quantity by adding the same product again
- Delete item from cart

## Planned (documented as `it.todo`)

- Error/fallback behavior for invalid product data

## Run

```bash
pnpm test
```

Or run only this folder:

```bash
pnpm vitest run tests/use-cases
```
