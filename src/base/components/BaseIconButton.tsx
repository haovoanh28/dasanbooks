import Tooltip, { TooltipProps } from "@mui/material/Tooltip";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";

interface Props extends Omit<IconButtonProps, "children"> {
  tooltip?: string;
  tooltipProps?: TooltipProps;
  children: React.ReactNode;
}

export default function BaseIconButton({
  tooltip,
  tooltipProps,
  children,
  ...props
}: Props) {
  return (
    <Tooltip title={tooltip} {...tooltipProps}>
      <IconButton {...props}>{children}</IconButton>
    </Tooltip>
  );
}
