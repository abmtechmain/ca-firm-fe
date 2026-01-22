export default function Marquee() {
  return (
    <div className="bg-[#056385] text-white overflow-hidden" style={{ height: '51px' }}>
      <div className="flex animate-marquee whitespace-nowrap items-center h-full gap-96" style={{ fontSize: '16px', fontFamily: 'var(--font-instrument-sans), sans-serif' }}>
        <span className="px-4 uppercase">
          TDS/TCS Deposit: 📢 Reminder: The due date for depositing TDS/TCS for December 2025 is January 7, 2026.
        </span>
        <span className="px-4 uppercase">
          TDS/TCS Deposit: 📢 Reminder: The due date for depositing TDS/TCS for December 2025 is January 7, 2026.
        </span>
      </div>
    </div>
  );
}
