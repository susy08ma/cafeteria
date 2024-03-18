export default {
    build: {
      rollupOptions: {
        input: {
          index: 'index.html',
          nosotros: 'nosotros.html',
          proceso: 'proceso.html',
          menu: 'menu.html',
          contacto: 'contacto.html',
          galeria: 'galeria.html'
        }
      }
    },
    css: {
      preprocessorOptions: {
        sass: {
          sourceMap: true
        }
      }
    }
  }