export default function getUniqueIds(ids: string[]): string[] {
  return Array.from(new Set(ids));
}
