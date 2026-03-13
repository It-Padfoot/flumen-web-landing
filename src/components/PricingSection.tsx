import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PricingSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const plans = [
    {
      level: "free",
      price: 0,
      title: "Пробный",
      options: [
        "50 баллов / месяц",
        "ИИ-агент, который:",
        "Редактирует несколько документов за один запрос",
        "Изучает и анализирует файлы, папки в вашей файловой системе и ищет веб-страницы",
        "Запоминает особенности вашей работы",
      ],
      highlighted: false,
    },
    {
      level: "standard",
      price: 1500,
      title: "Профессиональный",
      options: [
        "1000 баллов / месяц",
        "ИИ-агент, который:",
        "Редактирует несколько документов за один запрос",
        "Изучает и анализирует файлы, папки в вашей файловой системе и ищет веб-страницы",
        "Запоминает особенности вашей работы",
        "Ваша цифровая копия в формировании документов",
      ],
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div 
            ref={headerRef}
            className={`text-center mb-16 space-y-4 transition-all duration-700 ease-out ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Выберите свой план
            </h2>
          </div>

          {/* Pricing Cards */}
          <div ref={cardsRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={plan.level}
                className={`relative p-8 flex flex-col min-h-[550px] transition-all duration-700 ease-out hover:-translate-y-2 ${
                  cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${
                  plan.highlighted
                    ? "border-[#167EDD] border-2 shadow-xl"
                    : "border-border"
                }`}
                style={{
                  transitionDelay: cardsVisible ? `${index * 150}ms` : "0ms"
                }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#167EDD] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярно!
                  </div>
                )}

                <div className="flex-grow flex flex-col space-y-6">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-foreground">
                    {plan.title}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">
                      ₽{plan.price}
                    </span>
                    <span className="text-muted-foreground">/ месяц</span>
                  </div>

                  {/* Options */}
                  <ul className="space-y-3 flex-grow list-none pl-0">
                    {plan.options.map((option, index) =>
                      option === "ИИ-агент, который:" ? (
                        <li key={index} className="text-muted-foreground font-medium pt-1 pb-0.5">
                          ИИ-агент, который:
                        </li>
                      ) : (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#167EDD] flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{option}</span>
                        </li>
                      )
                    )}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full h-12 text-lg mt-auto ${
                      plan.highlighted
                        ? "bg-[#167EDD] hover:bg-[#167EDD]/90 text-white"
                        : "bg-transparent border-2 border-[#167EDD] text-[#167EDD] hover:bg-[#167EDD] hover:text-white"
                    }`}
                  >
                    <a href="https://editor.flumen.tech/settings/plan" target="_blank" rel="noopener noreferrer">
                      Выбрать план
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
