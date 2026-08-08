export interface FunnelOption {
  value: string
  /** May contain *italic* spans */
  label: string
  icon?: string
}

interface BaseStep {
  id: string
}

export interface WelcomeStep extends BaseStep {
  type: 'welcome'
}

export interface ValuePropsStep extends BaseStep {
  type: 'value-props'
}

export interface QuestionStep extends BaseStep {
  type: 'question'
  select: 'single' | 'multi'
  /** May contain *italic* spans */
  title: string
  subtitle?: string
  /** Path to a cover image shown beside the title (screen 03) */
  coverImage?: string
  maxSelections?: number
  options: FunnelOption[]
}

export interface SliderOption {
  value: string
  label: string
  /** Highest amount in the range — number of book rectangles to render */
  count: number
}

export interface SliderStep extends BaseStep {
  type: 'slider'
  title: string
  unit: string
  defaultIndex: number
  options: SliderOption[]
}

export interface TrustStep extends BaseStep {
  type: 'trust'
}

export interface BelongingStep extends BaseStep {
  type: 'belonging'
}

export interface WayMoreStep extends BaseStep {
  type: 'way-more'
}

/** Screen 11.4 variant: payoff with a benefit checklist */
export interface SparkChecklistStep extends BaseStep {
  type: 'spark-checklist'
}

export interface InsideGuideStep extends BaseStep {
  type: 'inside-guide'
}

export interface SubscribeStep extends BaseStep {
  type: 'subscribe'
}

/** Static end screen: the existing checkout's Create Account page (non-interactive) */
export interface CreateAccountStep extends BaseStep {
  type: 'create-account'
  image: string
}

export type FunnelStep =
  | WelcomeStep
  | ValuePropsStep
  | QuestionStep
  | SliderStep
  | TrustStep
  | BelongingStep
  | WayMoreStep
  | SparkChecklistStep
  | InsideGuideStep
  | SubscribeStep
  | CreateAccountStep

export interface FunnelData {
  book: {
    title: string
    author: string
  }
  checkoutUrl: string
  steps: FunnelStep[]
}
