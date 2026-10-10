// Every file in ui-icons, keyed by filename without extension (e.g. Icons.react).
const files = import.meta.glob('../assets/ui-icons/*', { eager: true, import: 'default' });

export default Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split('/').pop().split('.')[0], url])
);
