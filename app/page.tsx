import Hero from '@/components/Hero'
import getLogger from '@/utils/log-util'

const logger = getLogger("home");

export default function Home() {

  logger.info("Home page called!")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
    </main>
  )
}
