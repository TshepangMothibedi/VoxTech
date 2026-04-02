# VoxTech Startup CRM Demo System
## Agent-Ready Technical Specification
**Version:** 1.0  
**Prepared For:** VoxTech  
**System:** Startup CRM Demo  
**Purpose:** Internal build specification for product design, engineering, demo delivery, and future SaaS evolution

---

## 1. Executive Summary

The VoxTech Startup CRM Demo System is a polished, premium, startup-focused customer relationship management platform designed to demonstrate VoxTech's ability to build scalable business software.

This system is not a toy demo. It is a production-minded showcase asset that must be architected in a way that allows:

- strong visual presentation during client demos
- believable real-world workflow simulation
- modular growth into a white-label product
- future conversion into a subscription SaaS offering

The first release must be focused, fast, visually premium, and easy to extend.

---

## 2. Product Vision

### 2.1 Vision Statement
Build a luxurious corporate CRM platform that helps startups manage leads, contacts, deals, tasks, and sales activity while showcasing VoxTech's engineering and product design capability.

### 2.2 Product Objective
The CRM demo must prove that VoxTech can help businesses:

- capture and manage leads
- organize customer and company data
- track deals across a sales pipeline
- improve follow-up discipline
- view useful performance insights
- operate with more structure and speed

### 2.3 Success Criteria
The first version is successful if it can:

- be deployed and demonstrated live
- show a complete lead-to-deal workflow
- feel premium and enterprise-grade
- load quickly and work smoothly
- support seeded demo data
- be used as a sales tool for client acquisition
- serve as the foundation for a future SaaS CRM

---

## 3. Product Scope

### 3.1 In Scope for MVP
The following modules are included in version 1:

1. Authentication and authorization
2. Dashboard
3. Leads management
4. Contacts management
5. Companies management
6. Deals and pipeline management
7. Tasks and follow-ups
8. Notes and activity timeline
9. Reports overview
10. Settings foundation
11. Seeded demo data

### 3.2 Out of Scope for MVP
The following items are intentionally excluded from version 1 unless implementation is ahead of schedule:

- email sync
- WhatsApp integration
- document storage
- advanced analytics
- workflow automation builder
- tenant billing
- audit exports
- calendar sync
- notification engine
- mobile app
- AI assistant inside CRM

These can be added in future versions.

---

## 4. Target Users

### 4.1 Primary Demo Audience
The system is designed to be shown to:

- startup founders
- sales-driven SMEs
- operational managers
- potential VoxTech clients
- investors viewing VoxTech capabilities

### 4.2 Operational Users Inside the Demo
The application must support the following user roles:

#### Admin
Full platform access.

Responsibilities:
- manage users
- configure pipeline stages
- view all records
- access full reports
- manage system settings

#### Sales User
Day-to-day operational user.

Responsibilities:
- create and update leads
- manage contacts and companies
- create and move deals
- add notes and tasks
- view personal dashboard and records

#### Manager
Team oversight role.

Responsibilities:
- view team performance
- monitor pipeline status
- reassign work
- review overdue follow-ups
- view overall business health

---

## 5. Core Workflow

### 5.1 Lead-to-Deal Workflow
This is the primary story the demo must support.

1. User logs into the platform
2. User views dashboard summary
3. User creates a new lead
4. Lead is assigned to a sales user
5. Lead is qualified
6. Lead is converted into:
   - company
   - contact
   - deal
7. Deal moves through pipeline stages
8. User adds notes and follow-up tasks
9. Dashboard and reports reflect updated activity
10. Deal is marked won or lost

### 5.2 Business Narrative
The system should communicate the following business message during demos:

Without structure, startups lose leads, miss follow-ups, and waste revenue opportunities. With VoxTech's CRM solution, they operate with discipline, visibility, and speed.

---

## 6. Functional Requirements

## 6.1 Authentication and Authorization

### Purpose
Provide secure access to the CRM and role-based visibility.

### MVP Features
- login
- logout
- current user session
- route protection
- role-based access control

### Functional Requirements
- user must be able to log in using email and password
- system must validate credentials securely
- authenticated sessions must return JWT or equivalent token session
- protected pages must not be accessible without authentication
- user role must determine access scope
- inactive users must be blocked from access

### Future Enhancements
- forgot password
- reset password
- MFA
- SSO

---

## 6.2 Dashboard

### Purpose
Provide an executive summary of performance and pending work.

### MVP Widgets
- total leads
- active deals
- won deals
- lost deals
- upcoming tasks
- overdue tasks
- total pipeline value
- conversion summary
- stage distribution

