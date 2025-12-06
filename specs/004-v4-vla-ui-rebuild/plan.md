# Implementation Plan: Iteration 4 — Module 4 (Vision-Language-Action) + Full UI/UX Rebuild

**Branch**: `004-v4-vla-ui-rebuild` | **Date**: 2025-12-05 | **Spec**: spec.md
**Input**: Feature specification from `/specs/004-v4-vla-ui-rebuild/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This plan outlines the implementation steps for "Iteration 4 — Module 4 (Vision-Language-Action) + Full UI/UX Rebuild", focusing on creating comprehensive textbook content for Vision-Language-Action (VLA) models and rebuilding the entire book's UI with a modern dark theme, three-column layout, and integrated chatbot. The primary goal is to populate Module 4 placeholder pages with polished Markdown content and transform the Docusaurus site to match the new design guidelines, ensuring a cohesive learning experience that connects with the existing robotics curriculum.

## Technical Context

**Language/Version**: Python 3.x, JavaScript/TypeScript, CSS
**Primary Dependencies**: Docusaurus, React, ROS 2, Gazebo, Unity, NVIDIA Isaac ecosystem, VLA models (RT-1, RT-2, OpenVLA)
**Storage**: N/A (content-focused, no backend persistence)
**Testing**: Manual Docusaurus build validation, manual verification of sidebar navigation and code sample rendering.
**Target Platform**: Docusaurus (web-based textbook)
**Project Type**: Documentation/Content Generation (AI-Native textbook)
**Performance Goals**: Fast Docusaurus build times, responsive page loading with enhanced UI elements.
**Constraints**: Markdown only for content, no backend/RAG implementation yet, focus solely on Module 4 and UI rebuild.
**Scale/Scope**: One new textbook module with multiple sub-pages and a complete UI redesign affecting all pages.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Gates determined based on constitution file:
- Content Alignment: Module 4 content must align with VLA curriculum in the course outline
- Technical Accuracy: VLA concepts, models (RT-1, RT-2, OpenVLA), and implementation details must be technically accurate
- AI-Native Structure: New UI must support AI-native delivery using Docusaurus with enhanced features
- Determinism & Reproducibility: All generated content and UI changes must remain predictable across iterations
- Spec-Driven Development: Implementation must follow the detailed specification provided
- Consistent Structure: New module and UI changes must maintain consistency with existing modules
- Four Core Areas: Module 4 fits within the Vision-Language-Action area of the curriculum
- RAG Chatbot Integration: UI changes must accommodate future RAG chatbot functionality
- Robotics Best Practices: Content must align with robotics best practices for VLA systems

## Project Structure

### Documentation (this feature)

```text
specs/004-v4-vla-ui-rebuild/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
ai-book/
├── docs/
│   ├── modules/
│   │   └── module4/
│   │       ├── _category_.json
│   │       ├── intro-to-vla.md
│   │       ├── evolution-of-vlm-to-vla.md
│   │       ├── perception-pipelines.md
│   │       ├── vla-models.md
│   │       ├── world-models-and-actions.md
│   │       ├── action-generation.md
│   │       ├── dataset-design.md
│   │       ├── training-pipelines.md
│   │       ├── humanoid-vla-example.md
│   │       └── safety-and-failures.md
│   ├── vla/
│   │   ├── _category_.json
│   │   └── index.md
├── src/
│   ├── components/
│   │   ├── Chatbot/
│   │   │   ├── ChatbotButton.jsx
│   │   │   └── ChatbotDrawer.jsx
│   │   ├── Layout/
│   │   │   └── ThreeColumnLayout.jsx
│   │   └── UI/
│   │       └── NeonTheme.jsx
│   └── css/
│       ├── custom.css
│       └── themes/
│           └── dark-neon.css
├── static/
│   └── img/
│       └── chatbot-icon.svg
└── sidebars.ts
```

**Structure Decision**: The Module 4 content will reside in a new directory `docs/modules/module4` following the same structure as other modules. The VLA category will be added to the main sidebar. The UI components will be placed in `src/components` with CSS in `src/css` to implement the three-column layout, dark theme, and chatbot functionality.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| N/A | N/A | N/A |
