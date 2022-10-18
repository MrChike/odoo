/** @odoo-module **/

import { registerModel } from '@mail/model/model_core';
import { many, one } from '@mail/model/model_field';

registerModel({
    name: 'DiscussMobileMailboxSelectionView',
    fields: {
        items: many('DiscussMobileMailboxSelectionItemView', {
            compute() {
                return this.owner.orderedMailboxes.map(mailbox => ({ mailbox }));
            },
            inverse: 'owner',
        }),
        owner: one('DiscussView', {
            identifying: true,
            inverse: 'mobileMailboxSelectionView',
        }),
    },
});
