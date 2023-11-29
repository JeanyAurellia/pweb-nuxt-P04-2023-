const payload = require('payload')

/** @type {import('payload/types').CollectionConfig} */

const Logs = {
    slug: 'Logs',
    admin: {
        useAsTitle: 'name'
    },
access: {
    create:() => false,
    read: () => true,
    update: () => false,
    delete: () => true,
},

fields: [
    {
        name: 'name',
        label: 'Title',
        type: 'text',
    },
    {
        name: 'log',
        type: 'text',
    },
    {
        name: "action",
        type: "text",
        required: true
    }
  ],
};

export default Logs