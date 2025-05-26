import Link from "next/link";
import Botao from "./components/botao/botao";

export default function Home() {
    return (
        <>
            <main>
                <section className="flex flex-col items-center p-5 my-5 bg-white rounded-lg shadow-md max-w-11/12 mx-auto w-3xl text-center gap-4">
                    <h1 className="my-2 text-center text-3xl md:text-4xl font-bold">Como posso ajudar?</h1>
                    {/* Botões */}
                    <Link href="/">
                        <Botao texto="Texto" />
                    </Link>

                    <Link href="/">
                        <Botao texto="Voz" />
                    </Link>

                    <Link href="/">
                        <Botao texto="Chat" />
                    </Link>
                </section>
            </main>
        </>
    );
}
