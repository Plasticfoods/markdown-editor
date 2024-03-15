import MarkdownSection from './MarkdownSection';
import PreviewSection from './PreviewSection';

export default function Editor({ content, handleContentChange, showPreview }) {

  return (
    <div className="editor">
      <div className='md:hidden'>
        {
          showPreview ?
            <PreviewSection content={content} className={''} /> :
            <MarkdownSection content={content} handleContentChange={handleContentChange} className={''} />
        }
      </div>
      <MarkdownSection content={content} handleContentChange={handleContentChange} className='desktop' />
      <PreviewSection content={content} className={'desktop'} />
    </div>
  );
}