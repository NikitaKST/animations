export default class Collapse {
  constructor(container) {
    this.container = container;
    this.onToggleClick = this.onToggleClick.bind(this);
  }

  initialize() {
    const div = document.createElement('div');
    div.innerHTML = `
      <button class="collapse-button">Collapse</button>
      <div class="collapse-content">
        <p class="collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </p>
      </div>
    `;

    this.container.append(div);
    const button = this.container.querySelector('.collapse-button');
    button.addEventListener('click', this.onToggleClick);
  }

  onToggleClick() {
    const content = this.container.querySelector('.collapse-content');
    const isOpen = content.classList.contains('collapse-open');

    if (isOpen) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}px`;
    }
    content.classList.toggle('collapse-open');
  }
}
