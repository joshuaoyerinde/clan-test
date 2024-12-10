import React from "react";
import {DesktopSideBg, MobileSideBg} from "../assets";
import './index.css'


const steps = [
	{id: 1, name: "Your Info"},
	{id: 2, name: "Select Plan"},
	{id: 3, name: "Add-Ons"},
	{id: 4, name: "Summary"},
];

const StepNavigation = ({currentStep}) => {

	return (
		<>
		<div className="relative my-bg p-4 md:min-h-96 h-full rounded-lg text-white">
			<div className="absolute bg-cover bg-center  "></div>
			<div className="relative flex md:flex-col gap-4 md:gap-7">
				{steps.map((step) => (
					<div key={step.id} className="flex items-center gap-4">
						<div className={`w-10 h-10 flex justify-center items-center rounded-full ${currentStep === step.id ? "bg-blue-300" : "bg-blue-500"}`}>
							{step.id}
						</div>
						<div>
							<div className="text-sm md:block hidden text-gray-300">Step {step.id}</div>
							<span className={`text-sm hidden md:block md:text-base mt-1 ${currentStep === step.id ? "font-bold" : ""}`}>
								{step.name}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
		</>
		
	);
};

export default StepNavigation;
