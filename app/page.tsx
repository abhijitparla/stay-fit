import Image from "next/image";
import CalorieCalculatorForm from "./Onboarding/calorie-calculator-form";

export default function Home() {
  return (
    <div>
      <div  className="text-slate-300 text-3xl text-center p-5 font-bold">
      Welcome to Stay Fit 
      </div>
      <div className="text-slate-100 text-center text-muted-foreground">
        Please complete the following steps to determine the number of calories required to maintain your weight, reduce your weight or gain your weight.
      </div>
      <CalorieCalculatorForm/>
    </div>
  );
}
