import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent {
  render() {
    return (
      <Host>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
