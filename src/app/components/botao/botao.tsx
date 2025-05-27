import React from "react";

type BotaoProps = {
    type?: "button" | "submit";
    texto?: string;
}

const Botao: React.FC<BotaoProps> = ({
    type = "button",
    texto = ""
}) => {
    return (
        <>
            <button type={type} className="bg-blue-600 text-white border border-gray-800 rounded-md py-3 m-2 text-base cursor-pointer w-64 transition-colors duration-300 hover:bg-blue-700">
                {texto}
            </button>
        </>
    )
}

export default Botao;