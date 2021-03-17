/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21.89,2H7.83A1.88,1.88,0,0,0,6,3.91V15H8V4H20v8h8V32H8V27H6v5.09A1.88,1.88,0,0,0,7.83,34H28.17A1.88,1.88,0,0,0,30,32.09V9.92ZM22,10V4.1L28,10Z"/><polygon points="9.78 25.35 6.95 21.38 9.78 17.45 7.85 17.45 6 20.04 4.14 17.45 2.19 17.45 5.01 21.42 2.19 25.35 4.11 25.35 5.97 22.76 7.81 25.35 9.78 25.35"/><polygon points="10.66 17.45 10.66 25.35 16.15 25.35 16.15 23.82 12.32 23.82 12.32 17.45 10.66 17.45"/><path d="M20.19,24.05a3.74,3.74,0,0,1-2.54-1l-.95,1.16a4.92,4.92,0,0,0,3.42,1.31c1.88,0,3-1,3-2.51s-1.1-2-2.75-2.35c-1.19-.27-1.65-.46-1.65-1s.42-.85,1.13-.85a3.57,3.57,0,0,1,2.2.87l.86-1.22a4.36,4.36,0,0,0-3-1.09A2.54,2.54,0,0,0,17,19.51a2.28,2.28,0,0,0,0,.26c0,1.53,1.15,2,2.78,2.38,1.17.28,1.62.45,1.62,1S21,24.05,20.19,24.05Z"/>',
  solid:
    '<path d="M21.89,2H7.83A1.88,1.88,0,0,0,6,3.91V14H8V4H20v8h8v4H3a1,1,0,0,0-1,1V27a1,1,0,0,0,1,1H28v4H8V30H6v2.09A1.88,1.88,0,0,0,7.83,34H28.17A1.88,1.88,0,0,0,30,32.09V9.92ZM12,25.87H10L8.2,23.33,6.41,25.87H4.53L7.29,22,4.53,18.13H6.44l1.81,2.54,1.81-2.54H12L9.19,22Zm6.24,0H12.81V18.13h1.63v6.24h3.75Zm3.88.13a4.83,4.83,0,0,1-3.35-1.28l.94-1.14a3.64,3.64,0,0,0,2.48,1c.81,0,1.23-.38,1.23-.86s-.44-.72-1.6-1c-1.59-.37-2.72-.84-2.72-2.33A2.5,2.5,0,0,1,21.7,18h.14a4.27,4.27,0,0,1,2.95,1.07L24,20.26a3.49,3.49,0,0,0-2.15-.85c-.69,0-1.11.37-1.11.83s.45.74,1.61,1c1.62.37,2.7.87,2.7,2.3S23.91,26,22.07,26ZM22,10V4.1L28,10Z"/>',
};

export const xlsFileIconName = 'xls-file';
export const xlsFileIcon: IconShapeTuple = [xlsFileIconName, renderIcon(icon)];
