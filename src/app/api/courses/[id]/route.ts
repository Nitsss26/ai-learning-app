import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const supabase = createClient()

    const { data, error } = await supabase
      .from("courses")
      .select(`
        *,
        course_reviews (
          id,
          rating,
          review_text,
          created_at,
          profiles:user_id (
            full_name,
            avatar_url
          )
        )
      `)
      .eq("id", params.id)
      .eq("is_published", true)
      .single()

    if (error) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error("Course fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