### Functional Requirements
- dashboard must render within acceptable performance limits
- dashboard data must reflect live system data
- stats must support role-based filtering
- manager and admin views may differ from sales user view
- cards must support drill-down navigation where relevant

---

## 6.3 Leads Module

### Purpose
Manage unqualified or early-stage prospects.

### Lead Fields
- id
- firstName
- lastName
- email
- phone
- companyName
- source
- status
- estimatedValue
- assignedUserId
- createdAt
- updatedAt

### Functional Requirements
- user must be able to create a lead
- user must be able to edit a lead
- user must be able to assign a lead
- user must be able to qualify a lead
- user must be able to archive a lead
- system must support filtering by source, status, assigned user, and date
- system must support searching by name, email, phone, or company
- user must be able to convert a lead into company, contact, and deal records

### Lead Statuses
Suggested default statuses:
- New
- Attempting Contact
- Contacted
- Qualified
- Unqualified
- Converted
- Archived

---

## 6.4 Contacts Module

### Purpose
Store people linked to companies and opportunities.

### Contact Fields
- id
- firstName
- lastName
- email
- phone
- position
- companyId
- ownerUserId
- createdAt
- updatedAt

### Functional Requirements
- user must be able to create and edit contacts
- contact must be linkable to a company
- contact must support notes and tasks
- contact must display related deals
- contact detail page must show activity timeline
- system must support contact search and filtering

---

## 6.5 Companies Module

### Purpose
Store business account records.

### Company Fields
- id
- name
- industry
- website
- email
- phone
- size
- addressLine1
- addressLine2
- city
- province
- country
- ownerUserId
- createdAt
- updatedAt

### Functional Requirements
- user must be able to create and update companies
- company detail page must show contacts
- company detail page must show deals
- company detail page must show notes and activity
- system must support filtering by industry, owner, and company size
- system must support search by name, email, phone, or website

---

## 6.6 Deals and Pipeline Module

### Purpose
Track revenue opportunities from creation to close.

### Deal Fields
- id
- title
- companyId
- contactId
- assignedUserId
- stageId
- value
- probability
- expectedCloseDate
- status
- source
- createdAt
- updatedAt

### Functional Requirements
- user must be able to create and edit deals
- deal must be linked to a company
- deal may optionally be linked to a primary contact
- user must be able to move deals between stages
- system must record stage movement activity
- user must be able to mark deal as won
- user must be able to mark deal as lost
- deal detail page must show notes, tasks, and activity timeline
- pipeline board must support drag-and-drop or guided stage movement
- system must display stage totals and pipeline value

### Default Pipeline Stages
- New
- Contacted
- Qualified
- Proposal
- Negotiation
- Won
- Lost

### Closed Stage Logic
- Won and Lost must be treated as closed stages
- closed deals must not appear in active pipeline counts unless explicitly included

---

## 6.7 Tasks and Follow-Ups

### Purpose
Create accountability and follow-up structure.

### Task Fields
- id
- title
- description
- dueDate
- priority
- status
- relatedEntityType
- relatedEntityId
- assignedUserId
- createdByUserId
- createdAt
- updatedAt

### Functional Requirements
- user must be able to create tasks linked to leads, contacts, companies, or deals
- user must be able to edit and complete tasks
- system must identify overdue tasks
- task list must support filters by due date, priority, status, assignee, and related entity
- task detail or drawer view must support quick updates
- dashboard must surface upcoming and overdue tasks

### Suggested Priorities
- Low
- Medium
- High
- Critical

### Suggested Statuses
- Open
- In Progress
- Completed
- Cancelled
- Overdue

---

## 6.8 Notes and Activities

### Purpose
Provide context, history, and audit visibility for records.

### Note Fields
- id
- entityType
- entityId
- content
- createdByUserId
- createdAt

### Activity Fields
- id
- entityType
- entityId
- activityType
- description
- createdByUserId
- createdAt

### Functional Requirements
- user must be able to add notes to leads, contacts, companies, and deals
- system must generate activity events for major changes
- timeline must sort chronologically
- notes must show author and timestamp
- activity feed must support human-readable messages

### System-Generated Activity Examples
- lead created
- lead assigned
- lead qualified
- lead converted
- deal created
- deal moved to Proposal
- task created
- task completed
- note added
- deal marked Won

---

## 6.9 Reports

### Purpose
Provide sales visibility and operational insight.

### MVP Reports
- dashboard summary
- leads by source
- deals by stage
- win/loss summary
- sales value by month
- upcoming and overdue tasks summary

### Functional Requirements
- report data must be queryable from API endpoints
- charts must be readable and performant
- reports must support role-based scope
- dashboard summary endpoint must aggregate key performance data efficiently

