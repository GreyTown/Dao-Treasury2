import { useState, useEffect } from "react";
import { ethers } from "ethers";
import {Header } from "./components/Header";
import {Button} from "./components/Button";
import BalanceCard from "./components/BalanceCard";

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const contractABI = [
  // Paste the ABI of your deployed contract here
];

function App() {
  return (
    <>
    <Header />
    <Button />
    <Button />
    <BalanceCard />
    </>
  );
}



// function App() {
//   const [provider, setProvider] = useState(null);
//   const [signer, setSigner] = useState(null);
//   const [contract, setContract] = useState(null);
//   const [milestoneCompleted, setMilestoneCompleted] = useState(false);
//   const [balance, setBalance] = useState("0");

//   useEffect(() => {
//     if (window.ethereum) {
//       const init = async () => {
//         const provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = await provider.getSigner();
//         const contract = new ethers.Contract(contractAddress, contractABI, signer);

//         setProvider(provider);
//         setSigner(signer);
//         setContract(contract);

//         // Fetch initial state
//         const completed = await contract.milestoneCompleted();
//         const balance = await provider.getBalance(contractAddress);

//         setMilestoneCompleted(completed);
//         setBalance(ethers.formatEther(balance));
//       };

//       init();
//     } else {
//       alert("Please install MetaMask!");
//     }
//   }, []);

//   const handleMarkMilestone = async () => {
//     if (contract) {
//       const tx = await contract.markMilestoneCompleted();
//       await tx.wait();
//       setMilestoneCompleted(true);
//     }
//   };

//   const handleWithdraw = async () => {
//     if (contract) {
//       const tx = await contract.withdrawFunds(signer.address, ethers.parseEther("1")); // Adjust amount as needed
//       await tx.wait();
//       alert("Funds withdrawn successfully!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <h1 className="text-3xl font-bold mb-4">DAO Treasury</h1>
//       <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//         <p className="text-lg mb-2">
//           Contract Balance: <span className="font-semibold">{balance} ETH</span>
//         </p>
//         <p className="text-lg mb-4">
//           Milestone Completed:{" "}
//           <span className={milestoneCompleted ? "text-green-500" : "text-red-500"}>
//             {milestoneCompleted ? "Yes" : "No"}
//           </span>
//         </p>
//         <button
//           onClick={handleMarkMilestone}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-2"
//         >
//           Mark Milestone Completed
//         </button>
//         <button
//           onClick={handleWithdraw}
//           className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//         >
//           Withdraw Funds
//         </button>
//       </div>
//     </div>
//   );
// }

export default App;