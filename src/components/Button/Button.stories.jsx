import Button from './Button'
import '../../scss/app.scss'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Button appearance option',
      defaultValue: 'primary',
      options: ['primary', 'square', 'link'],
      control: {
        type: 'radio',
      },
    },
    size: {
      type: 'string',
      description: 'Button size',
      defaultValue: 'medium',
      options: ['medium', 'large', 'small'],
      control: {
        type: 'radio',
      },
    },
    type: {
      type: 'string',
      description: 'Button type',
      defaultValue: 'button',
      options: ['button', 'submit'],
      control: {
        type: 'radio',
      },
    },
    children: {
      type: 'string',
      name: 'label',
      defaultValue: 'Click me',
    },
  },
}

const Template = (arg) => <Button {...arg} />

export const Default = Template.bind({})
Default.args = {
  children: 'Press me',
  variant: 'primary',
}

export const Large = Template.bind({})
Large.args = {
  children: 'Pres me',
  size: 'large',
}

export const Link = Template.bind({})
Link.args = {
  children: 'Just a link',
  size: 'link',
}

export const Square = Template.bind({})
Square.args = {
  children: 'Just a square',
  size: 'square',
}