---

## 6.10 Settings Foundation

### Purpose
Provide system configurability without overbuilding.

### MVP Settings Scope
- pipeline stage list
- basic user administration
- profile basics
- role display

### Functional Requirements
- admin must be able to view and manage users
- admin must be able to configure stage labels and sort order
- system must enforce stage integrity for active records

---

## 7. Non-Functional Requirements

### 7.1 Performance
- main dashboard should load quickly under demo conditions
- list pages must support pagination or efficient data loading
- seeded datasets must not make the app feel slow
- API response times should remain suitable for live demos

### 7.2 Scalability
- codebase must be modular and extension-friendly
- application must support growth into a real product
- entity design must accommodate future multi-tenant architecture

### 7.3 Security
- passwords must never be stored in plain text
- authenticated routes must be protected
- role-based access must be enforced server-side
- input validation must exist on both client and server
- audit-friendly activity logging must be preserved

### 7.4 Maintainability
- code must be separated by feature or layer
- naming must be clear and consistent
- business logic must not be buried in UI components
- infrastructure concerns must remain isolated from domain logic

### 7.5 Demo Readiness
- no empty state should make the app feel broken
- seeded data must look realistic
- copy, labels, and record names must feel business-ready
- the interface must be visually premium and coherent

---

## 8. UX and UI Requirements

### 8.1 Brand Direction
The CRM must reflect VoxTech's luxurious corporate identity.

### 8.2 Visual Principles
- premium dark or dark-neutral theme
- disciplined spacing
- refined typography
- clean iconography
- minimal clutter
- strong data hierarchy
- elegant interaction states

### 8.3 UX Priorities
- fast navigation
- intuitive record relationships
- low-friction data entry
- strong detail pages
- obvious primary actions
- attractive and believable charts
- demo-friendly interactions

### 8.4 Required Interface Components
- app sidebar
- top navigation
- KPI cards
- searchable tables
- filter bars
- modal forms
- detail panels
- activity timeline
- notes composer
- task drawer
- kanban pipeline board
- chart blocks
- toast notifications
- confirmation modals

### 8.5 Empty and Loading States
- loading states must be polished
- empty states should guide the user
- demo seed mode should minimize empty screens

---

## 9. Technical Architecture

## 9.1 Recommended Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- React Router
- TanStack Query
- Zustand or Context API
- charting library such as Recharts

### Backend
- ASP.NET Core Web API
- Entity Framework Core or Dapper
- JWT authentication
- FluentValidation or equivalent request validation

### Database
- PostgreSQL preferred
- MySQL acceptable if required by environment

### Deployment
- frontend on Vercel
- API on Azure App Service, Render, or similar
- PostgreSQL on Neon, Azure Database for PostgreSQL, or similar

---

## 9.2 Architecture Style

### Frontend
Feature-based modular architecture.

Suggested structure:
```txt
src/
  app/
  assets/
  components/
  config/
  features/
    auth/
    dashboard/
    leads/
    companies/
    contacts/
    deals/
    tasks/
    reports/
    settings/
  hooks/
  layouts/
  pages/
  services/
  types/
  utils/
```

### Backend
Layered clean architecture.

Suggested structure:
```txt
src/
  VoxTech.CRM.API/
  VoxTech.CRM.Application/
  VoxTech.CRM.Domain/
  VoxTech.CRM.Infrastructure/
```

#### Layer Intent
- API: controllers, middleware, configuration
- Application: services, commands, queries, DTOs, validators
- Domain: entities, enums, business rules
- Infrastructure: persistence, repositories, auth, external services

---

## 10. Data Model

## 10.1 Core Entities

### Users
- Id
- FirstName
- LastName
- Email
- PasswordHash
- Role
- IsActive
- CreatedAt
- UpdatedAt

### Leads
- Id
- FirstName
- LastName
- Email
- Phone
- CompanyName
- Source
- Status
- EstimatedValue
- AssignedUserId
- CreatedAt
- UpdatedAt

### Companies
- Id
- Name
- Industry
- Website
- Email
- Phone
- Size
- AddressLine1
- AddressLine2
- City
- Province
- Country
- OwnerUserId
- CreatedAt
- UpdatedAt

### Contacts
- Id
- FirstName
- LastName
- Email
- Phone
- Position
- CompanyId
- OwnerUserId
- CreatedAt
- UpdatedAt

### PipelineStages
- Id
- Name
- SortOrder
- IsClosed
- IsWon
- CreatedAt

