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
    title: "Análise do Mercado de Ações em 2024",
    excerpt: "Uma visão abrangente sobre as tendências do mercado de ações e as principais oportunidades para investidores em 2024.",
    content: '<iframe src="/posts/post2.html" width="100%" height="800px" style="border:none;"></iframe>',
    author: "João Silva",
    date: "2024-03-15",
    tags: ["Ações", "Mercado", "Análise"],
    readTime: "5 min",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop"
  },
  {
    id: "2",
    title: "Diversificação de Carteira: Estratégias Essenciais",
    excerpt: "Aprenda como diversificar sua carteira de investimentos para minimizar riscos e maximizar retornos.",
    content: "Conteúdo completo do post aqui...",
    author: "Maria Santos",
    date: "2024-03-10",
    tags: ["Estratégia", "Diversificação", "Portfolio", "teste"],
    readTime: "7 min"
  }
];
