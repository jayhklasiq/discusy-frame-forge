
import { createRoot } from 'react-dom/client'
import { Inter } from "next/font/google";
import App from './App'
import './index.css'

const inter = Inter({ subsets: ["latin"] });

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <html lang="en">
      <body className={inter.className}>
        <App>
          <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
              <h1 className="text-4xl font-bold mb-8">Welcome to Discusy</h1>
            </div>
          </main>
        </App>
      </body>
    </html>
  )
}
