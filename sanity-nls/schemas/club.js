export default {
    name: 'club',
    title: 'Clubs',
    type: 'document',
    fields: [
        {
            name: 'clubname',
            title: 'Club Name',
            type: 'string',
            description: 'Name of Club'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Slug Name of Club',
            options: {
                source: 'name',
                maxLength: 100,
            }
        }
    ]
}