import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import "./MetaMask.css"
function MetaMask() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [networkId, setNetworkId] = useState(null);

  useEffect(() => {
    async function connectToMetaMask() {
      if (window.ethereum && window.ethereum.isMetaMask) {
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);

        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);

          const networkId = await web3.eth.net.getId();
          setNetworkId(networkId);

          const balance = await web3.eth.getBalance(accounts[0]);
          setBalance(balance);
        } catch (error) {
          console.error(error);
        }

        window.ethereum.on('accountsChanged', (accounts) => {
          setAccount(accounts[0]);
        });

        window.ethereum.on('chainChanged', (chainId) => {
          window.location.reload();
        });
      } else {
        console.log('MetaMask is not installed!');
      }
    }

    connectToMetaMask();
  }, []);

  const handleConnect = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts', params: [] });
      setAccount(null);
    } catch (error) {
      console.error(error);
    }
  };
  
  

  const handleSendTransaction = async () => {
    try {
      const txHash = await web3.eth.sendTransaction({
        to: '0x...',
        from: account,
        value: web3.utils.toWei('1', 'ether')
      });
      console.log(`Transaction hash: ${txHash}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="metamask-container">
      {account ? (
        <>
          <p className="metamask-text">Connected with MetaMask account: {account}</p>
          <p className="metamask-text">Account balance: {web3.utils.fromWei(balance, 'ether')} ETH</p>
          <p className="metamask-text">Network ID: {networkId}</p>
          <button className="metamask-button" onClick={handleDisconnect}>Disconnect from MetaMask</button>
          <button className="metamask-button" onClick={handleSendTransaction}>Send transaction</button>
        </>
      ) : (
        <button className="metamask-button" onClick={handleConnect}>Connect with MetaMask</button> 
      )}
    </div>
  );
}

export default MetaMask;
