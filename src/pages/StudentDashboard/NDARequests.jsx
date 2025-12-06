import { CheckCircle, Eye, FileText, Shield, X, XCircle } from 'lucide-react'
import React, { useState } from 'react'
import StatusBadge from '../../components/StatusBadge';

const NDARequests = () => {

  const [showModal, setShowModal] = useState(false);
  const [selectedNDAModal, setSelectedNDAModal] = useState(null);

  const ndaRequests = [
    {
      id: 1,
      projectTitle: 'Mobile App UI Design',
      owner: 'TechStart Inc.',
      receivedDate: '2 days ago',
      status: 'pending',
      budget: 500
    },
    {
      id: 2,
      projectTitle: 'E-commerce Website Development',
      owner: 'ShopEasy LLC',
      receivedDate: '5 days ago',
      status: 'pending',
      budget: 1200
    }
  ];

  const ndaHistory = [
    {
      id: 3,
      projectTitle: 'Logo Design for Startup',
      owner: 'BrandCo',
      date: '1 week ago',
      status: 'nda-accepted',
      action: 'Accepted'
    },
    {
      id: 4,
      projectTitle: 'Content Writing Project',
      owner: 'MediaHub',
      date: '2 weeks ago',
      status: 'rejected',
      action: 'Rejected'
    }
  ];

  return (
    <div className='min-h-screen bg-background'>
      <div>
        <h1 className='text-4xl font-bold mb-2'>NDA Management</h1>
        <p className='text-text-secondary'>Review and manage your non-disclosure agreements</p>
      </div>

      {/* Pending NDA */}
      <div className='flex flex-col gap-3 mt-9'>
        <div className='flex gap-3'>
          <div className='bg-purple-50 w-12 h-12 rounded-lg flex justify-center items-center'>
            <Shield className='w-6 h-6 text-purple-600' />
          </div>
          <div>
            <h3 className='text-2xl font-semibold'>Pending NDA Requests</h3>
            <p className='text-text-secondary'>You have 2 pending requests</p>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-5 mt-3'>
          {ndaRequests.map((nda) => (
            <div key={nda.id} className='bg-purple-50 border-3 border-purple-200 rounded-xl p-5'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-semibold '>{nda.projectTitle}</h3>
                <StatusBadge status={nda.status} />
              </div>
              <div className='flex gap-5 mt-2 text-sm'>
                <span className='text-text-secondary'>
                  By: {nda.owner}
                </span>
                <span className='text-text-secondary'>
                  • Budget: ${nda.budget}
                </span>
                <span className='text-text-secondary'>
                  • Received: {nda.receivedDate}
                </span>
              </div>
              <div className='flex gap-3 items-center mt-4'>
                <button onClick={() => {
                  setShowModal(true);
                  setSelectedNDAModal(nda);
                }
                }
                  className='flex gap-3 items-center border-2 border-primary text-primary px-3 py-2 rounded-2xl hover:bg-primary hover:text-white transition-colors duration-300'>
                  <Eye className='w-4 h-4' />
                  View NDA
                </button>
                <button className='flex gap-3 items-center border-2 border-green-400 text-white bg-green-400 px-3 py-2 rounded-2xl hover:bg-green-500 transition-colors duration-300'>
                  <CheckCircle className='w-4 h-4' />
                  Accept
                </button>
                <button className='flex gap-3 items-center border-2 border-red-400 text-white bg-red-400 px-3 py-2 rounded-2xl hover:bg-red-500 transition-colors duration-300 cursor-pointer'>
                  <XCircle className='w-4 h-4' />
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NDA History */}
      <div className='mt-10'>
        <h3 className='text-2xl font-semibold'>NDA History</h3>

        <div className='grid grid-cols-1 gap-5 mt-3'>
          {ndaHistory.map((nda) => (
            <div className='flex items-center justify-between border border-gray-300 rounded-xl p-6'>
              <div className='flex items-center gap-5'>
                {nda.action === 'Accepted'
                  ? <div className='bg-green-100 text-green-400 rounded-xl w-10 h-10 flex items-center justify-center'>
                    <CheckCircle className='w-5 h-5' />
                  </div>
                  : <div className='bg-red-100 text-red-400 rounded-xl w-10 h-10 flex items-center justify-center'>
                    <XCircle className='w-5 h-5' />
                  </div>}
                <div>
                  <p className='font-semibold'>{nda.projectTitle}</p>
                  <div className='flex items-center gap-5 mt-1 text-text-secondary'>
                    <span>{nda.owner}</span>
                    <span>• {nda.date}</span>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <StatusBadge status={nda.status} />
                <button onClick={() => setShowModal(true)} className='text-primary bg-blue-50 px-3 py-1 rounded-3xl hover:underline'>View</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NDA Modal */}
      {showModal && selectedNDAModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
          <div className='absolute inset-0 bg-black opacity-70 transition-opacity duration-300' onClick={() => setShowModal(false)}/>

          <div className="relative bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-scroll">
            <div className='flex items-center justify-between'>
              <h1 className='text-3xl font-semibold'>Non-Disclosure Agreement</h1>
              <X onClick={() => setShowModal(false)} className='cursor-pointer' />
            </div>
            <hr className='border border-border my-3' />
            <div className='border border-primary p-4 bg-blue-50 rounded-2xl'>
              <span className='text-xl font-semibold flex items-center gap-2'>
                <FileText className='w-5 h-5 text-primary' />
                {selectedNDAModal.projectTitle}
              </span>
              <p className='text-text-secondary'>
                Issued by: {selectedNDAModal.owner}
              </p>
            </div>

            <div className='mt-4 p-4 border-2 border-gray-300 rounded-2xl bg-gray-50'>
              <h5 className='text-xl font-semibold mb-3'>Non-Disclosure Agreement</h5>
              <div>
                <p className='text-text-secondary mb-4'>This Non-Disclosure Agreement ("Agreement") is entered into as of the date of electronic acceptance by and between TechStart Inc.
                  ("Disclosing Party") and the undersigned student ("Receiving Party").
                </p>

                <div>
                  <h6 className="text-secondary mb-2 font-semibold">1. Definition of Confidential Information</h6>
                  <p className='text-text-secondary mb-4'>
                    For purposes of this Agreement, "Confidential Information" shall include all information or material
                    that has or could have commercial value or other utility in the business in which Disclosing Party
                    is engaged.
                  </p>
                </div>

                <div>
                  <h6 className="text-secondary mb-2 font-semibold">2. Obligations of Receiving Party</h6>
                  <p className='text-text-secondary mb-4'>
                    Receiving Party agrees to hold and maintain the Confidential Information in strictest confidence
                    for the sole and exclusive benefit of the Disclosing Party.
                  </p>
                </div>

                <div>
                  <h6 className="text-secondary mb-2 font-semibold">3. Term</h6>
                  <p className='text-text-secondary mb-4'>
                    This Agreement shall remain in effect for a period of 2 years from the date of acceptance,
                    unless otherwise terminated in writing by both parties.
                  </p>
                </div>

                <div>
                  <h6 className="text-secondary mb-2 font-semibold">4. Return of Materials</h6>
                  <p className='text-text-secondary mb-4'>
                    Upon completion of the project or upon request by Disclosing Party, all documents and materials
                    containing Confidential Information shall be returned to Disclosing Party.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 border border-warning rounded-lg mt-4">
              <p className="text-text-secondary">
                <strong>Important:</strong> By accepting this NDA, you agree to keep all project information
                confidential. Violation of this agreement may result in legal action.
              </p>
            </div>

            <div className='flex items-center gap-3 mt-4'>
              <button className='flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer py-2 rounded-2xl'>
                <XCircle className='w-4 h-4' />
                Reject NDA
              </button>
              <button className='flex-1 flex items-center justify-center gap-2 border-2 border-green-400 bg-green-400 hover:bg-green-500 transition-colors duration-300 cursor-pointer text-white py-2 rounded-2xl'>
                <CheckCircle className='w-4 h-4' />
                Accept & Continue
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  )
}

export default NDARequests