import { redirect } from 'next/navigation'
 
export default function App() {
    return(
    <main className="min-h-screen">
         {redirect('/Home')}
    </main>
    )
}