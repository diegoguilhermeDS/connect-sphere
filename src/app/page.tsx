import Button from '@/components/Button'
import Form from '@/components/Form'
import Input from '@/components/Input'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Login Page</h1>
      <Form>
        <Input type='email' name='email' placeholder='Digite seu e-mail'/>
        <Input type='password' name='password' placeholder='Digite sua senha'/>
        <Button>Entrar</Button>
      </Form>
      <Link href={"/register"}>cadastrar-se</Link>
    </main>
  )
}
