
import { useState,useEffect } from "react";
import { connectionStatusType,defaultConnectionStatus} from "./types";
import { BrowserProvider } from "ethers";
//connecting to coinbase, leather and metamask
export function App() {
  useEffect(()=>{
    
  })
  const [connectionData,updateConnectionData]=useState<connectionStatusType>(defaultConnectionStatus);
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
          <div onClick={()=>{
            console.log(connectionData)
          }}>
            Check connected wallets
          </div>
      </div>
    </main>
  );
}

