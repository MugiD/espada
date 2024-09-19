import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Users, Rocket, Award } from "lucide-react";

const HackathonsLeagueLanding = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="bg-white flex justify-around items-center py-20 px-16">
        <div className="container mx-auto text-left">
          <h1 className="text-6xl font-bold mb-4">HackTuah</h1>
          <p className="text-xl mb-8">Participation made easier!</p>
          <Button size="lg">Get Started</Button>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            About Hackathons League
          </h2>
          <p className="text-lg mb-8 text-center">
            Hackathons League is a community-driven platform connecting
            developers, designers, and innovators through competitive
            hackathons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* How It Works Section */}
      <section className="bg-gray-200 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "Create an Account",
                icon: <Users className="h-12 w-12 mb-4" />,
              },
              {
                title: "Form or Join a Team",
                icon: <Users className="h-12 w-12 mb-4" />,
              },
              {
                title: "Compete in Hackathons",
                icon: <Rocket className="h-12 w-12 mb-4" />,
              },
              {
                title: "Track Progress & Win",
                icon: <Trophy className="h-12 w-12 mb-4" />,
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                {step.icon}
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p>Step {index + 1} in your hackathon journey.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Hackathons Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Upcoming Hackathons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["AI Challenge", "Web3 Innovate", "Green Tech Hackathon"].map(
              (hackathon, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{hackathon}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Join us for an exciting hackathon focused on{" "}
                      {hackathon.toLowerCase()}.
                    </p>
                    <Button className="mt-4">Register Now</Button>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="bg-gray-200 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Top Teams</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ul>
              {[
                "Team Alpha",
                "Innovators",
                "TechWizards",
                "CodeCrusaders",
                "ByteBusters",
              ].map((team, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-2 border-b last:border-b-0"
                >
                  <span>{team}</span>
                  <span className="font-bold">{1000 - index * 50} points</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View Full Leaderboard</Button>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Join Hackathons League?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Compete against top teams",
                icon: <Trophy className="h-12 w-12 mb-4" />,
              },
              {
                title: "Improve your skills",
                icon: <Award className="h-12 w-12 mb-4" />,
              },
              {
                title: "Earn rewards and prizes",
                icon: <Award className="h-12 w-12 mb-4" />,
              },
              {
                title: "Connect with innovators",
                icon: <Users className="h-12 w-12 mb-4" />,
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                {benefit.icon}
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HackathonsLeagueLanding;
