import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArticleComponent} from './article.component';

describe('ArticleComponent', () => {
  it('should initialization of the component', () => {
    const component = new ArticleComponent();
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(ArticleComponent);
    expect(component.commitmentItems.length).toBe(3);
  });
});
