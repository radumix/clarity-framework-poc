/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { EventSubject } from '@cds/core/internal';
import { IconAlias, IconRegistry, IconShapeTuple } from './interfaces/icon.interfaces.js';
import { unknownIcon } from './shapes/unknown.js';

import { addIcons, setIconAliases } from './utils/icon.service-helpers.js';

const iconUpdates = new EventSubject<string>();
const registry: IconRegistry = { unknown: unknownIcon[1] as string };
const iconRegistry = new Proxy(registry, {
  set: (target, key: string, value) => {
    iconUpdates.emit(key);
    target[key] = value;
    return true;
  },
});

/**
 * ClarityIcons is a static class that gives users the ability to interact with
 * the icon registry. This includes capabilities to add, retrieve, or alias icons
 * in the registry.
 *
 * @privateRemarks
 *
 * The icon registry is private to the module. There is no way to access it directly
 * outside of the module.
 *
 */
// @dynamic
export class ClarityIcons {
  /**
   * Subscribe to receive updates when icons are added or updated
   */
  static iconUpdates = iconUpdates.toEventObservable();

  /**
   * Returns a readonly reference of the icon registry.
   */
  static get registry(): Readonly<IconRegistry> {
    return iconRegistry;
  }

  static addIcons(...shapes: IconShapeTuple[]) {
    addIcons(shapes, iconRegistry);
  }

  /**
   * @description
   * Use `addIcons` instead of `addAliases`
   *
   * This method is a backwords compatibility function to the old API
   *
   * The team will revisit this method for possible deprecation.
   */
  static addAliases(...aliases: IconAlias[]) {
    aliases.forEach(alias => setIconAliases(alias, iconRegistry));
  }

  static getIconNameFromShape(iconShape: IconShapeTuple) {
    return iconShape[0];
  }
}
