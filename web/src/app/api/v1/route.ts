import data from "@/app/data/v1";

export async function GET() {
  return Response.json({ success: true, data }, { status: 200 });
}
