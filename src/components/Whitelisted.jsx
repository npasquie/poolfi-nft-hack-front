import React, { useRef, useEffect } from "react";
import NFT from "./NFT";
import pudgy1 from "../images/pudgy1.jpeg";
import pudgy2 from "../images/pudgy2.jpeg";

const pudgyData1 = {
  image: pudgy1,
  collection: "Lil Pudgys",
  name: "Lil Pudgy #4267",
  price: "Borrow 642 USDC",
};

const pudgyData2 = {
  image: pudgy2,
  collection: "Lil Pudgys",
  name: "Lil Pudgy #1810",
  price: "Borrow 642 USDC",
};

const Whitelisted = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      containerRef.current.style.opacity = 1;
    }, 200);
  }, [containerRef]);

  return (
    <div className="nfts" ref={containerRef}>
      <NFT nft={pudgyData1} />
      <NFT nft={pudgyData2} />
    </div>
  );
};

export default Whitelisted;
