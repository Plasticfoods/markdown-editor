import MarkdownSection from './MarkdownSection';
import PreviewSection from './PreviewSection';

export default function Editor({ content, handleContentChange }) {

  return (
    <div className="editor">
      <MarkdownSection content={content} handleContentChange={handleContentChange} />
      <PreviewSection content={content} />
    </div>
  );
}