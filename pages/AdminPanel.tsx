import React, { useState, useEffect, useRef } from 'react';
import {
    ShieldCheck, Lock, Save, RefreshCw, CheckCircle,
    XCircle, AlertCircle, Globe, LogOut, Wifi, WifiOff,
    ChevronDown, ToggleLeft, ToggleRight, Clock,
    Upload, FileText, Trash2, Eye, X, ClipboardList,
    Briefcase, ExternalLink, Edit3, Calendar, Tag, Mail
} from 'lucide-react';
import {
    subscribeToPortalMonitor, updatePortalStatus, updateAllPortals,
    adminSignIn, adminSignOut, onAdminAuthStateChanged
} from '../services/firebase';



const BRANCHES = [
    'Army', 'Navy', 'Air Force',
    'Police', 'Civil Defence', 'Fire Service', 'Immigration', 'Customs', 'FRSC',
    'EFCC', 'FCSC', 'NNPC', 'CBN', 'NIMC', 'NCC', 'NITDA', 'FAAN', 'NIMASA', 'NAFDAC',
];

const STATIC_PORTALS = [
    { id: '1', name: 'Nigerian Army', url: 'https://recruitment.army.mil.ng' },
    { id: '2', name: 'Nigerian Navy', url: 'https://joinnigeriannavy.com' },
    { id: '3', name: 'Nigerian Air Force', url: 'https://nafrecruitment.airforce.mil.ng' },
    { id: '5', name: 'Nigeria Police Force', url: 'https://apply.policerecruitment.gov.ng' },
    { id: '6', name: 'CDCFIB (Civil Defence / Correctional / Fire / Imm.)', url: 'https://cdcfib.career' },
    { id: '7', name: 'Federal Road Safety Corps (FRSC)', url: 'https://recruitment.frsc.gov.ng' },
    { id: '8', name: 'Federal Fire Service', url: 'https://cdcfib.career' },
    { id: '9', name: 'Nigeria Immigration Service', url: 'https://cdcfib.career' },
    { id: '10', name: 'Nigeria Customs Service (NCS)', url: 'https://vacancy.customs.gov.ng' },
    { id: '11', name: 'EFCC', url: 'https://efcc.gov.ng/efcc/careers' },
    { id: '12', name: 'Federal Civil Service Commission (FCSC)', url: 'https://recruitment.fedcivilservice.gov.ng' },
    { id: '13', name: 'NNPC Limited', url: 'https://careers.nnpcgroup.com' },
    { id: '14', name: 'Central Bank of Nigeria (CBN)', url: 'https://www.cbn.gov.ng/Recruitment' },
    { id: '15', name: 'NIMC', url: 'https://nimc.gov.ng/careers' },
    { id: '16', name: 'Nigerian Communications Commission (NCC)', url: 'https://www.ncc.gov.ng/careers-ncc' },
    { id: '17', name: 'NITDA', url: 'https://nitda.gov.ng' },
    { id: '18', name: 'Federal Airports Authority (FAAN)', url: 'https://faan.gov.ng/career' },
    { id: '19', name: 'NIMASA', url: 'https://nimasa.gov.ng' },
    { id: '20', name: 'NAFDAC', url: 'https://nafdac.gov.ng' },
];

