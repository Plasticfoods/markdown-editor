import Editor from "./Editor";
import { AlignLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ListContext } from "../contexts/List";

function Home() {
  const {markdownList, updateItem, currentIndex} = useContext(ListContext)
  console.log(markdownList)
  if(markdownList === null) {
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

  

  return (
    <div className="home">
      <header id="myHeader">
        <div className="header-wrapper flex justify-between items-center">
          <div className="header-left flex gap-8">
            <Link className="self-center">
              <AlignLeft size={24} />
            </Link>
            <h1 className="text-2xl font-bold">MdEditor</h1>
          </div>
          <div>
            <input type="text" id="name-input" placeholder={item.name} onChange={(e) => handleNameChange(e.target.value)} />
          </div>
        </div>
      </header>
      <Editor content={item.content} handleContentChange={handleContentChange} />
    </div>
  );
}

export default Home;
