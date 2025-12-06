# Data Model: Module 4 (Vision-Language-Action) + UI/UX Rebuild

## Key Entities

### Module 4 Content Entities

**VLAModule**
- Represents the complete Vision-Language-Action module
- Properties: id, title, description, learning_objectives, prerequisites, estimated_duration
- Relationships: Contains multiple VLATopic entities

**VLATopic**
- Represents individual topics within the VLA module
- Properties: id, title, content, learning_outcomes, difficulty_level, related_topics
- Relationships: Belongs to one VLAModule, may reference multiple CodeExample entities

**CodeExample**
- Represents code snippets and examples in the VLA content
- Properties: id, title, language, code_snippet, description, execution_context
- Relationships: Referenced by multiple VLATopic entities

**VLADiagram**
- Represents visual elements explaining VLA concepts
- Properties: id, title, description, image_path, alt_text, type (architecture, workflow, etc.)
- Relationships: Referenced by multiple VLATopic entities

### UI/UX Component Entities

**ThreeColumnLayout**
- Represents the new three-column page structure
- Properties: left_sidebar_width, center_content_width, right_sidebar_width, responsive_breakpoints
- Relationships: Applied to all textbook pages

**DarkNeonTheme**
- Represents the new dark theme with neon accents
- Properties: background_colors, text_colors, accent_colors, animation_properties
- Relationships: Applied globally across the site

**ChatbotComponent**
- Represents the floating chatbot UI element
- Properties: position, size, color_scheme, animation_state, open_status
- Relationships: Appears on all textbook pages

**SidebarCategory**
- Represents the collapsible sidebar structure
- Properties: id, title, collapsed_state, child_items, parent_category
- Relationships: Hierarchical structure for navigation

## Relationships

- **VLAModule** (1) contains (0..n) **VLATopic**
- **VLATopic** (0..n) references (0..n) **CodeExample**
- **VLATopic** (0..n) references (0..n) **VLADiagram**
- **ThreeColumnLayout** (1) applies_to (n) **TextbookPages**
- **DarkNeonTheme** (1) applies_to (n) **AllSiteComponents**
- **ChatbotComponent** (1) appears_on (n) **TextbookPages**
- **SidebarCategory** (0..n) has_hierarchical_relationship (0..n) **SidebarCategory**

## State Transitions

**ChatbotComponent States:**
- Hidden (default) → Hovered → Visible (floating button)
- Visible (floating button) → Clicked → Expanded (drawer)
- Expanded (drawer) → Closed → Visible (floating button)
- Visible (floating button) → Hidden (via user preference)

**SidebarCategory States:**
- Collapsed (default) → Expanded (via user interaction)
- Expanded → Collapsed (via user interaction)

## Validation Rules

**Content Validation:**
- Each VLATopic must have a unique title within its VLAModule
- All CodeExample entities must have valid syntax for their specified language
- All VLADiagram entities must have alternative text for accessibility

**UI/UX Validation:**
- ThreeColumnLayout must maintain responsive behavior across screen sizes
- DarkNeonTheme must maintain WCAG accessibility standards for contrast
- ChatbotComponent must not obstruct primary content on any screen size
- SidebarCategory hierarchy must not exceed 5 levels for usability