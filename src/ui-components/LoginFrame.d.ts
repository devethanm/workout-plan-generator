/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, PasswordFieldProps, SwitchFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type LoginFrameOverridesProps = {
    LoginFrame?: PrimitiveOverrideProps<FlexProps>;
    Union?: PrimitiveOverrideProps<IconProps>;
    "Welcome back!"?: PrimitiveOverrideProps<TextProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    SwitchField?: PrimitiveOverrideProps<SwitchFieldProps>;
    Button38511255?: PrimitiveOverrideProps<FlexProps>;
    "sign up38511256"?: PrimitiveOverrideProps<FlexProps>;
    "Don't have an account?"?: PrimitiveOverrideProps<TextProps>;
    Button38512227?: PrimitiveOverrideProps<ButtonProps>;
    "sign up38512242"?: PrimitiveOverrideProps<FlexProps>;
    "Login issues?"?: PrimitiveOverrideProps<TextProps>;
    Button38512244?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LoginFrameProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LoginFrameOverridesProps | undefined | null;
}>;
export default function LoginFrame(props: LoginFrameProps): React.ReactElement;
