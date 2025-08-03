import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HoverTooltip({
  children,
  title,
}: {
  readonly children: React.ReactNode;
  readonly title: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger aria-label="GitHub Icon">{children}</TooltipTrigger>
        <TooltipContent className="z-[1000]">
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
