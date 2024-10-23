import { NextRequest, NextResponse } from "next/server";
import * as cheerio from 'cheerio';

export async function GET (request: NextRequest, response: NextResponse) {
    let description = ""
    let resultsHeading = ""
    const headers = request.headers;
    const age = headers.get('age')
    const gen = headers.get('gender')
    const height = headers.get('heightcms')
    const weight = headers.get('weightkg')
    let gender
    if(gen == 'male') {
        gender = 'm'
    }else {
        gender = 'f'
    }
    // fetch()
    try {
        const URL = `https://www.calculator.net/calorie-calculator.html?cage=${age}&csex=${gender}&cheightfeet=6&cheightinch=2&cpound=183&cheightmeter=${height}&ckg=${weight}&cactivity=1&cmop=1&coutunit=c&cformula=m&cfatpct=20&printit=0&ctype=metric&x=Calculate`
        const resp  = await fetch(URL)
        const respData = await resp.text()
        const $ = cheerio.load(respData)
        const ans = $("head > meta")
        description = ans.attr('content') || ""    
    } catch (error) {
        console.log(error)
    }

    return NextResponse.json({
        message:"ok"
    })
    
}