// ─── Recruitment seed data (mirrors mockFirebase IDs) ──────────────────────
const RECRUITMENT_SEED = [
    // ── Military ──────────────────────────────────────────────────────────────
    {
        id: '1', branch: 'Army', title: 'Nigerian Army DSSC 29 Recruitment',
        status: 'Open' as const, deadline: '2026-04-30',
        portal: 'https://recruitment.army.mil.ng',
        description: 'Direct Short Service Commission (DSSC 29) for graduates. 5-year commission with possibility of conversion to Regular Commission.',
    },
    {
        id: '2', branch: 'Navy', title: 'Nigerian Navy Batch 38 Recruitment',
        status: 'Shortlist Out' as const, deadline: '2026-01-31',
        portal: 'https://joinnigeriannavy.com',
        description: 'Batch 38 Regular Recruit Intake. Basic training at NNBTS Onne, Rivers State. Shortlist has been published — check the Shortlists section.',
    },
    {
        id: '3', branch: 'Air Force', title: 'Nigerian Air Force BMTC 45 Recruitment',
        status: 'Open' as const, deadline: '2026-05-15',
        portal: 'https://nafrecruitment.airforce.mil.ng',
        description: 'Basic Military Training Course (BMTC) 45. 12-week trade training at NAF Base Kaduna. Open to all 36 states + FCT.',
    },
    // ── Paramilitary & Security ───────────────────────────────────────────────
    {
        id: '5', branch: 'Police', title: 'Nigeria Police Force Constable Recruitment 2026',
        status: 'Open' as const, deadline: '2026-04-15',
        portal: 'https://policerecruitment.gov.ng',
        description: 'Enlistment as Police Constables. 6 months training at Police Colleges. State-quota based across all 36 states + FCT.',
    },
    {
        id: '6', branch: 'Civil Defence', title: 'NSCDC 2026 General Recruitment',
        status: 'Open' as const, deadline: '2026-05-01',
        portal: 'https://recruitment.cdcfib.gov.ng',
        description: 'CDCFIB recruitment into the Nigeria Security and Civil Defence Corps. Paramilitary training at NSCDC Training College.',
    },
    {
        id: '7', branch: 'FRSC', title: 'FRSC Cadet Corps Marshal Recruitment 2026',
        status: 'Open' as const, deadline: '2026-04-20',
        portal: 'https://www.frsc.gov.ng',
        description: 'Cadet Corps Marshal intake for university graduates and HND holders. Road traffic administration and safety management.',
    },
    {
        id: '8', branch: 'Fire Service', title: 'Federal Fire Service Recruitment 2026',
        status: 'Open' as const, deadline: '2026-05-30',
        portal: 'https://recruitment.cdcfib.gov.ng',
        description: 'Junior (Firefighter) and Senior (Inspector) cadre recruitment via CDCFIB. Fire prevention, suppression, and rescue operations.',
    },
    {
        id: '9', branch: 'Immigration', title: 'Nigeria Immigration Service Recruitment 2026',
        status: 'Open' as const, deadline: '2026-06-01',
        portal: 'https://recruitment.cdcfib.gov.ng',
        description: 'CDCFIB recruitment into NIS. Inspector and Assistant Inspector cadres. Border management, anti-trafficking and passport issuance.',
    },
    {
        id: '10', branch: 'Customs', title: 'Nigeria Customs Service Recruitment 2026',
        status: 'Open' as const, deadline: '2026-04-30',
        portal: 'https://vacancy.customs.gov.ng',
        description: 'Customs Assistant and Inspector cadres plus professional/technical roles. Revenue assessment, border security, and anti-smuggling.',
    },
    // ── Law Enforcement ───────────────────────────────────────────────────────
    {
        id: '11', branch: 'EFCC', title: 'EFCC Investigator / Analyst Recruitment 2026',
        status: 'Closed' as const, deadline: '2026-03-31',
        portal: 'https://efcc.gov.ng/efcc/careers',
        description: 'The Economic and Financial Crimes Commission (EFCC) recruits Investigators, Financial Analysts, Legal Officers, and ICT Officers. Positions require relevant degree and NYSC certificate.',
    },
    // ── Civil Service ─────────────────────────────────────────────────────────
    {
        id: '12', branch: 'FCSC', title: 'Federal Civil Service Commission (FCSC) Recruitment 2026',
        status: 'Closed' as const, deadline: '2026-04-30',
        portal: 'https://recruitment.fedcivilservice.gov.ng',
        description: 'The FCSC conducts batch recruitment into Federal Ministries, Departments and Agencies (MDAs). Positions range from GL 07 to GL 14 across engineering, administration, science, health and social work.',
    },
    // ── Oil, Gas & Energy ─────────────────────────────────────────────────────
    {
        id: '13', branch: 'NNPC', title: 'NNPC Limited Graduate Trainee Recruitment 2026',
        status: 'Closed' as const, deadline: '2026-03-15',
        portal: 'https://careers.nnpcgroup.com',
        description: 'NNPC Limited invites applications from exceptional graduates for its Graduate Trainee Programme. Disciplines include Engineering, Geosciences, Finance, Law, IT, and HSE. Minimum 2:2 degree required.',
    },
    // ── Finance & Banking ─────────────────────────────────────────────────────
    {
        id: '14', branch: 'CBN', title: 'Central Bank of Nigeria (CBN) Entry-Level Recruitment 2026',
        status: 'Closed' as const, deadline: '2026-02-28',
        portal: 'https://www.cbn.gov.ng/Recruitment',
        description: 'The CBN recruits entry-level economists, accountants, IT specialists and legal officers annually. A minimum of Second Class Upper (2:1) from an accredited institution is required along with NYSC discharge.',
    },
    // ── Tech & Identity ───────────────────────────────────────────────────────
    {
        id: '15', branch: 'NIMC', title: 'NIMC Staff Recruitment 2026',
        status: 'Unknown' as const, deadline: '2026-06-30',
        portal: 'https://nimc.gov.ng/careers',
        description: 'The National Identity Management Commission (NIMC) recruits IT officers, data analysts, registration officers, and administrative staff to support its national identity card and NIN management mandate.',
    },
    {
        id: '16', branch: 'NCC', title: 'Nigerian Communications Commission (NCC) Recruitment 2026',
        status: 'Closed' as const, deadline: '2026-03-30',
        portal: 'https://www.ncc.gov.ng/careers-ncc',
        description: 'The NCC recruits Telecom Engineers, Legal Officers, Economists, ICT Specialists and Administrative Officers for its regulatory functions in the Nigerian telecommunications sector.',
    },
    {
        id: '17', branch: 'NITDA', title: 'NITDA IT Officer Recruitment 2026',
        status: 'Unknown' as const, deadline: '2026-06-30',
        portal: 'https://nitda.gov.ng',
        description: 'The National Information Technology Development Agency (NITDA) recruits software developers, cybersecurity analysts, data scientists and policy officers to drive Nigeria\'s digital economy agenda.',
    },
    // ── Transport & Maritime ──────────────────────────────────────────────────
    {
        id: '18', branch: 'FAAN', title: 'Federal Airports Authority of Nigeria (FAAN) Recruitment 2026',
        status: 'Closed' as const, deadline: '2026-04-15',
        portal: 'https://faan.gov.ng/career',
        description: 'FAAN recruits Aviation Security Officers, Air Traffic Controllers, Engineers, Firefighters, and Administrative staff for operations across all international and domestic airports in Nigeria.',
    },
    {
        id: '19', branch: 'NIMASA', title: 'NIMASA Marine Officer Recruitment 2026',
        status: 'Unknown' as const, deadline: '2026-05-31',
        portal: 'https://nimasa.gov.ng',
        description: 'The Nigerian Maritime Administration and Safety Agency (NIMASA) recruits Marine Surveyors, Safety Officers, Legal Professionals, and ICT Officers to enforce maritime laws and promote shipping.',
    },
    // ── Health & Food Safety ──────────────────────────────────────────────────
    {
        id: '20', branch: 'NAFDAC', title: 'NAFDAC Regulatory Officer Recruitment 2026',
        status: 'Closed' as const, deadline: '2026-03-31',
        portal: 'https://nafdac.gov.ng',
        description: 'The National Agency for Food and Drug Administration and Control (NAFDAC) recruits Pharmacists, Food Scientists, Chemists, Microbiologists, and Administrative Officers to regulate food and drug safety.',
    },
];

