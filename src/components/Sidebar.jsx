import { CircleX } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar({ setOpen }) {
    const list = ['a', 'b', 'c', 'd', 'e']
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className="sidebar">
            {/* Sidebar close button  */}
            <div className='icon-close-menu'>
                <CircleX color='white' className='circle-icon' onClick={() => setOpen(false)} />
            </div>
            <div className="sidebar-inner">
                <h1 className='text-3xl font-bold text-white px-4'>MdEditor</h1>
                <div className='documents' style={{ display: 'grid', gap: '1rem' }}>
                    <h2 className='uppercase font-bold text-white py-4 text-center bg-slate-800' style={{ fontSize: '12px', letterSpacing: '2px' }}>Documents</h2>
                    <ul>
                        {list.map((item, index) => (
                            <li 
                                key={index} 
                                index={index} 
                                className='doc-link'
                                // style={{ backgroundColor: index === currentIndex ? 'rgba(255, 255, 255, 0.1)' : 'transparent' }}
                                style={{ color: index === currentIndex ? 'lightcyan' : 'gray' }}
                                onClick={() => {setCurrentIndex(index)}}
                            >
                                Document {index + 1}
                            </li>
                        ))}
                    </ul>
                </div>
                <button type='button' className='btn-sidebar bg-green-700'>New document</button>
                <button type='button' className='btn-sidebar bg-gray-700'>Save doucment</button>
                <button type='button' className='text-white uppercase text-xs font-bold'>Delete document</button>
            </div>
        </div>
    )
}
{/* <li className='doc-link'>Document 3</li> */ }