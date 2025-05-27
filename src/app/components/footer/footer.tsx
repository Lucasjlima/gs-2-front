export function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <>
            <footer className="text-center bg-blue-300 py-1 mt-auto bottom-0 inset-x-0">
                <p>&copy; {anoAtual}</p>
            </footer>
        </>
    )
}