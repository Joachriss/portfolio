
interface ProgressBarProps {
    name: string;
    progress: number;
}
export const ProgressBar = ({name,progress}:ProgressBarProps) => {
    return (
        <div className="overflow-hidden mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-black dark:text-white">{name}</span>
                <span className="text-sm font-medium text-black dark:text-white">{progress}%</span>
            </div>
            <div className="w-full overflow-hidden bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-cyan-600 h-2.5 rounded-full" style={{width: progress + "%"}}></div>
            </div>
        </div>
    )
}
