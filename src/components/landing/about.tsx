import { Card, CardTitle, CardHeader, CardContent } from "../ui/card";


export default function About() {
    return (
        <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            About Hackathons League
          </h2>
          <p className="text-lg mb-8 text-center">
            Hackathons League is a community-driven platform connecting
            developers, designers,<br /> and innovators through competitive
            hackathons.
          </p>
          <div className="grid grid-cols-1 w-[50%] m-auto gap-8">
            {[
              "Real-time leaderboard",
              "Team collaboration",
              "Exciting prizes",
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{feature}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Experience the thrill of {feature.toLowerCase()} in our
                    hackathons.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
}