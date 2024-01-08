import Button from '@/components/Button'
import ImageGenerator from '@/components/ImageGenerator'

export default function Home() {
  return (
    <div className="max-w-5xl w-full font-mono text-sm">
      <h1>Alpaca Generator</h1>
      <div>
        <ImageGenerator />
        <div className="flex">
          <Button>Generate</Button>
          <Button>Random</Button>
        </div>
      </div>
    </div>
  )
}
