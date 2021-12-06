import "./index.css";

import Profile from "./components/Profile"
import Portfolio from "./components/Portfolio"
import Asset from "./components/Asset"
import Assetlist from "./components/Assetlist"
import MarketTime from "./components/MarketTime"

function App() {
  return (
    <>
      <div>
        {/* Title component */}
        {/* Portfolio */}
        {/* Settings,customization */}
        <Profile/>
        <MarketTime/>
        <h1 className="name">Your investments</h1>
        <Portfolio/>
        
        <Assetlist/>
        <Asset/>

      </div>
    </>
  );
}

export default App;
