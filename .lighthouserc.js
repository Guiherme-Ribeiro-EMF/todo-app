module.exports = {
  ci: {
    collect: {
      url: ['210.guirib.live'],
      startServerCommand: '', // Ne pas démarrer localement, on analyse le site déjà en ligne
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.5 }],
        'categories:accessibility': ['error', { minScore: 0.5 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
