/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18.59,11.77a1,1,0,0,0-1.73,1l2.5,4.34-6.07-1,5.29,10.59a1,1,0,0,0,1.79-.89l-3.53-7.08,6.38,1.06Z"/><path d="M25.12,4H23V3.58A1.58,1.58,0,0,0,21.42,2H14.58A1.58,1.58,0,0,0,13,3.58V4H10.88A1.88,1.88,0,0,0,9,5.88V32.12A1.88,1.88,0,0,0,10.88,34H25.12A1.88,1.88,0,0,0,27,32.12V5.88A1.88,1.88,0,0,0,25.12,4ZM25,32H11V6h4V4h6V6h4Z"/>',

  outlineAlerted:
    '<path d="M18.59,11.77a1,1,0,0,0-1.73,1l2.5,4.34-6.07-1,5.29,10.59a1,1,0,0,0,1.79-.89l-3.53-7.08,6.38,1.06Z"/><path d="M25,15.4V32H11V6h4V4h6V6h.28l1.64-2.85A1.57,1.57,0,0,0,21.42,2H14.58A1.58,1.58,0,0,0,13,3.58V4H10.88A1.88,1.88,0,0,0,9,5.88V32.12A1.88,1.88,0,0,0,10.88,34H25.12A1.88,1.88,0,0,0,27,32.12V15.4Z"/>',

  outlineBadged:
    '<path d="M18.59,11.77a1,1,0,0,0-1.73,1l2.5,4.34-6.07-1,5.29,10.59a1,1,0,0,0,1.79-.89l-3.53-7.08,6.38,1.06Z"/><path d="M25,11.58V32H11V6h4V4h6V6H22.5A7.47,7.47,0,0,1,23,3.38,1.57,1.57,0,0,0,21.42,2H14.58A1.58,1.58,0,0,0,13,3.58V4H10.88A1.88,1.88,0,0,0,9,5.88V32.12A1.88,1.88,0,0,0,10.88,34H25.12A1.88,1.88,0,0,0,27,32.12V12.87A7.5,7.5,0,0,1,25,11.58Z"/>',

  solid:
    '<path d="M22,4V2.62A.6.6,0,0,0,21.42,2H14.58a.6.6,0,0,0-.58.62V4H10A1.09,1.09,0,0,0,9,5.07v28A1,1,0,0,0,10,34H26a1,1,0,0,0,1-.94v-28A1.09,1.09,0,0,0,26,4ZM20.26,25.44a1.2,1.2,0,0,1-2.15,1.07L12.65,15.56l6,1-2.29-4a1.2,1.2,0,1,1,2.08-1.2l4.83,8.37L16.9,18.7Z"/>',

  solidAlerted:
    '<path d="M22.23,15.4A3.66,3.66,0,0,1,20.55,15l2.76,4.79L16.9,18.7l3.36,6.73a1.2,1.2,0,0,1-2.15,1.07L12.65,15.56l6,1-2.29-4a1.2,1.2,0,1,1,2.08-1.2l.09.15A3.66,3.66,0,0,1,19,9.89L22.45,4H22V2.62A.6.6,0,0,0,21.42,2H14.58a.6.6,0,0,0-.58.62V4H10A1.09,1.09,0,0,0,9,5.07v28A1,1,0,0,0,10,34H26a1,1,0,0,0,1-.94V15.4Z"/>',

  solidBadged:
    '<path d="M22.5,6a7.49,7.49,0,0,1,.28-2H22V2.62A.6.6,0,0,0,21.42,2H14.58a.6.6,0,0,0-.58.62V4H10A1.09,1.09,0,0,0,9,5.07v28A1,1,0,0,0,10,34H26a1,1,0,0,0,1-.94V12.87A7.5,7.5,0,0,1,22.5,6ZM20.26,25.44a1.2,1.2,0,0,1-2.15,1.07L12.65,15.56l6,1-2.29-4a1.2,1.2,0,1,1,2.08-1.2l4.83,8.37L16.9,18.7Z"/>',
};

export const batteryIconName = 'battery';
export const batteryIcon: IconShapeTuple = [batteryIconName, renderIcon(icon)];
