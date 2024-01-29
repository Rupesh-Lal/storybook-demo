import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonsComponent } from './buttons.component';



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonsComponent> = {
  title: 'Buttons',
  component: ButtonsComponent,
  tags: ['autodocs'],
  render: (args: ButtonsComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonsComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};




