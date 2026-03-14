import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-0">
      {/* Content */}
      <div className="container relative z-10 px-4 pt-20 pb-0">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up text-foreground">
            ИИ-агент для документов
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light text-muted-foreground animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            Создаёт, редактирует и оформляет документы так, как сделали бы вы сами — только быстрее и без рутины.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            <Button
              asChild
              size="lg"
              className="h-14 px-16 bg-[#167EDD] hover:bg-[#167EDD]/90 text-white font-semibold text-lg"
            >
              <a href={`${import.meta.env.BASE_URL}Flumen.zip`} download="Flumen.zip">
                <Download className="mr-2 h-6 w-6" />
                Скачать плагин
              </a>
            </Button>
          </div>
        </div>

        {/* Chat interface mockup */}
        <div className="relative mt-20 mb-0 animate-scale-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards] overflow-hidden h-[50vh]">
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <img 
              src={heroMockup}
              alt="Flumen AI assistant interface in document editor"
              className="w-full h-auto object-top rounded-t-2xl"
              style={{ clipPath: 'inset(0 0 25% 0)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
