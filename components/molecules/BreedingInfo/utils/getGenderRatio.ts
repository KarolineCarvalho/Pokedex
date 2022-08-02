export const getGenderRatio = (
  ratio: number
): { female: number; male: number } | "unknown" => {
  if (ratio === -1) return "unknown";
  return { male: 100 - (100 * ratio) / 8, female: (100 * ratio) / 8 };
};
