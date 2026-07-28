import Card from "../ui/Card";
import CardHeader from "../ui/CardHeader";
import { Globe } from "lucide-react";

const attackSources = [
  { country: "🇮🇳 India", attacks: 340 },
  { country: "🇺🇸 USA", attacks: 285 },
  { country: "🇷🇺 Russia", attacks: 190 },
  { country: "🇨🇳 China", attacks: 145 },
  { country: "🇩🇪 Germany", attacks: 92 },
];

const maxAttacks = Math.max(
  ...attackSources.map((item) => item.attacks)
);

function TopAttackSources() {
  return (
    <Card className="p-6">
      <CardHeader
        icon={<Globe size={22} />}
        title="Top Attack Sources"
        subtitle="Countries generating the most threats"
      />

      <div className="space-y-5">
        {attackSources.map((item) => {
          const percentage = (item.attacks / maxAttacks) * 100;

          return (
            <div key={item.country}>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  {item.country}
                </span>

                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {item.attacks}
                </span>
              </div>

              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                <div
                  className="
                    h-full
                    rounded-full

                    bg-linear-to-r
                    from-blue-500
                    to-cyan-500

                    transition-all
                    duration-700
                  "
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

export default TopAttackSources;