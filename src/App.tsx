import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { 
  LayoutDashboard, 
  CreditCard, 
  User, 
  Settings, 
  ShieldCheck, 
  Bell, 
  Search, 
  Settings2, 
  Smartphone, 
  Apple, 
  Store, 
  Lock
} from 'lucide-react';

// --- Interfaces (Definisi Tipe Data) ---

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  active?: boolean;
}

interface CreditCardUIProps {
  color: string;
  name: string;
  expiry: string;
  number: string;
}

interface SectionTitleProps {
  title: string;
}

interface CardSettingItem {
  icon: LucideIcon;
  bg: string;
  title: string;
  desc: string;
}

// --- Komponen Pendukung dengan Type Safety ---

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center gap-4 px-8 py-4 cursor-pointer transition-all ${
    active ? 'text-blue-600 border-l-4 border-blue-600 bg-blue-50/30' : 'text-gray-400 hover:text-blue-500'
  }`}>
    <Icon size={24} />
    <span className="font-medium">{label}</span>
  </div>
);

const CreditCardUI: React.FC<CreditCardUIProps> = ({ color, name, expiry, number }) => (
  <div className={`min-w-[320px] p-6 rounded-[25px] text-white flex flex-col justify-between h-52 shadow-lg ${color}`}>
    <div className="flex justify-between items-start">
      <div>
        <p className="text-xs opacity-70 font-light">Balance</p>
        <p className="text-xl font-semibold">$5,756</p>
      </div>
      <div className="w-10 h-10 bg-white/20 rounded-full backdrop-blur-md" />
    </div>
    <div className="flex gap-10">
      <div>
        <p className="text-[10px] opacity-70 uppercase tracking-wider">Card Holder</p>
        <p className="text-sm font-medium">{name}</p>
      </div>
      <div>
        <p className="text-[10px] opacity-70 uppercase tracking-wider">Valid Thru</p>
        <p className="text-sm font-medium">{expiry}</p>
      </div>
    </div>
    <div className="flex justify-between items-center bg-gradient-to-b from-white/10 to-transparent -mx-6 px-6 py-4 rounded-b-[25px]">
      <p className="text-lg tracking-[4px]">{number}</p>
      <div className="flex -space-x-3">
        <div className="w-6 h-6 rounded-full bg-white/40" />
        <div className="w-6 h-6 rounded-full bg-white/20" />
      </div>
    </div>
  </div>
);

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <h2 className="text-xl font-semibold text-slate-800 mb-4">{title}</h2>
);

// --- Komponen Utama ---

export default function BankDash() {
  const cardSettings: CardSettingItem[] = [
    { icon: Lock, bg: 'bg-yellow-50 text-yellow-500', title: 'Block Card', desc: 'Instantly block your card' },
    { icon: Smartphone, bg: 'bg-blue-50 text-blue-500', title: 'Change Pin Code', desc: 'Choose another pin code' },
    { icon: Store, bg: 'bg-pink-50 text-pink-500', title: 'Add to Google Pay', desc: 'Withdraw without any card' },
    { icon: Apple, bg: 'bg-cyan-50 text-cyan-500', title: 'Add to Apple Pay', desc: 'Withdraw without any card' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:block sticky top-0 h-screen">
        <div className="p-8 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <span className="font-black">B</span>
          </div>
          <h1 className="text-2xl font-bold text-blue-900 tracking-tight">BankDash.</h1>
        </div>
        <nav className="mt-4">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" />
          <SidebarItem icon={User} label="Accounts" />
          <SidebarItem icon={CreditCard} label="Credit Cards" active />
          <SidebarItem icon={ShieldCheck} label="Loans" />
          <SidebarItem icon={Settings2} label="Services" />
          <SidebarItem icon={Settings} label="Setting" />
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white px-8 py-5 border-b border-slate-200 flex items-center justify-between sticky top-0 z-10">
          <h2 className="text-2xl font-semibold text-blue-900">Credit Cards</h2>
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search for something" 
                className="bg-slate-100 pl-10 pr-4 py-2.5 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
            <button className="p-2.5 bg-slate-50 rounded-full text-slate-500 hover:bg-slate-100"><Settings size={20} /></button>
            <button className="p-2.5 bg-slate-50 rounded-full text-red-400 hover:bg-slate-100"><Bell size={20} /></button>
            <img src="https://i.pravatar.cc/150?u=eddy" alt="Profile" className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" />
          </div>
        </header>

        {/* Dashboard Grid */}
        <main className="p-8 space-y-10 overflow-y-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionTitle title="My Cards" />
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                <CreditCardUI 
                  color="bg-gradient-to-r from-[#2D60FF] to-[#539BFF]" 
                  name="Eddy Cusuma" expiry="12/22" number="3778 **** **** 1234" 
                />
                <CreditCardUI 
                  color="bg-gradient-to-r from-[#4C49ED] to-[#0A06F4]" 
                  name="Eddy Cusuma" expiry="12/22" number="3778 **** **** 1234" 
                />
                {/* White Card Variant */}
                <div className="min-w-[320px] p-6 rounded-[25px] border border-slate-200 bg-white flex flex-col justify-between h-52 shadow-sm">
                   <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Balance</p>
                      <p className="text-xl font-bold text-slate-800">$5,756</p>
                    </div>
                    <div className="w-10 h-10 bg-slate-100 rounded-full" />
                  </div>
                  <div className="flex gap-10">
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Card Holder</p>
                      <p className="text-sm font-semibold text-slate-700">Eddy Cusuma</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-bold">Valid Thru</p>
                      <p className="text-sm font-semibold text-slate-700">12/22</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-100 -mx-6 px-6 py-4">
                    <p className="text-lg tracking-[4px] text-slate-700 font-medium">3778 **** **** 1234</p>
                    <div className="flex -space-x-3 opacity-30">
                      <div className="w-6 h-6 rounded-full bg-slate-800" />
                      <div className="w-6 h-6 rounded-full bg-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionTitle title="Card Expense Statistics" />
              <div className="bg-white p-6 rounded-[25px] h-52 flex items-center justify-center border border-slate-100 shadow-sm">
                <div className="relative w-36 h-36 rounded-full border-[22px] border-blue-500 border-t-pink-500 border-l-yellow-400 border-r-cyan-400 rotate-45" />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SectionTitle title="Add New Card" />
              <div className="bg-white p-8 rounded-[25px] border border-slate-100 shadow-sm">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Card Type</label>
                    <input type="text" placeholder="Classic" className="w-full p-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Name On Card</label>
                    <input type="text" placeholder="My Cards" className="w-full p-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Card Number</label>
                    <input type="text" placeholder="**** **** **** ****" className="w-full p-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Expiration Date</label>
                    <input type="text" placeholder="25 January 2025" className="w-full p-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-300" />
                  </div>
                  <div className="md:col-span-2 mt-2">
                    <button type="button" className="bg-[#1814F3] text-white py-3.5 px-12 rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-200">
                      Add Card
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <SectionTitle title="Card Setting" />
              <div className="bg-white p-7 rounded-[25px] border border-slate-100 shadow-sm space-y-6">
                {cardSettings.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-5 cursor-pointer group">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${item.bg}`}>
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">{item.title}</p>
                      <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}