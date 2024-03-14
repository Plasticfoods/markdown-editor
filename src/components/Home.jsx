import Editor from "./Editor";
import { AlignLeft } from 'lucide-react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const [headerHeight, setHeaderHeight] = useState('1rem');

  useEffect(() => {
    const headerElement = document.getElementById('myHeader');
    if (headerElement) {
      setHeaderHeight(headerElement.clientHeight)
      console.log(headerElement.clientHeight)
    }
  }, []);

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
            <input type="text" id="name-input" placeholder="Example.md" />
          </div>
        </div>
      </header>
      <Editor headerHeight={headerHeight} />
    </div>
  );
}

export default Home;
