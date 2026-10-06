import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, Printer, CheckCircle2, AlertTriangle, ShieldCheck, Download } from 'lucide-react';

interface ChecklistItem {
  id: string;
  label: string;
  category: 'Credentials' | 'Identity' | 'Forms' | 'Physical Gear';
  required: boolean;
  tip?: string;
}

const DEFAULT_ITEMS: ChecklistItem[] = [
  {
    id: 'slip',
    label: 'Printed Application / Screening Slip (2 clean copies)',
    category: 'Forms',
    required: true,
    tip: 'Print in color or crisp black/white with barcode visible'
  },
  {
    id: 'nin',
    label: 'National Identity Management Commission (NIN) Slip',
    category: 'Identity',
    required: true,
    tip: 'Ensure your name and date of birth match your credentials exactly'
  },
  {
    id: 'indigene',
    label: 'LGA Certificate of State of Origin / Indigene Certificate',
    category: 'Identity',
    required: true,
    tip: 'Must be issued by your native Local Government Area chairman/secretary'
  },
  {
    id: 'birth_cert',
    label: 'Birth Certificate (NPC) or Declaration of Age Court Affidavit',
    category: 'Credentials',
    required: true,
    tip: 'National Population Commission certificate is strongly preferred'
  },
  {
    id: 'o_level',
    label: 'WAEC / NECO / NABTEB Statement of Results or Certificate',
    category: 'Credentials',
    required: true,
    tip: 'Minimum 5 credits in not more than 2 sittings (must include English & Math)'
  },
  {
    id: 'fslc',
    label: 'First School Leaving Certificate (FSLC) / Primary Testimonial',
    category: 'Credentials',
    required: true,
    tip: 'Compulsory for military recruitment boards'
  },
  {
    id: 'guarantor',
    label: 'Completed & Duly Endorsed Guarantor Forms',
    category: 'Forms',
    required: true,
    tip: 'Must be signed by a Grade 1 Magistrate, Police Officer, or Traditional Ruler'
  },
  {
    id: 'passports',
    label: '8 Recent Passport Photographs (White Background)',
    category: 'Identity',
    required: true,
    tip: 'Neutral expression, no face caps, no tinted glasses'
  },
  {
    id: 'gear',
    label: 'White Physical Screening Kit (Vest, Shorts, Socks & Running Shoes)',
    category: 'Physical Gear',
    required: true,
    tip: 'Required for morning endurance run and physical fitness evaluation'
  }
];

interface ScreeningChecklistProps {
  branch?: string;
  title?: string;
}

export const ScreeningChecklist: React.FC<ScreeningChecklistProps> = ({
  branch = 'Military & Paramilitary',
  title
}) => {
  const storageKey = `screening_checklist_${branch.toLowerCase()}`;
  
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(checkedItems));
    } catch {
      // Ignore storage errors
    }
  }, [checkedItems, storageKey]);

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const total = DEFAULT_ITEMS.length;
  const completed = DEFAULT_ITEMS.filter(item => checkedItems[item.id]).length;
  const percentage = Math.round((completed / total) * 100);

  const getReadinessColor = () => {
    if (percentage >= 80) return 'text-emerald-700 bg-emerald-50 border-emerald-300';
    if (percentage >= 50) return 'text-amber-700 bg-amber-50 border-amber-300';
    return 'text-rose-700 bg-rose-50 border-rose-300';
  };

  const getReadinessBadge = () => {
    if (percentage === 100) return 'Fully Prepared for Screening Day';
    if (percentage >= 70) return 'High Readiness (Few Documents Left)';
    if (percentage >= 40) return 'Moderate Progress (Gather Missing Papers)';
    return 'Preparation Needed (Action Required)';
  };

  const handlePrint = () => {
    window.print();
  };

  const resetChecklist = () => {
    if (window.confirm('Reset this checklist back to zero?')) {
      setCheckedItems({});
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden print:shadow-none print:border-none">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
              Interactive Preparation Tool
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {title || `${branch} Physical Screening Document Checklist`}
          </h3>
          <p className="text-xs text-gray-300 mt-1 max-w-xl">
            Check off your verified documents to ensure you are 100% prepared before travelling to your state screening center.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-xl text-xs font-bold shadow-sm transition-all print:hidden"
            title="Print or save as PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Readiness Progress Bar */}
      <div className="p-5 bg-gray-50 border-b border-gray-200">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase text-gray-500 tracking-wider">Readiness Score:</span>
            <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${getReadinessColor()}`}>
              {percentage}% — {getReadinessBadge()}
            </span>
          </div>
          <span className="text-xs font-medium text-gray-600">
            {completed} of {total} documents ready
          </span>
        </div>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 rounded-full ${
              percentage >= 80 ? 'bg-emerald-500' : percentage >= 50 ? 'bg-amber-500' : 'bg-rose-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Checklist items */}
      <div className="p-6 space-y-3 divide-y divide-gray-100">
        {DEFAULT_ITEMS.map(item => {
          const isChecked = !!checkedItems[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`pt-3 first:pt-0 flex items-start gap-3 cursor-pointer select-none group transition-all`}
            >
              <button
                type="button"
                className="mt-0.5 text-gray-400 group-hover:text-emerald-600 transition-colors shrink-0"
                aria-label={isChecked ? `Mark ${item.label} incomplete` : `Mark ${item.label} complete`}
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-50" />
                ) : (
                  <Square className="w-5 h-5" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      isChecked ? 'text-gray-400 line-through' : 'text-gray-900 group-hover:text-emerald-700'
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                    {item.category}
                  </span>
                  {item.required && (
                    <span className="text-[10px] font-bold text-rose-600">
                      *Compulsory
                    </span>
                  )}
                </div>
                {item.tip && (
                  <p className="text-xs text-gray-500 mt-0.5">{item.tip}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer advice */}
      <div className="p-4 bg-amber-50/70 border-t border-amber-200/60 flex items-start gap-2.5 text-xs text-amber-900">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="flex-1">
          <span className="font-bold">Screening Day Warning:</span> Arrive at your designated center with both original credentials and at least 2 photocopies kept in an airtight flat file jacket. Any candidate presenting forged credentials or altered affidavits will be handed over to security personnel.
        </div>
        <button
          onClick={resetChecklist}
          className="text-[11px] font-semibold text-gray-500 hover:text-gray-800 underline shrink-0 print:hidden ml-2"
        >
          Reset All
        </button>
      </div>
    </div>
  );
};

export default ScreeningChecklist;
