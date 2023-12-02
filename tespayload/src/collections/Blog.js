const payload = require('payload')

/** @type {import('payload/types').CollectionConfig} */

const Blog = {
    slug: 'Blog',
    admin: {
        useAsTitle: 'name'
    },
    
    access: {
        read: () => true,
        update: () => true,
        delete: () => true,
        create: () => true,
    },

    hooks: {
        afterOperation: [
            async (args) => {
                if (args.operation === "create") {
                await payload.create({
                    collection: "Logs",
                    data: {
                    name: args.result.name,
                    log: args.result.id,
                    action: "Blog Created",
                    },
                });
            } else if (args.operation === "deleteByID") {
            await payload.create({
                collection: "Logs",
                data: {
                name: args.result.name,
                log: args.result.id,
                action: "Blog Deleted",
                },
            });
            } else if (args.operation === "updateByID") {
            await payload.create({
                collection: "Logs",
                data: {
                name: args.result.name,
                log: args.result.id,
                action: "Blog Updated",
                        },
                    });
                }
            },
        ],
    },

    fields: [
        {
            name: 'name',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'text',
            required: true
        },
    ],
};

export default Blog