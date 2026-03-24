import { Footer } from "./Footer.tsx";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
