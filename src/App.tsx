import "./App.css";
import PixelEditor from "./PixelEditor";
import { TINY_CAT_NFT_SIZE } from "./bitmap/nft";

function App() {
  return (
    <div>
      <PixelEditor
        rows={TINY_CAT_NFT_SIZE.rows}
        cols={TINY_CAT_NFT_SIZE.cols}
      />
    </div>
  );
}

export default App;
