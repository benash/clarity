/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CdsInternalControlLabel } from '@clr/core/forms';
import '@clr/core/forms/register.js';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('cds-internal-control-label element', () => {
  let testElement: HTMLElement;
  let component: CdsInternalControlLabel;
  const placeholderText = 'Label';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<cds-internal-control-label>${placeholderText}</cds-internal-control-label>`;

    await waitForComponent('cds-internal-control-label');
    component = testElement.querySelector<CdsInternalControlLabel>('cds-internal-control-label');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });
});