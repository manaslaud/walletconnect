export interface connectionStatusType{
    leather:{
        isConnected:boolean,
        address:string
    },
    metamask:{
        isConnected:boolean,
        address:string
    },
    coinbase:{
        isConnected:boolean,
        address:string
    }
}
export const defaultConnectionStatus:connectionStatusType={
    leather:{
        isConnected:false,
        address:''
    },
    metamask:{
        isConnected:false,
        address:''
    },
    coinbase:{
        isConnected:false,
        address:''
    }
}