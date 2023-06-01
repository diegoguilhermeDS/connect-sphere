import Link from "next/link";

export default function NotFoundPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Ops!!! Página não encontrar :(</h1>
            <Link href={"/"}>Voltar</Link>
        </main>
    )
}