const pastelColors: string[] = [
  "#F6C101",
  "#FF7F00",
  "#77CC55",
  "#4F8EF7",
  "#7B62A3",
  "#FF9EB5",
  "#FFD700",
  "#6B5B95",
  "#A0522D",
  "#6FA8DC",
  "#4A708B",
  "#FF4500",
  "#1E90FF",
  "#FF8C42",
  "#FFA500",
  "#87CEEB",
  "#FF3030",
  "#FFD700",
  "#F4A460",
  "#8B4513",
];

export const getRandomPastelColor = (): string => {
  const randomIndex: number = Math.floor(Math.random() * pastelColors.length);

  return pastelColors[randomIndex];
};
