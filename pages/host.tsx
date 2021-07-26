// pages/host.tsx
import * as React from 'react';
import { registerComponent, PlasmicCanvasHost } from '@plasmicapp/host';
import { Menu } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import Head from 'next/head';
import { FancyComponent } from '../components/FancyComponent';
import { SimpleCard } from '../components/SimpleCard';

// A very simple component that takes two props: a string caption, and a
// children prop that takes any ReactNode.

registerComponent(SimpleCard, {
  name: 'SimpleCard',
  props: {
    caption: 'string',
    children: 'slot'
  },
  importPath: './components/SimpleCard'
});

// Showing some more options.

registerComponent(FancyComponent, {
  // We encourage setting a name that matches the component's name in code, but
  // you can diverge if (say) the component is renamed in code. The name should
  // be unique and stable over time.
  name: 'MyFancyComponent',
  // Any human-readable name, for users in Plasmic Studio.
  displayName: 'Super fancy component',
  // The name of the symbol to import from the module path.
  importName: 'FancyComponent',
  importPath: './components/FancyComponent',
  // If it were instead the default export, use this instead of importName.
  // isDefaultExport: true,
  // You can have any number of slots.
  props: {
    header: 'slot',
    contents: 'slot'
  },
  // Plasmic usually tries to pass in styles via className, but you can specify
  // a different prop name to use.  Here, Plasmic will pass styles to
  // containerClassName instead.
  classNameProp: 'containerClassName'
});

// A pair of componoents, where Menu's children slot accepts only MenuItems.

registerComponent(Menu, {
  name: 'Menu',
  props: {
    mode: 'string',
    theme: 'string',
    selectedKeys: 'object',
    defaultSelectedKeys: 'object',
    children: {
      type: 'slot',
      allowedComponents: ['MenuItem']
    }
  },
  importPath: 'antd'
});

registerComponent(MenuItem, {
  name: 'MenuItem',
  displayName: 'Menu Item',
  props: {
    key: 'string',
    children: 'slot'
  },
  importPath: 'antd/lib/menu/MenuItem',
  isDefaultExport: true
});

function Host() {
  return (
    <div>
      <Head>
        <script src="https://studio.plasmic.app/static/js/preamble.js" />
      </Head>
      <PlasmicCanvasHost />)
    </div>
  );
}

export default Host;