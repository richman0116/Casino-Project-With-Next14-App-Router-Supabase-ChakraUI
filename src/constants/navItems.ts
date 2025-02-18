import { TNavItem } from '@/types/navItem'

export const HEADER_NAV_ITEMS: Array<TNavItem> = [
  {
    label: 'Packs',
    href: '/',
  },
  {
    label: 'Battles',
    href: '/battles/',
  },
  {
    label: 'Race',
    href: '/race',
  },
  {
    label: 'Rewards',
    href: '/rewards',
    isNew: true,
  },
]

export const ACCOUNT_SIDEBAR_ITEMS: Array<TNavItem> = [
  {
    label: 'Profile',
    href: '/account',
  },
  {
    label: 'Crypto Deposits',
    href: '/account/crypto_deposits',
  },
  {
    label: 'Fiat Deposits',
    href: '/account/fiat_deposits',
  },
  {
    label: 'Withdrawals',
    href: '/account/withdrawals',
  },
  {
    label: 'Claims',
    href: '/account/claims',
  },
  {
    label: 'Sales',
    href: '/account/sales',
  },
  {
    label: 'Battle History',
    href: '/account/battle_history',
  },
  {
    label: 'Pack History',
    href: '/account/pack_history',
  },
  {
    label: 'Affiliate',
    href: '/account/affiliate',
  },
  {
    label: 'Stats',
    href: '/account/stats',
  },
]

export const SETTING_SIDEBAR_ITEMS: Array<TNavItem> = [
  {
    label: 'Fairness',
    href: '/account/fairness',
  },
  {
    label: 'Security',
    href: '/account/security',
  },
]
