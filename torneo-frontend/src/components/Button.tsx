interface ButtonProps {
    text: string
}
export default function ButtonComponent({ text }: ButtonProps) {
    return (
        <button className="group relative h-12 w-72 overflow-hidden rounded-[7px] bg-transparent text-lg shadow border border-blue-gray-200 hover:border-2 hover:border-green-400 transition-all">
            <span className="relative text-blue-gray-700 group-hover:text-white-700">{text}</span>
        </button>
    )
}