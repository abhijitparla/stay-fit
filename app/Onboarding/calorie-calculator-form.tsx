'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { headers } from 'next/headers'
import React, { useState } from 'react'

const CalorieCalculatorForm = () => {
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [heightft, setHeightft] = useState()
    const [heightinches, setHeightinches] = useState()
    const [heightcms, setHeightcms] = useState("")
    const [weightkg, setWeightkg] = useState("")
    const [weightpounds, setWeightpounds] = useState()
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(e, age, gender, heightcms, weightkg)
        const response = await fetch('/api/calculate_calories',{
            method: "GET",
            headers: {
                age,
                gender,
                heightcms,
                weightkg
            }
        }
        )
        const data = await response.json()
    }
    return (
        <div className='max-w-2xl mx-auto'>
            <form onSubmit={handleSubmit}>
                <div className='m-4'>
                    <Label className='text-slate-50'>Age:</Label>
                    <Input placeholder='age' required min={0} type='number' className='mt-2' onChange={(e: any) => setAge(e.target.value)} value={age}/>
                </div>
                <div className='m-4'>
                    <Label className='text-slate-50'>Gender:</Label>
                    <RadioGroup defaultValue={gender} value={gender} required className='flex' onValueChange={(e: any) => {
                        console.log(e)
                        setGender(e)
                    }}>
                        <div className="flex items-center space-x-2 m-3">
                            <RadioGroupItem value="male" id="option-one" />
                            <Label>Male</Label>
                        </div>
                        <div className="flex items-center space-x-2 m-3">
                            <RadioGroupItem value="female" id="option-two" />
                            <Label>Female</Label>
                        </div>
                    </RadioGroup>

                </div>
                <div className='m-4'>
                    <Label className='text-slate-50 mb-3'>Height:</Label>
                    <Input required min={0} placeholder='height in cms' type="number" className='mt-2' value={heightcms} onChange={(e: any) => setHeightcms(e.target.value)} />
                </div>
                <div className='m-4'>
                    <Label className='text-slate-50 mb-3'>Weight:</Label>
                    <Input required min={0} placeholder='Weight in Kilos' type="number" className='mt-2' value={weightkg} onChange={(e: any) => setWeightkg(e.target.value)}/>
                </div>
                <div className='flex justify-center m-4'>
                    <Button type='submit' className='w-2/3 self-center'>Calculate</Button>
                </div>

                {/* <Input placeholder='age'/> */}
            </form>
        </div>
    )
}

export default CalorieCalculatorForm
