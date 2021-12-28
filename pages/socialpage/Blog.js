import React, {useState, useEffect} from 'react';
import { v4 } from "uuid";

import {
  StyledBlog,
  BlogVideo,
  BlogImage,
  BlogStyledText,
  Caption,
  BlogStyleIcon,
  MotionIcon,
  ClickedShareIcon,
  ShareIcon,
  ClickedHeartIcon,
  HeartIcon,
} from "./BlogStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faHeart,
  faShareSquare,
} from "@fortawesome/free-solid-svg-icons";

import { like_abi, like_address } from "../contracts/likeContract";
import { mint_abi, mint_address } from "../contracts/mintContract";

let Web3 = require('web3');
let w3 = new Web3(ethereum);
let like_contract = new w3.eth.Contract(like_abi, like_address)
let mint_contract = new w3.eth.Contract(mint_abi, mint_address)

// mint function
function mintClick(_index, _likeCtr, account){
  let encoded = mint_contract.methods.mint(_index, _likeCtr).encodeABI()

  let tx = {
      from: account,
      to : mint_address,
      data : encoded,
  }

  let txHash = ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx],
  }).then((hash) => {
      alert("You can now view your transaction with hash: " + hash)
  }).catch((err) => console.log(err))
  
  return txHash
}


// like function 
function likeClick(_index, account){
 
  let encoded = like_contract.methods.getLike(_index).encodeABI()

  let tx = {
      from: account,
      to : like_address,
      data : encoded,
  }

  let txHash = ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx],
  }).then((hash) => {
      alert("You can now view your transaction with hash: " + hash)
  }).catch((err) => console.log(err))
  
  return txHash
}

function dislikeClick(_index, account){
 
  let encoded = like_contract.methods.dislike(_index).encodeABI()

  let tx = {
      from: account,
      to : like_address,
      data : encoded,
  }

  let txHash = ethereum.request({
      method: 'eth_sendTransaction',
      params: [tx],
  }).then((hash) => {
      alert("You can now view your transaction with hash: " + hash)
  }).catch((err) => console.log(err))
  
  return txHash
}

const Blog = ({ id, src, caption, fileType, likeCtr, state }) => {
  const [likeAmount, setLikeAmount] = useState(0);
  const [MintAmount, setMintAmount] = useState(0);
  const [isOnClick, setIsOnClick] = useState(state);
  const [isMint, setIsMint] = useState(false);
  const [address, setAddress] = useState(null)

  useEffect( async() => {
    
    window.ethereum ?
      ethereum.request({ method: "eth_requestAccounts" }).then(async(accounts) => {
        
        console.log(accounts[0])
        setAddress(accounts[0])

      }).catch((err) => console.log(err))
    : console.log("Please install MetaMask")

  }, [])

  function clickHeart() {
    likeClick(id,address)
    setIsOnClick(true);
  }
  function clickHeartAgain() {
    dislikeClick(id, address)
    setIsOnClick(false);
  }

  function Mint() {
    mintClick(id, likeCtr, address)
    setIsMint(true);
  }
  function CancelMint() {
    setMintAmount(MintAmount - 1);
    setIsMint(false);
  }

  return (
    <StyledBlog key={v4()}>
      {fileType.startsWith("video") ? (
        <BlogVideo src={src} controls alt="BlogVideo" />
      ) : (
        <BlogImage src={src} alt="BlogImage" />
      )}
      <BlogStyledText>
        <Caption>{caption}</Caption>
      </BlogStyledText>
      <BlogStyleIcon>
        <MotionIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {isOnClick ? (
            <ClickedHeartIcon>
              <FontAwesomeIcon icon={faHeart} onClick={clickHeartAgain} />
              {likeCtr} Like
            </ClickedHeartIcon>
          ) : (
            <HeartIcon>
              <FontAwesomeIcon icon={faHeart} onClick={clickHeart} />
              {likeCtr} Like
            </HeartIcon>
          )}
        </MotionIcon>
        <MotionIcon whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {isMint ? (
            <ClickedShareIcon>
              <FontAwesomeIcon icon={faCheck} onClick={CancelMint} />
              {MintAmount} Mint
            </ClickedShareIcon>
          ) : (
            <ShareIcon>
              <FontAwesomeIcon icon={faShareSquare} onClick={Mint} />
              {MintAmount} Mint
            </ShareIcon>
          )}
        </MotionIcon>
      </BlogStyleIcon>
    </StyledBlog>
  );
};
export default Blog;
