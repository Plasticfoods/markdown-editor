import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown'

export default function PreviewSection({ content, className }) {
    const sanitizedContent = DOMPurify.sanitize(content);

    return (
        <div className={`preview-section ${className}`}>
            <div className="uppercase  font-semibold text-gray-600 text-xs px-6 py-3"
                style={{ border: '1px solid #2d3748' }}
            >
                Preview
            </div>
            <div className="preview__scroll expand-sidebar">
                <ReactMarkdown>{sanitizedContent}</ReactMarkdown>
            </div>
        </div>
    );
}