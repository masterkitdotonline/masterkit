import { themes } from "@/lib/tools";

const sizes = {
  sm: { box: "h-9 w-9 rounded-xl", icon: 18 },
  md: { box: "h-12 w-12 rounded-2xl", icon: 24 },
  lg: { box: "h-16 w-16 rounded-2xl", icon: 32 },
};

export default function ToolIcon({ icon: Icon, theme = "blue", size = "md", className = "" }) {
  const t = themes[theme] || themes.blue;
  const s = sizes[size] || sizes.md;

  return (
    <div
      className={`flex shrink-0 items-center justify-center bg-gradient-to-br ${t.gradient} text-white shadow-lg ${t.glow} ring-4 ${t.ring} ${s.box} ${className}`}
    >
      <Icon size={s.icon} strokeWidth={2.2} />
    </div>
  );
}
