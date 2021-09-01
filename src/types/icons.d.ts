// Adding title and titleId from SVGR to props
export interface SVGRProps {
  title?: string;
  titleId?: string;
}

declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";

  const content: (props: SVGProps<SVGSVGElement> & SVGRProps) => ReactElement;
  export default content;
}
