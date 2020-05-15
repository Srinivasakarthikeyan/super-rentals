import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | rental/image', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function(assert) {

    await render(hbs`{{rental/image}}`);

    //assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
    <Rental::Image
      src="/assets/images/teaching-tomster.png"
      alt="Teaching Tomster"
    />
    `);

    assert.dom('.image').exists();
    assert.dom('.image img').hasAttribute('src', '/assets/images/teaching-tomster.png');
    assert.dom('.image img').hasAttribute('alt', 'Teaching Tomster');
    //assert.dom('article .image').exists();
  });
});
