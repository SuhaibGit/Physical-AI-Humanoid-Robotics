# Tasks: Remove TypeScript Syntax from index.js

**Input**: Design documents from `/specs/002-remove-ts-from-index-js/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Tests**: The tests for this feature are integrated into the tasks as verification steps, focusing on successful Docusaurus server startup and homepage rendering.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- Paths shown below assume single project - adjust based on plan.md structure

---

## Phase 3: User Story 1 - Remove TypeScript Annotations (Priority: P1) 🎯 MVP

**Goal**: The `src/pages/index.js` file is valid JavaScript, and the Docusaurus development server starts successfully without syntax errors related to this file.

**Independent Test**: Attempt to start the Docusaurus development server and confirm it runs without errors, and the homepage renders correctly.

### Implementation for User Story 1

- [ ] T001 [US1] Read the content of `ai-book/src/pages/index.js`
- [ ] T002 [US1] Remove the TypeScript type annotation `: JSX.Element` from the `Home` function declaration in `ai-book/src/pages/index.js`
- [ ] T003 [US1] Verify Docusaurus development server starts and homepage renders correctly after modification by running `npm start` in the `ai-book` directory.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories (re-validating the overall project after this bug fix).

- [ ] T004 Run `quickstart.md` validation to verify setup and functionality (Plan: Testing)

---

## Dependencies & Execution Order

### Phase Dependencies

- **User Story 1 (P1)**: No dependencies on other stories, but tasks are sequential.
- **Polish (Final Phase)**: Depends on User Story 1 being complete.

### User Story Dependencies

- **User Story 1 (P1)**: Tasks are sequential: T001 -> T002 -> T003.

### Parallel Opportunities

- No parallel opportunities identified for this specific bug fix.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 3: User Story 1 (Tasks T001-T003).
2. **STOP and VALIDATE**: Test User Story 1 independently by verifying the Docusaurus server starts successfully and the homepage renders.
3. Complete Phase N: Polish & Cross-Cutting Concerns (Task T004) to re-validate the entire project.

### Incremental Delivery

1. Complete User Story 1 tasks (T001-T003) → Bug fixed for `index.js`.
2. Run `quickstart.md` validation (T004) → Overall project health check.

---

## Notes

- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
