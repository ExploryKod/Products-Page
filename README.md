# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Getting started](#getting-started)
  - [Available scripts](#available-scripts)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS v4 + CSS custom properties
- React 19
- [TanStack Start](https://tanstack.com/start) (SSR-ready app setup)
- [TanStack Router](https://tanstack.com/router) with file-based routing
- [Vitest](https://vitest.dev/) + Testing Library for unit/use-case tests

### Getting started

From the `product-app` folder:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

> If you use npm instead of pnpm, keep using npm consistently for install and scripts.

### Available scripts

- `pnpm dev` - Run local dev server on port 3000
- `pnpm build` - Build production client/server bundles
- `pnpm preview` - Preview production build
- `pnpm test` - Run all tests
- `pnpm test:use-cases` - Run only use-case integration tests

### What I learned

- How to keep route-level data loading in TanStack (`loader` + `Route.useLoaderData`) and pass state down via props.
- Why Grid with `auto-fill/minmax` is often simpler than complex flex-basis math for card galleries.
- How to structure tests in layers:
  - unit tests for isolated components
  - use-case tests as living docs for feature flows

### Continued development

- Implement cart quantity decrement controls in the UI.
- Add order confirmation modal and "Start New Order" flow.
- Extend use-case tests to cover error/fallback scenarios and modal behavior.

### Notes
- useCallBack React tool was used in Product Card : it is to anticipate an evolution

### AI collaboration

AI was used to:

- debug SSR/hydration minor issues
- I ask AI to design and implement test structure (unit + use-case) under my guidance

## Author

- Frontend Mentor - [@ExploryKod](https://www.frontendmentor.io/profile/ExploryKod)

## Evolution

I want to make a real product page template :
> Indeed for now we are not isolated from the framework or style.
Clean architecture to isolate logic from tanStack could be good for reusage.
Style using variable for any change could be good for style customization while keeping constrainst on structures / layout
