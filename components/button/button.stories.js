import React from 'react';
import Button from './button';

// Default export
export default {
    title: 'Components/Button',
    component: Button
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} size="md" />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { variant: "primary", label: 'Word lid' };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, variant: "secondary", label: 'Word lid' };