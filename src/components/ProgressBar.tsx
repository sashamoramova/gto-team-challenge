
import React from 'react';
import { EventStage } from '@/types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProgressBarProps {
  stages: EventStage[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ stages }) => {
  return (
    <div className="w-full py-4 px-2">
      <div className="relative flex items-center justify-between">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.id}>
            {/* Line connector */}
            {index > 0 && (
              <div 
                className={`h-1 flex-1 mx-1 ${
                  stages[index-1].isCompleted ? 'bg-mir' : 'bg-gray-300'
                }`}
              />
            )}
            
            {/* Circle marker */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div 
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full 
                      ${stage.isActive ? 'bg-mir text-white' : 
                        stage.isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'} 
                      transition-colors duration-300`}
                  >
                    <span className="text-sm font-bold">{index + 1}</span>
                    {stage.isActive && (
                      <span className="absolute -bottom-6 whitespace-nowrap text-xs font-medium text-mir">
                        {stage.title}
                      </span>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-medium">{stage.title}</p>
                  <p className="text-xs text-muted-foreground">{stage.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
