# Front-end Monitoramento de Aquários

**Link do deploy (front-end):** [54.236.210.77](http://54.236.210.77)  
**Documentação completa:** [Google Docs](https://docs.google.com/document/d/1l-EYmFpR5xTyNQxth-VJdnYsd4AgUx7_Ao2qCU-txK0/edit?usp=sharing)

---

## 📖 Descrição

Este repositório contém a **interface front-end** do projeto de monitoramento e ocupação dos aquários do Insper. A interface foi desenvolvida com **React** e **Vite**, consumindo a API back-end para listar, filtrar e atualizar o estado dos aquários (ocupar/desocupar).

---

## 🚀 Funcionalidades principais

- Listagem de aquários e visualização de detalhes.  
- Filtros por prédio, andar, capacidade e disponibilidade.  
- Login e registro (consome endpoints do back-end).  
- Ocupação/desocupação via requisições para a API.  
- Consumo de API via `axios` (serviços em `src/api`).

---

## 🛠️ Tecnologias e dependências

**Dependências principais:**
- `react` — biblioteca de UI  
- `react-dom` — DOM renderer para React  
- `react-router-dom` — roteamento no front-end  
- `axios` — cliente HTTP (usado para consumir a API)

**DevDependencies (ferramentas de desenvolvimento):**
- `vite` — bundler / dev server  
- `@vitejs/plugin-react` — plugin React para Vite  
- `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` — ferramentas de lint

---


## 📂 Estrutura importante 

```
notes-frontend/
├── index.html
├── package.json
├── public/
└── src/
    ├── api/                # comunicação com a API (axios)
    │   └── aquarioService.js
    ├── components/         # componentes React (cards, botões, etc.)
    ├── pages/              # páginas (Home, Detalhes)
    └── main.jsx
```

---
## 👥 Autores

- Léo Montefusco Maximiano  
- Arthur Belei Zilio Goes  
- Arthur Sampaio Bernardes  
- Guilherme Kenzo Taba Nakamura  
- Giovanna Barros Scalco  
- Lucas Grohmann Haro  
- Victor de Almeida Cunha  

---

## 🌐 Links

- 🔗 **Front deploy:** [54.236.210.77](http://54.236.210.77)  
- 🔗 **Back-end deploy:** [52.87.254.97](http://52.87.254.97)  
- 📄 **Documentação (original):** [Google Docs](https://docs.google.com/document/d/1l-EYmFpR5xTyNQxth-VJdnYsd4AgUx7_Ao2qCU-txK0/edit?usp=sharing)