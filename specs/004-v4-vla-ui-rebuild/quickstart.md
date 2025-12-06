# Quickstart Guide: Module 4 (Vision-Language-Action) + Enhanced UI

## Overview

This guide will help you get started with the new Module 4 content on Vision-Language-Action (VLA) models and the enhanced three-column UI with dark theme and chatbot integration.

## Getting Started with Module 4 Content

### 1. Understanding VLA Fundamentals
Begin with the introductory content to understand how vision, language, and action are combined in modern robotics systems:
- Start with `intro-to-vla.md` to understand the core concepts
- Move to `evolution-of-vlm-to-vla.md` to see how VLA models evolved from vision-language models
- Review `vla-models.md` to learn about specific models like RT-1, RT-2, and OpenVLA

### 2. Exploring Perception and Action Pipelines
- Study `perception-pipelines.md` to understand how sensory data is processed
- Read `world-models-and-actions.md` and `action-generation.md` to see how decisions are translated to robot actions
- Examine `training-pipelines.md` to understand how VLA models are trained

### 3. Practical Implementation
- Follow the examples in `humanoid-vla-example.md` for hands-on understanding
- Review `dataset-design.md` to understand how training data is structured
- Study `safety-and-failures.md` to understand practical considerations

## Using the Enhanced UI

### Three-Column Layout
- **Left Sidebar**: Navigate through modules and topics using the collapsible sidebar
- **Center Content**: Read the main content with improved readability and spacing
- **Right Panel**: Access "What you'll learn" summaries and related content

### Dark Theme with Neon Accents
- The new dark theme reduces eye strain during extended reading
- Neon accents highlight interactive elements and important information
- Hover over links and buttons to see the neon effect in action

### Chatbot Integration
- Look for the glowing chatbot icon in the bottom-right corner of any page
- Click to expand the chatbot drawer and ask questions about the current page's content
- The chatbot is currently a UI placeholder and will be connected to the RAG system in a future iteration

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git for version control

### Running the Textbook Locally
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-book
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Visit `http://localhost:3000` to view the textbook with all new features

## Key Features to Explore

### Enhanced Navigation
- Collapsible sidebar sections for easy browsing
- Contextual summaries in the right column
- Improved search functionality

### Interactive Elements
- Code snippets with syntax highlighting
- Expandable diagrams and illustrations
- Embedded videos and animations (where applicable)

### Accessibility Improvements
- High contrast text for readability
- Keyboard navigation support
- Screen reader compatibility

## Troubleshooting

### Common Issues
- **Missing Styles**: Clear browser cache or perform a hard refresh (Ctrl+F5)
- **Broken Links**: Ensure all content files are properly named and referenced in `sidebars.ts`
- **Chatbot Not Appearing**: Check that the chatbot component files are properly included in the Docusaurus configuration

### Getting Help
- Check the individual module documentation for specific questions
- Review the Docusaurus documentation for theme-related issues
- Reach out to the development team for technical problems