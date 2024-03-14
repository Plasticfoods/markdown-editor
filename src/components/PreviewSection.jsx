import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown'

export default function PreviewSection({ content }) {

    return (
        <div className="preview-section">
            <div className="uppercase text-slate-400 font-medium text-xs pt-5 pl-6 pb-2"
                style={{ border: '1px solid #2d3748' }}
            >
                Preview
            </div>
            <div className="preview__scroll">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
}