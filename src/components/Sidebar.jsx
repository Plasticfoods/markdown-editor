import { CircleX, ChevronDown } from 'lucide-react';
import { useContext, useRef } from 'react';
import { ListContext } from '../contexts/List';

export default function Sidebar({ closeSidebar, sidebarRef }) {
    const { markdownList, addItem, deleteItem, currentIndex, setCurrentIndex } = useContext(ListContext)
    const linkController = useRef(null);

    const expndOrCollapse = () => {
        if(linkController.current.classList.contains('expand')) {         
            linkController.current.classList.remove('expand');
        }
        else {
            linkController.current.classList.add('expand');
        }
    }

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
        <div className="sidebar expand-sidebar" ref={sidebarRef}>
            {/* Sidebar close button  */}
            <div className='icon-close-menu'>
                <CircleX color='white' className='circle-icon' onClick={closeSidebar} />
            </div>

            {/* Sidebar inner = Everything close icon */}
            <div className="sidebar-inner">
                {/* Title */}
                <h1 className='text-3xl font-bold text-white px-4'>MdEditor</h1>

                {/* Document list */}
                <div className="services">
                    <div className='service documents'>
                        <div className="service-heading" onClick={expndOrCollapse}>
                            <h2 className='title'>Documents</h2>
                            <ChevronDown color='white' className='chevron-icon' size={20} />
                        </div>
                        <div className="links-controller" ref={linkController}>
                            <ul className='service-links'>
                                {markdownList.map((item, index) => (
                                    <li
                                        key={index}
                                        index={index}
                                        className='service-link'
                                        // style={{ backgroundColor: index === currentIndex ? 'rgba(255, 255, 255, 0.1)' : 'transparent' }}
                                        style={{ color: index === currentIndex ? 'lightcyan' : 'gray' }}
                                        onClick={() => { setCurrentIndex(index) }}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Buttons  */}
                <div className="buttons">
                    <button type='button' className='btn-cta bg-green-700' onClick={addItem}>New document</button>
                    <button type='button' className='btn-cta bg-gray-700' onClick={() => { downloadFileAsMd() }}>Save doucment</button>
                    {markdownList.length > 1 &&
                        <button type='button' className='text-white uppercase text-xs font-bold' onClick={deleteItem}>Delete document</button>
                    }
                </div>
            </div>
        </div>
    )
}