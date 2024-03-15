
export default function MarkdownSection({ content, handleContentChange, className }) {
    
    const getWordCount = () => {
        const words = content.split(' ');
        return words.filter(word => word !== '').length;
    }

    return (
        <div className={`markdown-section ${className}`}>
            {/* Section heading for markdown */}
            <div
                className="flex justify-between items-center uppercase font-semibold text-gray-500 text-xs px-6 py-3"
                style={{ border: '1px solid #2d3748' }}
            >
                <div>Markdown</div>
                <div className="flex gap-4">
                    <div>Words: <span className="text-black">{getWordCount()}</span></div>
                    <div>Characters: <span className="text-black">{content.length}</span></div>
                </div>
            </div>
            <textarea
                className='markdown-textarea space-mono-regular'
                value={content}
                onChange={(event) => handleContentChange(event.target.value)}
            />
        </div>
    );
}