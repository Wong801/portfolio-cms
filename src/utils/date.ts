export function formatDate(date: string): string {
  const d = new Date(date)
  const month = d.getMonth() + 1
  return `${d.getFullYear()}-${month < 10 ? '0' + month : month}-${d.getDate()}`
}