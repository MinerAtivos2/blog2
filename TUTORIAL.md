# Tutorial: Como Adicionar e Modificar Posts no Blog

Este guia explica as duas maneiras de gerenciar o conteúdo dos posts no blog. Toda a gestão é feita através do arquivo `src/data/posts.ts`.

## Estrutura de um Post

Cada post é um objeto JavaScript com a seguinte estrutura:

```typescript
export interface BlogPost {
  id: string;          // Identificador único para o post (ex: "4")
  title: string;       // Título do post
  excerpt: string;     // Um breve resumo ou introdução
  content: string;     // O conteúdo principal do post (HTML)
  author: string;      // Nome do autor
  date: string;        // Data de publicação no formato "YYYY-MM-DD"
  tags: string[];      // Uma lista de tags (ex: ["Análise", "Tecnologia"])
  readTime: string;    // Tempo estimado de leitura (ex: "5 min")
  imageUrl?: string;   // URL de uma imagem de capa (opcional)
}
```

## Método 1: Adicionar Conteúdo com HTML Direto

Este é o método mais simples. O conteúdo do post é inserido diretamente como uma string HTML no campo `content`.

**Passo a passo:**

1.  **Abra o arquivo `src/data/posts.ts`**.
2.  **Adicione um novo objeto `BlogPost`** ao final do array `posts`.
3.  **Preencha todos os campos**. Para o campo `content`, você pode escrever ou colar o HTML diretamente dentro de crases (`` ` ``) para facilitar a formatação de múltiplas linhas.

**Exemplo:**

```typescript
{
  id: "4",
  title: "Novo Post de Exemplo",
  excerpt: "Este é um exemplo de como adicionar um post usando HTML diretamente no código.",
  content: `
    <h2>Bem-vindo ao nosso novo post!</h2>
    <p>Este conteúdo foi adicionado como uma string HTML diretamente no arquivo <code>posts.ts</code>.</p>
    <p>Você pode usar qualquer tag HTML aqui, como <strong>negrito</strong> ou <em>itálico</em>.</p>
    <ul>
      <li>Item de lista 1</li>
      <li>Item de lista 2</li>
    </ul>
  `,
  author: "Jules, o Assistente de Código",
  date: "2024-07-29",
  tags: ["Tutorial", "Exemplo"],
  readTime: "2 min",
  imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop"
}
```

## Método 2: Adicionar Conteúdo com Iframe

Este método é ideal para posts mais complexos ou quando o conteúdo HTML já existe em um arquivo separado.

**Passo a passo:**

1.  **Crie um arquivo `.html`** com o conteúdo do seu post (ex: `meu-novo-post.html`).
2.  **Mova este arquivo** para a pasta `public/posts/` do repositório.
3.  **Abra o arquivo `src/data/posts.ts`**.
4.  **Adicione um novo objeto `BlogPost`** ao array `posts`.
5.  **Preencha os metadados** (título, autor, data, etc.).
6.  **No campo `content`**, insira o código de um `iframe` que aponta para o seu arquivo HTML. O `src` do iframe deve ser o caminho a partir da pasta `public` (ex: `"/posts/meu-novo-post.html"`).

**Exemplo:**

```typescript
{
  id: "5",
  title: "Post Avançado com Iframe",
  excerpt: "Este post demonstra como incorporar conteúdo a partir de um arquivo HTML externo usando um iframe.",
  content: '<iframe src="/posts/meu-novo-post.html" width="100%" height="800px" style="border:none;"></iframe>',
  author: "Jules, o Assistente de Código",
  date: "2024-07-30",
  tags: ["Iframe", "Avançado"],
  readTime: "10 min"
}
```

Lembre-se de que o arquivo `meu-novo-post.html` deve estar localizado em `public/posts/` para que o iframe funcione corretamente.
