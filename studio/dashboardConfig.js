export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '614245ccb569a63307249739',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-r4k5nfby',
                  apiId: '70e5ee07-c702-4ed1-a89e-4828d46eb0b0'
                },
                {
                  buildHookId: '614245ccb569a62c042499f1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yysgkvs8',
                  apiId: 'b1b808ac-1b27-43af-902d-330db403e3da'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mishajan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yysgkvs8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
