# Quickstart: Book Layout + Docusaurus Setup

**Feature Branch**: `001-docusaurus-book-layout`
**Created**: 2025-12-04
**Purpose**: Guide for setting up and running the Docusaurus project locally.

## Setup Instructions

1.  **Clone the Repository**:
    ```bash
    git clone [REPOSITORY_URL]
    cd [REPOSITORY_NAME]
    git checkout 001-docusaurus-book-layout
    ```

2.  **Install Dependencies**:
    Navigate to the project root and install the necessary Node.js packages:
    ```bash
    npm install
    ```

3.  **Start the Development Server**:
    To run the Docusaurus site locally in development mode:
    ```bash
    npm start
    ```
    This will open a new browser window to `http://localhost:3000` (or another available port). The site will automatically reload as you make changes.

4.  **Build the Static Site**:
    To generate a static build of the Docusaurus site:
    ```bash
    npm run build
    ```
    The generated static files will be placed in the `build/` directory.

## Verification

- Ensure the Docusaurus development server starts without errors.
- Confirm that the sidebar correctly displays the four modules and their placeholder chapters.
- Verify that the homepage introduces the book and outlines the four modules.
- Check that all placeholder pages for modules and subchapters load correctly without routing errors.
- Ensure the build process completes without warnings or errors.
