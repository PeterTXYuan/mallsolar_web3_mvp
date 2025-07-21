import './index.css';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import MallSolar from './contracts/MallSolar.json';

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

function App() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [location, setLocation] = useState('');
  const [energy, setEnergy] = useState('');

  useEffect(() => {
    console.log('Contract address is', CONTRACT_ADDRESS);
  }, []);

  const connect = async () => {
    if (!window.ethereum) return alert("Please install MetaMask");
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const addr = await signer.getAddress();
    const c = new ethers.Contract(CONTRACT_ADDRESS, MallSolar.abi, signer);
    setAccount(addr);
    setContract(c);
  };

  const register = async () => {
    if (!location || !energy) return alert("Please fill all fields");
    try {
      const tx = await contract.registerAsset(location, Number(energy));
      await tx.wait();
      alert("✅ Asset registered!");
    } catch (err) {
      console.error(err);
      alert("Transaction failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 className="text-4xl font-bold text-center text-blue-1200">
        MallSolar Web3 MVP
      </h1>
      {account ? (
        <>
          <p>Connected: {account}</p>
          <input
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            style={{ padding: 8, marginBottom: 10 }}
          /><br />
          <input
            placeholder="Energy (kWh)"
            value={energy}
            onChange={e => setEnergy(e.target.value)}
            style={{ padding: 8, marginBottom: 10 }}
          /><br />
          <button onClick={register} style={{ padding: 10 }}>Register Asset</button>
        </>
      ) : (
        <button onClick={connect} style={{ padding: 10 }}>Connect MetaMask</button>
      )}
    </div>
  );
}

export default App;

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white flex items-center justify-center">
//       <h1 className="text-5xl font-bold">🌈 Tailwind Working!</h1>
//     </div>
//   );
// }