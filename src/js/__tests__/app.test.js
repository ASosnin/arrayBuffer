import { ArrayBufferConverter } from '../app';
import { getBuffer } from '../utils';

test('Загрузка буфера', () => {
  const buffer = new ArrayBufferConverter(getBuffer());
  buffer.load();
  expect(buffer.bufferView.length).toBe(53);
});

test('Буфер в строку', () => {
  const buffer = new ArrayBufferConverter(getBuffer());
  buffer.load();
  expect(buffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('Другие данные в буфере', () => {
  const data = new ArrayBufferConverter(new Uint16Array([65, 110, 100, 114, 101, 121]));
  data.load();
  expect(data.toString()).toBe('Andrey');
});
