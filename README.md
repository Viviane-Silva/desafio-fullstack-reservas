# Sistema de Reservas de Estações de Trabalho

## Descrição

Projeto desenvolvido como **desafio técnico** para criar um sistema web que permite gerenciar reservas de estações de trabalho em uma empresa.

Nesta primeira etapa, o foco foi:

- **Frontend bonito e funcional** em React, com telas responsivas.
- **Backend mínimo** em Django, suficiente para suportar o frontend e fornecer dados via API.
- Base do projeto: fluxo fornecido pelo Product Owner (PO) e resumo enviado pelo vendedor.

### Funcionalidades implementadas nesta etapa

**Tela Inicial – Lista de Reservas**

- Mostra reservas já feitas.
- Botão para criar uma nova reserva (leva para Tela 2(Cadastro)).

**Tela de Cadastro – Nova Reserva**

- Lista de estações de trabalho disponíveis.
- Seleção de dia da reserva.
- Escolha de período (radio buttons).
- Campo para informar o nome do responsável pela reserva.
- Botão “Reservar” que exibe uma mensagem de sucesso ao concluir a ação.

**Frontend**

- Telas responsivas em React.
- Tela 1: Lista de reservas com botão para nova reserva.
- Tela 2: Nova reserva com seleção de estação, dia, período e responsável.
- Mensagem de confirmação após criar reserva.
- Consumo de endpoints REST do backend via fetch API.

**Backend**

- Painel de administração Django (`django-admin`) para visualizar a lista de reservas, estações de trabalho e realizar CRUD de reservas.
- Endpoints REST para:
  - Listar estações de trabalho disponíveis
  - Criar nova reserva
  - Listar reservas existentes.

### Validação de Conflitos de Reserva por Horário

Durante o desenvolvimento, foi implementada uma validação adicional no backend para garantir que os ambientes não sejam reservados por múltiplos usuários em horários que se sobrepõem. Essa lógica considera:

- O mesmo ambiente
- A mesma data
- Intervalos de horário que colidem (ex: 14h–16h e 15h–17h)

#### Motivo da implementação

Essa funcionalidade **não estava explicitamente descrita no fluxo do Product Owner**, mas foi adicionada com o objetivo de enriquecer a entrega da sprint. Ela demonstra atenção aos detalhes e preocupação com a experiência real do usuário, sem extrapolar o escopo do desafio técnico. A decisão foi pensada para agregar valor à solução e mostrar capacidade de antecipar problemas práticos, mantendo o foco no objetivo principal do sistema: garantir que o espaço reservado esteja realmente disponível.

---

### Arquitetura do Projeto

O projeto foi dividido em duas camadas principais:

- **Frontend (React):** SPA com rotas para diferentes telas, consumo de API via `fetch`, componentes reutilizáveis e layout responsivo.
- **Backend (Django + DRF):** API RESTful com endpoints organizados por recurso, painel administrativo para gestão e banco SQLite para persistência.

---

## Como rodar o projeto

Abra dois terminais:

### Terminal 1 – Backend

```bash
python -m venv venv
source venv/Scripts/activate   # Linux/Mac ou bash
venv\Scripts\activate      # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Terminal 2 – Frontend

```bash
cd frontend
npm install
npm run dev
```

### Observações

- Usuários e reservas de teste foram criados para acesso imediato.
- Layout do frontend foi desenvolvido sem suporte de designer, priorizando usabilidade e clareza.

### Visão de Evolução do Projeto

Com base no escopo descrito pelo vendedor, o sistema foi estruturado para permitir futuras funcionalidades como:

- **Cadastro de espaços físicos adicionais** (salas de reunião, auditórios).
- **Cancelamento de reservas pelo usuário**.
- **Check-in via QR Code no local reservado**.
- **Pontuação negativa para usuários que não comparecem ou cancelam em cima da hora**.
- **Painel administrativo com visão macro das alocações e histórico de uso**.

Essas funcionalidades estão mapeadas e serão implementadas nas próximas sprints, respeitando a expectativa de evolução gradual do produto.

### Aprendizado

Durante este desafio, pude:

- Aprender Django na prática pela primeira vez, criando models, endpoints e painel admin.
- Consumir APIs do backend no React, integrando frontend e backend.
- Desenvolver interfaces responsivas e funcionais sem designer.
- Praticar decisões de arquitetura e fluxo de dados entre frontend e backend.
- Aumentar a confiança em trabalhar de forma independente em um projeto fullstack.

#### Links e Referências

<a href="https://online-fonts.com/" target="_blank">Online Fonts - fontes utilizadas</a><br>
<a href="https://www.behance.net/gallery/116142669/Guille-Manual-de-marca" target="_blank">Manual de Marca no Behance</a><br>
<a href="https://docs.djangoproject.com/en/5.2/topics/migrations/" target="_blank">Documentação Django</a>
<a href="https://www.youtube.com/watch?v=p5MCJLIn_is&list=PLLVddSbilcumgeyk0z6ko5U_FYPfbRO2C&index=2" target="_blank">Curso de Django - Canal Jefferson Lobato</a><br>
<a href="https://www.youtube.com/watch?v=LY_-FXNVidE" target="_blank">Django(Python) e React(JS) - criar endpoints para servir o frontend - Canal ComuniCloud</a><br>
<a href="https://www.youtube.com/watch?v=YW113aC8TII" target="_blank">GUIA INICIAL COMPLETO DE PYTHON E DJANGO - Canal Pythonando</a>

### Conclusão

Este projeto representa não apenas a entrega de um sistema funcional, mas também minha capacidade de compreender o contexto do cliente, estruturar soluções e evoluir com autonomia. Estou preparada para seguir para as próximas etapas e contribuir com qualidade e visão de produto.
