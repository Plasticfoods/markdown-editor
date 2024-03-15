import MarkdownSection from './MarkdownSection';
import PreviewSection from './PreviewSection';
import { useState } from 'react';

export default function Editor({ content, handleContentChange, showPreview }) {
  
  return (
    <div className="editor">
      <div className='md:hidden'>
        {
          showPreview ?
          <PreviewSection content={content} /> :
          <MarkdownSection content={content} handleContentChange={handleContentChange} />
        }
      </div>
      <MarkdownSection content={content} handleContentChange={handleContentChange} />
      <PreviewSection content={content} />
    </div>
  );
}