<!--
Sync Impact Report:
Version change: 0.0.0 → 1.0.0 (MINOR: New principle/section added or materially expanded guidance.)
Modified principles:
- [PRINCIPLE_1_NAME] → Content Alignment
- [PRINCIPLE_2_NAME] → Technical Accuracy
- [PRINCIPLE_3_NAME] → AI-Native Structure
- [PRINCIPLE_4_NAME] → Clarity and Directness
- [PRINCIPLE_5_NAME] → Determinism & Reproducibility
- [PRINCIPLE_6_NAME] → Spec-Driven Development
- [PRINCIPLE_7_NAME] → Consistent Structure
- [PRINCIPLE_8_NAME] → Four Core Areas
- [PRINCIPLE_9_NAME] → RAG Chatbot Integration
- [PRINCIPLE_10_NAME] → Robotics Best Practices
- [PRINCIPLE_11_NAME] → Code Standards
Added sections:
- Additional Constraints
- Quality Gates
Removed sections:
- None
Templates requiring updates:
- .specify/templates/plan-template.md: ✅ updated
- .specify/templates/spec-template.md: ✅ updated
- .specify/templates/tasks-template.md: ✅ updated
- .specify/templates/commands/*.md: ✅ updated
Follow-up TODOs: None
-->
# AI-native textbook on Physical AI and Humanoid Robotics Constitution

## Core Principles

### I. Content Alignment
Content MUST follow the official Physical AI & Humanoid Robotics course outline.

### II. Technical Accuracy
Technical accuracy MUST be aligned with ROS2, Gazebo, Unity, NVIDIA Isaac, and VLA concepts.

### III. AI-Native Structure
Book structure MUST support AI-native delivery using Docusaurus.

### IV. Clarity and Directness
Every chapter MUST be written in clear, direct language suitable for technical learners.

### V. Determinism & Reproducibility
All generated content MUST remain deterministic, predictable, and reproducible across iterations.

### VI. Spec-Driven Development
The book MUST be produced using Spec-Driven Development through multiple iterations.

### VII. Consistent Structure
Docusaurus layout, files, and chapter structure MUST remain consistent across modules.

### VIII. Four Core Areas
All module content MUST reflect the four core areas: ROS2 (Robotic Nervous System), Gazebo & Unity (Digital Twin), NVIDIA Isaac (AI-Robot Brain), and Vision-Language-Action (VLA).

### IX. RAG Chatbot Integration
The final project MUST integrate a working RAG chatbot trained on the book.

### X. Robotics Best Practices
All explanations MUST remain technically correct and aligned with robotics best practices.

### XI. Code Standards
Code examples MUST follow standard syntax for Python, ROS2, and robotics tools.

## Additional Constraints

### Docusaurus Foundation
Built using Docusaurus with a layout inspired by the Dinosaurs example from Context7 docs.

### Iterative Delivery
MUST be deliverable iteratively through 5–8 Spec-Kit cycles.

### Deployment Target
MUST support deployment on GitHub Pages.

### RAG System Stack
RAG system MUST use FastAPI, OpenAI Agents or ChatKit SDKs, Qdrant Cloud, and Neon Postgres.

### Consistent Writing Style
Writing style MUST stay consistent across all modules and chapters.

### Future Feature Support
Structure MUST support future features: signup, personalization, and Urdu translation.

## Quality Gates

### Complete Book
Complete Docusaurus book with all sections for four modules.

### Navigable Hierarchy
Clean, navigable sidebar and chapter hierarchy.

### Functional RAG Chatbot
RAG chatbot answering questions based only on the book or selected text.

### Testable Iterations
Each iteration outputs working, testable results with no broken pages or missing files.

## Governance

### Supremacy
This Constitution supersedes all other project practices and documentation.

### Amendments
Amendments require documented rationale, approval, and a migration plan.

### Compliance
All pull requests and code reviews MUST verify compliance with these principles.

### Justification for Complexity
Any introduction of complexity MUST be thoroughly justified.

**Version**: 1.0.0 | **Ratified**: 2025-12-04 | **Last Amended**: 2025-12-04
