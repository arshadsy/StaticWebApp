function generateSoftColor(seed) {
  const hue = seed % 360;
  const saturation = 75;
  const lightness = 80;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function setSoftPrimaryColor() {
  const now = new Date();
  const seed = now.getHours() * 60 + now.getMinutes();
  const softColor = generateSoftColor(seed);

  document.documentElement.style.setProperty("--primclr", softColor);
}

export { setSoftPrimaryColor };
