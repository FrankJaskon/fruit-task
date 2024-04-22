import { allFruits } from '../../global/campaign/campaign.constants'

export const checkFruit = (name: string) => allFruits.includes(name.toLowerCase().trim())
