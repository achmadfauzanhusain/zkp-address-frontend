import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet } from '@reown/appkit/networks'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
if (!projectId) throw new Error('Project ID tidak ditemukan')

export const networks = [mainnet]
export const ethersAdapter = new EthersAdapter()

export const metadata = {
  name: 'My App',
  description: 'My Web3 App',
  url: 'https://myapp.com',
  icons: ['https://myapp.com/icon.png']
}