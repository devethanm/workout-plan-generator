/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32139493355"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32139493356"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 414"?: PrimitiveOverrideProps<FlexProps>;
    Section39493363?: PrimitiveOverrideProps<FlexProps>;
    label39493364?: PrimitiveOverrideProps<TextProps>;
    link38671461?: PrimitiveOverrideProps<FlexProps>;
    icon38673800?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38673801?: MyIconProps;
    Button38671464?: PrimitiveOverrideProps<ButtonProps>;
    link38671669?: PrimitiveOverrideProps<FlexProps>;
    icon38673743?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38673744?: MyIconProps;
    Button38671672?: PrimitiveOverrideProps<ButtonProps>;
    link39493373?: PrimitiveOverrideProps<FlexProps>;
    icon38673672?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38673673?: MyIconProps;
    Button3867654?: PrimitiveOverrideProps<ButtonProps>;
    Section39493377?: PrimitiveOverrideProps<FlexProps>;
    label39493378?: PrimitiveOverrideProps<TextProps>;
    link38672011?: PrimitiveOverrideProps<FlexProps>;
    icon38672012?: PrimitiveOverrideProps<FlexProps>;
    MyIcon38672013?: MyIconProps;
    Button38672014?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
