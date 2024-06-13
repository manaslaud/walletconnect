
import { useState,useEffect,useRef } from "react";
import { connectionStatusType,defaultConnectionStatus} from "./types";
import { Html } from "@react-three/drei";
import { BrowserProvider } from "ethers";
import {auth,database} from './firebase'
import {  ref, set, update } from "firebase/database";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import Cookies from 'js-cookie';
import * as THREE from "three"
import { Texture } from "three";
import { Suspense } from "react";

//connecting to coinbase, leather and metamask
export function App() {
  const handleRegister=async()=>{
    if(isValidPassword(password)==false || isValidEmail(email)==false){
      window.alert("pass/ email arent valid")
      return;
    }
    createUserWithEmailAndPassword(auth,email,password).then(()=>{
      const user=auth.currentUser
      if(user?.getIdToken)
        Cookies.set('token',user?.getIdToken.toString())
      const userData={
        ...connectionData,
        email:email,
        last_login:Date.now()
      }
      set(ref(database, 'users/' + user?.uid), userData).then( () => {
        // Success.
        console.log("updated db successfully")
     } ).catch( (error) => {
       console.log(error);
     } );
      alert("User created")
    }).catch((e)=>{
      window.alert(e.code+" "+e.message)
    })
  }
  const handleLogin=async()=>{
    if(isValidPassword(password)==false || isValidEmail(email)==false){
      window.alert("pass/ email arent valid")
      return;
    }
    signInWithEmailAndPassword(auth,email,password).then(()=>{
      const user=auth.currentUser
      if(user?.getIdToken)
      Cookies.set('token',user?.getIdToken.toString())
      const userData={
        last_login:Date.now()
      }
      update(ref(database, 'users/' + user?.uid), userData).then( () => {
        // Success.
        console.log("updated db successfully")
     } ).catch( (error) => {
       console.log(error);
     } );

    }).catch((e)=>{
      window.alert(e.code+" "+e.message)
    })
  }
  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease'
};
  const [email,setEmail]=useState<string>("")
  const [password,setPassword]=useState<string>("")
  const [connectionData,updateConnectionData]=useState<connectionStatusType>(defaultConnectionStatus);
  const [nft,setNft]=useState<any[]>([]);
  const [nftTexture,setNftTexture]=useState<Texture| Texture[]>()
  const [phantomKey,setPhantomKey]=useState<string>('')
  const [tokenName,setTokenName]=useState<string>('')
  const meshRef=useRef(null)
  function isValidEmail(email:string) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
  function isValidPassword(pass:string) {
  if(pass.length<6){
    return false
  }
    return true
  }
  const f=async()=>{
    if((window as any).LeatherProvider){
      try{
        const response = await (window as any).LeatherProvider?.request("getAddresses");
        updateConnectionData(prevState => ({
          ...prevState,
          leather: {
            isConnected: true,
            address: response.result.addresses[0].address
          }
        }));
      }catch(e:any){
        console.log(e)
      }
    }
    else{
      window.alert("Install leather wallet extension") 
      return
    }
  }
  const f2 = async () => {
    let provider = (window as any).ethereum;
    if ((window as any).ethereum.providers?.length) {
      for (const p of (window as any).ethereum.providers) {
        if (p.isMetaMask) {
          provider = p;
          console.log("MetaMask provider found:", provider);
          break;  
        }
      }
    }
   const broswerProvider= new BrowserProvider(provider)
   const signer= await broswerProvider.getSigner()
        const addr = await signer.getAddress()
        console.log(addr)
        updateConnectionData(prevState => ({
          ...prevState,
          metamask: {
            isConnected: true,
            address: addr
          }
        }));
        if(!provider){
          
            window.alert("Coinbase not found")
           return ;
        }
        
    
  }; 
  const f3 = async () => {
    let provider = (window as any).ethereum;
    if ((window as any).ethereum.providers?.length) {
      for (const p of (window as any).ethereum.providers) {
        if (p.isCoinbaseWallet) {
          provider = p;
          break;  
        }
      }
    }
  console.log(provider)
    if (provider) {
      const res=await provider.request({
        method: "eth_requestAccounts",
        params: [],
      });
      updateConnectionData(prevState => ({
        ...prevState,
        coinbase: {
          isConnected: true,
          address: res[0]
        }
      }));
    }
    else{
      window.alert("Coinbase not found")
     }
  };
  const handleFetchNFT=()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'X-API-KEY': 'tMzDtiXBm20d8vTYtzCC2a1S96N6lW3Q'}
    };
    
    fetch('https://api.blockspan.com/v1/nfts/owner/0xeB783b6C91Ca5d80544Ee96DC2B25D36FCFA2275?chain=eth-sepolia&include_nft_details=true&filter=all&page_size=25', options)
      .then(response => response.json())
      .then(response => {console.log(response)
        setTokenName(response.results[0].nft_details.token_name)
          setNft(response.results)
      })
      .catch(err => console.error(err));
  }

  useEffect(()=>{
    //checking for total nfts
    console.log(nft)
    if(nft.length!=0){4
      //creating a custom texture for the cube using svg's
      const b64image=nft[0].nft_details.metadata.image
      var url = (b64image as string).toString()
      let imgBlob;
  fetch(url)
  .then(async(res) => {imgBlob=await res.blob()})
  const texture = new THREE.TextureLoader().load(b64image); 
    setNftTexture(texture)
  console.log(texture)
    }
  },[nft])
  //awaiting phatom wallet connection
  const phatomHandler=async()=>{
    //getting browser injected provider
    const getProvider = () => {
      if ('phantom' in window) {
        const provider = (window.phantom as any)?.solana;
    
        if (provider?.isPhantom) {
          return provider;
        }
      }
      window.open('https://phantom.app/', '_blank');
      return null
    };
    const provider=getProvider()
    if(provider)
     {
      try {        
        const resp = await provider.connect();
        console.log(resp.publicKey.toString());
        setPhantomKey(resp.publicKey.toString())
        const options = {
          method: 'GET',
          headers: {accept: 'application/json', 'x-api-key': '87518e00561c476b9d8914360fb2b912'}
        };
        //fetching all nfts by connected solana acc
        fetch(`https://api.opensea.io/api/v2/chain/solana/account/${resp.publicKey.toString()}/nfts`, options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
    } catch (err) {
      console.log(err)

    }
     }
  }
  return (
    // <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
    //   <div className="py-20">
    //     <div className="flex justify-center mb-20">
    //       {/* <ConnectButton
    //         client={client}
    //         appMetadata={{
    //           name: "Example app",
    //           url: "https://example.com",
    //         }}
    //       /> */}
    //       <button style={{
    //         width:"100%"
    //       }} onClick={f}>
    //         Connect to leather(Bitcoin wallet)
    //       </button>
    //       <button onClick={f2}>
    //       Connect to metamask
    //       </button>
    //       <button onClick={f3}>
    //       Connect to coinbase
    //       </button>
    //     </div>
    //       <label htmlFor="email">Email</label>
    //     <input className="text-black" type="email" id="email" name="email" value={email} onChange={(e)=>{
    //       setEmail(e.target.value)
    //     }}/>
    //     <label htmlFor="password">Password</label>
    //     <input className="text-black" type="password" name="password" id="password" value={password} onChange={(e)=>{
    //       setPassword(e.target.value)
          
    //     }}/>
    //       <button onClick={handleLogin}>
    //         {Cookies.get('token')?'Logged in':'Login'}
    //       </button>
    //       <button onClick={handleRegister}>
    //       {Cookies.get('token')?'':'Signup'}
    //       </button>
    //       <button onClick={()=>{
    //         Cookies.remove('token')
    //       }}>
    //          {Cookies.get('token')?'Logout':''}
    //       </button>
    //   </div>
    // </main>
    <main className="h-screen">
      {/*using metamask account */}
      <button style={buttonStyle} onClick={handleFetchNFT}>Get NFT's OF METAMASK ACCOUNT</button>
      <button style={buttonStyle} onClick={phatomHandler}>{phantomKey?`Phantom acc key ${phantomKey}`:'Connect and obtain Phantom NFT\'s'}</button>
{/* 3d enviroment */}
      <Canvas>
    <OrbitControls/>
  <ambientLight intensity={1} />
  {/* <directionalLight color="red" position={[0, 10, 0]} /> */}
  <Suspense fallback={null}>
  <mesh ref={meshRef}>
    <boxGeometry />
{nftTexture?(    <meshBasicMaterial attach="material" map={nftTexture as Texture} />
):    <meshStandardMaterial />}
  </mesh>
  <Html position={[-1.5,-1,0]}>
  {nftTexture?<div className="whitespace-nowrap w-full">
    Name: {tokenName}
  </div>:''}
  </Html>
  
  </Suspense>
  
</Canvas>
    </main>
  );
}

