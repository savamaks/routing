
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      main page
      <br />
      
      <Link  href="/one">One</Link>
      <br />
      <Link  href="/two">Two</Link>

    </main>
  )
}
