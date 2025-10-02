import { Link } from "react-router-dom";
import { footerData } from "@/constants";
import { Twitter, Github, Linkedin, Instagram, Youtube } from "lucide-react";

/*const iconMap = {
  Twitter: Twitter,
  Github: Github,
  Linkedin: Linkedin,
  Instagram: Instagram,
  Youtube: Youtube,
};*/

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/*{footerData.links.map((group, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}*/}
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">{footerData.copyright}</p>
            <div className="flex items-center gap-4">
              {/*{footerData.socialLinks.map((link, index) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 