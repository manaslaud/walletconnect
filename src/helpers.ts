import Cookies from "js-cookie";
import {jwtDecode} from 'jwt-decode';

export const checkExpiry = () => {
    const token = Cookies.get('jwtToken');
    if (!token) {
        return true;
    }
    const decodedToken: any = jwtDecode(token);
    const currentTime: number = Date.now() / 1000;
    if(decodedToken.exp < currentTime){
        return true;
    }
    else{
        return false;
  }
}

export const b64toBlob = (b64Data:string, contentType='', sliceSize=512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
  
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
      
    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }