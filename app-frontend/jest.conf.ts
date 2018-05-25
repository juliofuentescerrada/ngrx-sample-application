import 'jest-preset-angular';

const mockStorage = () => {
  let storage = {};
  return {
    getItem: key => key in storage ? storage[key] : null,
    setItem: (key, value) => storage[key] = value || '',
    removeItem: key => delete storage[key],
    clear: () => storage = {},
  };
};

const mockTransform = () => ({ enumerable: true, configurable: true });

Object.defineProperty(window, 'localStorage', { value: mockStorage() });
Object.defineProperty(window, 'sessionStorage', { value: mockStorage() });
Object.defineProperty(window, 'getComputedStyle', { value: () => ['-webkit-appearance'] });
Object.defineProperty(document.body.style, 'transform', { value: mockTransform() });
