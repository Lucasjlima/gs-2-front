import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Integrantes = () => {

    return (
        <>
            <main>
                <section className="fundo-conteudo">
                    <h1>
                        Conheça nossa equipe
                    </h1>

                    <div>
                        <article className="article-integrante">
                            <Image
                                src="/images/foto-eduardo.jpg"
                                alt="Foto do integrante Eduardo Osterloh Bindo"
                                width={500}
                                height={500}
                                className="foto-integrante"
                            />
                            <h3>
                                Eduardo Osterloh Bindo
                            </h3>
                            <p>RM: 559755</p>
                            <p>Turma: 1TDSPA</p>
                            <a
                                href="https://www.linkedin.com/in/eduardo-osterloh-bindo-500b02268/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icone-linkedin"
                            >
                                <FaLinkedin />
                            </a>
                        </article>

                        <article className="article-integrante">
                            <Image
                                src="/images/foto-lucas.jpg"
                                alt="Foto do integrante Lucas José Lima"
                                width={500}
                                height={500}
                                className="foto-integrante"
                            />
                            <h3>
                                Lucas José Lima
                            </h3>
                            <p>RM: 561160</p>
                            <p>Turma: 1TDSPA</p>
                            <a
                                href="https://www.linkedin.com/in/lucasjos%C3%A9lima/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icone-linkedin"
                            >
                                <FaLinkedin />
                            </a>
                        </article>

                        <article className="article-integrante">
                            <Image
                                src="/images/foto-rangel.jpg"
                                alt="Foto do integrante Rangel Bernardi Jordão"
                                width={500}
                                height={500}
                                className="foto-integrante"
                            />
                            <h3>
                                Rangel Bernardi Jordão
                            </h3>
                            <p>RM: 560547</p>
                            <p>Turma: 1TDSPA</p>
                            <a
                                href="https://www.linkedin.com/in/rangel-jord%C3%A3o-819334234/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icone-linkedin"
                            >
                                <FaLinkedin />
                            </a>
                        </article>
                    </div>

                    <h2 className="text-2xl font-semibold mt-10">
                        GitHub da equipe
                    </h2>
                    <a
                        href="https://github.com/signalProteam"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-800 text-5xl hover:text-black transition inline-block mt-2"
                    >
                        <FaGithub />
                    </a>
                </section>
            </main>
        </>
    );
};

export default Integrantes;