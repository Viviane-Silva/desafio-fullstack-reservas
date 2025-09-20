# Sistema de Reservas de Estações de Trabalho

## Descrição

Projeto desenvolvido como **desafio técnico** para criar um sistema web que permite gerenciar reservas de estações de trabalho em uma empresa.

Nesta primeira etapa, o foco foi:

- **Frontend bonito e funcional** em React, com telas responsivas.
- **Backend mínimo** em Django, suficiente para suportar o frontend e fornecer dados via API.

### Funcionalidades implementadas nesta etapa

**Tela 1 – Lista de Reservas**

- Mostra reservas já feitas.
- Botão para criar uma nova reserva (leva para Tela 2).

**Tela 2 – Nova Reserva**

- Lista de estações de trabalho disponíveis.
- Seleção de dia da reserva.
- Escolha de período (radio buttons).
- Campo para informar o nome do responsável pela reserva.
- Botão “Reservar” que exibe uma mensagem de sucesso ao concluir a ação.

**Backend**

- Painel de administração Django (`django-admin`) para visualizar a lista de reservas, estações de trabalho e realizar CRUD de reservas.
- Endpoints REST para:
  - Listar estações de trabalho disponíveis
  - Criar nova reserva
  - Listar reservas existentes e editar.

---

## Tecnologias Utilizadas

- **Backend:** Python, Django, Django REST Framework, SQLite
- **Frontend:** React, HTML, CSS, fetch API

---

## Como rodar o projeto

### Backend

```bash
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend

npm install
npm start

### Observações

-Usuários e reservas de teste foram criados para acesso imediato.
-Layout do frontend foi desenvolvido sem suporte de designer, priorizando usabilidade e clareza.
-Próximos passos: autenticação de usuários, melhorias de layout, notificações e integração completa com backend para múltiplos fluxos de uso.

#### Aprendizado

Durante este desafio, pude:

-Aprender Django na prática pela primeira vez, criando models, endpoints e painel admin.
-Consumir APIs do backend no React, integrando frontend e backend.
-Desenvolver interfaces responsivas e funcionais sem designer.
-Praticar decisões de arquitetura e fluxo de dados entre frontend e backend.
-Aumentar a confiança em trabalhar de forma independente em um projeto fullstack.

#### Links e Referências

Online Fonts - fontes utilizadas
Manual de Marca no Behance
Curso de Django - Canal Jefferson Lobato
