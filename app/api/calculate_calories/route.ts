import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest, response: NextResponse) {
    const headers = request.headers;
    const age = headers.get('age')
    const gender = headers.get('gender')
    const height = headers.get('heightcms')
    const weight = headers.get('weightkg')
    console.log(age, gender, height, weight)
    // fetch()
    return NextResponse.json({
        message:"ok"
    })
}