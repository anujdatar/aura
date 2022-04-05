import type { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void
export interface RoutesInterface {
  title: string
  path: string
}
