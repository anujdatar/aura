import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void
export interface RoutesInterface {
  title: string
  path: string
}

export interface industryImageSrc {
  src: string
  title: string
}
