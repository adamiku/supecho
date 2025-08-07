"use client"

import { useAuth } from '@clerk/nextjs'
import { ConvexReactClient } from "convex/react"
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import type { PropsWithChildren } from 'react'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convexClient = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || "")

export default function ConvexClientProvider({ children }: PropsWithChildren) {
  return (
    <ConvexProviderWithClerk client={convexClient} useAuth={useAuth}>
      {children}
    </ConvexProviderWithClerk>
  )
}
