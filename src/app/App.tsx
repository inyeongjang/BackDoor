import { Menu, ArrowRight, Play } from "lucide-react";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">BackDoor</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">About</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Activity</a>
            <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Recruit</a>
            <Button className="bg-black text-white border border-white hover:bg-white/10 px-4 py-2 text-sm">Contact Us →</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0" style={{backgroundColor: "#231F20"}}></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex items-center justify-between gap-12">
          {/* Left Side - Logo */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <img src="/logo_black.jpg" alt="BackDoor Logo" className="w-full max-w-2xl h-auto object-contain" />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight font-bold leading-tight">
              Knock Knock,
              <br />
              We're Already In.
            </h1>
            <p className="text-base md:text-lg text-white/60 mb-6">
              덕성여자대학교 사이버보안 동아리 BackDoor,
            </p>
            <p className="text-base md:text-lg text-white/60">
              열수 없는 문을 함께 열어냅니다.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6" style={{backgroundColor: "white"}}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl mb-20 text-center text-black underline">
            About Us
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Minimalist Design", desc: "Clean, focused, and distraction-free interfaces that put your content first." },
              { title: "Premium Quality", desc: "Every detail crafted with precision and attention to excellence." },
              { title: "Modern Tech", desc: "Built with cutting-edge technology for optimal performance." }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="group p-8 border border-gray-300 hover:border-gray-400 transition-all duration-300 hover:bg-gray-50"
              >
                <div className="text-6xl mb-4 text-gray-300 group-hover:text-gray-400 transition-colors">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-2xl mb-4 text-black">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6" style={{backgroundColor: "#231F20"}}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl mb-8">
            Ready to experience
            <br />
            <span className="italic">the difference?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12">
            Join thousands who have already made the switch to elegance.
          </p>
          <Button className="bg-white text-black hover:bg-white/90 px-10 py-7 text-lg">
            Start Your Journey
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6" style={{backgroundColor: "#231F20"}}>
        <div className="max-w-7xl mx-auto">
          <div className="pt-8 border-t border-white/10 text-center text-sm text-white/50">
            © 2026 BackDoor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
