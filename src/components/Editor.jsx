import MarkdownSection from './MarkdownSection';
import PreviewSection from './PreviewSection';
import { useState } from 'react';

export default function Editor({ headerHeight }) {
  const [content, setContent] = useState('Hello, world!');

  return (
    <div className="editor">
      <MarkdownSection content={content} setContent={setContent} />
      <PreviewSection content={content} />
    </div>
  );
}