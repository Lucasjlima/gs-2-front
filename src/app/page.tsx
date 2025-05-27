import Link from "next/link";
import Botao from "./components/botao/botao";

export default function Home() {
    return (
        <>
            <main>
                <section className="section-conteudo">
                    <h1>Como posso ajudar?</h1>
                    {/* Botões */}
                    <Link href="/faq">
                        <Botao texto="FAQ" />
                    </Link>

                    <Link href="/ajudaChat">
                        <Botao texto="Chat" />
                    </Link>
                </section>
            </main>
        </>
    );
}
