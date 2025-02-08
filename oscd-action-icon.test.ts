import { fixture, html } from '@open-wc/testing';

import { visualDiff } from '@web/test-runner-visual-regression';

import { sendKeys, sendMouse } from '@web/test-runner-commands';

import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';

import './oscd-action-icon.js';
import { OscdActionIcon } from './OscdActionIcon.js';

window.customElements.define('md-icon', MdIcon);

const factor = process.env.CI ? 2 : 1;

function timeout(ms: number) {
  return new Promise(res => {
    setTimeout(res, ms * factor);
  });
}

mocha.timeout(2000 * factor);

document.body.style.width = '200px';
document.body.style.height = '300px';

describe('oscd-action-icon', () => {
  let div: HTMLDivElement;
  let element: OscdActionIcon;
  const label = 'Test Label';
  const icon = 'edit';

  afterEach(() => div.remove());

  describe('default - primary', () => {
    beforeEach(async () => {
      div = await fixture(
        html`<div style="width: 200px;height: 300px;">
          <div style="height:100px"></div>
          <oscd-action-icon label=${label} icon=${icon}></oscd-action-icon>
          <div></div>
        </div>`
      );
      element = div.querySelector('oscd-action-icon')!;
      document.body.prepend(div);
    });

    it('displays the title', async () => {
      await element.updateComplete;
      await sendMouse({ type: 'move', position: [0, 0] }); // focus input
      await timeout(500);
      await visualDiff(div, 'action-icon');
    });

    it('displays the title and icon', async () => {
      element.highlighted = true;
      await element.updateComplete;
      await sendMouse({ type: 'move', position: [100, 150] }); // focus input
      await timeout(500);
      await visualDiff(div, 'action-icon-hovered');
    });

    it('displays the title and icon', async () => {
      await element.updateComplete;
      await sendMouse({ type: 'click', position: [100, 150] }); // focus input
      await timeout(500);
      await visualDiff(div, 'action-icon-clicked');
    });
  });

  describe('secondary', () => {
    beforeEach(async () => {
      div = await fixture(
        html`<div style="width: 200px;height: 300px;">
          <div style="height:100px"></div>
          <oscd-action-icon
            secondary
            label=${label}
            icon=${icon}
          ></oscd-action-icon>
          <div></div>
        </div>`
      );
      element = div.querySelector('oscd-action-icon')!;
      document.body.prepend(div);
    });

    it('displays the title', async () => {
      await element.updateComplete;
      await sendMouse({ type: 'move', position: [0, 0] }); // focus input
      await timeout(500);
      await visualDiff(div, 'action-icon-secondary');
    });

    it('displays the title', async () => {
      await element.updateComplete;
      await sendMouse({ type: 'move', position: [100, 150] }); // focus input
      await timeout(500);
      await visualDiff(div, 'action-icon-secondary-hovered');
    });
  });

  describe('highlighted', () => {
    beforeEach(async () => {
      div = await fixture(
        html`<div style="width: 200px;height: 300px;">
          <div style="height:100px"></div>
          <oscd-action-icon
            highlighted
            label=${label}
            icon=${icon}
          ></oscd-action-icon>
          <div></div>
        </div>`
      );
      element = div.querySelector('oscd-action-icon')!;
      document.body.prepend(div);
    });

    it('displays the title and icon', async () => {
      await element.updateComplete;
      await sendMouse({ type: 'move', position: [0, 0] }); // focus input
      await timeout(500);
      await visualDiff(div, 'action-icon-highlighted');
    });

    it('displays the title and icon', async () => {
      await element.updateComplete;
      await sendMouse({ type: 'click', position: [100, 150] }); // focus input
      await timeout(500);
      await visualDiff(div, 'action-icon-highlighted-clicked');
    });
  });

  describe('with action items', () => {
    beforeEach(async () => {
      div = await fixture(
        html`<div style="width: 200px;height: 300px;">
          <div style="height:100px"></div>
          <oscd-action-icon label=${label} icon=${icon}>
            <style>
              button {
                margin-top: -56px;
                margin-left: 8px;
              }
            </style>
            <button slot="action">1</button>
            <button slot="action">2</button>
            <button slot="action">3</button>
            <button slot="action">4</button>
            <button slot="action">5</button>
            <button slot="action">6</button>
            <button slot="action">7</button>
            <button slot="action">8</button>
          </oscd-action-icon>
          <div></div>
        </div>`
      );
      element = div.querySelector('oscd-action-icon')!;
      document.body.prepend(div);
    });

    it('displays the title and icon', async () => {
      await element.updateComplete;
      await sendMouse({ type: 'move', position: [0, 0] }); // focus input
      await timeout(500);
      await visualDiff(div, 'action-icon-with-action-items');
    });

    it('displays the title and icon', async () => {
      await element.updateComplete;
      await sendMouse({ type: 'click', position: [100, 150] }); // focus input
      await timeout(500);
      await visualDiff(div, 'action-icon-with-action-items-clicked');
    });
  });

  describe('with icon slot', () => {
    beforeEach(async () => {
      div = await fixture(
        html`<div style="width: 200px;height: 300px;">
          <div style="height:100px"></div>
          <oscd-action-icon>
            <md-icon slot="icon">delete</md-icon>
          </oscd-action-icon>
          <div></div>
        </div>`
      );
      element = div.querySelector('oscd-action-icon')!;
      document.body.prepend(div);
    });

    it('displays the title and icon', async () => {
      await element.updateComplete;
      await sendMouse({ type: 'move', position: [0, 0] }); // focus input
      await timeout(500);
      await visualDiff(div, 'action-icon-with-icon-slot');
    });

    it('displays the title and icon', async () => {
      await element.updateComplete;
      await sendMouse({ type: 'click', position: [100, 150] }); // focus input
      await timeout(500);
      await visualDiff(div, 'action-icon-with-icon-slot-clicked');
    });
  });
});
