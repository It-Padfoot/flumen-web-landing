import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { useActiveSection } from "@/hooks/use-active-section";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = useActiveSection();

  const navItems = [
    { label: "Главная", id: "hero" },
    { label: "О проекте", id: "about" },
    { label: "Подписки", id: "pricing" },
    { label: "Контакты", id: "contacts" },
  ];

  const handleNavClick = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex-shrink-0">
            <img src={logo} alt="Frankie AI Logo" className="h-6" />
          </Link>

          {/* Menu Items */}
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                className={`text-base cursor-pointer transition-colors duration-300 hover:bg-transparent ${
                  activeSection === item.id 
                    ? "text-[#167EDD]" 
                    : "text-foreground hover:text-[#167EDD]"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Download Button */}
          <Button
            asChild
            variant="outline"
            className="bg-white border-2 border-[#167EDD] text-[#167EDD] hover:bg-[#167EDD]/10"
          >
            <a href={`${import.meta.env.BASE_URL}Flumen.zip`} download="Flumen.zip">
              <Download className="mr-2 h-4 w-4" />
              Скачать
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
