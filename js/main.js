const elements = [];

// Função para gerar uma cor RGB aleatória
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Função para adicionar um novo elemento ao container
function addElement() {
  const container = document.getElementById('container');
  const element = document.createElement('div');
  element.className = 'element';
  element.style.left = `${Math.random() * (container.clientWidth - 50)}px`;
  element.style.top = `${Math.random() * (container.clientHeight - 50)}px`;
  
  const newElement = {
    domElement: element,
    velocity: {
      x: (Math.random() * 2) - 1,
      y: (Math.random() * 2) - 1,
    },
  };

  newElement.domElement.style.backgroundColor = randomColor(); 

  elements.push(newElement);
  container.appendChild(element);
  moveElement(newElement);
}

// Função para calcular o vetor refletido
function reflect(velocity, normal) {
  const dot = velocity.x * normal.x + velocity.y * normal.y;
  return {
    x: velocity.x - 2 * dot * normal.x,
    y: velocity.y - 2 * dot * normal.y,
  };
}

// Função para verificar colisão entre dois elementos
function checkCollision(element1, element2) {
  const rect1 = element1.domElement.getBoundingClientRect();
  const rect2 = element2.domElement.getBoundingClientRect();
  
  const dx = (rect1.left + rect1.width / 2) - (rect2.left + rect2.width / 2);
  const dy = (rect1.top + rect1.height / 2) - (rect2.top + rect2.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);
  
  return distance < ((rect1.width + rect2.width) / 2);
}

// Função para mover um elemento dentro do container
function moveElement(element) {
  function step() {
    const rect = element.domElement.getBoundingClientRect();
    const container = document.getElementById('container');
    const containerRect = container.getBoundingClientRect();

    // Verificação de colisão com as bordas do container
    if (rect.left <= containerRect.left || rect.right >= containerRect.right) {
      const normal = { x: rect.left <= containerRect.left ? 1 : -1, y: 0 };
      element.velocity = reflect(element.velocity, normal);
    }

    if (rect.top <= containerRect.top || rect.bottom >= containerRect.bottom) {
      const normal = { x: 0, y: rect.top <= containerRect.top ? 1 : -1 };
      element.velocity = reflect(element.velocity, normal);
    }

    // Detecção de colisão entre elementos
    for (const otherElement of elements) {
      if (element !== otherElement && checkCollision(element, otherElement)) {
        const normal = {
          x: otherElement.velocity.x - element.velocity.x,
          y: otherElement.velocity.y - element.velocity.y,
        };

        element.velocity = reflect(element.velocity, normal);
        otherElement.velocity = reflect(otherElement.velocity, normal);
      }
    }

    element.domElement.style.left = `${parseFloat(element.domElement.style.left || 0) + element.velocity.x}px`;
    element.domElement.style.top = `${parseFloat(element.domElement.style.top || 0) + element.velocity.y}px`;

    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

// Associar a função addElement ao evento de clique do botão
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addElement').addEventListener('click', addElement);
});
