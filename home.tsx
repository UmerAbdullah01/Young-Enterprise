import TemperatureDisplay from "@/components/temperature-display";
import ProductFeatures from "@/components/product-features";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
                HOTNCOLD
              </h1>
              <p className="text-2xl font-semibold text-primary/80 mb-6">
                Sip Smarter, Live Better and Stay Hydrated
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                The smart thermos that keeps your drinks at the perfect
                temperature, all day long.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/Young Enterprise product.png"
                alt="Smart Thermos"
                className="top 25 right 40 w-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Temperature Display */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Smart Temperature Control
          </h2>
          <TemperatureDisplay />
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ProductFeatures />
        </div>
      </section>

      {/* Who are we Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Who Are We?</h2>
          <Card className="max-w-3xl mx-auto p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a team of 8 students, we are 14-15 years old and currently
              studying at the British School in the Netherlands. With the
              guidance of Ms Smith and Mr Valot who are teachers at the British
              School in the Netherlands; and Mr Trimbos who is our business
              advisor, we are participating in the Dutch Jong Ondernemen
              competition of 2024-2025.
            </p>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <Card className="max-w-xl mx-auto p-8">
            <div className="space-y-4 text-center">
              <p className="text-lg text-muted-foreground">
                Have questions about hotNcold? We'd love to hear from you!
              </p>
              <div className="space-y-2">
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">
                  MyloJenkins@bsnstudent.nl
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Address</p>
                <p className="text-muted-foreground">
                  Jan Van Hooflaan 3
                  <br />
                  Voorschoten
                  <br />
                  Netherlands
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
