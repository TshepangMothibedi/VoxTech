# VoxTech CRM Implementation Plan

This checklist is derived from [VoxTech_Full_Website_Spec.md](./VoxTech_Full_Website_Spec.md) and is intended to be updated in source control as work progresses.

## Usage

- Mark completed items by changing `- [ ]` to `- [x]`.
- Add links to PRs, commits, screenshots, or notes inline where useful.
- Keep scope aligned with MVP unless a future item is explicitly pulled forward.

## MVP Success Criteria

- [ ] App can be deployed and demonstrated live
- [ ] Complete lead-to-deal workflow works end to end
- [ ] UX feels premium and enterprise-grade
- [ ] App loads quickly and behaves smoothly
- [ ] Seeded demo data is present and believable
- [ ] Product is usable as a sales demo for client acquisition
- [ ] Architecture supports future SaaS evolution

## Phase 1 Foundations

### Project Setup

- [x] Confirm repository structure and baseline tooling
- [x] Set up frontend application shell
- [ ] Set up backend API shell
- [ ] Set up database configuration and local development environment
- [ ] Establish environment variable strategy
- [ ] Define shared coding conventions and folder structure
- [ ] Add linting, formatting, and basic quality checks

### Authentication and Authorization

- [x] Implement login flow
- [x] Implement logout flow
- [ ] Implement current user session endpoint and UI handling
- [ ] Protect authenticated routes
- [ ] Enforce role-based access control
- [ ] Block inactive users from access
- [ ] Validate credentials securely

### App Layout and Navigation

- [x] Build sidebar navigation
- [x] Build top navigation
- [x] Define shared page layout patterns
- [ ] Add toast and confirmation modal infrastructure
- [ ] Add loading and empty state patterns

### Dashboard

- [x] Build dashboard page
- [x] Show total leads
- [x] Show active deals
- [x] Show won deals
- [x] Show lost deals
- [x] Show upcoming tasks
- [x] Show overdue tasks
- [x] Show total pipeline value
- [x] Show conversion summary
- [x] Show stage distribution
- [ ] Support role-based dashboard filtering
- [ ] Add drill-down navigation from relevant cards

### Leads

- [x] Implement lead data model
- [x] Build leads list page
- [ ] Build lead detail page
- [ ] Implement create lead flow
- [ ] Implement edit lead flow
- [ ] Implement lead assignment
- [ ] Implement lead qualification
- [ ] Implement lead archive flow
- [ ] Implement lead filtering
- [ ] Implement lead search
- [ ] Add default lead statuses

### Companies

- [x] Implement company data model
- [x] Build companies list page
- [ ] Build company detail page
- [ ] Implement create company flow
- [ ] Implement edit company flow
- [ ] Implement company filtering
- [ ] Implement company search
- [ ] Show related contacts on company detail
- [ ] Show related deals on company detail
- [ ] Show notes and activity on company detail

### Contacts

- [x] Implement contact data model
- [x] Build contacts list page
- [ ] Build contact detail page
- [ ] Implement create contact flow
- [ ] Implement edit contact flow
- [ ] Link contacts to companies
- [ ] Show related deals on contact detail
- [ ] Show notes and tasks on contact detail
- [ ] Show activity timeline on contact detail
- [ ] Implement contact search and filtering

## Phase 2 Core CRM Workflow

### Deals and Pipeline

- [x] Implement deal data model
- [x] Implement pipeline stage data model
- [x] Build deals pipeline page
- [ ] Build deal detail page
- [ ] Implement create deal flow
- [ ] Implement edit deal flow
- [ ] Link deals to companies
- [ ] Support optional primary contact link
- [ ] Implement stage movement
- [ ] Record stage movement activity
- [ ] Implement mark won flow
- [ ] Implement mark lost flow
- [x] Ensure won and lost stages are treated as closed
- [ ] Exclude closed deals from active counts unless explicitly included
- [x] Show stage totals and pipeline value
- [ ] Support drag-and-drop or guided stage movement

### Tasks and Follow-Ups

- [x] Implement task data model
- [x] Build tasks page
- [ ] Implement create task flow
- [ ] Implement edit task flow
- [ ] Implement complete task flow
- [ ] Link tasks to leads, contacts, companies, and deals
- [x] Detect and surface overdue tasks
- [ ] Add task filters for due date, priority, status, assignee, and related entity
- [ ] Add quick-update task detail or drawer flow
- [ ] Surface upcoming and overdue tasks on dashboard
- [x] Add task priorities
- [x] Add task statuses

### Notes and Activities

- [x] Implement notes data model
- [x] Implement activities data model
- [ ] Allow notes on leads, contacts, companies, and deals
- [ ] Generate activity events for major changes
- [ ] Sort timelines chronologically
- [x] Show note author and timestamp
- [x] Render human-readable activity messages
- [x] Cover key system-generated activities

### Lead Conversion Workflow

- [ ] Implement lead conversion endpoint and business logic
- [ ] Create company from qualified lead
- [ ] Create contact from qualified lead
- [ ] Create deal from qualified lead
- [ ] Preserve and/or log conversion activity
- [ ] Update dashboard and reports after conversion

## Phase 3 Demo Readiness

### Reports

- [x] Build reports page
- [ ] Implement dashboard summary report
- [ ] Implement leads by source report
- [ ] Implement deals by stage report
- [ ] Implement win/loss report
- [ ] Implement sales by month report
- [ ] Implement upcoming and overdue tasks summary
- [ ] Ensure report endpoints are queryable from the API
- [ ] Ensure charts are readable and performant
- [ ] Apply role-based scope to reports

