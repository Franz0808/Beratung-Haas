export function asset(src: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${src}`
}
