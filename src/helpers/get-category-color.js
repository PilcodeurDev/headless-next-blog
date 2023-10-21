const categoryColorMap = new Map();

categoryColorMap.set('Animaux de la ferme', 'orange');
categoryColorMap.set('Vie marine', 'blue');
categoryColorMap.set('Animaux de compagnie', 'green');
categoryColorMap.set('Ornithologie', 'purple');

const getCategoryColor = (category) => {
  return categoryColorMap.get(category);
}
export default getCategoryColor
