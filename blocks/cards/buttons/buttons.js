export default function decorate(block) {
  // Add a class based on the number of columns
  const cols = [...block.firstElementChild.children];
  block.classList.add(`buttons-${cols.length}-cols`);

  // Create a container for the rows
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons');

  // Move existing rows into individual rows inside the buttons container
  [...block.children].forEach((row) => {
    const rowWrapper = document.createElement('div');
    rowWrapper.classList.add('row');

    [...row.children].forEach((col) => {
      const colWrapper = document.createElement('div');
      colWrapper.classList.add('column');

      // Move column content into the new column wrapper
      colWrapper.append(...col.childNodes);

      // Check for picture and assign class if needed
      const pic = colWrapper.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          picWrapper.classList.add('columns-img-col');
        }
      }

      rowWrapper.appendChild(colWrapper);
    });

    buttonsContainer.appendChild(rowWrapper);
  });

  // Clear the original block content and insert the new structure
  block.innerHTML = '';
  block.appendChild(buttonsContainer);
}
