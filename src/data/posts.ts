export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string; // formato: YYYY-MM-DD
  tags: string[];
  readTime: string;
  imageUrl?: string;
}

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "TESTE: AnÃ¡lise do Mercado de AÃ§Ãµes em 2024",
    excerpt: "Uma visÃ£o abrangente sobre as tendÃªncias do mercado de aÃ§Ãµes e as principais oportunidades para investidores em 2024.",
    content: '<iframe src="/posts/post2.html" width="100%" height="800px" style="border:none;"></iframe>',
    author: "JoÃ£o Silva",
    date: "2024-03-15",
    tags: ["AÃ§Ãµes", "Mercado", "AnÃ¡lise"],
    readTime: "5 min",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop"
  },
  {
    id: "2",
    title: "DiversificaÃ§Ã£o de Carteira: EstratÃ©gias Essenciais",
    excerpt: "Aprenda como diversificar sua carteira de investimentos para minimizar riscos e maximizar retornos.",
    content: "ConteÃºdo completo do post aqui...",
    author: "Maria Santos",
    date: "2024-03-10",
    tags: ["EstratÃ©gia", "DiversificaÃ§Ã£o", "Portfolio", "teste"],
    readTime: "7 min"
  }
  ];


