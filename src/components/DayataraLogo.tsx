import logo from "@/assets/logo/logo-icon.png";

type Props = { className?: string; mono?: boolean };

export function DayataraLogo({ className }: Props) {
  return <img src={logo} alt="Dayatara" className={`object-contain ${className ?? ""}`} />;
}
