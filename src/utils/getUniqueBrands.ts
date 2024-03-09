export default function getUniqueBrands(arr: string[]): string[] {
  const hashMap: { [key: string]: boolean } = {};
  return arr.filter((item) => {
    if (typeof item === "string") {
      if (!hashMap[item]) {
        hashMap[item] = true;
        return item;
      }
    }
  });
}
