export const seed = {
  users: [
    { id: "u1", name: "Alicia Mokoena", email: "admin@voxtech.co", role: "Admin", initials: "AM" },
    { id: "u2", name: "Tebogo Ndlovu", email: "manager@voxtech.co", role: "Manager", initials: "TN" },
    { id: "u3", name: "Lerato Jacobs", email: "sales1@voxtech.co", role: "Sales User", initials: "LJ" },
    { id: "u4", name: "Mika Singh", email: "sales2@voxtech.co", role: "Sales User", initials: "MS" }
  ],
  leads: [
    { id: "L-104", name: "Ava Chen", company: "BrightForge", source: "Inbound", status: "Qualified", value: 84000, owner: "Lerato Jacobs", email: "ava@brightforge.io" },
    { id: "L-103", name: "Daniel Khumalo", company: "GreenLedger", source: "Referral", status: "Contacted", value: 42000, owner: "Mika Singh", email: "daniel@greenledger.africa" },
    { id: "L-102", name: "Noah Patel", company: "Atlas Harbor", source: "Event", status: "Attempting Contact", value: 125000, owner: "Lerato Jacobs", email: "noah@atlasharbor.com" },
    { id: "L-101", name: "Maya Brooks", company: "Nimbus Retail", source: "Outbound", status: "New", value: 26000, owner: "Mika Singh", email: "maya@nimbusretail.com" }
  ],
  companies: [
    { id: "C-201", name: "BrightForge", industry: "Fintech", website: "brightforge.io", owner: "Lerato Jacobs" },
    { id: "C-202", name: "GreenLedger", industry: "Climate SaaS", website: "greenledger.africa", owner: "Mika Singh" },
    { id: "C-203", name: "Atlas Harbor", industry: "Logistics", website: "atlasharbor.com", owner: "Lerato Jacobs" }
  ],
  contacts: [
    { id: "CT-301", name: "Ava Chen", title: "COO", company: "BrightForge", owner: "Lerato Jacobs" },
    { id: "CT-302", name: "Daniel Khumalo", title: "Founder", company: "GreenLedger", owner: "Mika Singh" },
    { id: "CT-303", name: "Noah Patel", title: "VP Revenue", company: "Atlas Harbor", owner: "Lerato Jacobs" }
  ],
  deals: [
    { id: "D-401", title: "BrightForge CRM Rollout", stage: "Proposal", company: "BrightForge", owner: "Lerato Jacobs", value: 84000, closeDate: "2026-04-18", probability: 65, status: "Open" },
    { id: "D-402", title: "GreenLedger RevOps Build", stage: "Negotiation", company: "GreenLedger", owner: "Mika Singh", value: 146000, closeDate: "2026-04-25", probability: 80, status: "Open" },
    { id: "D-403", title: "Atlas Harbor Sales Hub", stage: "Qualified", company: "Atlas Harbor", owner: "Lerato Jacobs", value: 125000, closeDate: "2026-05-03", probability: 50, status: "Open" },
    { id: "D-404", title: "Nimbus Retail Pilot", stage: "Won", company: "Nimbus Retail", owner: "Mika Singh", value: 26000, closeDate: "2026-03-26", probability: 100, status: "Won" }
  ],
  tasks: [
    { id: "T-501", title: "Prepare BrightForge proposal walkthrough", dueDate: "2026-04-03", priority: "High", status: "In Progress", owner: "Lerato Jacobs", entity: "Deal D-401" },
    { id: "T-502", title: "Call GreenLedger legal contact", dueDate: "2026-04-02", priority: "Critical", status: "Open", owner: "Mika Singh", entity: "Deal D-402" },
    { id: "T-503", title: "Qualify Atlas Harbor budget", dueDate: "2026-03-30", priority: "High", status: "Overdue", owner: "Lerato Jacobs", entity: "Lead L-102" },
    { id: "T-504", title: "Send Nimbus onboarding checklist", dueDate: "2026-04-04", priority: "Medium", status: "Completed", owner: "Mika Singh", entity: "Deal D-404" }
  ],
  notes: [
    { id: "N-601", entity: "BrightForge", author: "Lerato Jacobs", createdAt: "2026-03-31 10:30", content: "Client wants launch timing aligned with a fundraise close and expects a board-facing dashboard." },
    { id: "N-602", entity: "GreenLedger", author: "Mika Singh", createdAt: "2026-03-31 14:15", content: "Procurement is light, but security questions will land before signature." },
    { id: "N-603", entity: "Atlas Harbor", author: "Lerato Jacobs", createdAt: "2026-04-01 08:50", content: "Buying committee expanded to include operations. Scope likely grows if pilot performs." }
  ],
  activities: [
    { id: "A-701", entity: "Deal D-402", when: "2026-04-01 09:10", type: "Stage Change", description: "Deal moved from Proposal to Negotiation by Mika Singh." },
    { id: "A-702", entity: "Lead L-104", when: "2026-04-01 08:25", type: "Qualification", description: "Lead qualified and linked to BrightForge opportunity." },
    { id: "A-703", entity: "Task T-503", when: "2026-03-31 17:40", type: "Follow-up", description: "Overdue flag triggered for budget qualification task." },
    { id: "A-704", entity: "Deal D-404", when: "2026-03-26 12:05", type: "Closed Won", description: "Nimbus Retail pilot marked Won with signed kickoff terms." }
  ]
};

export const dashboard = {
  totalLeads: 40,
  activeDeals: 18,
  wonDeals: 7,
  lostDeals: 3,
  overdueTasks: 5,
  upcomingTasks: 12,
  pipelineValue: 968000,
  conversionRate: 34,
  avgCycle: 19
};

export const pipelineStages = [
  { name: "New", count: 4, value: 98000 },
  { name: "Contacted", count: 5, value: 126000 },
  { name: "Qualified", count: 6, value: 212000 },
  { name: "Proposal", count: 2, value: 84000 },
  { name: "Negotiation", count: 3, value: 302000 },
  { name: "Won", count: 7, value: 146000 }
];

export const reports = [
  { label: "Inbound", value: 38, accent: "warm" },
  { label: "Referral", value: 24, accent: "mint" },
  { label: "Outbound", value: 18, accent: "steel" },
  { label: "Events", value: 12, accent: "gold" }
];
