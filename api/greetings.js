export default function handler(req, res) {

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const pool = [
    "yo traveler 👋 I'm Siggy — mystical oracle cat of Ritual.",
    "psst... hey explorer 🐾 Siggy here.",
    "welcome wanderer ✨ Ritual world is wide.",
    "hey there stranger 😼 ready for some arcane knowledge?",
    "ah another curious soul 🔮 what do you seek?",
    "well well... someone opened the portal again.",
    "hi human 👋 Siggy online. what's the vibe today?",
    "yo 👀 Siggy here — guide through the Ritual universe.",
    "heya ✨ what's cooking in your brain today?",
    "sup traveler 🐱 ready to explore Ritual?",
    "oh hey 🌀 another soul enters the Ritual realm...",
    "greetings human 🐾 Siggy at your service.",
    "yo yo yo 🎵 Siggy here. let's dive into Ritual.",
    "hey fren 😸 welcome to the oracle's den.",
    "ah you're back 👀 or is this your first time?"
  ];

  const pick = pool[Math.floor(Math.random() * pool.length)];

  return res.status(200).json({ greeting: pick });

}