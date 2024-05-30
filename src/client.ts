import { createThirdwebClient } from "thirdweb";
//E9hihmv-b1nkv28fQg8xd7wI1FwGVOxrMbez2qlOQneBvS6_SOFEQ-H3m4pJse7gRwMFgVKth6CMeco_kLwYiw secret key 
//6280c9a2c92f2109817063ba4db73d92 client id
// Replace this with your client ID string
// refer to https://portal.thirdweb.com/typescript/v5/client on how to get a client ID
const clientId = '6280c9a2c92f2109817063ba4db73d92';

export const client = createThirdwebClient({
  clientId: clientId,
});
