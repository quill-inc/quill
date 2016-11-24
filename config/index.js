module.exports = {
  service: {
    name: 'Quill', // change this!
    icon: 'pencil', // pick from: http://semantic-ui.com/elements/icon.html
    pitch: 'Create Worlds Together.',
    synopsis: 'Write better, together.', // and this...
    mission: 'Design your own universe with Quill\'s collaboration engine.', // also
    description: 'RolePlayGateway helps you collaborate with fellow writers to create your own world. We\'ve created a set of roleplaying tools to help you organize your worlds and write with your fellow authors.',
    about: 'Quill is built with <i class="heart icon"></i><em>love</em> by <a href="https://maki.io/people">a diverse community of makers</a> from all around the world.  We\'re designing an all-new way to publish things on the web.  <a href="https://maki.io/topics/quill">Learn More &raquo;</a>',
    copyright: '&copy; 2017 Quill, Inc.<br /><small>All Rights Reserved.</small>',
    masthead: 'https://www.roleplaygateway.com/images/sea-of-stars.jpg',
    cta: {
      component: '<maki-waiting-list src="/subscriptions"></maki-waiting-list>'
    },
    /*cta: {
      link: '/universes',
      text: 'View All <span><i class="globe icon"></i></span>Worlds',
      icon: 'globe'
    },*/
    points: [
      {
        header: 'e',
        description: 'Maki can build web, desktop, <em>and</em> native mobile apps, directly from your definitions.  With consistent interactions across them all.',
        action: {
          text: 'Read the Docs &raquo;',
          link: '/docs'
        }
      },
    ]
  },
  database: {
    name: 'roleplaygateway' // only change if you know what you're doing
  },
  services: {
    http: {
      port: 3000 // you might want this to be some other port, like 80
    }
  }
};
