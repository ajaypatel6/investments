import "./index.css";

import Title from "./components/Title";

import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import AssetUpdater from "./components/AssetUpdater";

// import Asset from "./components/Asset";
// import Assetlist from "./components/Assetlist";
import MarketTime from "./components/MarketTime";

function App() {
  return (
    <>
      <div>
        {/* Title component */}
        {/* Portfolio */}
        {/* Settings,customization */}
        <Title></Title>

        <Profile />
        <MarketTime />
        <Portfolio />
        <AssetUpdater></AssetUpdater>
      </div>
    </>
  );
}

export default App;
