// src/components/BalanceCard.jsx
export default function BalanceCard({ balance, milestoneCompleted }) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <p className="text-lg mb-2">
          Contract Balance: <span className="font-semibold">{balance} ETH</span>
        </p>
        <p className="text-lg mb-4">
          Milestone Completed:{" "}
          <span className={milestoneCompleted ? "text-green-500" : "text-red-500"}>
            {milestoneCompleted ? "Yes" : "No"}
          </span>
        </p>
      </div>
    );
  }