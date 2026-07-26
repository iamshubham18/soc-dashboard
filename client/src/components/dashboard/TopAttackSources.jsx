const attackSources = [
  { country: "🇮🇳 India", attacks: 340 },
  { country: "🇺🇸 USA", attacks: 285 },
  { country: "🇷🇺 Russia", attacks: 190 },
  { country: "🇨🇳 China", attacks: 145 },
  { country: "🇩🇪 Germany", attacks: 92 },
];

const maxAttacks = Math.max(...attackSources.map((item) => item.attacks));

function TopAttackSources() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-semibold mb-6">
        🌍 Top Attack Sources
      </h2>

      <div className="space-y-5">
        {attackSources.map((item) => (
          <div key={item.country}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{item.country}</span>
              <span className="text-slate-500">
                {item.attacks} attacks
              </span>
            </div>

            <div className="w-full h-3 bg-slate-200 rounded-full">
              <div
                className="h-3 rounded-full bg-blue-600"
                style={{
                  width: `${(item.attacks / maxAttacks) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopAttackSources;