import { NextResponse } from "next/server";

/**
 * dynamic = auto => get value from cache
 * dymamic = force => get value new value when is send request
 */
export const dynamic = "force-dynamic"
export function GET() {
    return NextResponse.json({
        dateTime: new Date().toLocaleTimeString(),
    });
}