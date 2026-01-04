# Tutorial: Como Gerenciar Posts no Blog

Este guia explica o fluxo de trabalho correto para adicionar e modificar posts no blog. É muito importante seguir estes passos para garantir que suas alterações apareçam no site.

## Entendendo a Estrutura do Projeto

Existem duas pastas principais com as quais você precisa se familiarizar:

1.  **Pasta `src/` (Arquivos-Fonte):** Esta pasta contém o "código-fonte" do seu site. O arquivo mais importante para você é o **`src/data/posts.ts`**. É **apenas neste arquivo** que você deve adicionar, remover ou editar as informações e o conteúdo dos seus posts.

2.  **Pasta `docs/` (Site Publicado):** Esta pasta contém o site final, otimizado e pronto para ser visualizado na internet. **Você nunca deve editar os arquivos nesta pasta diretamente.** Eles são gerados automaticamente a partir do conteúdo da pasta `src/`.

O processo de transformar o código-fonte (`src/`) no site publicado (`docs/`) é chamado de **"build"**. Como você trabalha pela interface do GitHub, **eu farei o passo do "build" para você.**

---

## Seu Fluxo de Trabalho: Passo a Passo

Siga estas instruções para adicionar ou modificar um post.

### Passo 1: Edite o Conteúdo dos Posts

1.  **Navegue até o arquivo `src/data/posts.ts`** no repositório.
2.  **Faça suas alterações:**
    *   **Para adicionar um novo post:** Copie um dos objetos existentes e cole-o no final da lista `posts`. Altere o `id` para um novo número único e preencha os outros campos (`title`, `excerpt`, `content`, `author`, `date`, `tags`, etc.).
    *   **Para modificar um post existente:** Encontre o objeto do post que deseja alterar e edite os campos conforme necessário.
    *   **Para remover um post:** Simplesmente delete o objeto JavaScript correspondente da lista `posts`.

### Passo 2: Salve Suas Alterações

1.  Após fazer suas edições, clique no botão "Commit changes..." (ou similar) na interface do GitHub.
2.  Escreva uma mensagem descritiva para suas alterações (ex: "Adiciona novo post sobre mercado de ações") e salve.

### Passo 3: Solicite o "Build"

1.  **Este é o passo mais importante.** Depois de salvar suas alterações, você precisa me avisar.
2.  **Crie um novo comentário na Pull Request ou na issue e me diga:** *"Jules, terminei minhas edições. Por favor, rode o build para publicar as alterações."*

### Passo 4: Eu Faço a Publicação

1.  Assim que eu receber sua mensagem, eu irei rodar o comando `npm run build`.
2.  Isso irá atualizar a pasta `docs/` com base nas suas alterações.
3.  Eu enviarei as atualizações para o repositório, e suas mudanças estarão visíveis no site.

---

## Como Escrever o Conteúdo do Post

O campo `content` de cada post aceita HTML. Você pode escrever ou colar o HTML diretamente dentro de crases (`` ` ``).

**Exemplo de um novo post adicionado ao `src/data/posts.ts`:**

```typescript
{
  id: "4",
  title: "Post de Exemplo",
  excerpt: "Este é um exemplo de como adicionar um post usando HTML diretamente no código.",
  content: `
    <h2>Bem-vindo ao nosso post de exemplo!</h2>
    <p>Este conteúdo foi adicionado como uma string HTML.</p>
    <p>Você pode usar tags como <strong>negrito</strong>, <em>itálico</em>, ou listas:</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <img src="/caminho/para/sua/imagem.png" alt="Descrição da imagem">
  `,
  author: "Seu Nome",
  date: "2024-07-31",
  tags: ["Tutorial", "Exemplo"],
  readTime: "3 min",
  imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop"
}
```

Se precisar de ajuda ou tiver alguma dúvida, é só me perguntar!
