/** @format */

import React from "react";
import Input from "./Input";
import Center from "../Center/Center";

export default {
  title: "Form/Input",
  component: Input,
  decorators: [(story) => <Center>{story()}</Center>],
};

export const Small = () => <Input size='small' placeholder='Small Size' />;
export const Medium = () => <Input size='medium' placeholder='Medium Size' />;
export const Large = () => <Input size='large' placeholder='Large Size' />;
