# Projeto de Elementos Flutuantes com Detecção de Colisão

## Descrição
Este projeto visa demonstrar uma simulação simples de elementos flutuantes em um container HTML. Cada elemento é uma div com uma cor de fundo e um ícone aleatórios. Os elementos se movem livremente dentro do container e mudam de direção ao colidir com as paredes ou outros elementos. O movimento e as colisões são gerenciados usando JavaScript puro e as transformações CSS.

## Características
Adição dinâmica de elementos clicando em um botão.
Movimento aleatório dos elementos dentro de um container.
Detecção de colisão com as paredes do container.
Detecção de colisão entre elementos.
Cores e ícones aleatórios para cada elemento.
Tecnologias Utilizadas
HTML5
CSS3
JavaScript
Font Awesome (para ícones)

## Pré-requisitos
Navegador web atualizado (recomendado: Google Chrome, Firefox)
Opcional: servidor web local para desenvolvimento (como o Live Server para o VSCode)
Configuração e Execução
Clone o repositório ou faça o download do código-fonte.
Abra o arquivo index.html em seu navegador web.
Clique no botão "Adicionar Elemento" para criar e iniciar o movimento de um novo elemento no container.

## Detalhes Técnicos
Estrutura de Pastas
/ - Raiz do projeto
index.html - Arquivo HTML principal
main.css - Arquivo de estilos CSS
main.js - Arquivo JavaScript principal

## Algoritmo de Detecção de Colisão
O algoritmo de detecção de colisão utiliza a geometria básica para calcular se dois elementos se sobrepoem. Quando uma colisão é detectada, os vetores de velocidade dos elementos são ajustados para simular um efeito de reflexão.