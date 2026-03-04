import React, { useState, useEffect } from 'react';
import {
  FileText, Download, Search, ExternalLink, Clock,
  ChevronRight, X, AlertTriangle, RefreshCw, Filter
} from 'lucide-react';
import { subscribeToShortlists, ShortlistPdf } from '../services/firebase';

const BRANCHES = ['All', 'Army', 'Navy', 'Air Force', 'Police', 'Civil Defence', 'FRSC', 'Fire Service', 'Immigration', 'Customs'];

const branchColor: Record<string, string> = {
  Army: 'bg-green-100 text-green-800 border-green-200',
  Navy: 'bg-blue-100 text-blue-800 border-blue-200',
  'Air Force': 'bg-sky-100 text-sky-800 border-sky-200',
  Police: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  'Civil Defence': 'bg-red-100 text-red-800 border-red-200',
  FRSC: 'bg-orange-100 text-orange-800 border-orange-200',
  'Fire Service': 'bg-amber-100 text-amber-800 border-amber-200',
  Immigration: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  Customs: 'bg-slate-100 text-slate-800 border-slate-200',
};

const PdfViewer: React.FC = () => {
  const [pdfs, setPdfs] = useState<ShortlistPdf[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeBranch, setActiveBranch] = useState('All');
  const [selectedPdf, setSelectedPdf] = useState<ShortlistPdf | null>(null);

  useEffect(() => {
    const unsub = subscribeToShortlists((data) => {
      setPdfs(data);
      setLoading(false);
    });
    // Timeout fallback so we don't spin forever if firebase returns empty
    const t = setTimeout(() => setLoading(false), 5000);
    return () => { unsub(); clearTimeout(t); };
  }, []);

  const filtered = pdfs.filter(pdf => {
    const matchesBranch = activeBranch === 'All' || pdf.branch === activeBranch;
    const matchesSearch = search.trim() === '' || pdf.title.toLowerCase().includes(search.toLowerCase()) || pdf.branch.toLowerCase().includes(search.toLowerCase());
    return matchesBranch && matchesSearch;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Shortlist Viewer</h1>
        <p className="text-gray-500 mt-2 text-sm">
          Official shortlist PDFs published by recruiting agencies. Updated in real-time.
        </p>
      </div>

      {/* Search + Filter bar */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by branch or title..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-military-blue"
            />
          </div>
          <div className="text-xs text-gray-400 flex items-center gap-1 shrink-0">
            <Filter className="w-3.5 h-3.5" />
            {filtered.length} document{filtered.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {/* Branch Pills */}
        <div className="flex gap-2 flex-wrap">
          {BRANCHES.map(b => (
            <button
              key={b}
              onClick={() => setActiveBranch(b)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${activeBranch === b
                ? 'bg-military-green text-white border-military-green shadow-sm'
                : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-military-green hover:text-military-green'
                }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* PDF Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-44 bg-gray-100 animate-pulse rounded-xl" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-gray-200 rounded-xl py-16 text-center">
          {pdfs.length === 0 ? (
            <>
              <FileText className="w-12 h-12 text-gray-200 mx-auto mb-3" />
              <h3 className="font-bold text-gray-500 text-lg">No Shortlists Published Yet</h3>
              <p className="text-gray-400 text-sm mt-1">Check back soon — the admin will upload shortlist PDFs here.</p>
            </>
          ) : (
            <>
              <AlertTriangle className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-bold text-gray-600">No results for "{search || activeBranch}"</h3>
              <button onClick={() => { setSearch(''); setActiveBranch('All'); }}
                className="mt-3 text-sm text-military-blue hover:underline font-medium">
                Clear filters
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(pdf => (
            <div
              key={pdf.id}
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:border-military-green transition-all duration-200 group overflow-hidden cursor-pointer"
              onClick={() => setSelectedPdf(pdf)}
            >
              {/* Card colour strip */}
              <div className={`h-1.5 w-full ${pdf.branch === 'Army' ? 'bg-military-green' :
                pdf.branch === 'Navy' ? 'bg-military-blue' :
                  pdf.branch === 'Air Force' ? 'bg-sky-500' :
                    pdf.branch === 'Police' ? 'bg-indigo-600' :
                      pdf.branch === 'FRSC' ? 'bg-orange-500' : 'bg-gray-400'
                }`} />

              <div className="p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 bg-red-50 border border-red-100 rounded-xl shrink-0">
                    <FileText className="w-6 h-6 text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-military-green transition-colors line-clamp-2">
                      {pdf.title}
                    </h3>
                    <span className={`inline-block mt-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full border ${branchColor[pdf.branch] || 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                      {pdf.branch}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-3">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {new Date(pdf.uploadedAt).toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                  <span>{pdf.fileSizeKB} KB</span>
                </div>
                <button
                  className="mt-3 w-full flex items-center justify-center gap-2 py-2 px-3 bg-gray-50 hover:bg-military-green hover:text-white text-gray-600 rounded-lg text-xs font-semibold border border-gray-100 group-hover:border-military-green transition-all"
                  onClick={e => { e.stopPropagation(); setSelectedPdf(pdf); }}
                >
                  View PDF <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 flex flex-col bg-gray-900/95 backdrop-blur-sm">
          {/* Modal Toolbar */}
          <div className="bg-gray-900 text-white px-4 py-3 flex items-center justify-between shrink-0 border-b border-gray-700">
            <div className="flex items-center gap-3 min-w-0">
              <FileText className="w-5 h-5 text-gray-400 shrink-0" />
              <div className="min-w-0">
                <p className="font-semibold text-sm truncate">{selectedPdf.title}</p>
                <p className="text-gray-500 text-xs">{selectedPdf.fileName} · {selectedPdf.fileSizeKB} KB</p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0 ml-4">
              <a
                href={selectedPdf.downloadURL}
                download={selectedPdf.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-military-green hover:bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors"
                onClick={e => e.stopPropagation()}
              >
                <Download className="w-3.5 h-3.5" /> Download
              </a>
              <a
                href={selectedPdf.downloadURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors"
                onClick={e => e.stopPropagation()}
              >
                <ExternalLink className="w-3.5 h-3.5" /> Open
              </a>
              <button
                onClick={() => setSelectedPdf(null)}
                className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PDF iframe */}
          <div className="flex-1 overflow-hidden">
            <iframe
              src={`${selectedPdf.downloadURL}#toolbar=1`}
              title={selectedPdf.title}
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;