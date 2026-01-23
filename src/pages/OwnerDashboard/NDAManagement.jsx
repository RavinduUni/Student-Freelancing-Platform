import { CheckCircle, Clock, Download, Eye, File, FileText, Send, UserIcon, X, XCircle } from 'lucide-react';
import React, { useState } from 'react'
import StatusBadge from '../../components/StatusBadge';

const NDAManagement = () => {

  const [filterStatus, setFilterStatus] = useState('all');

  const [showNDAModel, setShowNDAModel] = useState(false);
  const [NDA, setNDA] = useState(null);

  const ndaData = [
    {
      id: 1,
      projectTitle: 'React Dashboard Development',
      projectId: 1,
      studentName: 'Alex Johnson',
      studentEmail: 'alex.j@mit.edu',
      university: 'MIT',
      sentDate: '2024-11-15',
      status: 'nda-accepted',
      acceptedDate: '2024-11-16',
      signedDocument: 'NDA_ReactDashboard_Signed_AlexJohnson.pdf',
      signedDocumentSize: '312 KB'
    },
    {
      id: 2,
      projectTitle: 'Mobile App UI Design',
      projectId: 2,
      studentName: 'Sarah Chen',
      studentEmail: 'sarah.c@stanford.edu',
      university: 'Stanford',
      sentDate: '2024-11-14',
      status: 'nda-sent',
      acceptedDate: null,
      signedDocument: null,
      signedDocumentSize: null
    },
    {
      id: 3,
      projectTitle: 'Mobile App UI Design',
      projectId: 2,
      studentName: 'Mike Wilson',
      studentEmail: 'mike.w@ucla.edu',
      university: 'UCLA',
      sentDate: '2024-11-13',
      status: 'nda-sent',
      acceptedDate: null,
      signedDocument: null,
      signedDocumentSize: null
    },
    {
      id: 4,
      projectTitle: 'E-commerce Website Development',
      projectId: 3,
      studentName: 'Emily Davis',
      studentEmail: 'emily.d@berkeley.edu',
      university: 'UC Berkeley',
      sentDate: '2024-11-10',
      status: 'rejected',
      acceptedDate: null,
      signedDocument: null,
      signedDocumentSize: null
    },
    {
      id: 5,
      projectTitle: 'Content Writing - Tech Blog',
      projectId: 4,
      studentName: 'David Lee',
      studentEmail: 'david.l@harvard.edu',
      university: 'Harvard',
      sentDate: '2024-11-08',
      status: 'nda-accepted',
      acceptedDate: '2024-11-09',
      signedDocument: 'NDA_ContentWriting_Signed_DavidLee.pdf',
      signedDocumentSize: '298 KB'
    }
  ];

  const statusFilters = [
    { value: 'all', label: 'All NDAs', icon: FileText, color: 'bg-blue-50 text-primary', count: ndaData.length },
    { value: 'nda-sent', label: 'Pending', icon: Clock, color: 'bg-yellow-50 text-yellow-400', count: ndaData.filter(n => n.status === 'nda-sent').length },
    { value: 'nda-accepted', label: 'Accepted', icon: CheckCircle, color: 'bg-green-50 text-green-400', count: ndaData.filter(n => n.status === 'nda-accepted').length },
    { value: 'rejected', label: 'Rejected', icon: XCircle, color: 'bg-red-50 text-red-500', count: ndaData.filter(n => n.status === 'rejected').length }
  ];

  const ndaFilter = filterStatus === 'all' ? ndaData : ndaData.filter(nda => nda.status === filterStatus);

  return (
    <div>
      <div>
        <h1 className='font-bold text-4xl'>NDA Management</h1>
        <p className='text-text-secondary mt-2'>Track and manage non-disclosure agreements sent to students</p>
      </div>

      <div className='grid grid-cols-4 gap-5 mt-8'>
        {statusFilters.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className='bg-white shadow-lg w-full flex flex-col items-center gap-2 py-3 border border-border rounded-xl cursor-pointer group hover:shadow-xl hover:scale-102 transition-all duration-200'>
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${stat.color}`}>
                <Icon />
              </div>
              <h4 className='text-secondary text-2xl font-semibold'>{stat.count}</h4>
              <p className='text-text-secondary'>{stat.label}</p>
            </div>
          )
        })}
      </div>

      <div className='bg-white p-3 shadow mt-7'>
        <p className='text-xl font-semibold mt-3'>NDA Agreements</p>

        <div className='flex gap-3 mt-5'>
          {statusFilters.map((stat, index) => (
            <button
              key={index}
              className={`border-2 border-border py-2 px-4 rounded-2xl cursor-pointer hover:border-primary transition-colors duration-200 ${filterStatus === stat.value ? 'bg-primary text-white border-primary' : 'bg-white'}`}
              onClick={() => setFilterStatus(stat.value)}
            >
              {stat.label} ({stat.count})
            </button>
          ))}
        </div>

        <div className='flex flex-col gap-4 mt-5'>
          {ndaFilter.map((nda) => (
            <div key={nda.id} className='border-2 border-border px-4 rounded-2xl'>
              <div className='flex items-center justify-between my-3'>
                <h2 className='text-xl font-semibold'>{nda.projectTitle}</h2>
                <StatusBadge status={nda.status} />
              </div>

              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 bg-blue-50 text-primary flex items-center justify-center rounded-full'>
                  <UserIcon />
                </div>
                <div>
                  <h4 className='text-secondary'>{nda.studentName}</h4>
                  <p className='text-text-secondary'>{nda.university}</p>
                </div>
              </div>

              <div className='flex items-center gap-5 my-5'>
                <div className='flex items-center gap-2 text-sm font-semibold'>
                  <Send className='w-4 h-4 text-primary' />
                  Sent: <span className='text-secondary font-medium'>{nda.sentDate}</span>
                </div>

                {nda.acceptedDate && (
                  <div className='flex items-center gap-2 text-sm font-semibold'>
                    <CheckCircle className='w-4 h-4 text-accent' />
                    Accepted: <span className='text-secondary font-medium'>{nda.acceptedDate}</span>
                  </div>
                )}
              </div>

              <hr className='border border-border mb-4' />

              <div className='flex items-center gap-5 mb-4'>
                <button
                  className='flex items-center gap-2 border-2 border-primary text-primary px-4 py-2 rounded-xl cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200'
                  onClick={() => {setNDA(nda); setShowNDAModel(true)}}
                >
                  <Eye className='w-5 h-5' />
                  View NDA
                </button>

                <button className='border-2 border-primary text-white bg-primary px-4 py-2 rounded-xl cursor-pointer hover:bg-blue-600 transition-colors duration-200'>
                  View Applicant
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showNDAModel && NDA && (
        <div className='fixed flex items-center justify-center inset-0 z-50'>
          <div className='absolute inset-0 bg-black opacity-70' />
          <div className='bg-white max-w-3xl z-50 p-5 rounded-2xl'>
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-semibold'>Non-Disclosure Agreement</h2>
              <X className='cursor-pointer hover:text-red-500' onClick={() => setShowNDAModel(false)} />
            </div>

            <hr className='border border-border my-3' />

            <div className='flex items-center justify-between border border-primary bg-blue-50 p-3 rounded-2xl'>
              <div>
                <span className='flex items-center gap-2 text-xl font-semibold mb-2'>
                  <FileText className='text-primary' />
                  React Dashboard Development
                </span>
                <p className='text-text-secondary'>Student: {NDA.studentName}</p>
                <p className='text-text-secondary'>{NDA.studentEmail}</p>
              </div>
              <div>
                <StatusBadge status={NDA.status} />
              </div>
            </div>

            <div className='max-h-80 overflow-y-auto my-4'>
              <div className="text-text-secondary bg-background border-2 border-border p-4 rounded-2xl">
                <h5 className="text-secondary mb-4 font-semibold text-lg">Non-Disclosure Agreement</h5>
                <p className='text-sm'>
                  This Non-Disclosure Agreement ("Agreement") is entered into as of the date of electronic acceptance
                  by and between TechStart Inc. ("Disclosing Party") and {NDA.studentName} ("Receiving Party").
                </p>

                <div>
                  <h6 className="text-secondary my-2 font-semibold">1. Definition of Confidential Information</h6>
                  <p className='text-sm'>
                    For purposes of this Agreement, "Confidential Information" shall include all information or material
                    that has or could have commercial value or other utility in the business in which Disclosing Party
                    is engaged. This includes, but is not limited to, technical data, trade secrets, know-how, research,
                    product plans, products, services, customers, customer lists, markets, software, developments,
                    inventions, processes, formulas, technology, designs, drawings, engineering, hardware configuration
                    information, marketing, finances, or other business information.
                  </p>
                </div>

                <div>
                  <h6 className="text-secondary my-2 font-semibold">2. Obligations of Receiving Party</h6>
                  <p className='text-sm'>
                    Receiving Party agrees to hold and maintain the Confidential Information in strictest confidence
                    for the sole and exclusive benefit of the Disclosing Party. Receiving Party shall carefully restrict
                    access to Confidential Information to employees, contractors, and third parties as is reasonably
                    required and shall require those persons to sign nondisclosure restrictions at least as protective
                    as those in this Agreement.
                  </p>
                </div>

                <div>
                  <h6 className="text-secondary my-2 font-semibold">3. Term</h6>
                  <p className='text-sm'>
                    This Agreement shall remain in effect for a period of 2 years from the date of acceptance,
                    unless otherwise terminated in writing by both parties. The obligations of confidentiality
                    shall survive termination of this Agreement.
                  </p>
                </div>

                <div>
                  <h6 className="text-secondary my-2 font-semibold">4. Return of Materials</h6>
                  <p className='text-sm'>
                    Upon completion of the project or upon request by Disclosing Party, all documents and materials
                    containing Confidential Information shall be returned to Disclosing Party or destroyed with
                    written certification of destruction.
                  </p>
                </div>

                <div>
                  <h6 className="text-secondary my-2 font-semibold">5. Remedies</h6>
                  <p className='text-sm'>
                    The parties acknowledge that monetary damages may not be a sufficient remedy for unauthorized
                    disclosure of Confidential Information and that Disclosing Party shall be entitled, without
                    waiving any other rights or remedies, to such injunctive or equitable relief as may be deemed
                    proper by a court of competent jurisdiction.
                  </p>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-3 text-sm'>
              <div className='bg-blue-50 p-3 rounded-xl'>
                <p className='text-text-secondary mb-2'>Sent Date</p>
                <p>{NDA.sentDate}</p>
              </div>
              <div className='bg-green-50 p-3 rounded-xl'>
                <p className='text-text-secondary mb-2'>Accepted Date</p>
                <p>{NDA.acceptedDate}</p>
              </div>
            </div>

            <div className='flex items-center gap-3 mt-4'>
              <button className='flex-1 border-2 border-primary py-2 rounded-xl text-primary hover:text-white hover:bg-primary cursor-pointer transition-colors duration-200'>
                Close
              </button>
              <button className='flex-1 flex items-center justify-center gap-2 border-2 border-primary py-2 rounded-xl text-white bg-primary hover:bg-blue-600 cursor-pointer'>
                <Download className='w-5 h-5' />
                Download Signed NDA
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NDAManagement