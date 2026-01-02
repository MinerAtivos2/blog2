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
    title: "Radar intraday: outliers nas negociações de 03/07",
    excerpt: "No mercado financeiro, nada é mais fascinante que um ativo que surpreende com um desempenho explosivo. Nesse sentido, o AZEV4 se destaca...",
    content: '<iframe src="/posts/post2.html" width="100%" height="800px" style="border:none;"></iframe>',
    author: "MinerAtivos",
    date: "2024-07-03",
    tags: ["AZEV4", "Outliers", "Intraday"],
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
  },
  {
    id: "3",
    title: "Post de Teste",
    excerpt: "Este é um post de teste.",
    content: '<iframe src="/posts/post3.html" width="100%" height="800px" style="border:none;"></iframe>',
    author: "Jules",
    date: "2024-07-26",
    tags: ["Teste"],
    readTime: "1 min"
  }
  ];
