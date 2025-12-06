import { ArrowDownRight, ArrowUpRight, DownloadIcon, TrendingUpIcon, WalletIcon } from 'lucide-react'
import React from 'react'

const Wallet = () => {

  const transactions = [
    {
      type: 'credit',
      description: 'Payment received - E-commerce Website',
      amount: 1200,
      date: '2 days ago',
      status: 'Completed'
    },
    {
      type: 'debit',
      description: 'Withdrawal to Bank Account',
      amount: 500,
      date: '5 days ago',
      status: 'Completed'
    },
    {
      type: 'credit',
      description: 'Payment received - Logo Design',
      amount: 300,
      date: '1 week ago',
      status: 'Completed'
    },
    {
      type: 'credit',
      description: 'Payment received - Mobile App UI',
      amount: 500,
      date: '2 weeks ago',
      status: 'Completed'
    },
    {
      type: 'debit',
      description: 'Withdrawal to Bank Account',
      amount: 800,
      date: '3 weeks ago',
      status: 'Completed'
    }
  ];

  const stats = [
    { label: 'Total Earned', value: '$3,240', change: '+12%' },
    { label: 'This Month', value: '$1,240', change: '+25%' },
    { label: 'Pending', value: '$0', change: '0%' }
  ];

  return (
    <div className='min-h-screen bg-background'>
      <div>
        <h1 className='text-4xl font-bold mb-2'>My Wallet</h1>
        <p className='text-text-secondary'>Manage your earnings and transactions</p>
      </div>

      <div className='bg-primary p-6 rounded-2xl mt-8 shadow'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='text-white'>Available Balance</p>
            <h1 className='text-white text-5xl font-semibold mt-3'>$1,240.00</h1>
          </div>

          <div className='bg-secondary p-3 rounded-full w-15 h-15 flex items-center justify-center'>
            <WalletIcon className='text-white' />
          </div>
        </div>
        <div>
          <button className='bg-secondary text-white flex items-center gap-3 px-5 py-3 rounded-xl mt-8 cursor-pointer hover:bg-gray-700 transition-colors duration-300'>
            <DownloadIcon className='w-5 h-5' />
            Withdraw Funds
          </button>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4 mt-8'>
        {stats.map((stat, index) => (
          <div key={index} className='bg-white shadow-md rounded-xl p-6'>
            <p className='text-text-secondary mb-3'>{stat.label}</p>
            <div className='flex items-center justify-between'>
              <span>{stat.value}</span>
              <span className={`flex items-center gap-1 ${stat.label === 'Total Earned' || stat.label === 'This Month' ? 'text-accent' : 'text-warning'}`}>
                <TrendingUpIcon className='w-4 h-4' />
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className='bg-white p-6 mt-8 shadow rounded-2xl'>
        <h3 className='text-2xl font-semibold mb-4'>Transaction History</h3>
        <div className='grid grid-cols-1 gap-3'>
          {transactions.map((transaction, index) => (
            <div className='flex items-center justify-between border border-border p-6 rounded-2xl bg-white hover:bg-background transition-colors duration-300'>
              <div className='flex items-center gap-5'>
                {transaction.type === 'credit' ?
                  <div className='w-12 h-12 rounded-full bg-green-100 text-green-500 flex justify-center items-center'>
                    <ArrowDownRight className='w-5 h-5' />
                  </div>
                  :
                  <div className='w-12 h-12 rounded-full bg-red-100 text-red-500 flex justify-center items-center'>
                    <ArrowUpRight className='w-5 h-5' />
                  </div>
                }

                <div>
                  <p className='font-semibold'>{transaction.description}</p>
                  <p className='text-text-secondary'>{transaction.date}</p>
                </div>
              </div>
              <div className='flex flex-col gap-1 items-start'>
                <p className={`text-accent ${transaction.type === 'debit' && 'text-red-500'}`}>${transaction.amount}</p>
                <p className='text-green-600 bg-green-100 py-1 px-3 rounded-2xl'>{transaction.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Wallet