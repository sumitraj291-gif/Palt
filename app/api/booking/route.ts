import { NextResponse } from "next/server";
import { site } from "@/lib/data";

type BookingRequest = {
  destination?: unknown;
  date?: unknown;
  name?: unknown;
  phone?: unknown;
};

export async function POST(request: Request) {
  let body: BookingRequest;
  try {
    body = (await request.json()) as BookingRequest;
  } catch {
    return NextResponse.json({ error: "Please submit valid trip details." }, { status: 400 });
  }

  const destination = typeof body.destination === "string" ? body.destination.trim() : "";
  const date = typeof body.date === "string" ? body.date.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";

  if (!destination || destination.length > 120 || !name || name.length > 80 || !/^[+\d][\d\s()-]{6,19}$/.test(phone)) {
    return NextResponse.json({ error: "Please check your name, destination, and phone number." }, { status: 400 });
  }
  const parsedDate = new Date(`${date}T00:00:00.000Z`);
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
    !Number.isFinite(parsedDate.getTime()) ||
    parsedDate.toISOString().slice(0, 10) !== date
  ) {
    return NextResponse.json({ error: "Please enter a valid travel date." }, { status: 400 });
  }

  const message = [
    "Hi Pal Travels! I’d like help planning a trip.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Destination: ${destination}`,
    `Travel date: ${date}`,
  ].join("\n");
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

  return NextResponse.json({ whatsappUrl });
}
