'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import React from 'react'

const CalorieCalculatorForm = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
    return (
        <div className='max-w-2xl mx-auto'>
            <form onSubmit={handleSubmit}>
                <div className='m-4'>
                    <Label className='text-slate-50'>Age:</Label>
                    <Input placeholder='age' type='number' className='mt-2'/>
                </div>
                <div className='m-4'>
                    <Label className='text-slate-50'>Gender:</Label>
                    <RadioGroup defaultValue="option-one" className='flex'>
                        <div className="flex items-center space-x-2 m-3">
                            <RadioGroupItem value="option-one" id="option-one" />
                            <Label htmlFor="option-one">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2 m-3">
                            <RadioGroupItem value="option-two" id="option-two" />
                            <Label htmlFor="option-two">Female</Label>
                        </div>
                    </RadioGroup>

                </div>
                <div className='m-4'>
                    <Label className='text-slate-50 mb-3'>Height:</Label>
                    <Input placeholder='height in cms' type="number" className='mt-2' />
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
