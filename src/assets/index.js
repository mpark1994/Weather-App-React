function importAll(r) {
    let images = {};
    r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const IMAGES = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));
  
export default IMAGES