### Settings Foundation

- [x] Build settings page
- [x] Add pipeline stage list management
- [ ] Add basic user administration
- [ ] Add profile basics
- [x] Show role display where required
- [ ] Enforce stage integrity for active records

### Seeded Demo Data

- [ ] Create seed strategy and scripts
- [ ] Seed at least 10 users
- [ ] Seed at least 40 leads
- [ ] Seed at least 20 companies
- [ ] Seed at least 35 contacts
- [ ] Seed at least 25 deals
- [ ] Seed at least 30 tasks
- [ ] Seed at least 50 notes
- [x] Seed system-generated activities
- [x] Ensure names, industries, values, and dates feel realistic
- [x] Ensure pipeline is populated across stages
- [x] Ensure overdue, open, and upcoming tasks exist
- [x] Add core demo personas

### UI Polish and Demo Quality

- [x] Finalize premium visual direction
- [x] Refine spacing, typography, iconography, and hierarchy
- [ ] Ensure fast navigation and low-friction data entry
- [ ] Ensure record relationships are obvious
- [ ] Ensure charts are attractive and believable
- [ ] Polish loading states
- [ ] Polish empty states
- [ ] Eliminate lifeless or broken-feeling screens

### Deployment

- [ ] Define deployment targets for frontend, API, and database
- [ ] Configure production environment variables
- [ ] Deploy working demo environment
- [ ] Smoke test deployed environment

## Data Model Checklist

- [ ] Users entity
- [ ] Leads entity
- [ ] Companies entity
- [ ] Contacts entity
- [ ] PipelineStages entity
- [ ] Deals entity
- [ ] Tasks entity
- [ ] Notes entity
- [ ] Activities entity
- [ ] Core entity relationships are implemented correctly
- [ ] Required enums are implemented consistently across stack

## API Checklist

### General

- [ ] Prefix endpoints with `/api`
- [ ] Require authentication on protected routes
- [ ] Return consistent response shapes
- [ ] Return clear validation errors
- [ ] Support filtering, search, sort, and pagination where applicable

### Endpoints

- [ ] Auth endpoints
- [ ] User endpoints
- [ ] Lead endpoints
- [ ] Company endpoints
- [ ] Contact endpoints
- [ ] Deal endpoints
- [ ] Pipeline stage endpoints
- [ ] Task endpoints
- [ ] Notes endpoints
- [ ] Activities endpoints
- [ ] Reports endpoints

## Frontend Pages

### Public Pages

- [ ] Home
- [ ] About
- [ ] Contact
- [ ] Book a Demo

### Auth Pages

- [x] Login

### App Pages

- [x] Dashboard
- [x] Leads List
- [ ] Lead Detail
- [x] Companies List
- [ ] Company Detail
- [x] Contacts List
- [ ] Contact Detail
- [x] Deals Pipeline
- [ ] Deal Detail
- [x] Tasks
- [x] Reports
- [x] Settings
- [ ] Users Management for admin if included in MVP

## Non-Functional Requirements

### Performance

- [ ] Dashboard loads quickly under demo conditions
- [ ] List pages use pagination or efficient loading
- [ ] Seeded data does not make the app feel slow
- [ ] API response times are suitable for live demos

### Security

- [ ] Passwords are never stored in plain text
- [ ] Authenticated routes are protected
- [ ] Role-based access is enforced server-side
- [ ] Client and server validation are both present
- [ ] Activity logging remains audit-friendly

### Maintainability and Scalability

- [ ] Codebase is modular and extension-friendly
- [ ] Naming is clear and consistent
- [ ] Business logic is not buried in UI components
- [ ] Infrastructure concerns are isolated from domain logic
- [ ] Entity design can evolve toward multi-tenant architecture

### Demo Readiness

- [x] No empty state makes the app feel broken
- [x] Seeded data looks realistic
- [x] Copy and labels feel business-ready
- [x] Interface is visually premium and coherent

## Acceptance Gates

### System Acceptance

- [ ] Authenticated users can log in successfully
- [ ] Dashboard displays valid summary data
- [ ] Users can create and manage leads
- [ ] Users can manage companies and contacts
- [ ] Lead conversion creates related records correctly
- [ ] Deals move through pipeline stages correctly
- [ ] Users can create and complete tasks
- [ ] Notes and activity timelines render correctly
- [ ] Reports show believable and accurate seeded data
- [ ] Premium visual quality is achieved
- [ ] Live deployment is ready for demonstrations

### Demo Acceptance Script

- [x] Log in
- [x] Show dashboard
- [ ] Open a lead
- [ ] Convert lead into company, contact, and deal
- [ ] Move deal through the pipeline
- [ ] Add task and note
- [x] Show report views
- [ ] Confirm the system feels real and valuable in demo flow

## Explicitly Out of Scope for MVP

- [ ] Email sync
- [ ] WhatsApp integration
- [ ] Document storage
- [ ] Advanced analytics
- [ ] Workflow automation builder
- [ ] Tenant billing
- [ ] Audit exports
- [ ] Calendar sync
- [ ] Notification engine
- [ ] Mobile app
- [ ] AI assistant inside CRM

## Future Roadmap Parking Lot

- [ ] Multi-tenant architecture
- [ ] Email integration
- [ ] Reminders and notifications
- [ ] Advanced analytics
- [ ] Custom fields
- [ ] File attachments
- [ ] Workflow automation
- [ ] AI lead scoring
- [ ] AI sales assistant
- [ ] White-label configuration
- [ ] Billing and subscription management
