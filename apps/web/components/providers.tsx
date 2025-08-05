"use client"

import { ConvexProvider, ConvexReactClient } from "convex/react"
import type { PropsWithChildren } from "react"

const convexClient = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "")

export function Providers({ children }: PropsWithChildren) {
  return (
    <ConvexProvider client={convexClient}>
      {children}
    </ConvexProvider>
  )
}
