/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  Flex,
  Icon,
  PasswordField,
  SwitchField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function LoginFrame(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="600px"
      height="1024px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="16px 60px 16px 60px"
      {...getOverrideProps(overrides, "LoginFrame")}
      {...rest}
    >
      <Icon
        width="60.98px"
        height="52.95px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 60.98046875,
          height: 52.94677734375,
        }}
        paths={[
          {
            d: "M37.8907 52.5217C38.0292 52.7611 38.2851 52.9085 38.5621 52.9085L44.5928 52.9085C45.1896 52.9085 45.5626 52.2638 45.2642 51.748L23.3577 13.8795C23.0593 13.3637 22.3133 13.3637 22.0149 13.8795L18.7956 19.4446C18.7833 19.4658 18.7833 19.4919 18.7956 19.5131L18.7995 19.5198C18.8241 19.5625 18.7933 19.6159 18.7439 19.6159C18.721 19.6159 18.6998 19.6281 18.6883 19.6479L0.104939 51.7863C-0.193306 52.3021 0.179678 52.9467 0.776371 52.9467L29.0235 52.9467C29.6202 52.9467 29.9932 52.302 29.6948 51.7862L26.8054 46.7915C26.667 46.5521 26.411 46.4046 26.1341 46.4046L11.6867 46.4046C11.3883 46.4046 11.2018 46.0823 11.351 45.8244L22.348 26.8145C22.4972 26.5566 22.8702 26.5566 23.0194 26.8145L37.8907 52.5217Z",
            fill: "rgba(64,170,191,1)",
            fillRule: "nonzero",
          },
          {
            d: "M26.8128 5.58572C26.6744 5.8251 26.6744 6.12003 26.8128 6.35941L53.5173 52.5217C53.6557 52.7611 53.9117 52.9085 54.1886 52.9085L60.2036 52.9085C60.8004 52.9085 61.1734 52.2638 60.875 51.748L31.163 0.386843C30.8647 -0.128948 30.1187 -0.128947 29.8203 0.386844L26.8128 5.58572Z",
            fill: "rgba(64,170,191,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Union")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="48px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome back!"
        {...getOverrideProps(overrides, "Welcome back!")}
      ></Text>
      <TextField
        width="300px"
        height="unset"
        label="Email"
        shrink="0"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField")}
      ></TextField>
      <PasswordField
        width="300px"
        height="unset"
        label="Password"
        shrink="0"
        placeholder="Placeholder"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        hideShowPassword={false}
        {...getOverrideProps(overrides, "PasswordField")}
      ></PasswordField>
      <SwitchField
        width="unset"
        height="unset"
        label="Remember me"
        shrink="0"
        size="default"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "SwitchField")}
      ></SwitchField>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "Button38511255")}
      ></Flex>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "sign up38511256")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Don't have an account? "
          {...getOverrideProps(overrides, "Don't have an account?")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="link"
        children="Sign up"
        {...getOverrideProps(overrides, "Button38512227")}
      ></Button>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "sign up38512242")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Login issues?"
          {...getOverrideProps(overrides, "Login issues?")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="link"
        children="Forgot Password"
        {...getOverrideProps(overrides, "Button38512244")}
      ></Button>
    </Flex>
  );
}
