import { Header } from "./components/Header"
import {Trash2} from "lucide-react"
import {Footer} from "./components/Footer"

function App() {

  return (
    <div className="flex flex-col min-h-screen w-screen bg-gray-100">
      <div className="flex-grow w-[485px] mx-auto px-4">
        <Header />
        <ul>
          <li className="flex justify-between gap-4">
            <div className="bg-gray-50 p-5 flex-1">
              <span>Fazer o Blog</span>
            </div>
            <button className="bg-red-500 p-5">
              <Trash2 className="text-red-950" size={32} />
            </button>
          </li>
        </ul>
      </div>
         <Footer />
       </div>
  );
};

export default App;
