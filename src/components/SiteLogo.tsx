import Logo from "@/assets/siteLogo.svg";

type SiteLogoProps = {
    width?: number;
    height?: number;
    className?: string;
};

export default function SiteLogo({
    width = 40,
    height = 40,
    className = ""
}: SiteLogoProps) {
    return (
        <img
            src={Logo}
            alt="Site Logo"
            width={width}
            height={height}
            className={`min-h-10 min-w-10 rounded-full object-cover ${className}`}
        />
    );
}