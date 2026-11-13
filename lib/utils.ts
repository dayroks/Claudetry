/** Об'єднання класів без зайвих залежностей */
export function cn(...c: Array<string | false | null | undefined>): string {
  return c.filter(Boolean).join(" ");
}
