import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
      // fazer a melhoria de utilizar variáveis ambiente para pegar o endereço da URL em ambiente de produção.
      url: `http://localhost:3330/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
};