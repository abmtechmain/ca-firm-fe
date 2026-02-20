"use client";

import ServiceCard from './ServiceCard';
import { Compass, CurrencyInr, Calculator, Buildings } from 'phosphor-react';

export default function KeyServicesCards() {
  return (
    <div className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      <ServiceCard
        icon={<Compass size={28} weight="bold" />}
        title="ADVISORY"
        description="Business Consulting, Financial Restructuring, Strategic Planning, And Risk Advisory To Help Organizations Make Informed Decisions."
      />

      <ServiceCard
        icon={<CurrencyInr size={28} weight="bold" />}
        title="TAXATION"
        description="Corporate Tax Planning, Personal Tax Services, Indirect Tax (GST/VAT) Advisory, And Comprehensive Tax Compliance Solutions."
      />

      <ServiceCard
        icon={<Calculator size={28} weight="bold" />}
        title="ACCOUNTING & BOOKKEEPING"
        description="Financial Statement Preparation, Payroll Services, Management Accounting, And Virtual CFO Services For Comprehensive Financial Management."
      />

      <ServiceCard
        icon={<Buildings size={28} weight="bold" />}
        title="CORPORATE SERVICES"
        description="Company Formation, Secretarial Services, Corporate Governance, And Regulatory Compliance Support For Companies And LLPs."
      />
    </div>
  );
}