### Deals
- Id
- Title
- CompanyId
- ContactId
- AssignedUserId
- StageId
- Value
- Probability
- ExpectedCloseDate
- Status
- Source
- CreatedAt
- UpdatedAt

### Tasks
- Id
- Title
- Description
- DueDate
- Priority
- Status
- RelatedEntityType
- RelatedEntityId
- AssignedUserId
- CreatedByUserId
- CreatedAt
- UpdatedAt

### Notes
- Id
- EntityType
- EntityId
- Content
- CreatedByUserId
- CreatedAt

### Activities
- Id
- EntityType
- EntityId
- ActivityType
- Description
- CreatedByUserId
- CreatedAt

---

## 10.2 Entity Relationships

- one user can own many leads
- one user can own many companies
- one user can own many contacts
- one user can be assigned many deals
- one company can have many contacts
- one company can have many deals
- one contact belongs to one company
- one deal belongs to one company
- one deal may reference one primary contact
- one pipeline stage can hold many deals
- tasks can point to any supported entity through relatedEntityType and relatedEntityId
- notes can point to any supported entity through entityType and entityId
- activities can point to any supported entity through entityType and entityId

---

## 10.3 Recommended Enums

### UserRole
- Admin
- Manager
- SalesUser

### LeadStatus
- New
- AttemptingContact
- Contacted
- Qualified
- Unqualified
- Converted
- Archived

### DealStatus
- Open
- Won
- Lost

### TaskPriority
- Low
- Medium
- High
- Critical

### TaskStatus
- Open
- InProgress
- Completed
- Cancelled
- Overdue

### EntityType
- Lead
- Contact
- Company
- Deal

---

## 11. API Specification

## 11.1 General Conventions
- all endpoints should be prefixed with `/api`
- authenticated routes require valid token
- API should return consistent response shapes
- validation errors should be clean and readable
- list endpoints should support filtering, search, sort, and pagination where applicable

---

## 11.2 Authentication Endpoints

### POST `/api/auth/login`
Authenticate a user and return session token and profile.

### POST `/api/auth/logout`
Terminate session where applicable.

### GET `/api/auth/me`
Return current authenticated user profile.

---

## 11.3 User Endpoints

### GET `/api/users`
List users.

### GET `/api/users/{id}`
Get user details.

### POST `/api/users`
Create user.

### PUT `/api/users/{id}`
Update user.

---

## 11.4 Lead Endpoints

### GET `/api/leads`
List leads with filters.

### GET `/api/leads/{id}`
Get lead detail.

### POST `/api/leads`
Create lead.

### PUT `/api/leads/{id}`
Update lead.

### POST `/api/leads/{id}/assign`
Assign lead to user.

### POST `/api/leads/{id}/qualify`
Mark lead qualified.

### POST `/api/leads/{id}/convert`
Convert lead into company, contact, and deal.

---

## 11.5 Company Endpoints

### GET `/api/companies`
List companies.

### GET `/api/companies/{id}`
Get company detail.

### POST `/api/companies`
Create company.

### PUT `/api/companies/{id}`
Update company.

---

## 11.6 Contact Endpoints

### GET `/api/contacts`
List contacts.

### GET `/api/contacts/{id}`
Get contact detail.

### POST `/api/contacts`
Create contact.

### PUT `/api/contacts/{id}`
Update contact.

---

## 11.7 Deal Endpoints

### GET `/api/deals`
List deals.

### GET `/api/deals/{id}`
Get deal detail.

### POST `/api/deals`
Create deal.

### PUT `/api/deals/{id}`
Update deal.

### POST `/api/deals/{id}/move-stage`
Move deal to pipeline stage.

### POST `/api/deals/{id}/mark-won`
Close as won.

### POST `/api/deals/{id}/mark-lost`
Close as lost.

---

## 11.8 Pipeline Stage Endpoints

### GET `/api/pipeline-stages`
List stages.

### POST `/api/pipeline-stages`
Create stage.

### PUT `/api/pipeline-stages/{id}`
Update stage.

---

## 11.9 Task Endpoints

### GET `/api/tasks`
List tasks.

### GET `/api/tasks/{id}`
Get task detail.

### POST `/api/tasks`
Create task.

### PUT `/api/tasks/{id}`
Update task.

### POST `/api/tasks/{id}/complete`
Complete task.

---

## 11.10 Notes Endpoints

### GET `/api/notes`
List notes by entity.

### POST `/api/notes`
Create note.

---

## 11.11 Activities Endpoints

### GET `/api/activities`
List activities by entity.

---

## 11.12 Reports Endpoints

### GET `/api/reports/dashboard`
Dashboard aggregate data.

