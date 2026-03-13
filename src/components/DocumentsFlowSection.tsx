import sectionThreeImage from "@/assets/3.png";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const DocumentsFlowSection = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,2fr] gap-8 lg:gap-12 items-center">
            {/* Left side - Text content */}
            <div
              ref={textRef}
              className={`space-y-6 transition-all duration-700 ease-out ${
                textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Работает в вашей файловой системе
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-light">
                Вы выбираете папки и файлы, в которых Flumen будет работать. ИИ-агент сам ищет нужную информацию в массиве данных и создаёт множество документов в нужных папках
              </p>
            </div>

            {/* Right side - Illustration */}
            <div
              ref={imageRef}
              className={`relative transition-all duration-700 ease-out delay-150 ${
                imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <img
                src={sectionThreeImage}
                alt="Flumen работает в вашей файловой системе"
                className="w-[250%] h-auto rounded-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsFlowSection;

