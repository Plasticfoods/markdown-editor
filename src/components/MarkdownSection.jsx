
export default function MarkdownSection({ content, setContent }) {

    return (
        <div className="markdown-section">
            {/* Section heading for markdown */}
            <div
                className="uppercase text-slate-400 font-medium text-xs pt-5 pl-6 pb-2"
                style={{ border: '1px solid #2d3748' }}
            >
                Markdown
            </div>
            <textarea
                className='markdown-textarea ubuntu-mono-regular'
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />
        </div>
    );
}