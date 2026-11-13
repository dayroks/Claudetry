"use client";
import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { BOOKING_TIMES, MAX_GUESTS } from "@/lib/constants";
import { Button } from "../ui/Button";
import { Field, Input, Select } from "../ui/Input";
import { SectionTitle } from "../ui/SectionTitle";

type Values = { name: string; phone: string; date: string; time: string; guests: string };
type Errors = Partial<Record<keyof Values, string>>;
const empty: Values = { name: "", phone: "", date: "", time: "", guests: "2" };

// Валідація на клієнті
function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Вкажи ім'я (мін. 2 символи)";
  if (!/^\+?[0-9\s()-]{10,16}$/.test(v.phone.trim())) e.phone = "Невірний номер телефону";
  if (!v.date) e.date = "Обери дату";
  else if (new Date(v.date) < new Date(new Date().toDateString())) e.date = "Дата вже минула";
  if (!v.time) e.time = "Обери час";
  return e;
}

export function Booking() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [today, setToday] = useState("");

  useEffect(() => setToday(new Date().toISOString().split("T")[0]), []);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setV((p) => ({ ...p, [k]: e.target.value }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const err = validate(v);
    setErrors(err);
    if (Object.keys(err).length) return;
    setLoading(true);
    // TODO: підключити реальний API (fetch("/api/booking"))
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setToast(true);
    setV(empty);
  };

  const aria = (k: keyof Values) => ({ "aria-invalid": !!errors[k], "aria-describedby": `${k}-err` });

  return (
    <section id="booking" aria-labelledby="book-title" className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <SectionTitle kicker="/ бронювання" title="ЗАБРОНЮЙ СТІЛ" id="book-title" />
      <form onSubmit={onSubmit} noValidate className="grid gap-x-10 gap-y-2 sm:grid-cols-2">
        <Field label="Ім'я" id="name" error={errors.name}>
          <Input id="name" autoComplete="name" placeholder="Юрій" value={v.name} onChange={set("name")} {...aria("name")} />
        </Field>
        <Field label="Телефон" id="phone" error={errors.phone}>
          <Input id="phone" type="tel" autoComplete="tel" placeholder="+380 ..." value={v.phone} onChange={set("phone")} {...aria("phone")} />
        </Field>
        <Field label="Дата" id="date" error={errors.date}>
          <Input id="date" type="date" min={today} value={v.date} onChange={set("date")} {...aria("date")} />
        </Field>
        <Field label="Час" id="time" error={errors.time}>
          <Select id="time" value={v.time} onChange={set("time")} {...aria("time")}>
            <option value="">Обери час</option>
            {BOOKING_TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
          </Select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Кількість гостей" id="guests">
            <Select id="guests" value={v.guests} onChange={set("guests")}>
              {Array.from({ length: MAX_GUESTS }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
            </Select>
          </Field>
        </div>
        <div className="mt-6 sm:col-span-2">
          <Button type="submit" variant="solid" disabled={loading} className="w-full sm:w-auto">
            {loading ? (<><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Надсилаємо…</>) : "Забронювати"}
          </Button>
        </div>
      </form>

      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4" role="status" aria-live="polite">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}
              className="pointer-events-auto flex items-center gap-3 rounded-card border border-neon/40 bg-elevated px-5 py-4 shadow-glow"
            >
              <CheckCircle2 className="text-neon" size={20} aria-hidden="true" />
              <span className="text-sm">Столик заброньовано. Ми зателефонуємо для підтвердження.</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
