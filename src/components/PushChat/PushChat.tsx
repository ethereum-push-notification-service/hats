import React from 'react';
import { Chat, ITheme } from '@pushprotocol/uiweb';
import { useAccount } from "wagmi";

export const PushChat = () => {
  const theme: ITheme = {
    bgColorPrimary: 'white',
    bgColorSecondary: '#001670',
    textColorPrimary: 'black',
    textColorSecondary: 'white',
    btnColorPrimary: '#001670',
    btnColorSecondary: 'white',
    borderRadius: '40px',
    moduleColor: 'white',
  };
  const supportAddress = "0x9Fb3d86157a9e2dC2a771C297f88FA9784fa4e31";
  const apiKey = process.env.REACT_APP_PUSH_CHAT_API_KEY;
  const { address } = useAccount()
  
  return (
    <Chat
      account = {address!}
      supportAddress= {supportAddress}
      apiKey={apiKey}
      env="staging"
      theme={theme}
    />
  );
};