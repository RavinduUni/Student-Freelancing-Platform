import { WalletIcon } from 'lucide-react'
import React from 'react'

const Wallet = () => {
  return (
    <div className='min-h-screen bg-background'>
      <div>
        <h1 className='text-4xl font-bold mb-2'>My Wallet</h1>
        <p className='text-text-secondary'>Manage your earnings and transactions</p>
      </div>

      <div className='bg-primary p-6 rounded-2xl'>
        <div>
          <div>
            <p className='text-white'>Available Balance</p>
            <h1 className='text-white text-5xl font-semibold mt-3'>$1,240.00</h1>
          </div>

          <div>
            <WalletIcon className='text-white' />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Wallet