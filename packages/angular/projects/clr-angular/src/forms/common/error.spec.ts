/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClrControlError } from './error';
import { ControlIdService } from './providers/control-id.service';

@Component({ template: `<clr-control-error>Test error</clr-control-error>` })
class SimpleTest {}

export default function (): void {
  describe('ClrControlError', () => {
    let fixture: ComponentFixture<SimpleTest>;
    let element: HTMLElement;

    beforeEach(function () {
      TestBed.configureTestingModule({
        declarations: [ClrControlError, SimpleTest],
        providers: [ControlIdService],
      });
      fixture = TestBed.createComponent(SimpleTest);
      fixture.detectChanges();
      element = fixture.debugElement.query(By.directive(ClrControlError)).nativeElement;
    });

    it('projects content', function () {
      expect(element.innerText).toContain('Test error');
    });

    it('adds the .clr-subtext class to host', function () {
      expect(element.classList.contains('clr-subtext')).toBeTrue();
    });

    it('should add id to host', function () {
      expect(element.getAttribute('id')).toContain('-error');
    });
  });
}
