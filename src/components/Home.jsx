import Editor from "./Editor";
import Sidebar from "./Sidebar";
import { AlignLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { ListContext } from "../contexts/List";
import { useContext, useState, useRef, useEffect } from "react";
import { Eye, EyeOff } from 'lucide-react';

function Home() {
  const { markdownList, updateItem, currentIndex } = useContext(ListContext)
  const [showPreview, setShowPreview] = useState(false);
  const sidebarRef = useRef(null);

  if (markdownList === null) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    )
  }

  const item = markdownList[currentIndex];

  const handleContentChange = (newContent) => {
    updateItem(item.name, newContent);
  }

  const handleNameChange = (newName) => {
    updateItem(newName, item.content);
  }

  const expandSidebar = () => {
    sidebarRef.current.classList.add('expand-sidebar');
  }

  const closeSidebar = () => {
    sidebarRef.current.classList.remove('expand-sidebar');
  }


  return (
    <div className="home">
      <Sidebar closeSidebar={closeSidebar} sidebarRef={sidebarRef} />
      <header id="myHeader">
        {/* Header wrapper */}
        <div className="header-wrapper flex justify-between items-center">
          {/* Header left */}
          <div className="header-left md:flex md:gap-5">
            <Link className="self-center">
              <AlignLeft size={24} onClick={expandSidebar} />
            </Link>
            <h1 className="text-2xl font-bold title">MdEditor</h1>
          </div>
          {/* Header right */}
          <div className="header-right flex justify-end">
            <div className="icon-eye md:hidden">
              {showPreview ? <EyeOff size={28} onClick={() => setShowPreview(false)} /> : <Eye size={28} onClick={() => setShowPreview(true)} />}
            </div>
            <input type="text" id="name-input" placeholder={'Untitled Document'} value={item.name} onChange={(e) => handleNameChange(e.target.value)} />
          </div>
        </div>
      </header>
      <Editor content={item.content} handleContentChange={handleContentChange} showPreview={showPreview} />
    </div>
  );
}

export default Home;
