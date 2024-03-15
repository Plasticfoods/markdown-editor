import { CircleX } from 'lucide-react';
import { useContext } from 'react';
import { ListContext } from '../contexts/List';

export default function Sidebar({ setOpen }) {
    const { markdownList, addItem, deleteItem, currentIndex, setCurrentIndex } = useContext(ListContext)

    const downloadFileAsMd = () => {
        const item = markdownList[currentIndex];
        const blob = new Blob([item.content], { type: 'text/markdown' });
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = item.name + '.md';
        link.click();

        // Optional: Revoke the temporary URL after download
        setTimeout(() => window.URL.revokeObjectURL(url), 1000);
    };

    return (
        <div className="sidebar">
            {/* Sidebar close button  */}
            <div className='icon-close-menu'>
                <CircleX color='white' className='circle-icon' onClick={() => setOpen(false)} />
            </div>

            {/* Sidebar inner = Everything close icon */}
            <div className="sidebar-inner">
                {/* Title */}
                <h1 className='text-3xl font-bold text-white px-4'>MdEditor</h1>
                <div className='documents' style={{ display: 'grid', gap: '1rem' }}>
                    <h2 className='uppercase font-bold text-white py-4 text-center bg-slate-800' style={{ fontSize: '12px', letterSpacing: '2px', borderBottom: '.5px solid yellow' }}>Documents</h2>
                    <ul>
                        {markdownList.map((item, index) => (
                            <li
                                key={index}
                                index={index}
                                className='doc-link'
                                // style={{ backgroundColor: index === currentIndex ? 'rgba(255, 255, 255, 0.1)' : 'transparent' }}
                                style={{ color: index === currentIndex ? 'lightcyan' : 'gray' }}
                                onClick={() => { setCurrentIndex(index) }}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <button type='button' className='btn-sidebar bg-green-700' onClick={addItem}>New document</button>
                <button type='button' className='btn-sidebar bg-gray-700' onClick={() => { downloadFileAsMd() }}>Save doucment</button>
                {markdownList.length > 1 &&
                    <button type='button' className='text-white uppercase text-xs font-bold' onClick={deleteItem}>Delete document</button>
                }
            </div>
        </div>
    )
}