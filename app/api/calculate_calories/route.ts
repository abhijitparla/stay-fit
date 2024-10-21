import { NextRequest, NextResponse } from "next/server";

export default function GET (request: NextRequest, response: NextResponse) {
    return NextResponse.json({
        message:"ok"
    })
}