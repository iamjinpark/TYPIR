const { localStorage: storage } = window;

export default function getStorage(key) {
  return new Promise((resolve, reject) => {
    if (key) {
      resolve(JSON.parse(storage.getItem(key)));
    } else {
      reject({ message: 'key는 문자 타입 이어야 합니다.' });
    }
  });
}
