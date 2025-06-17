'use client'
type SavingGoalProps = {
    goal: number
    current: number
}

export default function SavingGoal({ goal, current }: SavingGoalProps) {
    const percentage = Math.min((current / goal) * 100, 100)

    return (
        <div className="p-4 rounded-2xl shadow-md bg-white w-full max-w-md">
            
            <div className="text-sm text-gray-600 mb-1">
                เก็บแล้ว: {current.toLocaleString()} / {goal.toLocaleString()} บาท
            </div>
            <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                <div
                    className="h-full bg-green-500 transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <div className="text-right text-xs text-gray-500 mt-1">
                {Math.floor(percentage)}%
            </div>
        </div>
    )
}