type RecruitStatus = 'Open' | 'Closed' | 'Shortlist Out' | 'Unknown';

interface RecruitmentEdit {
    id: string;
    branch: string;
    title: string;
    status: RecruitStatus;
    deadline: string;
    portal: string;
    description: string;
    dirty?: boolean;
    saving?: boolean;
    saved?: boolean;
}

interface PortalEdit {
    id: string;
    name: string;
    url: string;
    status: 'online' | 'offline';
    recruitmentStatus: 'Open' | 'Closed' | 'Unknown';
    shortlistDetected: boolean;
    lastChecked?: string;
    notes?: string;
    saving?: boolean;
    saved?: boolean;
    dirty?: boolean;
}

type TabId = 'portals' | 'recruitments';

// ─── Login Screen ────────────────────────────────────────────────────────────────
const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [shaking, setShaking] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await adminSignIn(email, password);
            // onAdminAuthStateChanged in AdminPanel will detect the login automatically
        } catch (err: any) {
            const msg = err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password'
                ? 'Invalid email or password.'
                : err.code === 'auth/user-not-found'
                    ? 'No account found with this email.'
                    : err.message || 'Login failed. Please try again.';
            setError(msg);
            setShaking(true);
            setTimeout(() => setShaking(false), 600);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
            <div className={`w-full max-w-md ${shaking ? 'animate-bounce' : ''}`}>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-military-green/20 border border-military-green/40 rounded-2xl flex items-center justify-center mb-4">
                            <ShieldCheck className="w-8 h-8 text-green-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
                        <p className="text-gray-400 text-sm mt-1">Nigeria Military Recruitment Tracker</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">
                                <Mail className="inline w-3.5 h-3.5 mr-1" />
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => { setEmail(e.target.value); setError(''); }}
                                placeholder="admin@example.com"
                                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                autoFocus
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">
                                <Lock className="inline w-3.5 h-3.5 mr-1" />
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={e => { setPassword(e.target.value); setError(''); }}
                                placeholder="Enter your password"
                                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                required
                            />
                            {error && (
                                <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                                    <XCircle className="w-3 h-3" /> {error}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-military-green hover:bg-green-700 disabled:opacity-60 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            {loading
                                ? <><RefreshCw className="w-4 h-4 animate-spin" /> Signing in...</>
                                : <><ShieldCheck className="w-4 h-4" /> Access Admin Panel</>
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

// ─── Portal Card ────────────────────────────────────────────────────────────
const PortalCard: React.FC<{
    portal: PortalEdit;
    onChange: (id: string, field: keyof PortalEdit, value: any) => void;
    onSave: (id: string) => void;
}> = ({ portal, onChange, onSave }) => {
    const recruitBg = portal.recruitmentStatus === 'Open'
        ? 'bg-green-50 border-green-200 text-green-800'
        : portal.recruitmentStatus === 'Closed'
            ? 'bg-red-50 border-red-200 text-red-800'
            : 'bg-gray-50 border-gray-200 text-gray-600';

    return (
        <div className={`bg-white rounded-xl border-2 transition-all ${portal.dirty ? 'border-amber-300 shadow-md shadow-amber-100' : 'border-gray-100 shadow-sm'} p-5`}>
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Globe className="w-9 h-9 text-gray-400 bg-gray-100 p-2 rounded-lg" />
                        <span className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${portal.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`} />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-900 text-sm">{portal.name}</h3>
                        <a href={portal.url} target="_blank" rel="noopener noreferrer"
                            className="text-xs text-gray-400 hover:text-blue-600 hover:underline truncate block max-w-[180px]">
                            {new URL(portal.url).hostname}
                        </a>
                    </div>
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${recruitBg}`}>
                    {portal.recruitmentStatus}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Site Status</label>
                    <div className="flex gap-2">
                        <button
                            onClick={() => onChange(portal.id, 'status', 'online')}
                            className={`flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs font-bold border transition-all ${portal.status === 'online'
                                ? 'bg-green-500 text-white border-green-600'
                                : 'bg-white text-gray-500 border-gray-200 hover:border-green-300'}`}
                        >
                            <Wifi className="w-3 h-3" /> Online
                        </button>
                        <button
                            onClick={() => onChange(portal.id, 'status', 'offline')}
                            className={`flex-1 flex items-center justify-center gap-1 px-2 py-2 rounded-lg text-xs font-bold border transition-all ${portal.status === 'offline'
                                ? 'bg-red-500 text-white border-red-600'
                                : 'bg-white text-gray-500 border-gray-200 hover:border-red-300'}`}
                        >
                            <WifiOff className="w-3 h-3" /> Offline
                        </button>
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Recruitment Status</label>
                    <div className="relative">
                        <select
                            value={portal.recruitmentStatus}
                            onChange={e => onChange(portal.id, 'recruitmentStatus', e.target.value)}
                            className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-military-green pr-8 cursor-pointer"
                        >
                            <option value="Open">✅ Open</option>
                            <option value="Closed">🔴 Closed</option>
                            <option value="Unknown">❓ Unknown</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div>
                    <p className="text-sm font-semibold text-gray-700">Shortlist Detected</p>
                    <p className="text-xs text-gray-400">Candidates have been shortlisted</p>
                </div>
                <button onClick={() => onChange(portal.id, 'shortlistDetected', !portal.shortlistDetected)} className="transition-colors">
                    {portal.shortlistDetected
                        ? <ToggleRight className="w-8 h-8 text-military-green" />
                        : <ToggleLeft className="w-8 h-8 text-gray-300" />}
                </button>
            </div>

            <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Admin Notes</label>
                <textarea
                    value={portal.notes || ''}
                    onChange={e => onChange(portal.id, 'notes', e.target.value)}
                    placeholder="e.g. Form deadline extended, check portal again"
                    rows={2}
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-military-green resize-none placeholder-gray-300"
                />
            </div>

            <div className="flex items-center justify-between">
                {portal.lastChecked ? (
                    <span className="text-[10px] text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {new Date(portal.lastChecked).toLocaleString()}
                    </span>
                ) : <span />}
                <button
                    onClick={() => onSave(portal.id)}
                    disabled={portal.saving}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${portal.saved
                        ? 'bg-green-100 text-green-700 border border-green-200'
                        : portal.dirty
                            ? 'bg-military-green text-white hover:bg-green-700 shadow-sm'
                            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                        } disabled:opacity-60`}
                >
                    {portal.saving ? (
                        <><RefreshCw className="w-3.5 h-3.5 animate-spin" /> Saving...</>
                    ) : portal.saved ? (
                        <><CheckCircle className="w-3.5 h-3.5" /> Saved!</>
                    ) : (
                        <><Save className="w-3.5 h-3.5" /> Save</>
                    )}
                </button>
            </div>
        </div>
    );
};

// ─── Recruitment Card ────────────────────────────────────────────────────────
const statusConfig: Record<RecruitStatus, { bg: string; badge: string; dot: string }> = {
    'Open': { bg: 'border-green-300 shadow-green-50', badge: 'bg-green-100 text-green-800 border-green-200', dot: 'bg-green-500' },
    'Closed': { bg: 'border-red-200', badge: 'bg-red-100 text-red-800 border-red-200', dot: 'bg-red-500' },
    'Shortlist Out': { bg: 'border-amber-300 shadow-amber-50', badge: 'bg-amber-100 text-amber-800 border-amber-200', dot: 'bg-amber-500' },
    'Unknown': { bg: 'border-gray-200', badge: 'bg-gray-100 text-gray-600 border-gray-200', dot: 'bg-gray-400' },
};

const RecruitmentCard: React.FC<{
    rec: RecruitmentEdit;
    onChange: (id: string, field: keyof RecruitmentEdit, value: any) => void;
    onSave: (rec: RecruitmentEdit) => void;
}> = ({ rec, onChange, onSave }) => {
    const cfg = statusConfig[rec.status];
    const isOverdue = new Date(rec.deadline) < new Date();

    return (
        <div className={`bg-white rounded-xl border-2 transition-all p-5 shadow-sm ${rec.dirty ? 'border-amber-300 shadow-amber-100' : cfg.bg}`}>
            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 min-w-0">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${cfg.dot}`} />
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{rec.branch}</span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${cfg.badge}`}>
                    {rec.status}
                </span>
            </div>

            {/* Title */}
            <div className="mb-3">
                <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">Title</label>
                <input
                    type="text"
                    value={rec.title}
                    onChange={e => onChange(rec.id, 'title', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-military-green"
                />
            </div>

            {/* Status + Deadline row */}
            <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                    <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        <Tag className="inline w-3 h-3 mr-0.5" /> Status
                    </label>
                    <div className="relative">
                        <select
                            value={rec.status}
                            onChange={e => onChange(rec.id, 'status', e.target.value as RecruitStatus)}
                            className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-military-green pr-7 cursor-pointer"
                        >
                            <option value="Open">✅ Open</option>
                            <option value="Closed">🔴 Closed</option>
                            <option value="Shortlist Out">📋 Shortlist Out</option>
                            <option value="Unknown">❓ Unknown</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-2.5 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
                    </div>
                </div>
                <div>
                    <label className={`block text-[10px] font-semibold uppercase tracking-wider mb-1 ${isOverdue ? 'text-red-500' : 'text-gray-400'}`}>
                        <Calendar className="inline w-3 h-3 mr-0.5" /> Deadline
                    </label>
                    <input
                        type="date"
                        value={rec.deadline}
                        onChange={e => onChange(rec.id, 'deadline', e.target.value)}
                        className={`w-full border rounded-lg px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-military-green ${isOverdue ? 'border-red-300 text-red-600 bg-red-50' : 'border-gray-200 text-gray-700'}`}
                    />
                </div>
            </div>

            {/* Description */}
            <div className="mb-3">
                <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    <Edit3 className="inline w-3 h-3 mr-0.5" /> Description
                </label>
                <textarea
                    value={rec.description}
                    onChange={e => onChange(rec.id, 'description', e.target.value)}
                    rows={3}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 focus:outline-none focus:ring-2 focus:ring-military-green resize-none"
                />
            </div>

            {/* Portal URL */}
            <div className="mb-4">
                <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    <ExternalLink className="inline w-3 h-3 mr-0.5" /> Portal URL
                </label>
                <input
                    type="url"
                    value={rec.portal}
                    onChange={e => onChange(rec.id, 'portal', e.target.value)}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600 focus:outline-none focus:ring-2 focus:ring-military-green font-mono"
                />
            </div>

            {/* Save */}
            <button
                onClick={() => onSave(rec)}
                disabled={rec.saving || !rec.dirty}
                className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-bold transition-all ${rec.saved
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : rec.dirty
                        ? 'bg-military-green text-white hover:bg-green-700'
                        : 'bg-gray-50 text-gray-400 border border-gray-100 cursor-default'
                    } disabled:opacity-60`}
            >
                {rec.saving ? (
                    <><RefreshCw className="w-3.5 h-3.5 animate-spin" /> Saving...</>
                ) : rec.saved ? (
                    <><CheckCircle className="w-3.5 h-3.5" /> Saved to Firebase!</>
                ) : rec.dirty ? (
                    <><Save className="w-3.5 h-3.5" /> Save Changes</>
                ) : (
                    <>No changes</>
                )}
            </button>
        </div>
    );
};


// ─── Main Admin Panel ────────────────────────────────────────────────────────────────
const AdminPanel: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authChecked, setAuthChecked] = useState(false);
    const [activeTab, setActiveTab] = useState<TabId>('portals');

    // ── Portal state ──────────────────────────────────────────────────────
    const [portals, setPortals] = useState<PortalEdit[]>([]);
    const [isSavingAll, setIsSavingAll] = useState(false);
    const [allSaved, setAllSaved] = useState(false);
    const [firebaseConnected, setFirebaseConnected] = useState(false);

    // ── Recruitment state ─────────────────────────────────────────────────
    const [recruitments, setRecruitments] = useState<RecruitmentEdit[]>(
        RECRUITMENT_SEED.map(r => ({ ...r, dirty: false, saving: false, saved: false }))
    );

    // Listen to Firebase Auth state — auto-login if session exists
    useEffect(() => {
        const unsub = onAdminAuthStateChanged((user) => {
            setIsLoggedIn(!!user);
            setAuthChecked(true);
        });
        return () => unsub();
    }, []);

    // Initialize portals from Firebase
    useEffect(() => {
        if (!isLoggedIn) return;
        const defaults: PortalEdit[] = STATIC_PORTALS.map(p => ({
            ...p, status: 'offline', recruitmentStatus: 'Unknown',
            shortlistDetected: false, dirty: false, saved: false,
        }));
        setPortals(defaults);

        const unsubscribe = subscribeToPortalMonitor((firebasePortals) => {
            setFirebaseConnected(true);
            if (firebasePortals.length === 0) return;
            const fbMap: Record<string, any> = {};
            firebasePortals.forEach((fp: any) => { fbMap[fp.id] = fp; });
            setPortals(prev => prev.map(p => {
                const fb = fbMap[p.id];
                if (fb && !p.dirty) {
                    return {
                        ...p,
                        status: fb.status || p.status,
                        recruitmentStatus: fb.recruitmentStatus || p.recruitmentStatus,
                        shortlistDetected: fb.shortlistDetected ?? p.shortlistDetected,
                        lastChecked: fb.lastChecked,
                        notes: fb.notes || p.notes,
                    };
                }
                return p;
            }));
        });
        return () => unsubscribe();
    }, [isLoggedIn]);

    // ── Portal handlers ──────────────────────────────────────────────────
    const handlePortalChange = (id: string, field: keyof PortalEdit, value: any) => {
        setPortals(prev => prev.map(p => p.id === id ? { ...p, [field]: value, dirty: true, saved: false } : p));
        setAllSaved(false);
    };

    const handlePortalSave = async (id: string) => {
        const portal = portals.find(p => p.id === id);
        if (!portal) return;
        setPortals(prev => prev.map(p => p.id === id ? { ...p, saving: true } : p));
        try {
            await updatePortalStatus(id, {
                name: portal.name, url: portal.url, status: portal.status,
                recruitmentStatus: portal.recruitmentStatus,
                shortlistDetected: portal.shortlistDetected, notes: portal.notes,
            });
            setPortals(prev => prev.map(p =>
                p.id === id ? { ...p, saving: false, saved: true, dirty: false, lastChecked: new Date().toISOString() } : p
            ));
            setTimeout(() => {
                setPortals(prev => prev.map(p => p.id === id ? { ...p, saved: false } : p));
            }, 3000);
        } catch (err) {
            console.error('[Admin] Save failed:', err);
            setPortals(prev => prev.map(p => p.id === id ? { ...p, saving: false } : p));
            alert(`Failed to save ${portal.name}. Check your Firebase connection.`);
        }
    };

    const handleSaveAll = async () => {
        setIsSavingAll(true);
        try {
            const payload: Record<string, any> = {};
            const now = new Date().toISOString();
            portals.forEach(p => {
                payload[p.id] = {
                    id: p.id, name: p.name, url: p.url, status: p.status,
                    recruitmentStatus: p.recruitmentStatus,
                    shortlistDetected: p.shortlistDetected,
                    notes: p.notes || '', lastChecked: now,
                };
            });
            await updateAllPortals(payload);
            setPortals(prev => prev.map(p => ({ ...p, dirty: false, saved: true, lastChecked: now })));
            setAllSaved(true);
            setTimeout(() => {
                setPortals(prev => prev.map(p => ({ ...p, saved: false })));
                setAllSaved(false);
            }, 3000);
        } catch (err) {
            console.error('[Admin] Save All failed:', err);
            alert('Failed to save all portals. Check your Firebase connection.');
        } finally {
            setIsSavingAll(false);
        }
    };

    // ── Recruitment handlers ─────────────────────────────────────────────
    const handleRecruitChange = (id: string, field: keyof RecruitmentEdit, value: any) => {
        setRecruitments(prev => prev.map(r => r.id === id ? { ...r, [field]: value, dirty: true, saved: false } : r));
    };

    const handleRecruitSave = async (rec: RecruitmentEdit) => {
        setRecruitments(prev => prev.map(r => r.id === rec.id ? { ...r, saving: true } : r));
        try {
            // Save to Firebase portal_monitor node (updates recruitmentStatus visible on dashboard)
            await updatePortalStatus(rec.id, {
                title: rec.title,
                deadline_date: rec.deadline,
                description: rec.description,
                status: 'online',
                recruitmentStatus: rec.status === 'Shortlist Out' ? 'Closed' : rec.status === 'Unknown' ? 'Unknown' : rec.status,
                shortlistDetected: rec.status === 'Shortlist Out',
            });
            setRecruitments(prev => prev.map(r =>
                r.id === rec.id ? { ...r, saving: false, saved: true, dirty: false } : r
            ));
            setTimeout(() => {
                setRecruitments(prev => prev.map(r => r.id === rec.id ? { ...r, saved: false } : r));
            }, 3000);
        } catch (err) {
            console.error('[Admin] Recruitment save failed:', err);
            setRecruitments(prev => prev.map(r => r.id === rec.id ? { ...r, saving: false } : r));
            alert(`Failed to save ${rec.title}. Check your Firebase connection.`);
        }
    };

    if (!authChecked) {
        // Still checking Firebase Auth session — show a brief spinner
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <RefreshCw className="w-8 h-8 text-green-400 animate-spin" />
            </div>
        );
    }

    if (!isLoggedIn) return <LoginScreen />;

    const dirtyPortals = portals.filter(p => p.dirty).length;
    const dirtyRecruits = recruitments.filter(r => r.dirty).length;
    const openCount = recruitments.filter(r => r.status === 'Open').length;
    const shortlistCount = recruitments.filter(r => r.status === 'Shortlist Out').length;

    const TABS: { id: TabId; label: string; icon: React.ReactNode; badge?: number }[] = [
        { id: 'portals', label: 'Portal Statuses', icon: <Globe className="w-4 h-4" />, badge: dirtyPortals || undefined },
        { id: 'recruitments', label: 'Recruitments', icon: <Briefcase className="w-4 h-4" />, badge: dirtyRecruits || undefined },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Bar */}
            <div className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-military-green" />
                    <div>
                        <h1 className="font-bold text-lg leading-tight">Admin Panel</h1>
                        <p className="text-gray-400 text-xs">Nigeria Recruitment Tracker</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border ${firebaseConnected
                        ? 'bg-green-900/50 border-green-700 text-green-400'
                        : 'bg-gray-800 border-gray-600 text-gray-400'}`}>
                        <span className={`w-2 h-2 rounded-full ${firebaseConnected ? 'bg-green-400 animate-pulse' : 'bg-gray-500'}`} />
                        {firebaseConnected ? 'Firebase Live' : 'Connecting...'}
                    </span>
                    {activeTab === 'portals' && (
                        <button
                            onClick={handleSaveAll} disabled={isSavingAll}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${allSaved
                                ? 'bg-green-600 text-white'
                                : 'bg-military-green hover:bg-green-600 text-white'
                                } disabled:opacity-60`}
                        >
                            {isSavingAll ? <><RefreshCw className="w-4 h-4 animate-spin" /> Saving...</>
                                : allSaved ? <><CheckCircle className="w-4 h-4" /> Done!</>
                                    : <><Save className="w-4 h-4" /> Save All{dirtyPortals > 0 && ` (${dirtyPortals})`}</>}
                        </button>
                    )}
                    <button onClick={() => adminSignOut()} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Stats Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {[
                        { label: 'Portals Online', value: portals.filter(p => p.status === 'online').length, color: 'text-green-600', bg: 'bg-green-50 border-green-100', icon: <Wifi className="w-4 h-4" /> },
                        { label: 'Portals Offline', value: portals.filter(p => p.status === 'offline').length, color: 'text-red-600', bg: 'bg-red-50 border-red-100', icon: <WifiOff className="w-4 h-4" /> },
                        { label: 'Open Recruitments', value: openCount, color: 'text-military-green', bg: 'bg-green-50 border-green-100', icon: <CheckCircle className="w-4 h-4" /> },
                        { label: 'Shortlists Out', value: shortlistCount, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-100', icon: <AlertCircle className="w-4 h-4" /> },
                    ].map(stat => (
                        <div key={stat.label} className={`${stat.bg} border rounded-xl p-4 flex items-center gap-3`}>
                            <span className={stat.color}>{stat.icon}</span>
                            <div>
                                <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
                                <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tab Bar */}
                <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 mb-6 w-fit shadow-sm">
                    {TABS.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${activeTab === tab.id
                                ? 'bg-military-green text-white shadow-sm'
                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
                        >
                            {tab.icon}
                            {tab.label}
                            {tab.badge ? (
                                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-700'}`}>
                                    {tab.badge}
                                </span>
                            ) : null}
                        </button>
                    ))}
                </div>

                {/* ── TAB: Portal Statuses ── */}
                {activeTab === 'portals' && (
                    <>
                        {dirtyPortals > 0 && (
                            <div className="mb-5 flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-lg text-sm font-medium">
                                <AlertCircle className="w-4 h-4 shrink-0" />
                                You have <strong>{dirtyPortals} unsaved change{dirtyPortals > 1 ? 's' : ''}</strong>. Click Save on each card or use "Save All" at the top.
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {portals.map(portal => (
                                <PortalCard key={portal.id} portal={portal} onChange={handlePortalChange} onSave={handlePortalSave} />
                            ))}
                        </div>
                    </>
                )}

                {/* ── TAB: Recruitments ── */}
                {activeTab === 'recruitments' && (
                    <>
                        <div className="mb-5 flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-lg text-sm">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            Saving a recruitment card pushes its status + deadline note to Firebase, keeping the dashboard in sync.
                        </div>
                        {dirtyRecruits > 0 && (
                            <div className="mb-4 flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-lg text-sm font-medium">
                                <AlertCircle className="w-4 h-4 shrink-0" />
                                <strong>{dirtyRecruits} unsaved recruitment{dirtyRecruits > 1 ? 's' : ''}</strong> — click Save on each card to publish.
                            </div>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                            {recruitments.map(rec => (
                                <RecruitmentCard key={rec.id} rec={rec} onChange={handleRecruitChange} onSave={handleRecruitSave} />
                            ))}
                        </div>
                    </>
                )}


                <p className="text-center text-xs text-gray-400 mt-10">
                    Changes are saved to Firebase and pushed to all live users instantly.
                </p>
            </div>
        </div>
    );
};

export default AdminPanel;
