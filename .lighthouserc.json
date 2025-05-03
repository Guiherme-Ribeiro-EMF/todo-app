module.exports = {
  ci: {
    collect: {
      url: ['https://wonderful-mushroom-0525b8a03.4.azurestaticapps.net/'],
      startServerCommand: '', // Ne pas démarrer localement, on analyse le site déjà en ligne
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
