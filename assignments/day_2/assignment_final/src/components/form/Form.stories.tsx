import { Form } from "./Form.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Form",
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
