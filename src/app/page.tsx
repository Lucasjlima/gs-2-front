import Link from "next/link";
import Botao from "./components/botao/botao";

export default function Home() {
    return (
        <>
            <main>
                <section className="fundo-conteudo">
                    <h1>Como posso ajudar?</h1>
                    {/* Botões */}
                    <Link href="/ajudaChat">
                        <Botao texto="FAQ" />
                    </Link>

                    <Link href="/">
                        <Botao texto="Chat" />
                    </Link>
                </section>
            </main>
        </>
    );
}
