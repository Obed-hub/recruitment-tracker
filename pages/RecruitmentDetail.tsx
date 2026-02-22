import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, CheckCircle, ExternalLink, Clock, ListOrdered, Shield, MapPin, Phone } from 'lucide-react';
import { getRecruitmentById } from '../services/mockFirebase';
import { RecruitmentUpdate } from '../types';

const RecruitmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recruitment, setRecruitment] = useState<RecruitmentUpdate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getRecruitmentById(id).then(data => {
        setRecruitment(data || null);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          <div className="h-64 bg-gray-200 rounded mt-8"></div>
        </div>
      </div>
    );
  }

  if (!recruitment) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Recruitment Not Found</h2>
        <Link to="/recruitments" className="text-military-blue hover:underline mt-4 inline-block">
          Back to Recruitment List
        </Link>
      </div>
    );
  }

  const getBranchColor = () => {
    switch (recruitment.branch) {
      case 'Army': return 'bg-military-green';
      case 'Navy': return 'bg-military-blue';
      case 'Air Force': return 'bg-sky-600';
      case 'Police': return 'bg-blue-600';
      case 'Civil Defence': return 'bg-red-700';
      case 'FRSC': return 'bg-red-500';
      case 'Fire Service': return 'bg-orange-600';
      case 'Immigration': return 'bg-emerald-700';
      case 'Customs': return 'bg-slate-700';
      default: return 'bg-gray-800';
    }
  };

  const daysRemaining = (() => {
    const today = new Date();
    const due = new Date(recruitment.deadline_date);
    const diffTime = due.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  })();

  return (
    <div className="max-w-5xl mx-auto">
      <Link to="/recruitments" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Recruitments
      </Link>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header Banner */}
        <div className={`${getBranchColor()} p-8 text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <Shield className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-sm font-medium opacity-90 uppercase tracking-wider">
              <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">{recruitment.branch}</span>
              <span>•</span>
              <span className="bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">{recruitment.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{recruitment.title}</h1>
            
            <div className="flex flex-wrap gap-6 text-sm font-medium">
              <div className="flex items-center bg-black/20 px-3 py-1.5 rounded-lg">
                <Calendar className="w-4 h-4 mr-2 opacity-80" />
                <span>Deadline: {new Date(recruitment.deadline_date).toLocaleDateString()}</span>
              </div>
              
              {recruitment.status === 'Open' && daysRemaining >= 0 && (
                 <div className="flex items-center bg-white/20 px-3 py-1.5 rounded-lg text-white">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{daysRemaining === 0 ? 'Last Day!' : `${daysRemaining} Days Left`}</span>
                 </div>
              )}
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {recruitment.description || "No specific description available for this recruitment exercise. Please check the requirements below."}
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center">
                 <CheckCircle className="w-5 h-5 mr-2 text-military-green" /> Requirements
              </h3>
              <ul className="space-y-3">
                {recruitment.requirements?.length ? (
                  recruitment.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-military-green rounded-full flex-shrink-0"></span>
                      <span>{req}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 italic">Please refer to the official portal for detailed requirements.</li>
                )}
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center">
                <ListOrdered className="w-5 h-5 mr-2 text-military-blue" /> Application Process
              </h3>
              <div className="space-y-4">
                {recruitment.application_process?.length ? (
                  recruitment.application_process.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-military-blue font-bold flex items-center justify-center border border-blue-100">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 mt-1">{step}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 italic">Please refer to the official portal for application steps.</p>
                )}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-red-600" /> Exam Centers
              </h3>
              {recruitment.exam_centers && recruitment.exam_centers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {recruitment.exam_centers.map((center, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{center.zone} Zone</span>
                      <h4 className="font-bold text-gray-900 mt-1">{center.venue}</h4>
                      <p className="text-sm text-gray-600 mt-1">{center.address}</p>
                      <div className="flex items-center mt-3 text-sm text-military-blue font-medium">
                        <Phone className="w-3 h-3 mr-1" /> {center.coordinator_contact}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-yellow-800 text-sm">
                  Exam centers will be communicated to shortlisted candidates via email/SMS.
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Action Center</h3>
              
              <div className="space-y-4">
                <div className={`p-4 rounded-lg border ${
                   recruitment.status === 'Open' ? 'bg-green-100 border-green-200 text-green-800' :
                   recruitment.status === 'Closed' ? 'bg-red-100 border-red-200 text-red-800' : 'bg-yellow-100 border-yellow-200 text-yellow-800'
                }`}>
                  <span className="block text-xs font-bold uppercase mb-1">Status</span>
                  <span className="text-lg font-bold">{recruitment.status}</span>
                </div>

                <a 
                  href={recruitment.portal_url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center py-4 px-4 rounded-xl text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${
                    recruitment.status === 'Closed' 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : getBranchColor()
                  }`}
                  onClick={(e) => recruitment.status === 'Closed' && e.preventDefault()}
                >
                  {recruitment.status === 'Closed' ? 'Applications Closed' : 'Apply on Portal'}
                  {recruitment.status !== 'Closed' && <ExternalLink className="w-5 h-5 ml-2" />}
                </a>

                <p className="text-xs text-gray-500 text-center px-4">
                  By clicking "Apply on Portal", you will be redirected to the official {recruitment.branch} website.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RecruitmentDetail;