import {
  HeadContent,
  Link,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'


import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

function RootNotFound() {
  return (
    <main className="page-wrap px-4 py-12">
      <h1 className="text-2xl font-bold text-[var(--sea-ink)]">Page not found</h1>
      <p className="mt-2 max-w-lg text-[var(--sea-ink-soft)]">
        This URL does not match any route in the app.
      </p>
      <p className="mt-6">
        <Link
          to="/"
          className="font-semibold text-[var(--lagoon-deep)] underline underline-offset-2"
        >
          Back to home
        </Link>
      </p>
    </main>
  )
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  notFoundComponent: RootNotFound,
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Frontend Mentor | Product list with cart',
      },
      {
        name: 'description',
        content:
          'Browse desserts, add items to cart, adjust quantities, and review your order in this Frontend Mentor challenge app.',
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body
        className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[var(--selection-bg)]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}
