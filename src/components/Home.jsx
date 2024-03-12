import Editor from "./Editor";
import { AlignLeft } from 'lucide-react';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <header>
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
      <Editor />
    </div>
  );
}

export default Home;
