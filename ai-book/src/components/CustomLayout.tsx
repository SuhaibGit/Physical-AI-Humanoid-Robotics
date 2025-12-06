import React from 'react';
import Layout from '@theme/Layout';
import ThreeColumnLayout from '@site/src/components/ThreeColumnLayout';
import ContextualSummary from '@site/src/components/ContextualSummary';

interface CustomLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  hideSidebar?: boolean;
  hideRightSidebar?: boolean;
  contextualSummary?: {
    title?: string;
    summary?: string;
    keyPoints?: string[];
    relatedTopics?: { title: string; url: string }[];
  };
}

const CustomLayout: React.FC<CustomLayoutProps> = ({
  children,
  title,
  description,
  hideSidebar = false,
  hideRightSidebar = false,
  contextualSummary,
}) => {
  return (
    <Layout title={title} description={description}>
      <ThreeColumnLayout
        hideSidebar={hideSidebar}
        hideRightSidebar={hideRightSidebar}
        rightSidebarContent={
          contextualSummary ? (
            <ContextualSummary
              title={contextualSummary.title}
              summary={contextualSummary.summary}
              keyPoints={contextualSummary.keyPoints}
              relatedTopics={contextualSummary.relatedTopics}
            />
          ) : undefined
        }
      >
        {children}
      </ThreeColumnLayout>
    </Layout>
  );
};

export default CustomLayout;