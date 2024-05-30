
import { useState,useEffect } from "react";
import { connectionStatusType,defaultConnectionStatus} from "./types";
import { BrowserProvider } from "ethers";
import {auth,database} from './firebase'
import {  ref, set, update } from "firebase/database";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import Cookies from 'js-cookie';
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
  const [email,setEmail]=useState<string>("")
  const [password,setPassword]=useState<string>("")
  const [connectionData,updateConnectionData]=useState<connectionStatusType>(defaultConnectionStatus);
  
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
  };
  
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <div className="flex justify-center mb-20">
          {/* <ConnectButton
            client={client}
            appMetadata={{
              name: "Example app",
              url: "https://example.com",
            }}
          /> */}
          <button style={{
            width:"100%"
          }} onClick={f}>
            Connect to leather(Bitcoin wallet)
          </button>
          <button onClick={f2}>
          Connect to metamask
          </button>
          <button onClick={f3}>
          Connect to coinbase
          </button>
        </div>
          <label htmlFor="email">Email</label>
        <input className="text-black" type="email" id="email" name="email" value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
        <label htmlFor="password">Password</label>
        <input className="text-black" type="password" name="password" id="password" value={password} onChange={(e)=>{
          setPassword(e.target.value)
          
        }}/>
          <button onClick={handleLogin}>
            {Cookies.get('token')?'Logged in':'Login'}
          </button>
          <button onClick={handleRegister}>
          {Cookies.get('token')?'':'Signup'}
          </button>
          <button onClick={()=>{
            Cookies.remove('token')
          }}>
             {Cookies.get('token')?'Logout':''}
          </button>
      </div>
    </main>
  );
}

