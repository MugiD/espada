import { Button } from "../ui/button";

export default function Hero()  {
    return (
        <section className="py-20 px-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">2nd Generation Hackathons</h1>
          <Button size="lg" variant="outline">Get Started</Button>
        </div>
      </section>
    )
}