### GET `/api/reports/leads-by-source`
Lead source breakdown.

### GET `/api/reports/deals-by-stage`
Stage distribution and values.

### GET `/api/reports/win-loss`
Won versus lost summary.

### GET `/api/reports/sales-by-month`
Sales value by month.

---

## 12. Frontend Page Specification

## 12.1 Public Pages
- Home
- About
- Contact
- Book a Demo

## 12.2 Auth Pages
- Login

## 12.3 App Pages
- Dashboard
- Leads List
- Lead Detail
- Companies List
- Company Detail
- Contacts List
- Contact Detail
- Deals Pipeline
- Deal Detail
- Tasks
- Reports
- Settings
- Users Management for admin if implemented

---

## 12.4 Page Behavior Requirements

### Dashboard
- show summary cards
- show task urgency
- show charts
- allow quick navigation into records

### Leads List
- search
- filters
- pagination or virtualized listing
- actions menu
- create lead modal or page

### Lead Detail
- summary header
- notes
- activity timeline
- tasks
- conversion action

### Companies and Contacts
- detail pages must make relationships obvious
- show linked records
- show activity

### Deals Pipeline
- kanban layout by stage
- display deal value and key metadata
- support movement between stages
- stage totals visible

### Tasks
- clear priority and due date visibility
- filters for overdue and upcoming
- quick completion flow

### Reports
- readable charts
- summary insights
- responsive layout

---

## 13. Demo Data Specification

The system must include realistic seed data to support polished demos.

### Minimum Seed Targets
- 10 users
- 40 leads
- 20 companies
- 35 contacts
- 25 deals
- 30 tasks
- 50 notes
- system-generated activities for major records

### Seed Data Requirements
- names must look realistic
- industries must vary
- deal values must vary
- stages must be populated across the pipeline
- tasks must include overdue, open, and upcoming examples
- notes must sound business-realistic
- dates must create a believable operating timeline

### Demo Personas
Suggested seeded user accounts:
- Admin User
- Sales User 1
- Sales User 2
- Manager User

---

## 14. Build Order

## Phase 1
- project setup
- authentication
- app layout
- dashboard summary
- leads CRUD
- companies CRUD
- contacts CRUD

## Phase 2
- deals pipeline
- task management
- notes
- activities
- lead conversion workflow

## Phase 3
- reports
- settings basics
- seeded data
- UI polish
- deployment

---

## 15. Acceptance Criteria

### System Acceptance
The MVP is accepted when:

- authenticated users can log in successfully
- dashboard displays valid summary data
- users can create and manage leads
- users can manage companies and contacts
- lead conversion creates related records correctly
- deals can move through pipeline stages
- users can create and complete tasks
- notes and activity timelines render correctly
- reports show believable and accurate seeded data
- premium visual quality is achieved
- live deployment is ready for demonstrations

### Demo Acceptance
The demo is accepted when a presenter can:

1. log in
2. show dashboard
3. open a lead
4. convert lead into a company, contact, and deal
5. move deal through the pipeline
6. add task and note
7. show report views
8. leave the viewer convinced that the system is real and valuable

---

## 16. Risks and Controls

### Risk 1: Overbuilding V1
**Control:** Keep feature scope disciplined and focus on the primary workflow.

### Risk 2: Empty or lifeless demo
**Control:** Seed realistic and rich demo data.

### Risk 3: Weak UI quality
**Control:** Prioritize premium design, spacing, and visual polish early.

### Risk 4: Slow performance
**Control:** Keep queries efficient and avoid overloading dashboard components.

### Risk 5: Unclear record relationships
**Control:** Make detail pages relationally rich and easy to scan.

---

## 17. Future Roadmap

After MVP, the product may evolve into:

### Version 2
- multi-tenant architecture
- email integration
- reminders and notifications
- advanced analytics
- custom fields
- file attachments

### Version 3
- workflow automation
- AI lead scoring
- AI sales assistant
- white-label configuration
- billing and subscription management

### Strategic Product Path
This demo should be built like a product asset that can become:
- a startup CRM SaaS
- an industry-specific CRM variant
- a white-label platform for SMEs
- a sales operating system under the VoxTech brand

---

## 18. Delivery Standard

The engineering team must treat this build as a sellable company asset.

That means:
- clean code
- premium UX
- modular architecture
- production-minded patterns
- documentation suitable for handover, scale, and future monetization

---

## 19. Final Execution Directive

The first version must optimize for five things:

1. visual strength  
2. believable business workflow  
3. demo speed  
4. clean architecture  
5. future product leverage  

Anything that does not improve those five priorities should be deprioritized for MVP.
