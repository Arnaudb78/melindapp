interface ButtonProps {
    onClick: () => void;
    name: string;
}

export default function Button({ onClick, name }: ButtonProps) {
    return (
        <>
            <button onClick={onClick} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-800 animate-bounce">
                {name}
            </button>
        </>
    );
}
