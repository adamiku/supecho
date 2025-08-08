import { AuthGuard } from "@/modules/auth/ui/components/auth-guard"
import { OrganizationGuard } from "@/modules/auth/ui/components/organization-guard"
import type { PropsWithChildren } from "react"

function Layout({ children }: PropsWithChildren) {
  return (
    <AuthGuard>
      <OrganizationGuard>
        {children}
      </OrganizationGuard>
    </AuthGuard>
  )
}

export default Layout