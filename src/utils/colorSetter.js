function generateSoftColor(seed) {
  const hue = seed % 360;
  const saturation = 75;
  const lightness = 70;
  return [
    `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    `hsl(${hue}, ${saturation}%, ${lightness - 20}%)`,
    `hsl(${hue}, ${saturation}%, ${lightness + 15}%)`,
  ];
}

function setSoftPrimaryColor() {
  const now = new Date();
  const seed = now.getHours() * 60 + now.getMinutes();
  const [softColor, darkColor, lightColor] = generateSoftColor(seed);

  document.documentElement.style.setProperty("--primclr-shadow", darkColor);
  document.documentElement.style.setProperty("--primclr-light", lightColor);
  document.documentElement.style.setProperty("--primclr", softColor);
}

export { setSoftPrimaryColor };
