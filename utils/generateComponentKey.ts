function generateRandomString(size: number): string {
  const allowed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let text = '';

  for (let j = 0; j <= size; j += 1) {
    text += allowed.charAt(Math.floor(Math.random() * allowed.length));
  }

  return text;
}

export function* generateComponentKey() {
  while (true) {
    yield generateRandomString(10);
  }
}
