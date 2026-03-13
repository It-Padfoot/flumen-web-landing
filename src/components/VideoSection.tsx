import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import demoVideo from "@/assets/demo-video.mp4";

const VideoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-[#EDF6FF]">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto" ref={ref}>
          <div
            className={`relative w-full aspect-video overflow-hidden transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={demoVideo} type="video/mp4" />
            </video>

            <div
              className="pointer-events-none absolute inset-x-0 top-0 bg-[#EDF6FF]"
              style={{ height: "14px" }}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 bg-[#EDF6FF]"
              style={{ height: "14px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
