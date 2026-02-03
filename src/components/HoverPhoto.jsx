import HeroImg from "@/assets/images/hero.jpg";
import SportImg from "@/assets/images/sport.jpg";

export default function HoverPhoto() {
    return (
        <div className="relative rounded-[15px] overflow-hidden">
            {/* Base image */}
            <img
                src={HeroImg}
                alt="Hero"
                className="block w-full h-auto transition-opacity duration-500"
            />

            {/* Hover image */}
            <img
                src={SportImg}
                alt="Sport"
                className="
          absolute inset-0
          w-full h-full
          object-cover
          opacity-0
          transition-opacity duration-500
          hover:opacity-100
        "
            />
        </div>
    );
}
