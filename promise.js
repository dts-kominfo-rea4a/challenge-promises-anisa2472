const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve, reject) => {
    if (emosi !== 'marah' && emosi !== 'tidak marah') {
      reject('Maaf, emosi tidak ditemukan');
    }
    else {
      let jumlahEmosi = 0;
      promiseTheaterIXX().then(value => {
        value.forEach(element => {
          if (element.hasil === emosi) {
            jumlahEmosi += 1;
          };
        });
      });
      promiseTheaterVGC().then(value => {
        value.forEach(element => {
          if (element.hasil === emosi) {
            jumlahEmosi += 1;
          };
        });
        resolve(jumlahEmosi);
      });
    };
  });
};

module.exports = {
  promiseOutput,
};
