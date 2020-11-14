// Infered types from: https://github.com/KyleAMathews/typography.js/blob/master/packages/react-typography/src/TypographyStyle.js
declare module "react-typography" {
  import React from "react"
  import Typography from "typography"
  // const TypographyStyle = (): JSX.Element
  // export TypographyStyle
  export interface Props {
    typography: Typography
  }
  export declare const TypographyStyle: React.FC<Props>
  export declare const GoogleFont: React.FC<Props>
}
