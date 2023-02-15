import { Chat } from "@pushprotocol/uiweb";
import { useAccount } from "wagmi";


const PushChat = () => {
  const { address } = useAccount()
  console.log(process.env.REACT_APP_PUSH_CHAT_API_KEY)
  return (
      <Chat
        account = {address!}//user address
        supportAddress="0x9Fb3d86157a9e2dC2a771C297f88FA9784fa4e31" //support address
        apiKey={process.env.REACT_APP_PUSH_CHAT_API_KEY}
        env="staging"
      />
  );
}

export { PushChat };