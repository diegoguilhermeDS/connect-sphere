import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Register Page</h1>
            <Form>
                <Input type="text" name="name" placeholder="Digite seu nome"/>
                <Input type="email" name="email" placeholder="Digite seu e-mail"/>
                <Input type="password" name="password" placeholder="Digite seu password"/>
                <Input type="tel" name="phone" placeholder="Digite seu telefone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                <Button>Cadastrar</Button>
            </Form>
            <Link href={"/"}>Voltar</Link>
        </main>
    )
}