/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Heading, SelectField } from "@aws-amplify/ui-react";
export default function WorkoutGenerator(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="864px"
      height="274px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "WorkoutGenerator")}
      {...rest}
    >
      <Heading
        class="text-2xl md:text-4xl"
        width="unset"
        height="unset"
        shrink="0"
        level="1"
        children="Workout Plan Generator"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <SelectField
        width="300px"
        height="unset"
        label="Please Select Workout Goal"
        alignItems="center"
        shrink="0"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectField")}
      >
        <option value="arms">Arms</option>
        <option value="arms">Legs</option>
        <option value="arms">Back</option>
      </SelectField>
      <Button
        width="unset"
        height="unset"
        gap="8px"
        alignItems="flex-end"
        shrink="0"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Generate Workout"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
