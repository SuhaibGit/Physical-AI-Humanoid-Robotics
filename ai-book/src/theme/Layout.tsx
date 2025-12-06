import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import Chatbot from '../components/Chatbot';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<{}>;

export default function Layout(props: Props): JSX.Element {
  return (
    <>
      <OriginalLayout {...props} />
      <Chatbot />
    </>
  );
}