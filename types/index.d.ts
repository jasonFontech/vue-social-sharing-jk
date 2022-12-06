import { Plugin } from "vue"

export interface Props {
  network: string
  url: string
  shareTitle: string
  description?: string
  quote?: string
  hashtags?: string
  twitterUser?: string
  media?: string
  tag?: string
  popup?: { width: number; height: number }
}

export interface PluginOptions {
  networks: Record<string, string>
}

declare const VueSocialSharing: Plugin

export default VueSocialSharing
