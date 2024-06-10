import './polyfills'
import type { VXSRouter } from './interfaces/router'

export type { Endpoint } from './types'

export type Href = VXSRouter.Href
export type LinkProps = VXSRouter.LinkProps

export { Root } from './Root'
export { render } from './render'

export { Stack } from './layouts/Stack'
export { Tabs } from './layouts/Tabs'

export { Navigator, Slot } from './views/Navigator'
export { ErrorBoundary } from './views/ErrorBoundary'
export { Unmatched } from './views/Unmatched'
export { SplashScreen } from './views/Splash'
export { ScrollRestoration } from './views/ScrollRestoration'

export { createApp } from './createApp'

export {
  useRouter,
  useUnstableGlobalHref,
  usePathname,
  useNavigationContainerRef,
  useGlobalSearchParams,
  useLocalSearchParams,
  useSegments,
  useRootNavigation,
  useRootNavigationState,
} from './hooks'

export { store as routerStore } from './global-state/router-store'

export { router } from './imperative-api'

export { Link, Redirect } from './link/Link'

export { Head } from './head'

export { withLayoutContext } from './layouts/withLayoutContext'

// React Navigation
export { useFocusEffect } from './useFocusEffect'
export { useNavigation } from './useNavigation'

export { type LoaderProps, useLoader } from './useLoader'
